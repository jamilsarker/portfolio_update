// ===== MOBILE NAVIGATION =====
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with reveal classes
const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
revealElements.forEach(el => observer.observe(el));

// ===== NAVBAR BACKGROUND ON SCROLL =====
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(28, 28, 28, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.background = 'rgba(28, 28, 28, 0.95)';
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===== ACTIVE NAVIGATION LINK =====
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Here you would typically send the data to a server
        console.log('Form data:', data);
        
        // Show success message
        showNotification('Thank you for your message! I will get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <p>${message}</p>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: var(--color-dark);
            color: var(--color-light);
            padding: 1.5rem 2rem;
            border-radius: 8px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            animation: slideIn 0.4s ease-out;
            max-width: 400px;
            border-left: 4px solid var(--color-gold);
        }
        
        .notification-success {
            border-left-color: #50fa7b;
        }
        
        .notification-error {
            border-left-color: #ff5555;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        
        .notification-content p {
            margin: 0;
            font-size: 0.95rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: var(--color-gray-light);
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition);
        }
        
        .notification-close:hover {
            color: var(--color-light);
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    
    if (!document.querySelector('style[data-notification-styles]')) {
        style.setAttribute('data-notification-styles', 'true');
        document.head.appendChild(style);
    }
    
    // Add to document
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.4s ease-out';
        setTimeout(() => notification.remove(), 400);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.4s ease-out';
            setTimeout(() => notification.remove(), 400);
        }
    }, 5000);
}

// ===== CURSOR EFFECT (OPTIONAL ENHANCEMENT) =====
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .custom-cursor {
        width: 20px;
        height: 20px;
        border: 2px solid var(--color-gold);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease, opacity 0.2s ease;
        opacity: 0;
    }
    
    .custom-cursor.active {
        opacity: 0.6;
    }
    
    .custom-cursor.clicking {
        transform: scale(0.8);
    }
    
    @media (max-width: 968px) {
        .custom-cursor {
            display: none;
        }
    }
`;
document.head.appendChild(cursorStyle);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.classList.add('active');
});

document.addEventListener('mousedown', () => {
    cursor.classList.add('clicking');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('clicking');
});

document.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
});

function animateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    cursorX += dx * 0.2;
    cursorY += dy * 0.2;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// ===== LOADING ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== PROJECT HOVER EFFECTS =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== SKILL CATEGORY PARALLAX =====
const skillCategories = document.querySelectorAll('.skill-category');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    skillCategories.forEach((category, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed / 100);
        category.style.transform = `translateY(${yPos}px)`;
    });
});

// ===== TYPEWRITER EFFECT FOR HERO (OPTIONAL) =====
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typewriter effect on hero label
// const heroLabel = document.querySelector('.hero-label');
// if (heroLabel) {
//     const originalText = heroLabel.textContent;
//     typeWriter(heroLabel, originalText, 60);
// }

// ===== STATS COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Observe stats and trigger counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('counted')) {
                statNumber.classList.add('counted');
                const text = statNumber.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                animateCounter(statNumber, number);
            }
        }
    });
}, { threshold: 0.5 });

const statItems = document.querySelectorAll('.stat-item');
statItems.forEach(item => statsObserver.observe(item));

// ===== FORM VALIDATION =====
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = '#ff5555';
        } else {
            this.style.borderColor = 'rgba(212, 175, 55, 0.3)';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--color-gold)';
    });
});

// ===== SCROLL TO TOP BUTTON =====
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;
document.body.appendChild(scrollToTopBtn);

const scrollToTopStyle = document.createElement('style');
scrollToTopStyle.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: var(--color-gold);
        color: var(--color-dark);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 5px 20px rgba(212, 175, 55, 0.3);
    }
    
    .scroll-to-top.visible {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-to-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(212, 175, 55, 0.5);
    }
    
    @media (max-width: 640px) {
        .scroll-to-top {
            bottom: 1.5rem;
            right: 1.5rem;
            width: 45px;
            height: 45px;
        }
    }
`;
document.head.appendChild(scrollToTopStyle);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== CONSOLE MESSAGE =====
console.log('%c👋 Hello, curious developer!', 'font-size: 20px; font-weight: bold; color: #D4AF37;');
console.log('%cThis portfolio was handcrafted with care by Jamil Sarker Hamim', 'font-size: 14px; color: #6B6B6B;');
console.log('%cLike what you see? Let\'s connect!', 'font-size: 14px; color: #D4AF37;');
