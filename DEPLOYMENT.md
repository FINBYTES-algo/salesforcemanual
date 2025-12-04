# Deployment Guide

This guide explains how to deploy the AwesomeBank Learning Path application to various hosting platforms.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git repository (for GitHub Pages)

## Build the Project

First, build the project for production:

```bash
npm install
npm run build
```

This creates a `dist` folder with the production-ready files.

## Deployment Options

### Option 1: Netlify (Recommended - Easiest)

1. **Via Netlify Dashboard:**
   - Go to [Netlify](https://www.netlify.com/)
   - Sign up/Login
   - Click "Add new site" > "Import an existing project"
   - Connect your Git repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

2. **Via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=dist
   ```

3. **Via Drag & Drop:**
   - Build the project: `npm run build`
   - Go to Netlify dashboard
   - Drag and drop the `dist` folder
   - Your site will be live instantly!

### Option 2: Vercel

1. **Via Vercel Dashboard:**
   - Go to [Vercel](https://vercel.com/)
   - Sign up/Login
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect the settings from `vercel.json`
   - Click "Deploy"

2. **Via Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```

### Option 3: GitHub Pages

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Source: Select "GitHub Actions"

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **The GitHub Action will automatically:**
   - Build the project
   - Deploy to GitHub Pages
   - Your site will be available at: `https://<username>.github.io/awesomebank-learning-path/`

**Note:** For GitHub Pages, update the base path in `vite.config.ts`:
```typescript
base: '/awesomebank-learning-path/'
```

### Option 4: Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **Initialize Firebase:**
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Public directory: `dist`
   - Configure as single-page app: `Yes`
   - Set up automatic builds: `No`

3. **Deploy:**
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

### Option 5: AWS S3 + CloudFront

1. **Build and upload:**
   ```bash
   npm run build
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

2. **Configure CloudFront:**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Set default root object to `index.html`
   - Configure error pages (404 -> /index.html)

### Option 6: Local Server (Testing)

For local testing of the production build:

```bash
npm run build
npm run preview
```

Or use a simple HTTP server:

```bash
# Using Python
cd dist
python3 -m http.server 8000

# Using Node.js http-server
npx http-server dist -p 8000

# Using PHP
cd dist
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Environment Variables

If you need environment variables (like API keys), create a `.env` file:

```env
GEMINI_API_KEY=your_api_key_here
```

For production deployments:
- **Netlify:** Add in Site settings > Environment variables
- **Vercel:** Add in Project settings > Environment variables
- **GitHub Pages:** Not recommended (use Netlify/Vercel for env vars)

## Custom Domain

### Netlify:
1. Go to Site settings > Domain management
2. Add custom domain
3. Follow DNS configuration instructions

### Vercel:
1. Go to Project settings > Domains
2. Add your domain
3. Configure DNS records

## Troubleshooting

### Routes not working (404 errors)
- Ensure your hosting platform is configured for SPA routing
- Check that all routes redirect to `index.html`
- Verify `base` path in `vite.config.ts` matches your deployment path

### Assets not loading
- Check that `base` path in `vite.config.ts` is correct
- Verify asset paths in the built `index.html`
- Clear browser cache

### Build fails
- Ensure Node.js version is 18+
- Delete `node_modules` and `package-lock.json`, then `npm install`
- Check for TypeScript errors: `npm run build`

## Quick Deploy Commands

```bash
# Build
npm run build

# Preview locally
npm run preview

# Deploy to Netlify
netlify deploy --prod --dir=dist

# Deploy to Vercel
vercel --prod

# Deploy to Firebase
firebase deploy --only hosting
```

## Support

For issues or questions, check the project repository or contact the development team.

