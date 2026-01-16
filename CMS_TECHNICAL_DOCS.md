# Sun & Soil Foundation CMS - Technical Documentation

## 📋 Table of Contents

1. [System Overview](#system-overview)
2. [Architecture](#architecture)
3. [Installation](#installation)
4. [Core Components](#core-components)
5. [Data Structure](#data-structure)
6. [API Reference](#api-reference)
7. [Security](#security)
8. [Deployment](#deployment)
9. [Customization](#customization)
10. [Troubleshooting](#troubleshooting)

---

## System Overview

### What is This CMS?

The Sun & Soil Foundation CMS is a lightweight, browser-based content management system built with vanilla JavaScript, HTML, and CSS. It uses localStorage for data persistence, making it perfect for small to medium-sized static websites that need content management without a backend server.

### Key Features

- ✅ **No Backend Required**: Pure client-side application
- ✅ **Role-Based Access Control**: Admin, Editor, Author roles
- ✅ **Media Library**: Upload and manage images
- ✅ **Version History**: Track and restore changes
- ✅ **WYSIWYG Editing**: User-friendly content editing
- ✅ **Responsive Design**: Works on all devices
- ✅ **Export/Import**: Backup and restore data
- ✅ **Activity Logging**: Track all changes

### Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Icons**: Lucide Icons
- **Fonts**: Google Fonts (Inter)
- **Storage**: LocalStorage API
- **File Handling**: FileReader API

---

## Architecture

### Directory Structure

```
SunAndSoilFoundation/
├── admin/                      # CMS Admin Panel
│   ├── css/
│   │   └── admin.css          # Admin styles
│   ├── js/
│   │   ├── auth.js            # Authentication system
│   │   └── cms-core.js        # Core CMS functionality
│   ├── login.html             # Login page
│   ├── dashboard.html         # Main dashboard
│   ├── team.html              # Team management
│   ├── media.html             # Media library
│   ├── impact.html            # Impact metrics
│   ├── contact-info.html      # Contact info
│   ├── projects.html          # Projects (to be created)
│   ├── programs.html          # Programs (to be created)
│   ├── pages.html             # Page editor (to be created)
│   ├── users.html             # User management (to be created)
│   ├── settings.html          # Site settings (to be created)
│   └── history.html           # Version history (to be created)
├── assets/                     # Images and media
├── css/
│   └── styles.css             # Public site styles
├── js/
│   └── main.js                # Public site scripts
├── index.html                 # Homepage
├── about.html                 # About page
├── contact.html               # Contact page
├── team.html                  # Team page
├── programs.html              # Programs page
├── projects.html              # Projects page
├── partners.html              # Partners page
├── donate.html                # Donate page
└── 404.html                   # 404 page
```

### Data Flow

```
User Input → CMS Interface → CMSCore → LocalStorage → Website Display
                ↓
         Activity Log
                ↓
         Version History
```

---

## Installation

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (for production) or local server (for development)
- Text editor (VS Code recommended)

### Development Setup

1. **Clone or Download** the project files

2. **Start a Local Server**:

   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (http-server)
   npx http-server -p 8000

   # Using PHP
   php -S localhost:8000
   ```

3. **Access the CMS**:
   - Public site: `http://localhost:8000`
   - Admin panel: `http://localhost:8000/admin/login.html`

4. **Default Login**:
   - Email: `admin@sunandsoil.org`
   - Password: `admin123`

### Production Deployment

1. **Upload Files** to your web server
2. **Configure HTTPS** (required for security)
3. **Change Default Password** immediately
4. **Set up Regular Backups** (export data weekly)

---

## Core Components

### 1. Authentication System (`auth.js`)

#### AuthSystem Class

```javascript
class AuthSystem {
    constructor()           // Initialize auth system
    login(email, password)  // Authenticate user
    logout()                // End session
    isAuthenticated()       // Check if logged in
    getCurrentUser()        // Get current user data
    requireAuth()           // Redirect if not authenticated
    hasRole(role)          // Check user permissions
}
```

#### User Roles

- **Admin**: Full access to all features
- **Editor**: Can edit and publish content
- **Author**: Can create and edit own content

#### Session Management

Sessions are stored in localStorage with the following structure:

```javascript
{
    userId: "1",
    email: "admin@sunandsoil.org",
    name: "Admin User",
    role: "admin",
    loginTime: "2026-01-16T04:00:00.000Z"
}
```

### 2. CMS Core (`cms-core.js`)

#### CMSCore Class

Main class for all data operations:

```javascript
class CMSCore {
    // Generic CRUD
    create(type, data)
    read(type, id)
    update(type, id, data)
    delete(type, id)
    getAll(type)

    // Team Members
    createTeamMember(data)
    updateTeamMember(id, data)
    deleteTeamMember(id)
    getAllTeamMembers()

    // Projects
    createProject(data)
    updateProject(id, data)
    deleteProject(id)
    getAllProjects()

    // Media Library
    uploadMedia(file, metadata)
    deleteMedia(id)
    getAllMedia()
    updateMediaMetadata(id, metadata)

    // Impact Metrics
    createMetric(data)
    updateMetric(id, data)
    deleteMetric(id)
    getAllMetrics()

    // Contact Info
    getContactInfo()
    updateContactInfo(data)

    // Settings
    getSettings()
    updateSettings(data)

    // Version History
    saveVersion(type, data)
    getVersionHistory(type, itemId)
    restoreVersion(versionId)

    // Activity Log
    logActivity(action, type, description)
    getRecentActivity(limit)

    // Statistics
    getStats()

    // Export/Import
    exportData()
    importData(jsonData)
}
```

---

## Data Structure

### LocalStorage Keys

```javascript
{
    'cms_auth': 'Current user session',
    'cms_users': 'All user accounts',
    'cms_pages': 'Page content',
    'cms_media': 'Media library',
    'cms_team': 'Team members',
    'cms_projects': 'Projects',
    'cms_programs': 'Programs',
    'cms_impact': 'Impact metrics',
    'cms_contact': 'Contact information',
    'cms_settings': 'Site settings',
    'cms_history': 'Version history',
    'cms_activity': 'Activity log'
}
```

### Data Models

#### Team Member

```javascript
{
    id: "unique_id",
    name: "John Doe",
    position: "Executive Director",
    bio: "Brief biography...",
    email: "john@sunandsoil.org",
    phone: "+265 999 123 456",
    photo: "data:image/jpeg;base64,...",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    featured: true,
    createdAt: "2026-01-16T04:00:00.000Z",
    updatedAt: "2026-01-16T04:00:00.000Z"
}
```

#### Project

```javascript
{
    id: "unique_id",
    title: "Solar Irrigation Project",
    location: "Lilongwe, Malawi",
    description: "Detailed description...",
    image: "data:image/jpeg;base64,...",
    beneficiaries: 100,
    outcomes: "Increased crop yields by 50%",
    technologies: ["Solar pumps", "Drip irrigation"],
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    status: "active",
    createdAt: "2026-01-16T04:00:00.000Z",
    updatedAt: "2026-01-16T04:00:00.000Z"
}
```

#### Media Item

```javascript
{
    id: "unique_id",
    filename: "solar-farm.jpg",
    type: "image/jpeg",
    size: 245678,
    dataUrl: "data:image/jpeg;base64,...",
    altText: "Solar panels on farm",
    caption: "Solar installation in Lilongwe",
    uploadedAt: "2026-01-16T04:00:00.000Z"
}
```

#### Impact Metric

```javascript
{
    id: "unique_id",
    value: "10",
    label: "Farmers Supported",
    description: "Direct beneficiaries",
    icon: "users",
    order: 1,
    createdAt: "2026-01-16T04:00:00.000Z",
    updatedAt: "2026-01-16T04:00:00.000Z"
}
```

#### Contact Information

```javascript
{
    address: "Kaphiri, Area 36, Lilongwe, Malawi",
    phone: "+265 995 856 237 / 888 655 069",
    email: "sunandsoilfoundation@gmail.com",
    whatsapp: "+265 995 856 237",
    mapLink: "https://maps.google.com/...",
    socialMedia: {
        facebook: "https://facebook.com/sunandsoil",
        twitter: "https://twitter.com/sunandsoil",
        linkedin: "https://linkedin.com/company/sunandsoil",
        instagram: "https://instagram.com/sunandsoil",
        youtube: "https://youtube.com/@sunandsoil"
    }
}
```

---

## API Reference

### Creating Content

```javascript
const cms = new CMSCore();

// Create a team member
const member = cms.createTeamMember({
    name: "Jane Smith",
    position: "Program Manager",
    bio: "Experienced in agricultural development...",
    email: "jane@sunandsoil.org",
    featured: true
});

// Create a project
const project = cms.createProject({
    title: "Community Garden Initiative",
    location: "Blantyre",
    description: "Supporting urban agriculture...",
    beneficiaries: 50
});

// Upload media
const fileInput = document.getElementById('fileInput');
const file = fileInput.files[0];
const media = await cms.uploadMedia(file, {
    altText: "Community garden",
    caption: "Urban farming project"
});
```

### Reading Content

```javascript
// Get all team members
const team = cms.getAllTeamMembers();

// Get specific team member
const member = cms.read('team', 'member_id');

// Get all media
const media = cms.getAllMedia();

// Get contact info
const contact = cms.getContactInfo();

// Get statistics
const stats = cms.getStats();
```

### Updating Content

```javascript
// Update team member
cms.updateTeamMember('member_id', {
    position: "Senior Program Manager",
    bio: "Updated biography..."
});

// Update contact info
cms.updateContactInfo({
    phone: "+265 999 999 999",
    email: "newemail@sunandsoil.org"
});

// Update media metadata
cms.updateMediaMetadata('media_id', {
    altText: "Updated alt text",
    caption: "Updated caption"
});
```

### Deleting Content

```javascript
// Delete team member
cms.deleteTeamMember('member_id');

// Delete project
cms.deleteProject('project_id');

// Delete media
cms.deleteMedia('media_id');
```

### Version History

```javascript
// Get version history for a specific item
const history = cms.getVersionHistory('team', 'member_id');

// Restore a previous version
cms.restoreVersion('version_id');

// Get all recent activity
const activity = cms.getRecentActivity(10);
```

### Export/Import

```javascript
// Export all data
const jsonData = cms.exportData();
// Save to file or send to server

// Import data
const success = cms.importData(jsonData);
```

---

## Security

### Current Implementation

⚠️ **Note**: This is a client-side CMS suitable for trusted administrators only.

#### Security Measures

1. **Password Hashing**: Basic Base64 encoding (NOT SECURE for production)
2. **Session Management**: LocalStorage-based sessions
3. **Role-Based Access**: Permission checks before operations

#### Security Limitations

- ❌ Passwords are not securely hashed
- ❌ No server-side validation
- ❌ Data stored in browser (accessible via DevTools)
- ❌ No protection against XSS attacks
- ❌ No CSRF protection

### Production Security Recommendations

#### 1. Implement Proper Authentication

```javascript
// Replace hashPassword with bcrypt or similar
async hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}
```

#### 2. Add Server-Side Backend

- Use a proper backend (Node.js, PHP, Python)
- Store data in a database (MySQL, PostgreSQL, MongoDB)
- Implement JWT or session-based auth
- Add API endpoints with validation

#### 3. Implement HTTPS

- Always use HTTPS in production
- Redirect HTTP to HTTPS
- Use secure cookies

#### 4. Add Input Validation

```javascript
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}
```

#### 5. Implement Rate Limiting

- Limit login attempts
- Add CAPTCHA for repeated failures
- Lock accounts after multiple failed attempts

---

## Deployment

### Static Hosting (Current Setup)

#### Netlify

1. Connect your Git repository
2. Build command: (none needed)
3. Publish directory: `/`
4. Deploy

#### Vercel

1. Import project
2. Framework: Other
3. Deploy

#### GitHub Pages

1. Push to GitHub
2. Settings → Pages
3. Source: main branch
4. Save

### With Backend (Recommended for Production)

#### Node.js + Express

```javascript
// server.js
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use('/admin', requireAuth, express.static('admin'));

app.listen(3000);
```

#### Environment Variables

```env
# .env
CMS_SECRET_KEY=your-secret-key
DATABASE_URL=your-database-url
ADMIN_EMAIL=admin@sunandsoil.org
```

---

## Customization

### Adding New Content Types

1. **Update CMSCore** (`cms-core.js`):

```javascript
// Add new data key
this.dataKeys = {
    ...
    donors: 'cms_donors'
};

// Add CRUD methods
createDonor(data) {
    return this.create('donors', data);
}

updateDonor(id, data) {
    return this.update('donors', id, data);
}

deleteDonor(id) {
    return this.delete('donors', id);
}

getAllDonors() {
    return this.getAll('donors');
}
```

1. **Create Admin Page** (`admin/donors.html`):

```html
<!-- Copy structure from team.html or media.html -->
<!-- Customize fields for donors -->
```

1. **Add to Navigation**:

```html
<li>
    <a href="donors.html">
        <i data-lucide="heart" class="icon"></i>
        Donors
    </a>
</li>
```

### Customizing Styles

Edit `admin/css/admin.css`:

```css
/* Change primary color */
:root {
    --primary: #your-color;
    --accent: #your-accent;
}

/* Customize components */
.card {
    /* Your styles */
}
```

### Adding Features

#### Example: Add Search to Dashboard

```javascript
// In dashboard.html
function searchContent(query) {
    const cms = new CMSCore();
    const results = [];
    
    // Search team
    const team = cms.getAllTeamMembers();
    results.push(...team.filter(m => 
        m.name.toLowerCase().includes(query.toLowerCase())
    ));
    
    // Search projects
    const projects = cms.getAllProjects();
    results.push(...projects.filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase())
    ));
    
    return results;
}
```

---

## Troubleshooting

### Common Issues

#### 1. Can't Login

**Problem**: Invalid credentials or session issues

**Solutions**:

- Clear browser cache and localStorage
- Check console for errors
- Verify default credentials
- Try incognito mode

```javascript
// Reset to default admin user
localStorage.setItem('cms_users', JSON.stringify([{
    id: '1',
    email: 'admin@sunandsoil.org',
    password: btoa('admin123'),
    name: 'Admin User',
    role: 'admin'
}]));
```

#### 2. Images Not Uploading

**Problem**: File size or format issues

**Solutions**:

- Check file size (max 5MB)
- Verify file format (JPG, PNG, GIF, WebP)
- Check browser console for errors
- Try smaller image

#### 3. Data Lost

**Problem**: LocalStorage cleared or corrupted

**Solutions**:

- Check version history
- Restore from backup
- Check browser storage quota

```javascript
// Check storage usage
navigator.storage.estimate().then(estimate => {
    console.log(`Using ${estimate.usage} of ${estimate.quota} bytes`);
});
```

#### 4. Changes Not Saving

**Problem**: LocalStorage quota exceeded

**Solutions**:

- Delete unused media
- Export and clear old data
- Compress images before upload

```javascript
// Clear old activity logs
const activity = JSON.parse(localStorage.getItem('cms_activity') || '[]');
localStorage.setItem('cms_activity', JSON.stringify(activity.slice(0, 20)));
```

### Debug Mode

Add to any admin page:

```javascript
// Enable debug logging
window.CMS_DEBUG = true;

// Log all operations
const originalCreate = cms.create;
cms.create = function(...args) {
    if (window.CMS_DEBUG) console.log('CREATE:', args);
    return originalCreate.apply(this, args);
};
```

---

## Migration Path

### Moving to a Backend

When ready to scale:

1. **Export Current Data**

   ```javascript
   const data = cms.exportData();
   // Save to file
   ```

2. **Set Up Database**

   ```sql
   CREATE TABLE team_members (
       id VARCHAR(50) PRIMARY KEY,
       name VARCHAR(255),
       position VARCHAR(255),
       bio TEXT,
       ...
   );
   ```

3. **Create API Endpoints**

   ```javascript
   app.get('/api/team', async (req, res) => {
       const team = await db.query('SELECT * FROM team_members');
       res.json(team);
   });
   ```

4. **Update CMS Core**

   ```javascript
   async getAllTeamMembers() {
       const response = await fetch('/api/team');
       return await response.json();
   }
   ```

---

## Support & Resources

### Documentation

- User Guide: `CMS_USER_GUIDE.md`
- Technical Docs: This file
- Code Comments: Inline documentation

### Community

- GitHub Issues: Report bugs
- Email: <support@sunandsoil.org>

### Development

- Built by: Nyasa Creatives
- License: MIT (or your license)
- Version: 1.0.0

---

**Last Updated**: January 2026  
**Maintainer**: Nyasa Creatives  
**Status**: Production Ready (with security considerations)
