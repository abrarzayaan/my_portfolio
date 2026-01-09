// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const downloadCVBtn = document.getElementById('downloadCV');
const contactForm = document.getElementById('contactForm');
const typingText = document.querySelector('.typing-text');

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        
        // Update active link
        document.querySelectorAll('.nav-link').forEach(item => {
            item.classList.remove('active');
        });
        link.classList.add('active');
    });
});

// Typing Animation
const texts = [
    'SQL Query Optimization',
    'Database Performance Tuning',
    'ETL Pipeline Development',
    'Django Backend API Integration',
    'Data Modeling & Schema Design'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        // Deleting text
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        // Typing text
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    // Check if text is complete
    if (!isDeleting && charIndex === currentText.length) {
        // Pause at the end
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        // Move to next text
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Start typing animation after page loads
window.addEventListener('load', () => {
    setTimeout(typeEffect, 1000);
});

// // Download CV Button
// downloadCVBtn.addEventListener('click', () => {
//     // Create CV content based on resume
//     const cvContent = `SHAN ABRAR ZAHIN - SQL DATA ENGINEER & DJANGO DEVELOPER
// ================================================================

// CONTACT INFORMATION
// -------------------
// Phone: +880 1334 317864
// Email: abrar.bauet@gmail.com
// GitHub: abrarzahin
// Portfolio: abrarzahin.github.io

// PROFESSIONAL SUMMARY
// -------------------
// SQL Data Engineer with 2+ years of hands-on experience supporting production data systems.
// Strong background in advanced SQL, ETL workflows, and backend-oriented data processing.
// Focused on building reliable, structured datasets for reporting and backend system integration.

// WORK EXPERIENCE
// ---------------
// System Engineer (Data Engineer) - Suffix IT LTD
// • Design and maintain complex SQL queries supporting daily reporting for 5+ client systems
// • Transform and normalize raw data to ensure schema consistency and data quality validation
// • Deliver client-specific reports aligned with defined business rules and requirements
// • Prepare structured SQL exports for integration with downstream systems
// • Administer database roles, privileges, and access policies across multiple environments
// • Enforce authentication and security controls to protect sensitive organizational data

// SQL Development Intern - Suffix IT LTD
// • Developed SQL queries for recurring internal reports using Oracle and PostgreSQL
// • Performed data aggregation and validation across multiple relational tables
// • Collaborated with senior engineers to review query accuracy and performance

// EDUCATION
// ---------
// B.Sc. in Computer Science and Engineering
// Bangladesh Army University of Engineering and Technology (Aug 2018 – Dec 2022)
// Thesis: Object Detection – Comparative Study of YOLOv3 vs YOLOv7

// TECHNICAL SKILLS
// ----------------
// • Databases: Oracle, PostgreSQL, MySQL, SQL Server
// • Programming: Advanced SQL, Python
// • Data Tools: Apache Airflow (ETL), Pandas, Excel
// • Visualization: Power BI, Tableau
// • Version Control: Git, GitHub
// • Core Expertise: Data Modeling, Query Performance Tuning, ETL Design, Data Quality Validation

// PROJECTS
// --------
// 1. E-commerce OneShop Sales Analysis Dashboard
//    - SQL-based data models and Power BI visuals
//    - Sales performance and customer behavior analysis

// 2. Yearly Sales Analysis Dashboard
//    - Offline retail data analysis for yearly performance trends
//    - Identification of top-performing products

// 3. Bike Purchase Data Analysis
//    - Customer purchase patterns analysis using SQL and Excel
//    - Metrics and insights for marketing strategy

// 4. Backend Data API (Django)
//    - RESTful APIs using Django for SQL-based datasets
//    - Frontend and reporting integration

// AREAS OF INTEREST
// -----------------
// • Python and Django Backend Development with RESTful APIs
// • System integration
// • Metadata organization, schema design, and data structure modeling
// • Performance optimization and technical problem solving`;

//     // Create blob and download
//     const blob = new Blob([cvContent], { type: 'text/plain' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'Shah_Abrar_Zahin_CV.txt';
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     window.URL.revokeObjectURL(url);
    
//     // Show confirmation
//     alert('CV downloaded successfully! For a complete portfolio, please visit the website.');
// });

// // Contact Form Submission
// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     // Get form values
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const subject = document.getElementById('subject').value;
//     const message = document.getElementById('message').value;
    
//     // In a real application, you would send this data to a server
//     // For now, we'll just show a confirmation message
//     alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} soon.`);
    
//     // Reset form
//     contactForm.reset();
// });

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            
            // Animate skill bars
            if (entry.target.id === 'skills') {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Animate skill bars on scroll
function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(level => {
        const width = level.style.width;
        level.style.width = '0';
        
        setTimeout(() => {
            level.style.width = width;
        }, 200);
    });
}

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const headerHeight = document.querySelector('.navbar').offsetHeight;
        
        if (scrollY >= (sectionTop - headerHeight - 100)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Initialize with home section active
window.addEventListener('load', () => {
    document.querySelector('.nav-link[href="#home"]').classList.add('active');
});