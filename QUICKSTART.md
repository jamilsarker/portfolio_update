# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Step 1: Update Personal Information (2 minutes)

Open `index.html` and replace these placeholders:

### Contact Information
- Search for: `jamil@example.com`
- Replace with: Your actual email address

### Social Links
The following links are already set, verify they're correct:
- LinkedIn: `https://linkedin.com/in/jamilsarkerhamim`
- GitHub: `https://github.com/jamilsarker`

## Step 2: Add Your Resume (1 minute)

1. Save your resume as a PDF
2. Rename it to: `Jamil_Sarker_Hamim_Resume.pdf`
3. Place it in the `assets/` folder

## Step 3: Customize Content (2 minutes)

### Update Your Experience
In `index.html`, find the `#experience` section and update:
- Job titles
- Company names
- Dates
- Descriptions
- Achievements

### Update Your Skills
In the `#skills` section, modify the skills to match your tech stack.

### Update Projects
In the `#projects` section:
- Change project titles
- Update descriptions
- Modify technology tags
- Update GitHub links

## Step 4: Test Locally

### Method 1: Direct Open
Simply double-click `index.html` to open in your browser.

### Method 2: Live Server (Recommended)
If using VS Code:
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## Step 5: Deploy Online (Optional)

### GitHub Pages (Free)
1. Create a new GitHub repository
2. Push all files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at: `https://yourusername.github.io/repository-name`

### Netlify (Free)
1. Visit [netlify.com](https://netlify.com)
2. Drag and drop the entire Portfolio folder
3. Your site goes live instantly!

## Quick Customization Tips

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --color-dark: #1C1C1C;      /* Change this */
    --color-gold: #D4AF37;       /* Change this */
    --color-light: #F5F1E8;      /* Change this */
}
```

### Add Your Photo
1. Add your photo to `assets/` folder (e.g., `profile.jpg`)
2. In `index.html`, find `.profile-placeholder` section
3. Replace the entire `<div class="profile-placeholder">` with:
```html
<img src="./assets/profile.jpg" alt="Jamil Sarker Hamim" style="width: 100%; height: 100%; object-fit: cover;">
```

### Add Real Project Images
1. Save project screenshots to `assets/` folder
2. Find `.project-placeholder` divs in `index.html`
3. Replace with:
```html
<img src="./assets/project-name.jpg" alt="Project Name" style="width: 100%; height: 100%; object-fit: cover;">
```

## Need Help?

- Read the full `README.md` for detailed instructions
- Check browser console (F12) for JavaScript errors
- Ensure all files are in the correct folders

## Checklist Before Going Live

- [ ] Updated email address
- [ ] Updated about me section
- [ ] Updated experience timeline
- [ ] Updated skills list
- [ ] Updated project descriptions
- [ ] Added resume PDF
- [ ] Tested all links
- [ ] Tested on mobile device
- [ ] Tested contact form
- [ ] Verified all navigation works

---

**That's it! Your portfolio is ready to impress!** 🚀
