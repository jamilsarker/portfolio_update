# Jamil Sarker Hamim - Portfolio Website

A modern, handcrafted portfolio website showcasing skills, experience, and projects with a distinctive asymmetric design and subtle animations.

## 🎨 Design Features

- **Modern & Professional**: Premium look with subtle gold accents
- **Asymmetric Grid Layout**: Breaking away from traditional templated designs
- **Distinctive Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Scroll Animations**: Smooth reveal effects as you scroll
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Interactive Elements**: Hover effects, custom cursor, and smooth transitions

## 🎯 Color Palette

- **Primary Dark**: `#1C1C1C` - Main background and text
- **Gold Accent**: `#D4AF37` - Highlights and accents
- **Light Background**: `#F5F1E8` - Section backgrounds

## 📁 Project Structure

```
Portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
├── assets/             # Images, resume, and other assets
│   └── README.txt      # Instructions for adding assets
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Local Development

1. Simply open `index.html` in your web browser
2. No build process required - pure HTML, CSS, and JavaScript

### Option 2: Live Server (Recommended)

If using VS Code:

1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Deploy Online

You can deploy this portfolio to:

- **GitHub Pages**: Free hosting from GitHub
- **Netlify**: Drag and drop deployment
- **Vercel**: Simple Git integration
- **Cloudflare Pages**: Fast global CDN

## 📝 Customization Guide

### 1. Personal Information

Update the following in `index.html`:

- **Contact Email**: Search for `jamil@example.com` and replace with your email
- **About Me Text**: Edit the content in the `#about` section
- **Experience Details**: Update timeline items in the `#experience` section
- **Stats Numbers**: Modify the numbers in the `about-stats` section

### 2. Projects

Edit the project cards in the `#projects` section:

```html
<div class="project-card">
    <!-- Update project details here -->
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">Your description</p>
</div>
```

### 3. Skills

Modify the skills in the `#skills` section:

```html
<ul class="skill-list">
    <li><span class="skill-name">Your Skill</span></li>
</ul>
```

### 4. Resume

Place your PDF resume in the `assets/` folder with the name:
```
Jamil_Sarker_Hamim_Resume.pdf
```

### 5. Profile Image

To add a profile photo:

1. Add your image to the `assets/` folder
2. Replace the `.profile-placeholder` div with:

```html
<img src="./assets/your-photo.jpg" alt="Jamil Sarker Hamim">
```

### 6. Project Images

To add real project screenshots:

1. Add images to `assets/` folder
2. Replace `.project-placeholder` with:

```html
<img src="./assets/project-name.jpg" alt="Project Name">
```

## ✨ Features

### Interactive Elements

- **Smooth Scrolling**: Seamless navigation between sections
- **Scroll Animations**: Elements fade and slide into view
- **Custom Cursor**: Premium desktop cursor effect
- **Mobile Navigation**: Responsive hamburger menu
- **Form Validation**: Real-time contact form validation
- **Scroll to Top**: Quick navigation button
- **Stats Counter**: Animated counting effect

### Sections

1. **Hero**: Eye-catching introduction with tagline
2. **About Me**: Personal story and statistics
3. **Skills**: Tech stack organized by category
4. **Experience & Education**: Timeline of professional journey
5. **Projects**: Showcase of work with hover effects
6. **Resume**: Downloadable CV section
7. **Contact**: Form and contact information
8. **Footer**: Social links and site navigation

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties
- **Vanilla JavaScript**: No frameworks, pure JS
- **Google Fonts**: Playfair Display + Inter
- **SVG Icons**: Scalable vector graphics

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- **No dependencies**: Zero npm packages, pure vanilla code
- **Optimized animations**: Hardware-accelerated CSS transforms
- **Lazy loading ready**: Easy to implement for images
- **Small bundle size**: Under 100KB total (before images)

## 📊 SEO Optimization

To improve SEO:

1. Add meta tags in `<head>`:

```html
<meta name="description" content="Your description">
<meta name="keywords" content="software engineer, web developer, ...">
<meta property="og:title" content="Jamil Sarker Hamim - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="./assets/og-image.jpg">
```

2. Add a `favicon.ico` file
3. Create a `robots.txt` file
4. Add a `sitemap.xml` file

## 🔐 Security Considerations

### Contact Form

The current form is a frontend demo. For production:

1. **Option 1**: Use a service like:
   - Formspree
   - Netlify Forms
   - EmailJS

2. **Option 2**: Create a backend endpoint:
   - Node.js + Express
   - PHP mail
   - Serverless function

Update the form submission in `script.js` to send data to your chosen service.

## 🎨 Customizing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --color-dark: #1C1C1C;
    --color-gold: #D4AF37;
    --color-light: #F5F1E8;
    /* Add your custom colors */
}
```

## 📈 Analytics (Optional)

To track visitors, add Google Analytics:

```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

## 🐛 Troubleshooting

### Resume download not working
- Ensure the PDF file is named exactly: `Jamil_Sarker_Hamim_Resume.pdf`
- Check that it's in the `assets/` folder
- Verify file permissions

### Animations not working
- Check browser console for JavaScript errors
- Ensure JavaScript is enabled in the browser
- Try a different browser

### Mobile menu not opening
- Clear browser cache
- Check if JavaScript is blocked
- Verify the nav-toggle element exists

## 📄 License

This portfolio template is free to use for personal purposes. Feel free to customize it for your own portfolio.

## 🤝 Support

For questions or issues:

- Email: jamil@example.com
- LinkedIn: [linkedin.com/in/jamilsarkerhamim](https://linkedin.com/in/jamilsarkerhamim)
- GitHub: [github.com/jamilsarker](https://github.com/jamilsarker)

## 🚀 Future Enhancements

Potential additions:

- [ ] Blog section
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Project filtering by technology
- [ ] Testimonials section
- [ ] Certificates showcase
- [ ] Video introductions
- [ ] Live chat integration

---

**Built with ❤️ by Jamil Sarker Hamim**

*Last Updated: September 2026*
