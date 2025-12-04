<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1JT5KyZKGtBBPlo3olieOH_nq2y6bHlnh

## Run Locally

**Prerequisites:**  Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```
2. (Optional) Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key
3. Run the app:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:3000`

## Build for Production

Build the project for production:

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

Preview the production build locally:

```bash
npm run preview
```

## Deploy to Web

This application can be deployed to various hosting platforms. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy Options:

**Netlify (Easiest):**
1. Build: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Your site is live!

**Vercel:**
```bash
npm install -g vercel
vercel --prod
```

**GitHub Pages:**
- Push to GitHub and enable GitHub Pages in repository settings
- The included GitHub Action will automatically deploy

For more deployment options (Firebase, AWS S3, etc.), see [DEPLOYMENT.md](./DEPLOYMENT.md).
