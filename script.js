document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            if (menuIcon && closeIcon) {
                menuIcon.classList.toggle('hidden');
                closeIcon.classList.toggle('hidden');
            }
        });
    }

    const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
    if (mobileMenuLinks) {
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                if (menuIcon && closeIcon) {
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }
            });
        });
    }

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('nav');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
                navbar.classList.add('bg-opacity-95');
            } else {
                navbar.classList.remove('shadow-lg');
                navbar.classList.remove('bg-opacity-95');
            }
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100');
                entry.target.classList.remove('opacity-0');
                entry.target.classList.add('translate-y-0');
                entry.target.classList.remove('translate-y-10');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, section > div, .card');
    animatedElements.forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log('Form Data:', data);
            form.reset();
            alert('Form başarıyla gönderildi!');
        });
    });

    const accordions = document.querySelectorAll('[data-accordion-toggle]');
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            const target = document.getElementById(this.getAttribute('data-accordion-toggle'));
            if (target) {
                target.classList.toggle('hidden');
                const icon = this.querySelector('svg');
                if (icon) {
                    icon.classList.toggle('rotate-180');
                }
            }
        });
    });

    const tabs = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('[data-tab-content]');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            tabs.forEach(t => t.classList.remove('active', 'border-b-2', 'border-blue-500', 'text-blue-600'));
            tabContents.forEach(content => content.classList.add('hidden'));
            this.classList.add('active', 'border-b-2', 'border-blue-500', 'text-blue-600');
            const targetContent = document.querySelector(`[data-tab-content="${targetTab}"]`);
            if (targetContent) {
                targetContent.classList.remove('hidden');
            }
        });
    });

    const modals = document.querySelectorAll('[data-modal-toggle]');
    modals.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const targetModal = document.getElementById(this.getAttribute('data-modal-toggle'));
            if (targetModal) {
                targetModal.classList.toggle('hidden');
                targetModal.classList.toggle('flex');
            }
        });
    });

    const modalBackdrops = document.querySelectorAll('.modal-backdrop');
    modalBackdrops.forEach(backdrop => {
        backdrop.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
                this.classList.remove('flex');
            }
        });
    });

    let touchStartX = 0;
    let touchEndX = 0;
    const swipeElements = document.querySelectorAll('[data-swipe]');
    swipeElements.forEach(element => {
        element.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });
        element.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe(element);
        });
    });

    function handleSwipe(element) {
        if (touchEndX < touchStartX - 50) {
            element.dispatchEvent(new CustomEvent('swipeleft'));
        }
        if (touchEndX > touchStartX + 50) {
            element.dispatchEvent(new CustomEvent('swiperight'));
        }
    }

    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    lazyImages.forEach(img => imageObserver.observe(img));

    window.addEventListener('resize', debounce(function() {
        if (window.innerWidth > 768 && mobileMenu) {
            mobileMenu.classList.add('hidden');
            if (menuIcon && closeIcon) {
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        }
    }, 250));

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
});