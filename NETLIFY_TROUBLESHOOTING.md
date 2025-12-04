# Netlify Deployment Troubleshooting

## Current Issue: "Site not found" Error

If you're seeing a "Site not found" error on Netlify, follow these steps:

### Step 1: Verify Your Deployment

1. **Check Netlify Dashboard:**
   - Go to https://app.netlify.com/
   - Look for your site in the dashboard
   - Check if the deployment was successful (green checkmark)

2. **Verify the URL:**
   - Make sure you're accessing the correct URL
   - Netlify provides a URL like: `https://random-name-123456.netlify.app`
   - Try accessing the root URL: `https://your-site-name.netlify.app/` (with trailing slash)

### Step 2: Redeploy Correctly

**Important:** When deploying via drag-and-drop, make sure you:

1. **Drag the ENTIRE `dist` folder**, not individual files
2. The `dist` folder should contain:
   - `index.html`
   - `_redirects` file
   - `index.css`
   - `assets/` folder with JavaScript bundle

### Step 3: Verify Files Are Correct

Run these commands to verify:

```bash
# Check dist folder contents
ls -la dist/

# Verify _redirects file exists and is correct
cat dist/_redirects
# Should output: /*    /index.html   200

# Verify index.html exists
ls -la dist/index.html
```

### Step 4: Test Locally First

Before deploying to Netlify, test the production build locally:

```bash
npm run build
npm run preview
```

Then open http://localhost:4173 in your browser. If it works locally, it should work on Netlify.

### Step 5: Deploy to Netlify

**Method 1: Drag & Drop (Recommended)**
1. Go to: https://app.netlify.com/drop
2. Open Finder and navigate to: `/Users/dabbadaappaji/Downloads/awesomebank-learning-path/dist`
3. Drag the **entire `dist` folder** (not just the files inside)
4. Wait for deployment to complete
5. Click on the provided URL

**Method 2: Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

### Step 6: Check Netlify Site Settings

After deployment, verify:

1. **Site Settings → Build & Deploy:**
   - Publish directory: `dist` (should be auto-detected)
   - Build command: Leave empty (already built)

2. **Site Settings → Domain Management:**
   - Check the site URL
   - Make sure you're using the correct domain

### Common Issues & Solutions

#### Issue: 404 on all pages
**Solution:** The `_redirects` file might be missing or incorrect. Verify it exists in `dist/_redirects` with content: `/*    /index.html   200`

#### Issue: Blank page
**Solution:** 
- Check browser console for errors
- Verify JavaScript bundle is loading
- Check Network tab to see if assets are loading

#### Issue: CSS not loading
**Solution:** Verify `index.css` exists in `dist/` folder

#### Issue: "Site not found" error
**Solution:**
- Make sure you're accessing the correct Netlify URL
- Check if the deployment completed successfully
- Try redeploying the site

### Verify Deployment Files

Your `dist` folder should have this structure:
```
dist/
├── _redirects          (24 bytes - Netlify redirects)
├── index.css           (CSS file)
├── index.html          (Main HTML file)
└── assets/
    └── index-*.js      (JavaScript bundle)
```

### Quick Fix Commands

```bash
# Rebuild everything
npm run build

# Verify files
ls -la dist/

# Test locally
npm run preview

# Deploy to Netlify (if using CLI)
netlify deploy --prod --dir=dist
```

### Still Having Issues?

1. **Check Netlify Deploy Logs:**
   - Go to your site in Netlify dashboard
   - Click on "Deploys" tab
   - Check the latest deployment logs for errors

2. **Clear Browser Cache:**
   - Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
   - Or use incognito/private browsing mode

3. **Try a Different Browser:**
   - Sometimes browser extensions can interfere

4. **Contact Netlify Support:**
   - Use the Internal ID from the error message
   - Netlify Internal ID: 01KBKZV5PVNADN9XQTYBZJCHKE

