// ============================================
// Authentication System
// ============================================

class AuthSystem {
    constructor() {
        this.storageKey = 'cms_auth';
        this.usersKey = 'cms_users';
        this.init();
    }

    init() {
        // Initialize default admin user if not exists
        if (!localStorage.getItem(this.usersKey)) {
            const defaultUsers = [
                {
                    id: '1',
                    email: 'admin@sunandsoil.org',
                    password: this.hashPassword('admin123'), // Change this in production!
                    name: 'Admin User',
                    role: 'admin',
                    createdAt: new Date().toISOString()
                }
            ];
            localStorage.setItem(this.usersKey, JSON.stringify(defaultUsers));
        }
    }

    // Simple hash function (use bcrypt or similar in production)
    hashPassword(password) {
        return btoa(password); // Base64 encoding - NOT SECURE, use proper hashing in production
    }

    login(email, password) {
        const users = JSON.parse(localStorage.getItem(this.usersKey) || '[]');
        const hashedPassword = this.hashPassword(password);

        const user = users.find(u =>
            u.email === email && u.password === hashedPassword
        );

        if (user) {
            const session = {
                userId: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
                loginTime: new Date().toISOString()
            };

            localStorage.setItem(this.storageKey, JSON.stringify(session));
            return { success: true, user: session };
        }

        return { success: false, error: 'Invalid email or password' };
    }

    logout() {
        localStorage.removeItem(this.storageKey);
        window.location.href = 'login.html';
    }

    isAuthenticated() {
        const session = localStorage.getItem(this.storageKey);
        return session !== null;
    }

    getCurrentUser() {
        const session = localStorage.getItem(this.storageKey);
        return session ? JSON.parse(session) : null;
    }

    requireAuth() {
        if (!this.isAuthenticated()) {
            window.location.href = 'login.html';
            return false;
        }
        return true;
    }

    hasRole(role) {
        const user = this.getCurrentUser();
        if (!user) return false;

        const roleHierarchy = {
            'admin': 3,
            'editor': 2,
            'author': 1
        };

        return roleHierarchy[user.role] >= roleHierarchy[role];
    }
}

// Initialize auth system
const auth = new AuthSystem();

// Login form handler
if (document.getElementById('loginForm')) {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    // Toggle password visibility
    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;

            const icon = togglePassword.querySelector('.icon');
            icon.setAttribute('data-lucide', type === 'password' ? 'eye' : 'eye-off');
            lucide.createIcons();
        });
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;

        const result = auth.login(email, password);

        if (result.success) {
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            loginError.textContent = result.error;
            loginError.style.display = 'block';

            // Shake animation
            loginForm.style.animation = 'shake 0.5s';
            setTimeout(() => {
                loginForm.style.animation = '';
            }, 500);
        }
    });
}

// Logout handler
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        auth.logout();
    }
}

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);
