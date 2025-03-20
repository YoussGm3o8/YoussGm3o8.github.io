/**
 * Simple script to create a new JavaDocs project folder
 * 
 * Usage: node scripts/create-javadoc-project.js project-name
 */

const fs = require('fs');
const path = require('path');

// Get the project name from command line arguments
const projectName = process.argv[2];

if (!projectName) {
  console.error('Please provide a project name.');
  console.log('Usage: node scripts/create-javadoc-project.js project-name');
  process.exit(1);
}

// Create the directory path
const javadocsDir = path.join(process.cwd(), 'public', 'javadocs', projectName);

// Check if the directory already exists
if (fs.existsSync(javadocsDir)) {
  console.error(`A JavaDocs project with the name "${projectName}" already exists.`);
  process.exit(1);
}

try {
  // Create the directory
  fs.mkdirSync(javadocsDir, { recursive: true });
  
  // Create a placeholder index.html file
  const placeholderContent = `<!DOCTYPE html>
<html>
<head>
  <title>${projectName} JavaDocs</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      color: #0066cc;
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 10px;
    }
    .note {
      background-color: #fffde7;
      padding: 15px;
      border-left: 4px solid #ffd600;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <h1>${projectName} JavaDocs</h1>
  
  <div class="note">
    <p>This is a placeholder page. Replace this file with your actual JavaDocs.</p>
    <p>To generate JavaDocs, run:</p>
    <pre><code>javadoc -d ./docs -sourcepath ./src -subpackages com.yourpackage</code></pre>
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(javadocsDir, 'index.html'), placeholderContent);
  
  console.log(`Successfully created JavaDocs project folder: ${projectName}`);
  console.log(`Directory created at: ${javadocsDir}`);
  console.log('Next steps:');
  console.log('1. Generate JavaDocs for your project');
  console.log(`2. Copy the generated files into this folder`);
  console.log('3. Your JavaDocs will be available at:');
  console.log(`   http://localhost:3000/javadocs/${projectName}/`);
} catch (error) {
  console.error('Error creating JavaDocs project folder:', error);
  process.exit(1);
} 