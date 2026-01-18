---
description: how to deploy the portfolio to Vercel
---
### Deployment to Vercel

Follow these steps to deploy your portfolio:

1. **Push your code to GitHub**:
   - Ensure all changes are committed.
   - Run `git add .`
   - Run `git commit -m "Final portfolio polish"`
   - Run `git push origin main`

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub.
   - Click **"Add New"** > **"Project"**.
   - Import your `counter (2)` or `portfolio` repository.

3. **Configure Build Settings**:
   - Vercel should automatically detect **Vite**.
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Deploy**:
   - Click **"Deploy"**.
   - Vercel will build and give you a live URL in a few minutes.

> [!NOTE]
> Make sure you have placed your `resume.pdf` in the `public` folder before pushing to GitHub if you want the download button to work!
