# GitHub Pages Deployment Guide

This guide will help you deploy the AwesomeBank Learning Path to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js 18+ installed

## Step 1: Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - AwesomeBank Learning Path"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository:
   - **Repository name:** `awesomebank-learning-path` (or your preferred name)
   - **Visibility:** Public (required for free GitHub Pages) or Private (if you have GitHub Pro)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
3. Click "Create repository"

## Step 3: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/awesomebank-learning-path.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Source:** `GitHub Actions`
5. Save the settings

## Step 5: Update Base Path (Important!)

The GitHub Actions workflow will automatically build and deploy. However, you need to update the base path in `vite.config.ts` to match your repository name.

**If your repository name is `awesomebank-learning-path`:**
- The base path is already set correctly: `/awesomebank-learning-path/`

**If your repository name is different:**
- Update `vite.config.ts`:
  ```typescript
  const base = '/your-repository-name/';
  ```

## Step 6: Push Changes

After enabling GitHub Pages, push any changes:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push
```

## Step 7: Wait for Deployment

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. You should see a workflow running: "Deploy to GitHub Pages"
4. Wait for it to complete (usually 1-2 minutes)
5. Once complete, you'll see a green checkmark

## Step 8: Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/awesomebank-learning-path/
```

Replace `YOUR_USERNAME` with your GitHub username.

## Troubleshooting

### Site shows 404
- Make sure GitHub Pages is enabled in Settings → Pages
- Verify the base path in `vite.config.ts` matches your repository name
- Check the Actions tab for any errors
- Wait a few minutes after deployment (DNS propagation)

### Build fails in GitHub Actions
- Check the Actions tab for error messages
- Ensure `package.json` has all required dependencies
- Verify Node.js version is 18+

### Assets not loading
- Check that base path in `vite.config.ts` is correct
- Verify the `dist` folder structure
- Clear browser cache

### Update the site
Simply push changes to the `main` branch:
```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions will automatically rebuild and redeploy.

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder:
   ```
   yourdomain.com
   ```

2. Update DNS settings with your domain provider:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

3. In GitHub repository Settings → Pages:
   - Enter your custom domain
   - Enable "Enforce HTTPS"

## Quick Commands Reference

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Your commit message"

# Add remote (first time only)
git remote add origin https://github.com/YOUR_USERNAME/awesomebank-learning-path.git

# Push to GitHub
git push -u origin main

# Update site (after making changes)
git add .
git commit -m "Update content"
git push
```

## Need Help?

- Check GitHub Actions logs in the Actions tab
- Verify repository settings in Settings → Pages
- Ensure all files are committed and pushed

