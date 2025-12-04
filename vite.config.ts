import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, existsSync } from 'fs';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    // Support GitHub Pages deployment with base path
    // Set base to match your GitHub repository name
    const base = process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_REPOSITORY 
      ? '/salesforcemanual/' 
      : '/';
    
    return {
      base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        // Plugin to copy _redirects file to dist folder for Netlify
        {
          name: 'copy-redirects',
          closeBundle() {
            const redirectsSource = path.resolve(__dirname, 'public/_redirects');
            const redirectsDest = path.resolve(__dirname, 'dist/_redirects');
            
            if (existsSync(redirectsSource)) {
              copyFileSync(redirectsSource, redirectsDest);
            } else {
              // Create _redirects if it doesn't exist
              const fs = require('fs');
              fs.writeFileSync(redirectsDest, '/*    /index.html   200\n');
            }
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
      }
    };
});
