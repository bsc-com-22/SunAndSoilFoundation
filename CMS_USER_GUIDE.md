# Sun & Soil Foundation - Content Management System (CMS)

## 🎯 Overview

Welcome to the Sun & Soil Foundation CMS! This powerful, user-friendly content management system allows non-technical administrators to fully manage the website content without developer intervention.

## 🔐 Getting Started

### First Time Login

1. **Access the CMS**: Navigate to `/admin/login.html`
2. **Default Credentials**:
   - Email: `admin@sunandsoil.org`
   - Password: `admin123`
3. **⚠️ IMPORTANT**: Change the default password immediately after first login!

### Changing Your Password

1. Go to **Settings** > **Users & Roles**
2. Click on your user profile
3. Update your password
4. Save changes

## 📚 Core Features

### 1. Dashboard

The dashboard provides an overview of your website content:

- **Statistics**: View counts of pages, media, team members, and projects
- **Quick Actions**: Fast access to common tasks
- **Recent Activity**: Track recent changes
- **Getting Started Guide**: Step-by-step instructions for new users

### 2. Pages Management

Edit content for all website pages:

- **Homepage**: Hero section, programs, impact stats
- **About Page**: Mission, vision, team overview
- **Programs Page**: Program descriptions and details
- **Projects Page**: Project case studies
- **Contact Page**: Contact information and form

**How to Edit a Page:**

1. Navigate to **Pages** in the sidebar
2. Select the page you want to edit
3. Use the WYSIWYG editor to make changes
4. Click **Save Draft** or **Publish**

### 3. Media Library

Centralized storage for all images and media files.

**Uploading Media:**

1. Go to **Media Library**
2. Click **Upload Media** or drag files into the drop zone
3. Supported formats: JPG, PNG, GIF, WebP
4. Maximum file size: 5MB per file

**Managing Media:**

- **Alt Text**: Always add descriptive alt text for accessibility and SEO
- **Captions**: Optional captions for images
- **Copy URL**: Use the copy button to get the image URL for use in content
- **Delete**: Remove unused media files

**Best Practices:**

- Use descriptive filenames
- Always add alt text
- Optimize images before uploading (recommended: 1920px width max)
- Delete unused media to save space

### 4. Team Members

Manage your team profiles displayed on the website.

**Adding a Team Member:**

1. Go to **Team Members**
2. Click **Add Team Member**
3. Fill in the form:
   - **Name** (required)
   - **Position/Role** (required)
   - **Biography**
   - **Email & Phone**
   - **Profile Photo**
   - **Social Media Links**
   - **Featured** checkbox (displays on homepage)
4. Click **Save Team Member**

**Editing/Deleting:**

- Click the edit icon to modify details
- Click the trash icon to remove a member
- Use the search box to find specific team members

### 5. Projects

Showcase your impact through project case studies.

**Creating a Project:**

1. Navigate to **Projects**
2. Click **Create Project**
3. Complete the form:
   - **Title** (required)
   - **Location**
   - **Description**
   - **Featured Image**
   - **Beneficiaries Count**
   - **Outcomes/Results**
   - **Technologies Used**
   - **Start/End Dates**
4. Click **Save Project**

**Project Fields:**

- **Title**: Project name
- **Location**: Where the project takes place
- **Description**: Detailed project information
- **Beneficiaries**: Number of people impacted
- **Outcomes**: Measurable results
- **Technologies**: Solar systems, irrigation methods, etc.

### 6. Programs

Manage your organization's programs.

**Adding a Program:**

1. Go to **Programs**
2. Click **Add Program**
3. Fill in:
   - **Program Name**
   - **Description**
   - **Icon** (choose from available icons)
   - **Features/Benefits** (bullet points)
   - **Featured Image**
4. Save the program

### 7. Impact Metrics

Update the statistics displayed on your homepage.

**Managing Metrics:**

1. Navigate to **Impact Metrics**
2. Click **Add Metric** or edit existing ones
3. Enter:
   - **Value** (e.g., "10", "85", "100%")
   - **Label** (e.g., "Farmers Supported")
   - **Description** (optional details)
4. Save changes

**Tips:**

- Keep metrics current and accurate
- Use compelling numbers that tell your story
- Update regularly to show progress

### 8. Contact Information

Update your organization's contact details.

**Editable Fields:**

- Physical Address
- Phone Numbers
- Email Address
- Social Media Links (Facebook, Twitter, LinkedIn, Instagram)

**How to Update:**

1. Go to **Contact Info**
2. Edit the fields
3. Click **Save Changes**
4. Changes appear immediately on the website

## 🎨 Content Best Practices

### Writing Content

1. **Headlines**: Clear, concise, action-oriented
2. **Paragraphs**: Short paragraphs (2-3 sentences)
3. **Bullet Points**: Use for lists and features
4. **Call-to-Actions**: Clear next steps for visitors

### Images

1. **Quality**: Use high-resolution images (minimum 1200px width)
2. **Relevance**: Images should support your content
3. **Alt Text**: Always describe images for accessibility
4. **File Size**: Optimize before uploading (use tools like TinyPNG)
5. **Naming**: Use descriptive filenames (e.g., `solar-irrigation-malawi.jpg`)

### SEO Optimization

