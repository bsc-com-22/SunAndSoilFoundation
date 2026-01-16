# 🚀 Quick Start - Sun & Soil Foundation CMS

## Getting Started in 3 Steps

### Step 1: Start a Local Server

The CMS needs to run on a web server (not just opening files directly). Choose one method:

#### Option A: Python (Recommended)

```bash
# Navigate to the project folder
cd "C:\Users\Blessings Chidazi\Desktop\SunAndSoilFoundation"

# Start server (Python 3)
python -m http.server 8000
```

#### Option B: Node.js

```bash
# Install http-server globally (one time)
npm install -g http-server

# Navigate to project folder
cd "C:\Users\Blessings Chidazi\Desktop\SunAndSoilFoundation"

# Start server
http-server -p 8000
```

#### Option C: PHP

```bash
cd "C:\Users\Blessings Chidazi\Desktop\SunAndSoilFoundation"
php -S localhost:8000
```

#### Option D: VS Code Live Server Extension

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Step 2: Access the CMS

Once the server is running:

1. **Open your browser** (Chrome, Firefox, Safari, or Edge)

2. **Navigate to the admin login**:

   ```
   http://localhost:8000/admin/login.html
   ```

3. **Login with default credentials**:
   - **Email**: `admin@sunandsoil.org`
   - **Password**: `admin123`

### Step 3: Explore the CMS

After logging in, you'll see the dashboard. Try these features:

1. **Team Members**
   - Click "Team Members" in sidebar
   - Click "Add Team Member"
   - Fill in the form and upload a photo
   - Save and see it appear in the grid

2. **Media Library**
   - Click "Media Library"
   - Drag and drop an image
   - Click on the image to edit alt text
   - Save changes

3. **Impact Metrics**
   - Click "Impact Metrics"
   - Add a new metric (e.g., "100" - "Farmers Trained")
   - See it preview on the homepage

4. **Contact Information**
   - Click "Contact Info"
   - Update any contact details
   - See the live preview update
   - Save changes

## 📁 What You Have

### Admin Pages (All Working)

- ✅ `admin/login.html` - Login page
- ✅ `admin/dashboard.html` - Main dashboard
- ✅ `admin/team.html` - Team members management
- ✅ `admin/media.html` - Media library
- ✅ `admin/impact.html` - Impact metrics
- ✅ `admin/contact-info.html` - Contact information

### Core Files

- ✅ `admin/js/auth.js` - Authentication system
- ✅ `admin/js/cms-core.js` - CMS engine
- ✅ `admin/css/admin.css` - Admin styles

### Documentation

- 📖 `CMS_USER_GUIDE.md` - Complete user guide
- 📖 `CMS_TECHNICAL_DOCS.md` - Technical documentation
- 📖 `CMS_IMPLEMENTATION_SUMMARY.md` - Implementation overview

## ⚠️ Important Notes

### Security

**⚠️ CHANGE THE DEFAULT PASSWORD IMMEDIATELY!**

The default credentials are:

- Email: `admin@sunandsoil.org`
- Password: `admin123`

### Browser Storage

All data is stored in your browser's localStorage. This means:

- ✅ No database setup needed
- ✅ Works offline
- ⚠️ Data is browser-specific (Chrome data ≠ Firefox data)
- ⚠️ Clearing browser data will delete CMS content
- ⚠️ **BACKUP REGULARLY** using Export Data feature

### Backup Your Data

1. Go to Settings (when implemented) or use browser console:

   ```javascript
   const cms = new CMSCore();
   const backup = cms.exportData();
   console.log(backup); // Copy this and save to a file
   ```

2. Save the JSON to a file regularly

3. To restore:

   ```javascript
   const cms = new CMSCore();
   const jsonData = '...'; // Paste your backup
   cms.importData(jsonData);
   ```

## 🎯 Quick Tasks

### Add Your First Team Member

1. Login to CMS
2. Click "Team Members" in sidebar
3. Click "Add Team Member" button
4. Fill in:
   - Name: Your name
   - Position: Your role
   - Bio: Brief description
   - Upload a photo
5. Click "Save Team Member"
6. Done! You'll see it in the grid

### Upload Your First Image

