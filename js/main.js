document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuButton = document.querySelector('button[aria-label="Toggle menu"]');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = menuButton?.querySelector('.menu-icon');
    const closeIcon = menuButton?.querySelector('.close-icon');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');

            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuIcon?.classList.add('hidden');
                closeIcon?.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon?.classList.remove('hidden');
                closeIcon?.classList.add('hidden');
            }
        });
    }

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu?.querySelectorAll('a');
    mobileLinks?.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon?.classList.remove('hidden');
            closeIcon?.classList.add('hidden');
        });
    });

    // Contact Form Logic
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const sendAnotherBtn = document.getElementById('send-another');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm && successMessage) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btnText = submitBtn.querySelector('.btn-text');
            const btnIcon = submitBtn.querySelector('.btn-icon');
            const loadingSpinner = submitBtn.querySelector('.loading-spinner');

            // Show loading state
            submitBtn.disabled = true;
            btnText?.classList.add('hidden');
            btnIcon?.classList.add('hidden');
            loadingSpinner?.classList.remove('hidden');

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success state
            contactForm.classList.add('hidden');
            successMessage.classList.remove('hidden');

            // Reset button state
            submitBtn.disabled = false;
            btnText?.classList.remove('hidden');
            btnIcon?.classList.remove('hidden');
            loadingSpinner?.classList.add('hidden');

            showToast("Message sent successfully!", "We'll get back to you within 2-3 business days.");
        });

        if (sendAnotherBtn) {
            sendAnotherBtn.addEventListener('click', () => {
                contactForm.reset();
                successMessage.classList.add('hidden');
                contactForm.classList.remove('hidden');
            });
        }
    }
});

// Simple Toast Notification System
function showToast(title, description) {
    const toastContainer = document.getElementById('toast-container') || createToastContainer();

    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 z-[100] flex w-full max-w-md animate-fade-up flex-col gap-1 rounded-xl border border-border bg-card p-4 shadow-lg md:bottom-8 md:right-8 pointer-events-auto';

    toast.innerHTML = `
        <div class="flex items-start justify-between gap-4">
            <div class="flex flex-col gap-1">
                <h3 class="font-heading text-sm font-semibold text-foreground">${title}</h3>
                <p class="text-xs text-muted-foreground">${description}</p>
            </div>
            <button class="text-muted-foreground hover:text-foreground transition-colors">
                <i data-lucide="x" class="w-4 h-4"></i>
            </button>
        </div>
    `;

    toastContainer.appendChild(toast);
    lucide.createIcons();

    const closeBtn = toast.querySelector('button');
    closeBtn.addEventListener('click', () => {
        toast.classList.add('animate-fade-out');
        setTimeout(() => toast.remove(), 300);
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.classList.add('animate-fade-out');
            setTimeout(() => toast.remove(), 300);
        }
    }, 5000);
}

function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-0 right-0 z-[100] p-4 md:p-8 pointer-events-none';
    document.body.appendChild(container);
    return container;
}