1. **Page Titles**: Unique, descriptive (50-60 characters)
2. **Meta Descriptions**: Compelling summaries (150-160 characters)
3. **Headings**: Use proper hierarchy (H1 → H2 → H3)
4. **Alt Text**: Descriptive image descriptions
5. **URLs**: Clean, readable slugs

## 👥 User Roles & Permissions

### Administrator

- Full access to all features
- Can manage users and settings
- Can publish/unpublish content
- Can delete content

### Editor

- Can edit and publish content
- Cannot manage users
- Cannot change site settings
- Can upload media

### Author

- Can create and edit own content
- Cannot publish (requires approval)
- Can upload media
- Cannot delete published content

## 🔄 Version History

The CMS automatically tracks changes to your content.

**Viewing History:**

1. Go to **Version History**
2. Filter by content type or date
3. View previous versions
4. Restore if needed

**Restoring a Previous Version:**

1. Find the version you want to restore
2. Click **Restore**
3. Confirm the action
4. The content reverts to that version

## 📊 Publishing Workflow

### Draft → Review → Publish

1. **Create/Edit Content**: Make your changes
2. **Save as Draft**: Content is saved but not live
3. **Preview**: Review how it looks
4. **Publish**: Make changes live on the website

**Unpublishing Content:**

- Edit the content
- Click **Unpublish**
- Content is hidden from the public site but remains in the CMS

## 🔒 Security Best Practices

1. **Strong Passwords**: Use complex passwords (12+ characters)
2. **Regular Updates**: Change passwords every 90 days
3. **Logout**: Always logout when finished
4. **Limited Access**: Only give access to trusted team members
5. **Backups**: Regularly export your data (Settings → Export Data)

## 💾 Backup & Export

### Exporting Data

1. Go to **Settings** → **Site Settings**
2. Click **Export Data**
3. Save the JSON file to your computer
4. Store securely

**When to Export:**

- Before major changes
- Monthly backups
- Before updating the CMS

### Importing Data

1. Go to **Settings** → **Site Settings**
2. Click **Import Data**
3. Select your JSON backup file
4. Confirm import

**⚠️ Warning**: Importing will overwrite current data!

## 🆘 Troubleshooting

### Common Issues

**Can't Login:**

- Check your email and password
- Clear browser cache
- Try a different browser
- Contact your administrator

**Images Not Uploading:**

- Check file size (max 5MB)
- Verify file format (JPG, PNG, GIF, WebP)
- Try a different browser
- Check internet connection

**Changes Not Appearing:**

- Make sure you clicked **Publish** (not just Save Draft)
- Clear browser cache
- Wait a few minutes for changes to propagate

**Lost Content:**

- Check **Version History** to restore
- Check if content was unpublished
- Contact administrator

## 📞 Support

### Getting Help

1. **Documentation**: Refer to this guide
2. **Version History**: Restore previous versions if needed
3. **Activity Log**: Review recent changes
4. **Technical Support**: Contact your web developer

### Reporting Issues

When reporting an issue, include:

- What you were trying to do
- What happened instead
- Screenshots if possible
- Browser and device information

## 🎓 Training Resources

### Video Tutorials (Coming Soon)

- Getting Started with the CMS
- Managing Team Members
- Uploading and Managing Media
- Creating Project Case Studies
- SEO Best Practices

### Quick Reference Cards

- Keyboard shortcuts
- Common tasks checklist
- Content guidelines

## 📝 Content Calendar

Plan your content updates:

**Monthly Tasks:**

- Update impact metrics
- Add new project case studies
- Review and update team bios
- Check and update contact information

**Quarterly Tasks:**

- Review all page content
- Update program descriptions
- Refresh homepage content
- Audit media library

**Annual Tasks:**

- Update mission/vision statements
- Refresh all images
- Review SEO performance
- Update team photos

## 🚀 Advanced Features

### Custom Fields (Coming Soon)

- Add custom data fields to content types
- Create custom content types

### Workflow Automation (Coming Soon)

- Scheduled publishing
- Automated backups
- Email notifications

### Analytics Integration (Coming Soon)

- Track page views
- Monitor user engagement
- Content performance metrics

## 📋 Checklist for New Content

Before publishing new content:

- [ ] Content is proofread and error-free
- [ ] All images have alt text
- [ ] Links are working
- [ ] SEO fields are filled (title, description)
- [ ] Content follows brand guidelines
- [ ] Preview looks good on mobile
- [ ] Call-to-action is clear
- [ ] Contact information is current

## 🎯 Goals & Best Practices

### Content Goals

1. **Inform**: Educate visitors about your work
2. **Inspire**: Show impact and success stories
3. **Engage**: Encourage donations and partnerships
4. **Convert**: Clear calls-to-action

### Update Frequency

- **News/Blog**: Weekly
- **Projects**: Monthly
- **Team**: As needed
- **Impact Metrics**: Monthly
- **Programs**: Quarterly

---

## 📞 Contact & Support

For technical support or questions about the CMS:

- **Email**: <support@sunandsoil.org>
- **Developer**: Nyasa Creatives

---

**Last Updated**: January 2026  
**Version**: 1.0.0  
**CMS Platform**: Sun & Soil Foundation Custom CMS
