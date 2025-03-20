# Youssef El Kesti - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and TailwindCSS to showcase my skills, projects, and experience as a Computer Engineering student.

## Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all device sizes from mobile to desktop
- **Performance Focused**: Fast loading times and optimized assets
- **Interactive Elements**: Engaging user experience with Framer Motion animations
- **SEO Friendly**: Proper metadata and semantic HTML
- **Static Blog System**:
  - Markdown-based blog posts stored in the `content/posts` directory
  - Comments powered by GitHub Discussions via Giscus
  - Reactions and threaded comments with GitHub account integration
  - Responsive design for all devices
- **Project Showcase**:
  - Display projects with descriptions and links
  - JavaDocs documentation for Java projects
  - Downloadable project files

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **React Icons**: Icon library

## Sections

- **Home**: Introduction and hero section
- **About**: Background, skills, and experience
- **Projects**: Showcase of my technical projects
- **Blog**: Articles and insights
- **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YoussGm3o8/YoussGm3o8.github.io.git
   cd YoussGm3o8.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Managing Content

You can manage blog content by directly editing the repository:

- Add or edit Markdown files in the `content/posts` directory
- Follow the frontmatter format:
```
---
title: 'Post Title'
date: 'YYYY-MM-DD'
author: 'Your Name'
excerpt: 'Brief description'
---
```

## Deployment

This site is deployed on GitHub Pages. To deploy your own version:

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Youssef El Kesti - [elkestiyoussef@gmail.com](mailto:elkestiyoussef@gmail.com)

YouTube Channel: [YouTube/@YoussGm](https://www.youtube.com/@YoussGm) - Featuring Minecraft Bedrock Edition videos, hardware and software tutorials, and more. Check out my [Hardware & Software Tutorials Playlist](https://www.youtube.com/playlist?list=PL2nsHDD6md2I8FZ3bmJEGdAoJ80BfXRHE).

Project Link: [https://github.com/YoussGm3o8/YoussGm3o8.github.io](https://github.com/YoussGm3o8/YoussGm3o8.github.io)

## Adding Comments to Blog Posts

Comments are managed through GitHub Discussions using Giscus. Each blog post uses its slug as a specific term to map to the corresponding discussion. Benefits of this approach:

- Threaded conversations with nested replies
- Emoji reactions
- Markdown formatting support
- Notifications via GitHub
- Moderation tools via GitHub Discussions
- No database required - all data stored in GitHub

For setup instructions, see [GISCUS_SETUP.md](GISCUS_SETUP.md).

## Security

- No server-side API endpoints that could be vulnerable to attacks 