// Hide loader when page is fully loaded
        window.addEventListener('load', () => {
            const loader = document.getElementById('pageLoader');
            setTimeout(() => {
                loader.classList.add('hidden');
                
                // Add animated class to initial elements
                document.querySelectorAll('.section-title').forEach(title => {
                    title.classList.add('animated');
                });
                
                document.querySelector('.about-img').classList.add('animated');
                document.querySelector('.about-content').classList.add('animated');
                document.querySelectorAll('.skill-bar').forEach(bar => {
                    bar.classList.add('animated');
                });
                document.querySelector('.portfolio-filter').classList.add('animated');
                document.querySelectorAll('.service-card').forEach((card, index) => {
                    card.classList.add('animated');
                    card.style.animationDelay = `${index * 0.2}s`;
                });
                document.querySelectorAll('.portfolio-item').forEach((item, index) => {
                    item.classList.add('animated');
                    item.style.animationDelay = `${index * 0.2}s`;
                });
                document.querySelectorAll('.testimonial-card').forEach((card, index) => {
                    card.classList.add('animated');
                    card.style.animationDelay = `${index * 0.2}s`;
                });
                document.querySelector('.contact-form').classList.add('animated');
                document.querySelector('.contact-info').classList.add('animated');
            }, 1000);
        });
        
        // Scroll progress indicator
        const scrollProgress = document.getElementById('scrollProgress');
        
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            scrollProgress.style.width = scrolled + '%';
        });
        
        // Back to top button functionality
        const backToTopButton = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
            
            // Navbar background on scroll
            const navbar = document.getElementById('mainNavbar');
            if (window.pageYOffset > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });
        
        // Skill bars animation
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const animateSkillBars = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                    
                    // Stop observing after animation
                    observer.unobserve(bar);
                }
            });
        };
        
        // Portfolio filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button with animation
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.animation = 'none';
                    setTimeout(() => {
                        btn.style.animation = '';
                    }, 10);
                });
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                // Animate out current items
                portfolioItems.forEach(item => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateY(0)';
                            }, 50);
                        } else {
                            item.style.display = 'none';
                        }
                    }, 300);
                });
            });
        });
        
        // Form submission with animation
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading animation
            submitBtn.textContent = 'Mengirim...';
            submitBtn.disabled = true;
            
            // Simulate sending
            setTimeout(() => {
                // Show success animation
                submitBtn.innerHTML = '<i class="bi bi-check-circle"></i> Terkirim!';
                submitBtn.style.backgroundColor = '#28a745';
                
                // Reset form
                contactForm.reset();
                
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = '';
                }, 2000);
            }, 1500);
        });
        
        // Create floating particles
        const heroSection = document.querySelector('.hero-section');
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.classList.add('floating-particle');
            const size = Math.random() * 20 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            particle.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.1 + 0.05})`;
            heroSection.appendChild(particle);
        }
        
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('section-title') && !entry.target.classList.contains('animated')) {
                        entry.target.classList.add('animated');
                    }
                    
                    if (entry.target.classList.contains('skill-bar') && !entry.target.classList.contains('animated')) {
                        entry.target.classList.add('animated');
                    }
                    
                    if (entry.target.classList.contains('service-card') && !entry.target.classList.contains('animated')) {
                        entry.target.classList.add('animated');
                    }
                    
                    if (entry.target.classList.contains('portfolio-item') && !entry.target.classList.contains('animated')) {
                        entry.target.classList.add('animated');
                    }
                    
                    if (entry.target.classList.contains('testimonial-card') && !entry.target.classList.contains('animated')) {
                        entry.target.classList.add('animated');
                    }
                    
                    if (entry.target.classList.contains('contact-form') && !entry.target.classList.contains('animated')) {
                        entry.target.classList.add('animated');
                    }
                    
                    if (entry.target.classList.contains('contact-info') && !entry.target.classList.contains('animated')) {
                        entry.target.classList.add('animated');
                    }
                    
                    if (entry.target.classList.contains('about-img') && !entry.target.classList.contains('animated')) {
                        entry.target.classList.add('animated');
                    }
                    
                    if (entry.target.classList.contains('about-content') && !entry.target.classList.contains('animated')) {
                        entry.target.classList.add('animated');
                    }
                    
                    if (entry.target.classList.contains('portfolio-filter') && !entry.target.classList.contains('animated')) {
                        entry.target.classList.add('animated');
                    }
                }
            });
        }, observerOptions);
        
        // Observe all animatable elements
        document.querySelectorAll('.section-title, .skill-bar, .service-card, .portfolio-item, .testimonial-card, .contact-form, .contact-info, .about-img, .about-content, .portfolio-filter').forEach(el => {
            observer.observe(el);
        });
        
        // Skill bars specific observer
        const skillObserver = new IntersectionObserver(animateSkillBars, {
            threshold: 0.5
        });
        
        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
        
        // Typing text animation
        const typingText = document.querySelector('.typing-text');
        const text = typingText.textContent;
        typingText.textContent = '';
        let charIndex = 0;
        
        function typeWriter() {
            if (charIndex < text.length) {
                typingText.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100);
            } else {
                typingText.style.borderRight = 'none';
            }
        }
        
        // Start typing animation after page load
        setTimeout(() => {
            typeWriter();
        }, 1500);
        
        // Add hover effect to all buttons
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // === Tambahan Animasi Baru ===

// 1. Reveal text di hero saat load
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('active');
        }, index * 300);
    });
});

// 2. Parallax sederhana pada scroll
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax');
    if (parallax) {
        let scrolled = window.pageYOffset;
        let rate = scrolled * -0.5;
        parallax.style.transform = `translateY(${rate}px)`;
    }
});

// 3. Counter animasi angka skill
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.textContent);
            counter.textContent = '0';
            let count = 0;
            const increment = target / 80;
            const timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.ceil(count);
                }
            }, 30);
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.7 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// 4. Vanilla Tilt untuk 3D hover effect
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
});

// 5. Fade-up scroll animation umum (menggantikan observer lama dengan yang lebih fleksibel)
const fadeUps = document.querySelectorAll('.fade-up');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

fadeUps.forEach(el => fadeObserver.observe(el));

// 6. Tambah lebih banyak floating particles secara dinamis
heroSection = document.querySelector('.hero-section');
for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.classList.add('floating-particle');
    const size = Math.random() * 25 + 10;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 20}s`;
    particle.style.animationDuration = `${Math.random() * 20 + 20}s`;
    particle.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.15 + 0.05})`;
    heroSection.appendChild(particle);
}