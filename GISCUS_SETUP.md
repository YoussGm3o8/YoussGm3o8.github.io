# Giscus Setup Guide for Your Portfolio Blog

This guide will help you configure Giscus comments for your blog posts. Giscus uses GitHub Discussions to store and manage comments, making it a perfect fit for your GitHub Pages site.

## Step 1: Enable GitHub Discussions

1. Go to your repository: https://github.com/YoussGm3o8/YoussGm3o8.github.io
2. Click on "Settings" (top menu)
3. Scroll down to the "Features" section
4. Check the box next to "Discussions"
5. Click "Set up discussions" button if prompted
6. Select the discussion categories you want to use (at minimum, create a "Blog Comments" category)

## Step 2: Install the Giscus App

1. Visit https://github.com/apps/giscus
2. Click "Install"
3. Choose "Only select repositories" and select your repository: YoussGm3o8/YoussGm3o8.github.io
4. Click "Install"

## Step 3: Get Your Configuration Values

1. Visit https://giscus.app/
2. Fill in the configuration form:
   - **Repository**: `YoussGm3o8/YoussGm3o8.github.io`
   - **Page <-> Discussions Mapping**: Choose "Specific term"
   - **Discussion Category**: Select "Blog Comments" (or whatever category you created)
   - **Theme**: Choose "Light"
   - **Other options**: Configure as you prefer

3. The website will generate a script tag that contains your repository's unique IDs.
   Look for these values in the generated script:
   ```html
   data-repo-id="R_kgDOXXXXXX"
   data-category-id="DIC_kwDOXXXXXXXXXX"
   ```

## Step 4: Update Your Comments Component

Open `src/components/Comments.tsx` and update these lines with your values:

```typescript
script.setAttribute('data-repo-id', 'R_kgDOXXXXXX'); // Replace with your actual repo ID from giscus.app
script.setAttribute('data-category-id', 'DIC_kwDOXXXXXXXXXX'); // Replace with your actual category ID from giscus.app
```

## Step 5: Test Your Implementation

1. Run your site locally with `npm run dev`
2. Navigate to a blog post
3. You should see the Giscus comment section at the bottom
4. Test adding a comment (you'll need to authorize the Giscus GitHub app)

## Step 6: Deploy Your Changes

Once everything is working locally, deploy your site using:

```bash
npm run deploy
```

## Benefits of Giscus over Utterances

- Uses GitHub Discussions instead of Issues, providing better threading and organization
- Supports reactions (like, heart, laugh, etc.)
- Better UI/UX with a more modern interface
- Discussions are designed for conversations, whereas Issues are designed for tracking problems

## Troubleshooting

- If comments don't appear, check the browser console for errors
- Ensure GitHub Discussions is enabled on your repository
- Verify the Giscus app has permission to access your repository
- Make sure the repository IDs and category IDs are correct

---

That's it! Your blog now has a modern comment system powered by GitHub Discussions. 