# Professional ATS-Optimized Resume

A modern, responsive, and ATS-friendly resume template built with React, Tailwind CSS, and Vite.

## Features

- ✅ **100% ATS Compatible** - Clean structure that works with all Applicant Tracking Systems
- 📄 **Single Page PDF Export** - Perfectly formatted for one-page resume
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- 🎨 **Professional Design** - Modern blue and slate color scheme
- ⬇️ **One-Click Download** - Download as PDF directly from browser

## Deploy to Vercel

### Option 1: Quick Deploy (Recommended)

1. Push this code to a GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the settings from `vercel.json`
6. Click "Deploy"

### Option 2: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from project root:
   ```bash
   vercel
   ```

4. Follow the prompts. Your resume will be live in seconds!

### Option 3: Deploy Button

If you have this repository on GitHub, click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Local Development

This project uses Figma Make's build system.

1. The app runs automatically in the Figma Make environment
2. Click the "Download as PDF" button to save your resume

## Download Resume as PDF

1. Click the blue "Download as PDF" button in the top-right corner
2. In the print dialog that appears:
   - **Destination**: Select "Save as PDF"
   - **Layout**: Portrait
   - **Pages**: All
   - **Options**: Enable "Background graphics" for colors
3. Click "Save"

Your professional, single-page resume will be downloaded!

## Customization

Edit `/src/app/App.tsx` to update:

- **Personal Information**: Name, email, phone, location
- **Work Experience**: Job titles, companies, responsibilities
- **Education**: Degree, institution, graduation year
- **Skills**: Programming languages, frameworks, tools
- **Projects**: Project names, descriptions, technologies
- **Languages & Interests**: Spoken languages and hobbies

### Update Profile Photo

Replace the image import in `/src/app/App.tsx`:
```tsx
import profilePhoto from 'figma:asset/YOUR_NEW_IMAGE_HASH.png';
```

## Project Structure

```
├── src/
│   ├── app/
│   │   └── App.tsx          # Main resume component
│   ├── styles/
│   │   ├── index.css        # Global styles
│   │   └── print.css        # Print-specific styles
├── vercel.json              # Vercel configuration
└── package.json             # Dependencies
```

## Build Configuration

The project is configured for Vercel deployment:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite

## Tech Stack

- **React 18.3** - UI library
- **Vite 6.3** - Build tool and dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Lucide React** - Modern icon library

## ATS Optimization

This resume is optimized for Applicant Tracking Systems:
- ✅ Clean, semantic HTML structure
- ✅ Standard section headings (Experience, Education, Skills)
- ✅ No complex layouts that confuse parsers
- ✅ Text-based content (no text in images)
- ✅ Proper heading hierarchy
- ✅ Simple, readable fonts
- ✅ Standard bullet points for lists

## Browser Compatibility

- ✅ Chrome/Edge (recommended for PDF export)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## Tips for Best Results

1. **PDF Export**: Use Chrome or Edge for best PDF quality
2. **Single Page**: Content is optimized to fit on one A4/Letter page
3. **Colors**: Enable "Background graphics" in print settings to preserve colors
4. **Testing**: Print preview before downloading to ensure formatting

## License

MIT License - Feel free to use this template for your own resume!

---

**Need help?** Check the code comments in `/src/app/App.tsx` for customization guidance.