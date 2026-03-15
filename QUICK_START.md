# Quick Start Guide 🚀

## 1. Download Your Resume as PDF

```
Click "Download as PDF" button → Select "Save as PDF" → Enable "Background graphics" → Save
```

**Time**: 30 seconds  
**Result**: Professional single-page resume PDF

---

## 2. Deploy to Vercel

```bash
# Push to GitHub
git init
git add .
git commit -m "My resume"
git remote add origin YOUR_GITHUB_URL
git push -u origin main

# Go to vercel.com → New Project → Import GitHub repo → Deploy
```

**Time**: 5 minutes  
**Result**: Live resume at `https://your-project.vercel.app`

---

## 3. Customize Your Resume

**File**: `/src/app/App.tsx`

**What to Edit**:
- Name, email, phone, location
- Job title and summary
- Work experience
- Education
- Skills
- Projects
- Languages and interests

**Time**: 15-30 minutes  
**Result**: Personalized resume

---

## 4. Update Profile Photo

1. Add your photo to the project
2. Note the asset hash
3. Update import in App.tsx:
   ```tsx
   import profilePhoto from 'figma:asset/YOUR_HASH.png';
   ```

**Time**: 2 minutes  
**Result**: Your photo on resume

---

## Key Files

| File | Purpose |
|------|---------|
| `/src/app/App.tsx` | Main resume content |
| `/src/styles/print.css` | Print/PDF styling |
| `/vercel.json` | Deployment config |
| `README.md` | Full documentation |
| `PDF_EXPORT_GUIDE.md` | PDF export help |

---

## Essential Commands

```bash
# View locally (Figma Make environment)
# Already running - just view the page

# Build for production
npm run build

# Deploy to Vercel
vercel
```

---

## Checklist ✅

Before sending to companies:

- [ ] All personal info updated
- [ ] Experience and skills accurate
- [ ] No typos or errors
- [ ] Photo looks professional
- [ ] PDF downloads correctly
- [ ] Single page format
- [ ] Colors visible in PDF
- [ ] Text is selectable (ATS test)

---

## ATS Optimization Tips

✅ Use standard section headings  
✅ Keep formatting simple  
✅ Use bullet points for achievements  
✅ Include keywords from job description  
✅ Avoid graphics/images (except photo)  
✅ Use standard fonts  
✅ Save as PDF (not Word)  

---

## Support Resources

- **PDF Issues**: See `PDF_EXPORT_GUIDE.md`
- **Deployment Help**: See `DEPLOYMENT.md`
- **Full Docs**: See `README.md`

---

## Quick Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [GitHub Repository](https://github.com)

---

**That's it! You're ready to apply for jobs with a professional, ATS-optimized resume! 🎉**
