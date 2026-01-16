# Responsive Card Grid System Implementation

## Overview

A comprehensive responsive card grid system has been implemented using CSS Grid with `auto-fit` and Flexbox for internal card alignment. This ensures all card components scale and rearrange automatically across screen sizes.

## Key Features

### 1. **CSS Grid with Auto-Fit**

All card grids now use:

```css
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
```

This automatically adjusts the number of columns based on available space:

- **Mobile (< 768px)**: 1 column
- **Tablet (768px - 1024px)**: 2 columns (where space permits)
- **Desktop (> 1024px)**: 3+ columns based on viewport width

### 2. **Flexbox Internal Alignment**

Each card uses:

```css
display: flex;
flex-direction: column;
height: 100%;
```

Card content areas use:

```css
flex: 1;
display: flex;
flex-direction: column;
```

This ensures:

- Cards maintain equal heights in each row
- Content stacks properly vertically
- Descriptions expand to fill available space
- Buttons/links stay at the bottom

### 3. **Unified Grid Classes**

The following classes share the same responsive grid pattern:

- `.work-cards-grid` - Program/work cards
- `.projects-grid` - Project cards
- `.news-grid` - News/blog cards
- `.team-grid` - Team member cards
- `.values-grid` - Values/principles cards

## Implementation Steps

### Step 1: Add the New Stylesheet

Add this line to the `<head>` section of all HTML files **after** `styles-new.css`:

```html
<link rel="stylesheet" href="css/responsive-cards.css">
```

### Step 2: Update HTML Structure

Ensure your card containers use the appropriate grid class:

```html
<!-- Programs/Work Cards -->
<div class="work-cards-grid">
    <div class="work-card">...</div>
    <div class="work-card">...</div>
</div>

<!-- Projects -->
<div class="projects-grid">
    <div class="project-card">...</div>
    <div class="project-card">...</div>
</div>

<!-- Team Members -->
<div class="team-grid">
    <div class="team-card">...</div>
    <div class="team-card">...</div>
</div>

<!-- Values/Principles -->
<div class="values-grid">
    <div class="value-card">...</div>
    <div class="value-card">...</div>
</div>
```

### Step 3: Card Structure Requirements

#### Work/Program Cards

```html
<div class="work-card">
    <div class="work-card-image">
        <img src="..." alt="...">
    </div>
    <div class="work-card-content">
        <h3 class="work-card-title">Title</h3>
        <p class="work-card-description">Description text...</p>
        <a href="#" class="work-card-link">Learn More</a>
    </div>
</div>
```

#### Team Cards

```html
<div class="team-card">
    <div class="team-card-image">
        <img src="..." alt="Team Member Name">
    </div>
    <div class="team-card-content">
        <h3 class="team-card-name">Name</h3>
        <span class="team-card-role">Position</span>
        <p class="team-card-bio">Bio text...</p>
        <div class="team-card-social">
            <a href="#"><i data-lucide="linkedin"></i></a>
            <a href="#"><i data-lucide="mail"></i></a>
        </div>
    </div>
</div>
```

#### Values Cards

```html
<div class="value-card">
    <div class="value-card-icon">
        <i data-lucide="heart"></i>
    </div>
    <h3 class="value-card-title">Value Name</h3>
    <p class="value-card-description">Description...</p>
</div>
```

## Files That Need Updates

### Priority 1: Add Stylesheet Link

1. `index.html`
2. `about.html`
3. `programs.html`
4. `projects.html`
5. `team.html`
6. `volunteer.html`
7. `contact.html`
8. `partners.html`
9. `donate.html`

### Priority 2: Update Grid Classes

Replace any instances of:

- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
  
With the appropriate unified class:

- `.work-cards-grid`
- `.projects-grid`
- `.team-grid`
- `.values-grid`

## Benefits

### Mobile-First Responsiveness

✅ Single column layout on phones
✅ Automatic 2-column layout on tablets
✅ Automatic 3+ column layout on desktops
✅ No manual media queries needed in HTML

### Consistent Spacing

✅ Uniform gap between cards (32px / 2rem)
✅ Consistent padding inside cards
✅ Equal margins around grid containers

### Visual Balance

✅ Cards maintain equal heights in each row
✅ Content aligns properly within cards
✅ Smooth hover animations
✅ Accessible focus states

### Accessibility

✅ Semantic HTML structure
✅ Descriptive alt text support
✅ Reduced motion support for users who prefer it
✅ Keyboard-friendly interactions

## Browser Support

- ✅ Chrome/Edge 57+
- ✅ Firefox 52+
- ✅ Safari 10.1+
- ✅ iOS Safari 10.3+
- ✅ Android Chrome 57+

## Testing Checklist

- [ ] Cards stack vertically on mobile (< 768px)
- [ ] Cards form 2 columns on tablets (768px - 1024px)
- [ ] Cards expand to 3+ columns on desktop (> 1024px)
- [ ] All cards in a row have equal heights
- [ ] Content inside cards aligns properly
- [ ] Hover effects work smoothly
- [ ] Images scale correctly
- [ ] Text remains readable at all sizes
- [ ] Gaps between cards are consistent
- [ ] Print styles work correctly

## Next Steps

1. **Add the stylesheet** to all HTML pages
2. **Update grid classes** in existing HTML
3. **Test responsiveness** across devices
4. **Verify accessibility** with screen readers
5. **Check print styles** for documentation

## Support

If you encounter any issues:

1. Verify the stylesheet is loaded correctly
2. Check browser console for CSS errors
3. Ensure HTML structure matches the examples
4. Test in different browsers
5. Validate HTML and CSS

---

**Created:** 2026-01-16  
**Version:** 1.0  
**Status:** Ready for implementation
