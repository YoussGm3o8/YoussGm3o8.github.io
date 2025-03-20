const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Clean up any existing build directories
if (fs.existsSync('.next-temp')) {
  fs.rmSync('.next-temp', { recursive: true, force: true });
}
if (fs.existsSync('out')) {
  fs.rmSync('out', { recursive: true, force: true });
}

// Temporarily move admin directory
const adminDir = path.join('src', 'app', 'admin');
const tempAdminDir = path.join('src', 'app', '_admin_temp');

if (fs.existsSync(adminDir)) {
  console.log('Moving admin directory temporarily...');
  fs.renameSync(adminDir, tempAdminDir);
}

try {
  // Run the Next.js build
  console.log('Building site...');
  execSync('next build', { stdio: 'inherit' });

  // Create the final output directory
  fs.mkdirSync('out', { recursive: true });

  // Copy files from temp build to final output
  function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  console.log('Copying files to final build directory...');
  
  // Copy the entire .next-temp directory
  copyDir('.next-temp', 'out');

  // Copy public directory if it exists
  if (fs.existsSync('public')) {
    console.log('Copying public directory...');
    copyDir('public', 'out');
  }

  // Fix asset paths in HTML files
  console.log('Fixing asset paths in HTML files...');
  fixAssetPaths('out');

  // Clean up temporary build directory
  console.log('Cleaning up...');
  fs.rmSync('.next-temp', { recursive: true, force: true });

  console.log('Build complete!');
} finally {
  // Move admin directory back
  if (fs.existsSync(tempAdminDir)) {
    console.log('Moving admin directory back...');
    fs.renameSync(tempAdminDir, adminDir);
  }
}

// Function to fix asset paths in HTML files
function fixAssetPaths(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    
    if (entry.isDirectory()) {
      fixAssetPaths(fullPath);
    } else if (entry.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Calculate the relative path to the root based on the directory depth
      const rootDir = path.relative(directory, 'out') || '.';
      
      // Check if this file is in a nested directory
      const isNested = directory !== 'out';
      
      // Calculate the proper path prefix for this file
      const pathPrefix = isNested ? '../'.repeat(directory.split(path.sep).length - 1) : './';
      
      // Fix paths in HTML
      content = content.replace(/href="\/YoussGm3o8\.github\.io\//g, `href="${pathPrefix}`);
      content = content.replace(/src="\/YoussGm3o8\.github\.io\//g, `src="${pathPrefix}`);
      
      // Fix paths for Next.js assets using absolute paths
      content = content.replace(/href="\/_next\//g, `href="${pathPrefix}_next/`);
      content = content.replace(/src="\/_next\//g, `src="${pathPrefix}_next/`);
      
      // Fix relative paths that may already use the ./ prefix but need additional path adjustment
      if (isNested) {
        content = content.replace(/href="\.\/_next\//g, `href="${pathPrefix}_next/`);
        content = content.replace(/src="\.\/_next\//g, `src="${pathPrefix}_next/`);
      }
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
} 