1. Click "Media Library"
2. Drag an image file onto the upload area
3. Click on the uploaded image
4. Add alt text (important for accessibility!)
5. Add a caption (optional)
6. Click "Save Changes"

### Update Impact Metrics

1. Click "Impact Metrics"
2. Click "Add Metric"
3. Enter:
   - Value: "10"
   - Label: "Farmers Supported"
   - Description: "Direct beneficiaries"
4. Click "Save Metric"
5. See it in the preview!

### Update Contact Info

1. Click "Contact Info"
2. Update any fields
3. Watch the preview update live
4. Click "Save Contact Information"

## 🐛 Troubleshooting

### Can't Access Admin

**Problem**: Page not loading

**Solution**:

- Make sure server is running
- Check the URL: `http://localhost:8000/admin/login.html`
- Try a different browser
- Check browser console for errors (F12)

### Can't Login

**Problem**: Invalid credentials

**Solution**:

- Email: `admin@sunandsoil.org`
- Password: `admin123`
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito mode

### Images Not Uploading

**Problem**: Upload fails

**Solution**:

- Check file size (max 5MB)
- Use supported formats: JPG, PNG, GIF, WebP
- Try a smaller image
- Check browser console for errors

### Data Disappeared

**Problem**: Lost content

**Solution**:

- Check if you're in the same browser
- Look in version history (if implemented)
- Restore from backup
- Check localStorage:

  ```javascript
  // In browser console
  console.log(localStorage);
  ```

## 📱 Mobile Access

The CMS is fully responsive! You can:

- ✅ Login from phone/tablet
- ✅ Upload images
- ✅ Edit content
- ✅ Manage team members

Just access the same URL from your mobile browser.

## 🎓 Learning Resources

### Video Tutorials (Recommended to Create)

Create short screen recordings showing:

1. How to login
2. Adding a team member
3. Uploading images
4. Updating metrics
5. Changing contact info

### Documentation

- **For Users**: Read `CMS_USER_GUIDE.md`
- **For Developers**: Read `CMS_TECHNICAL_DOCS.md`
- **Overview**: Read `CMS_IMPLEMENTATION_SUMMARY.md`

## 🔄 Next Steps

### Immediate (Do Now)

1. ✅ Start local server
2. ✅ Login to CMS
3. ✅ Change default password
4. ✅ Add your team members
5. ✅ Upload some images
6. ✅ Update impact metrics
7. ✅ Update contact information

### Short Term (This Week)

1. Create backup of data
2. Add all team members
3. Upload all project images
4. Set up regular backup schedule
5. Train other staff members

### Long Term (Future)

1. Implement remaining pages (Projects, Programs, Pages)
2. Add WYSIWYG editor for page content
3. Consider migrating to backend database
4. Add analytics integration
5. Implement workflow/approval system

## 💡 Tips & Best Practices

### Images

- Resize images before uploading (max 1920px width)
- Use descriptive filenames
- Always add alt text
- Compress images (use TinyPNG.com)

### Content

- Keep text concise and clear
- Update metrics regularly
- Review content monthly
- Backup before major changes

### Security

- Change default password
- Use strong passwords
- Don't share login credentials
- Logout when finished
- Regular backups

## 📞 Support

### Need Help?

- Check the user guide: `CMS_USER_GUIDE.md`
- Check technical docs: `CMS_TECHNICAL_DOCS.md`
- Email: <support@sunandsoil.org>

### Found a Bug?

- Note what you were doing
- Take a screenshot
- Check browser console (F12)
- Contact developer

## ✅ Checklist

Before going live:

- [ ] Changed default password
- [ ] Added all team members
- [ ] Uploaded key images
- [ ] Updated impact metrics
- [ ] Updated contact information
- [ ] Created first backup
- [ ] Tested on mobile
- [ ] Trained staff members
- [ ] Set up backup schedule

---

## 🎉 You're Ready

The CMS is now fully functional and ready to use. Start by logging in and exploring the features. Remember to backup your data regularly!

**Default Login**:

- URL: `http://localhost:8000/admin/login.html`
- Email: `admin@sunandsoil.org`
- Password: `admin123`

**Happy Content Managing! 🚀**

---

**Built with ❤️ by Nyasa Creatives**  
**For Sun & Soil Foundation**  
**Version 1.0.0 - January 2026**
