# Deployment Guide

Multiple options to get your portfolio online - choose what works best for you!

## 🚀 Option 1: GitHub Pages (Recommended - Free)

### Prerequisites
- GitHub account
- Git installed on your computer

### Steps

1. **Create a new repository on GitHub**
   - Go to github.com and sign in
   - Click "New Repository"
   - Name it: `portfolio` or `yourusername.github.io`
   - Don't initialize with README (we already have files)

2. **Push your code**
   ```bash
   # Navigate to your portfolio folder
   cd "c:\Web prompt guide\Portfolio"
   
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial portfolio commit"
   
   # Add remote (replace with your repo URL)
   git remote add origin https://github.com/jamilsarker/portfolio.git
   
   # Push to GitHub
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings"
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://jamilsarker.github.io/portfolio`

### Custom Domain (Optional)
1. Buy a domain (e.g., from Namecheap, Google Domains)
2. Add a `CNAME` file with your domain
3. Configure DNS settings at your domain registrar
4. Update GitHub Pages settings with your custom domain

---

## 🌐 Option 2: Netlify (Easiest - Free)

### Method A: Drag and Drop

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up for a free account
3. Drag and drop the entire Portfolio folder
4. Your site goes live instantly!
5. You'll get a URL like: `random-name-12345.netlify.app`

### Method B: GitHub Integration

1. Push your code to GitHub (see Option 1, steps 1-2)
2. Go to [netlify.com](https://www.netlify.com) and sign in
3. Click "New site from Git"
4. Connect your GitHub repository
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root)
6. Click "Deploy site"

### Custom Domain on Netlify
1. Go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Follow the instructions to configure DNS

---

## ⚡ Option 3: Vercel (Fast - Free)

### Steps

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: `.` (root)
6. Click "Deploy"

Your site will be at: `portfolio.vercel.app`

### Custom Domain on Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS as instructed

---

## 🌩️ Option 4: Cloudflare Pages (Free)

### Steps

1. Push code to GitHub (see Option 1, steps 1-2)
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Sign up/Sign in
4. Click "Create a project"
5. Connect your GitHub repository
6. Build settings:
   - Build command: (leave empty)
   - Build output directory: `/`
7. Click "Save and Deploy"

---

## 📱 Option 5: Render (Free)

### Steps

1. Go to [render.com](https://render.com)
2. Sign up
3. Click "New Static Site"
4. Connect your GitHub repository
5. Settings:
   - Build Command: (leave empty)
   - Publish Directory: `.` (root)
6. Click "Create Static Site"

---

## 🔧 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All personal information is updated
- [ ] Email addresses are correct
- [ ] All links work (test locally)
- [ ] Resume PDF is in the assets folder
- [ ] Images are optimized (under 500KB each)
- [ ] Contact form is configured (or disabled if not using a backend)
- [ ] No console errors in browser (F12 to check)
- [ ] Mobile responsive (test with browser dev tools)
- [ ] All sections have content (no lorem ipsum)

---

## 🎯 Post-Deployment Tasks

After your site is live:

### 1. Test Everything
- Click all navigation links
- Test all external links
- Try the contact form
- Check on different devices
- Test in different browsers

### 2. Add to Your Resume/CV
Update your resume with your portfolio URL

### 3. Share on LinkedIn
Add your portfolio URL to:
- LinkedIn profile (Website section)
- LinkedIn bio
- Post announcing your portfolio

### 4. Set up Analytics (Optional)

#### Google Analytics
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your tracking ID
3. Add this code before `</head>` in index.html:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

### 5. SEO Optimization

Add these meta tags in `<head>` section:

```html
<!-- Primary Meta Tags -->
<meta name="title" content="Jamil Sarker Hamim - Software Engineer Portfolio">
<meta name="description" content="Junior Software Engineer at Zarosoft. Explore my projects, skills, and experience in full-stack development.">
<meta name="keywords" content="software engineer, full-stack developer, web developer, React, Node.js, Jamil Sarker Hamim">
<meta name="author" content="Jamil Sarker Hamim">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourportfolio.com/">
<meta property="og:title" content="Jamil Sarker Hamim - Software Engineer Portfolio">
<meta property="og:description" content="Junior Software Engineer at Zarosoft. Explore my projects, skills, and experience.">
<meta property="og:image" content="https://yourportfolio.com/assets/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://yourportfolio.com/">
<meta property="twitter:title" content="Jamil Sarker Hamim - Software Engineer Portfolio">
<meta property="twitter:description" content="Junior Software Engineer at Zarosoft. Explore my projects, skills, and experience.">
<meta property="twitter:image" content="https://yourportfolio.com/assets/og-image.jpg">
```

---

## 🔄 Updating Your Portfolio

### If using GitHub Pages, Netlify, or Vercel with Git:

1. Make changes locally
2. Test changes
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
4. Your site will automatically redeploy!

### If using Netlify Drag & Drop:

1. Make changes locally
2. Drag and drop the updated folder again
3. Netlify will update your site

---

## ❓ Troubleshooting

### Site not loading
- Check if the deployment completed successfully
- Verify the publish directory is correct
- Check for console errors in browser (F12)

### Images not showing
- Verify image paths are relative (e.g., `./assets/image.jpg`)
- Check image file names match exactly (case-sensitive)
- Ensure images are in the assets folder

### Resume download not working
- Verify the PDF file is named exactly: `Jamil_Sarker_Hamim_Resume.pdf`
- Check the file path in HTML matches the actual location

### Custom domain not working
- DNS propagation can take 24-48 hours
- Verify DNS records are configured correctly
- Check for HTTPS/SSL certificate issues

---

## 📊 Monitoring Performance

After deployment, test your site:

- **PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev)
- **GTmetrix**: [gtmetrix.com](https://gtmetrix.com)
- **Mobile-Friendly Test**: [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)

Aim for:
- Load time under 3 seconds
- Mobile-friendly score of 100%
- Accessibility score above 90

---

## 🎉 You're Live!

Congratulations! Your portfolio is now online and ready to help you land your dream job!

**Share it with:**
- Potential employers
- Recruiters
- Your network on LinkedIn
- GitHub profile README
- Email signature

---

**Need help?** Open an issue on GitHub or reach out via the contact form on your portfolio!
