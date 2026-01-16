// ============================================
// CMS Core - Data Management System
// ============================================

class CMSCore {
    constructor() {
        this.dataKeys = {
            pages: 'cms_pages',
            media: 'cms_media',
            team: 'cms_team',
            projects: 'cms_projects',
            programs: 'cms_programs',
            impact: 'cms_impact',
            contact: 'cms_contact',
            settings: 'cms_settings',
            history: 'cms_history'
        };
        this.init();
    }

    init() {
        // Initialize default data structures if they don't exist
        Object.values(this.dataKeys).forEach(key => {
            if (!localStorage.getItem(key)) {
                localStorage.setItem(key, JSON.stringify([]));
            }
        });

        // Initialize contact info if not exists
        if (!localStorage.getItem(this.dataKeys.contact)) {
            const defaultContact = {
                address: 'Kaphiri, Area 36, Lilongwe, Malawi',
                phone: '+265 995 856 237 / 888 655 069',
                email: 'sunandsoilfoundation@gmail.com',
                socialMedia: {
                    facebook: '#',
                    twitter: '#',
                    linkedin: '#',
                    instagram: '#'
                }
            };
            localStorage.setItem(this.dataKeys.contact, JSON.stringify(defaultContact));
        }

        // Initialize settings if not exists
        if (!localStorage.getItem(this.dataKeys.settings)) {
            const defaultSettings = {
                siteName: 'Sun & Soil Foundation',
                siteTagline: 'Powering Malawi\'s Food Future',
                siteUrl: 'https://sunandsoilfoundation.org',
                metaDescription: 'Sun & Soil Foundation empowers Malawian farmers through solar-powered irrigation, climate-smart agriculture, and sustainable rural livelihoods.',
                ogImage: 'assets/hero-farming.jpg'
            };
            localStorage.setItem(this.dataKeys.settings, JSON.stringify(defaultSettings));
        }
    }

    // ============================================
    // Generic CRUD Operations
    // ============================================

    create(type, data) {
        const items = this.getAll(type);
        const newItem = {
            id: this.generateId(),
            ...data,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        items.push(newItem);
        localStorage.setItem(this.dataKeys[type], JSON.stringify(items));
        this.logActivity('create', type, `Created ${type}: ${data.title || data.name || 'item'}`);
        return newItem;
    }

    read(type, id) {
        const items = this.getAll(type);
        return items.find(item => item.id === id);
    }

    update(type, id, data) {
        const items = this.getAll(type);
        const index = items.findIndex(item => item.id === id);
        if (index !== -1) {
            // Save version history
            this.saveVersion(type, items[index]);

            items[index] = {
                ...items[index],
                ...data,
                updatedAt: new Date().toISOString()
            };
            localStorage.setItem(this.dataKeys[type], JSON.stringify(items));
            this.logActivity('update', type, `Updated ${type}: ${data.title || data.name || 'item'}`);
            return items[index];
        }
        return null;
    }

    delete(type, id) {
        const items = this.getAll(type);
        const filtered = items.filter(item => item.id !== id);
        const deleted = items.find(item => item.id === id);
        if (deleted) {
            localStorage.setItem(this.dataKeys[type], JSON.stringify(filtered));
            this.logActivity('delete', type, `Deleted ${type}: ${deleted.title || deleted.name || 'item'}`);
            return true;
        }
        return false;
    }

    getAll(type) {
        const data = localStorage.getItem(this.dataKeys[type]);
        return data ? JSON.parse(data) : [];
    }

    // ============================================
    // Team Members
    // ============================================

    createTeamMember(data) {
        return this.create('team', data);
    }

    updateTeamMember(id, data) {
        return this.update('team', id, data);
    }

    deleteTeamMember(id) {
        return this.delete('team', id);
    }

    getAllTeamMembers() {
        return this.getAll('team');
    }

    // ============================================
    // Projects
    // ============================================

    createProject(data) {
        return this.create('projects', data);
    }

    updateProject(id, data) {
        return this.update('projects', id, data);
    }

    deleteProject(id) {
        return this.delete('projects', id);
    }

    getAllProjects() {
        return this.getAll('projects');
    }

    // ============================================
    // Programs
    // ============================================

    createProgram(data) {
        return this.create('programs', data);
    }

    updateProgram(id, data) {
        return this.update('programs', id, data);
    }

    deleteProgram(id) {
        return this.delete('programs', id);
    }

    getAllPrograms() {
        return this.getAll('programs');
    }

    // ============================================
    // Impact Metrics
    // ============================================

    createMetric(data) {
        return this.create('impact', data);
    }

    updateMetric(id, data) {
        return this.update('impact', id, data);
    }

    deleteMetric(id) {
        return this.delete('impact', id);
    }

    getAllMetrics() {
        return this.getAll('impact');
    }

    // ============================================
    // Media Library
    // ============================================

    uploadMedia(file, metadata = {}) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                const mediaItem = {
                    id: this.generateId(),
                    filename: file.name,
                    type: file.type,
                    size: file.size,
                    dataUrl: e.target.result,
                    altText: metadata.altText || '',
                    caption: metadata.caption || '',
                    uploadedAt: new Date().toISOString()
                };

                const media = this.getAll('media');
                media.push(mediaItem);
                localStorage.setItem(this.dataKeys.media, JSON.stringify(media));
                this.logActivity('upload', 'media', `Uploaded media: ${file.name}`);
                resolve(mediaItem);
            };

