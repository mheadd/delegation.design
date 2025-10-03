# GitHub Pages Deployment from /docs Folder

This project is configured to deploy to GitHub Pages from the `/docs` folder instead of using GitHub Actions.

## Build Process

The build process has been updated to output to the `/docs` folder:
- Build output: `docs/` (instead of `dist/`)
- The `docs/` folder is committed to the repository
- GitHub Pages serves directly from this folder

## To Deploy

1. **Build the site locally:**
   ```bash
   npm run build
   ```
   This creates/updates the `/docs` folder with the production build.

2. **Commit the docs folder:**
   ```bash
   git add docs/
   git commit -m "Update site build"
   git push
   ```

3. **Configure GitHub Pages (one-time setup):**
   - Go to your repository settings on GitHub
   - Navigate to **Settings > Pages**
   - Under "Build and deployment":
     - Source: Select **Deploy from a branch**
     - Branch: Select **main** and **/docs** folder
     - Click **Save**

## File Structure

- `vite.config.js` - Configured with `outDir: 'docs'`
- `.gitignore` - The `/docs` folder is NOT ignored (unlike `/dist`)
- `.github/workflows/` - No deployment workflow needed

## Important Notes

- The `/docs` folder must be committed to Git for GitHub Pages to deploy it
- After running `npm run build`, always commit the updated `/docs` folder
- GitHub Pages will automatically update when you push changes to the `/docs` folder on the `main` branch
- The CNAME file in `/public` is copied to `/docs` to maintain your custom domain

## Development vs Production

- **Development:** `npm run dev` (runs on localhost:5173)
- **Production Build:** `npm run build` (outputs to `/docs`)
- **Preview Production Build:** `npm run preview` (tests the build locally)
