import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const javadocsPath = path.join(process.cwd(), 'public', 'javadocs');
    
    // Check if directory exists
    if (!fs.existsSync(javadocsPath)) {
      return NextResponse.json({ directories: [] });
    }

    // Read directories
    const directories = fs.readdirSync(javadocsPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    return NextResponse.json({ directories });
  } catch (error) {
    console.error('Error reading JavaDocs directories:', error);
    return NextResponse.json({ directories: [] });
  }
} 