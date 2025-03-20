import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  date: string | Date;
  author: string;
  excerpt: string;
  content: string;
}

// Path to the posts directory
const postsDirectory = path.join(process.cwd(), 'content/posts');

// Function to get all post files
function getPostFiles(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.filter(fileName => fileName.endsWith('.md'));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

// Function to parse a post file
function parsePostFile(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Parse the frontmatter
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    excerpt: data.excerpt,
    content
  };
}

// Function to get all post slugs
export function getPostSlugs(): string[] {
  const files = getPostFiles();
  return files.map(file => file.replace(/\.md$/, ''));
}

// Function to get a post by its slug
export function getPostBySlug(slug: string): Post | null {
  try {
    const fileName = `${slug}.md`;
    const filePath = path.join(postsDirectory, fileName);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    return parsePostFile(fileName);
  } catch (error) {
    console.error(`Error getting post with slug ${slug}:`, error);
    return null;
  }
}

// Function to get all posts sorted by date
export function getAllPosts(): Post[] {
  try {
    const files = getPostFiles();
    const posts = files.map(file => parsePostFile(file));
    
    // Sort posts by date in descending order
    return posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}

// Function to create a new post
export function createPost(postData: Omit<Post, 'slug' | 'content'>, content: string): string | null {
  try {
    // Generate a slug from the title
    const slug = postData.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
    
    // Create frontmatter
    const frontmatter = `---
title: ${postData.title}
date: ${postData.date}
author: ${postData.author}
excerpt: ${postData.excerpt}
---

${content}`;

    // Create the file
    const filePath = path.join(postsDirectory, `${slug}.md`);
    fs.writeFileSync(filePath, frontmatter, 'utf8');
    
    return slug;
  } catch (error) {
    console.error('Error creating post:', error);
    return null;
  }
}

// Function to update an existing post
export function updatePost(slug: string, postData: Partial<Omit<Post, 'slug'>>, newContent?: string): boolean {
  try {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    // Get the current post data
    const currentPost = getPostBySlug(slug);
    if (!currentPost) {
      return false;
    }
    
    // Update the post data
    const updatedPost = {
      ...currentPost,
      ...postData,
      content: newContent || currentPost.content
    };
    
    // Create frontmatter
    const frontmatter = `---
title: ${updatedPost.title}
date: ${updatedPost.date}
author: ${updatedPost.author}
excerpt: ${updatedPost.excerpt}
---

${updatedPost.content}`;

    // Write the updated file
    fs.writeFileSync(filePath, frontmatter, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`Error updating post with slug ${slug}:`, error);
    return false;
  }
}

// Function to delete a post
export function deletePost(slug: string): boolean {
  try {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    fs.unlinkSync(filePath);
    return true;
  } catch (error) {
    console.error(`Error deleting post with slug ${slug}:`, error);
    return false;
  }
} 