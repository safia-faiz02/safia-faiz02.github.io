/*=============================================================================
  # Main JavaScript for Safia Faiz's Portfolio
  # Author: Safia Faiz
=============================================================================*/

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    /* ===== Navigation Toggle ===== */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const menuLinks = document.querySelectorAll('.nav-link');
    
    // Toggle navigation menu on mobile
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close navigation menu when clicking a link on mobile
    if (navMenu) {
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navMenu.classList.contains('active') && navToggle) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        });
    }
    
    /* ===== Sticky Header ===== */
    const header = document.getElementById('header');
    const scrollThreshold = 50;
    
    // Add scrolled class to header when scrolling down
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    /* ===== Active Navigation Links on Scroll ===== */
    try {
        // Get all navigation links and their corresponding section IDs
        const navItems = document.querySelectorAll('.nav-link');
        const sectionIds = [];
        
        // Only process sections that have nav links
        navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href && href.startsWith('#')) {
                const id = href.substring(1);
                if (id && document.getElementById(id)) {
                    sectionIds.push(id);
                }
            }
        });
        
        // Now we only work with sections that have navigation links
        function highlightNavOnScroll() {
            const scrollY = window.pageYOffset;
            
            sectionIds.forEach(id => {
                const section = document.getElementById(id);
                const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
                
                if (section && navLink) {
                    const sectionHeight = section.offsetHeight;
                    const sectionTop = section.offsetTop - 150;
                    
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        navLink.classList.add('active');
                    } else {
                        navLink.classList.remove('active');
                    }
                }
            });
        }
        
        window.addEventListener('scroll', highlightNavOnScroll);
    } catch (error) {
        console.error('Error in navigation highlighting:', error);
    }
    
    /* ===== Smooth Scroll for Anchor Links ===== */
    try {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                
                // Skip for href="#" links
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Calculate header height to adjust scroll position
                    const headerHeight = document.getElementById('header')?.offsetHeight || 0;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    } catch (error) {
        console.error('Error in smooth scroll:', error);
    }
    
    /* ===== Back to Top Button ===== */
    try {
        const backToTopBtn = document.getElementById('backToTop');
        
        if (backToTopBtn) {
            function toggleBackToTopBtn() {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            }
            
            window.addEventListener('scroll', toggleBackToTopBtn);
            
            backToTopBtn.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    } catch (error) {
        console.error('Error in back to top button:', error);
    }
    
    /* ===== Animation on Scroll ===== */
    try {
        // Function to check if element is in viewport
        function isInViewport(element) {
            if (!element) return false;
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
        }
        
        // Elements to animate
        const animatedElements = {
            fadeIn: document.querySelectorAll('.section-header'),
            slideInLeft: document.querySelectorAll('.education-item, .skills-content, .timeline-item:nth-child(odd)'),
            slideInRight: document.querySelectorAll('.timeline-item:nth-child(even)'),
            slideUp: document.querySelectorAll('.achievement-item, .project-item, .hackathon-item, .volunteer-item, .certification-item, .contact-item')
        };
        
        // Add animation classes when elements come into view
        function animateOnScroll() {
            for (const [animation, elements] of Object.entries(animatedElements)) {
                elements.forEach(element => {
                    if (element && isInViewport(element) && !element.classList.contains(animation)) {
                        element.classList.add(animation);
                    }
                });
            }
        }
        
        // Run on initial load and scroll
        animateOnScroll();
        window.addEventListener('scroll', animateOnScroll);
    } catch (error) {
        console.error('Error in animation on scroll:', error);
    }
});