            reader.onerror = () => {
                reject(new Error('Failed to read file'));
            };

            reader.readAsDataURL(file);
        });
    }

    deleteMedia(id) {
        return this.delete('media', id);
    }

    getAllMedia() {
        return this.getAll('media');
    }

    updateMediaMetadata(id, metadata) {
        return this.update('media', id, metadata);
    }

    // ============================================
    // Contact Information
    // ============================================

    getContactInfo() {
        const data = localStorage.getItem(this.dataKeys.contact);
        return data ? JSON.parse(data) : null;
    }

    updateContactInfo(data) {
        const current = this.getContactInfo();
        const updated = { ...current, ...data };
        localStorage.setItem(this.dataKeys.contact, JSON.stringify(updated));
        this.logActivity('update', 'contact', 'Updated contact information');
        return updated;
    }

    // ============================================
    // Site Settings
    // ============================================

    getSettings() {
        const data = localStorage.getItem(this.dataKeys.settings);
        return data ? JSON.parse(data) : null;
    }

    updateSettings(data) {
        const current = this.getSettings();
        const updated = { ...current, ...data };
        localStorage.setItem(this.dataKeys.settings, JSON.stringify(updated));
        this.logActivity('update', 'settings', 'Updated site settings');
        return updated;
    }

    // ============================================
    // Version History
    // ============================================

    saveVersion(type, data) {
        const history = JSON.parse(localStorage.getItem(this.dataKeys.history) || '[]');
        const version = {
            id: this.generateId(),
            type,
            itemId: data.id,
            data: { ...data },
            timestamp: new Date().toISOString(),
            user: auth.getCurrentUser()?.name || 'Unknown'
        };
        history.unshift(version); // Add to beginning

        // Keep only last 100 versions
        if (history.length > 100) {
            history.splice(100);
        }

        localStorage.setItem(this.dataKeys.history, JSON.stringify(history));
    }

    getVersionHistory(type = null, itemId = null) {
        const history = JSON.parse(localStorage.getItem(this.dataKeys.history) || '[]');

        if (type && itemId) {
            return history.filter(v => v.type === type && v.itemId === itemId);
        } else if (type) {
            return history.filter(v => v.type === type);
        }

        return history;
    }

    restoreVersion(versionId) {
        const history = JSON.parse(localStorage.getItem(this.dataKeys.history) || '[]');
        const version = history.find(v => v.id === versionId);

        if (version) {
            this.update(version.type, version.itemId, version.data);
            this.logActivity('restore', version.type, `Restored ${version.type} to previous version`);
            return true;
        }

        return false;
    }

    // ============================================
    // Activity Log
    // ============================================

    logActivity(action, type, description) {
        const activity = JSON.parse(localStorage.getItem('cms_activity') || '[]');
        const log = {
            id: this.generateId(),
            action,
            type,
            description,
            timestamp: new Date().toISOString(),
            user: auth.getCurrentUser()?.name || 'Unknown'
        };
        activity.unshift(log);

        // Keep only last 50 activities
        if (activity.length > 50) {
            activity.splice(50);
        }

        localStorage.setItem('cms_activity', JSON.stringify(activity));
    }

    getRecentActivity(limit = 10) {
        const activity = JSON.parse(localStorage.getItem('cms_activity') || '[]');
        return activity.slice(0, limit);
    }

    // ============================================
    // Statistics
    // ============================================

    getStats() {
        return {
            pages: 9, // Static pages count
            media: this.getAll('media').length,
            team: this.getAll('team').length,
            projects: this.getAll('projects').length,
            programs: this.getAll('programs').length,
            metrics: this.getAll('impact').length
        };
    }

    // ============================================
    // Export/Import
    // ============================================

    exportData() {
        const data = {};
        Object.entries(this.dataKeys).forEach(([key, storageKey]) => {
            data[key] = JSON.parse(localStorage.getItem(storageKey) || '[]');
        });
        return JSON.stringify(data, null, 2);
    }

    importData(jsonData) {
        try {
            const data = JSON.parse(jsonData);
            Object.entries(this.dataKeys).forEach(([key, storageKey]) => {
                if (data[key]) {
                    localStorage.setItem(storageKey, JSON.stringify(data[key]));
                }
            });
            this.logActivity('import', 'system', 'Imported data');
            return true;
        } catch (error) {
            console.error('Import failed:', error);
            return false;
        }
    }

    // ============================================
    // Utilities
    // ============================================

    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    formatDateTime(dateString) {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

// Make CMSCore available globally
window.CMSCore = CMSCore;
