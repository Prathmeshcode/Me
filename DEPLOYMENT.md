# Deployment Guide

## Vercel Deployment (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free tier is sufficient)

### Steps

#### 1. Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Professional ATS Resume"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git push -u origin main
```

#### 2. Deploy on Vercel

**Method A: Web Interface**

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"
7. Wait 1-2 minutes
8. Your resume is live! 🎉

**Method B: Vercel CLI**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login
vercel login

# Deploy (run from project root)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? [Select your account]
# - Link to existing project? No
# - Project name? [Enter name or press Enter]
# - Directory? ./ (press Enter)
# - Override settings? No

# Production deployment
vercel --prod
```

#### 3. Access Your Resume

After deployment, you'll get a URL like:
```
https://your-project-name.vercel.app
```

Share this URL or download the PDF!

---

## Other Deployment Options

### Netlify

1. Create account at https://netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy"

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "vite build && gh-pages -d dist"

# Deploy
npm run deploy
```

Then enable GitHub Pages in your repository settings.

### Self-Hosted (VPS/Server)

```bash
# Build the project
npm run build

# The 'dist' folder contains your static files
# Upload to your server's public directory
# Example with SCP:
scp -r dist/* user@your-server.com:/var/www/html/
```

---

## Environment Configuration

The project works out-of-the-box without environment variables.

If you need to add any:

1. Create `.env` file in root:
```env
VITE_APP_NAME=My Resume
```

2. Use in code:
```tsx
const appName = import.meta.env.VITE_APP_NAME
```

3. Add to `.env.example` (do not commit `.env`)

---

## Troubleshooting

### Build Fails

**Issue**: `npm run build` fails

**Solution**:
```bash
# Clear cache
rm -rf node_modules dist
npm install
npm run build
```

### Images Not Loading

**Issue**: Profile photo doesn't show after deployment

**Solution**: Ensure the image import uses the correct path:
```tsx
import profilePhoto from 'figma:asset/HASH.png';
```

### PDF Download Not Working

**Issue**: Download button doesn't work

**Solution**: 
- Ensure browser allows pop-ups
- Try a different browser (Chrome recommended)
- Check browser console for errors

### Mobile View Issues

**Issue**: Resume looks broken on mobile

**Solution**: The responsive design is already implemented. Clear browser cache and reload.

---

## Custom Domain

### On Vercel

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-10 minutes)

### Example:
- `resume.yourdomain.com`
- `prathmeshdhote.com`

---

## Performance Optimization

The build is already optimized with:
- ✅ Minified JavaScript and CSS
- ✅ Optimized images
- ✅ Tree-shaking (unused code removed)
- ✅ Code splitting
- ✅ Gzip compression (on Vercel)

### Lighthouse Score Target:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## Security

The resume is a static site with no backend, so security risks are minimal.

Best practices already implemented:
- ✅ No sensitive data in code
- ✅ HTTPS enabled (on Vercel)
- ✅ No third-party scripts
- ✅ No cookies or tracking

---

## Monitoring

### Vercel Analytics (Optional)

Enable in Vercel dashboard:
1. Project Settings → Analytics
2. Toggle "Enable Analytics"
3. View visitor stats, page views, etc.

---

## Updates and Maintenance

### Update Content

1. Edit `/src/app/App.tsx`
2. Commit and push to GitHub
3. Vercel auto-deploys (if connected)

### Manual Deploy

```bash
git add .
git commit -m "Update resume content"
git push
```

Vercel automatically rebuilds and deploys!

---

## Support

For issues:
1. Check the browser console for errors
2. Verify `npm run build` works locally
3. Check Vercel deployment logs
4. Ensure all dependencies are installed

---

**Happy Deploying! 🚀**
