# CSS Utility Classes - Quick Reference

## Spacing Scale
All spacing utilities follow this scale:
- `1` = 0.25rem (4px)
- `2` = 0.5rem (8px)
- `3` = 0.75rem (12px)
- `4` = 1rem (16px)
- `5` = 1.25rem (20px)
- `6` = 1.5rem (24px)
- `7` = 1.75rem (28px)
- `8` = 2rem (32px)
- `16` = 4rem (64px)
- `24` = 6rem (96px)

## Layout

### Display
```css
.block          /* display: block */
.flex           /* display: flex */
.inline-flex    /* display: inline-flex */
.grid           /* display: grid */
.hidden         /* display: none !important */
```

### Position
```css
.relative       /* position: relative */
.absolute       /* position: absolute */
.fixed          /* position: fixed */
.inset-0        /* top/right/bottom/left: 0 */
```

### Flexbox
```css
.flex-col       /* flex-direction: column */
.flex-row       /* flex-direction: row */
.items-start    /* align-items: flex-start */
.items-center   /* align-items: center */
.items-end      /* align-items: flex-end */
.justify-start  /* justify-content: flex-start */
.justify-center /* justify-content: center */
.justify-end    /* justify-content: flex-end */
.justify-between /* justify-content: space-between */
.flex-shrink-0  /* flex-shrink: 0 */
```

### Grid
```css
.grid-cols-2    /* grid-template-columns: repeat(2, 1fr) */
```

### Gap
```css
.gap-1          /* gap: 0.25rem */
.gap-2          /* gap: 0.5rem */
.gap-3          /* gap: 0.75rem */
.gap-4          /* gap: 1rem */
.gap-16         /* gap: 4rem */
```

### Order
```css
.order-1        /* order: 1 */
.order-2        /* order: 2 */
```

## Sizing

### Width
```css
.w-3            /* width: 0.75rem */
.w-4            /* width: 1rem */
.w-5            /* width: 1.25rem */
.w-6            /* width: 1.5rem */
.w-7            /* width: 1.75rem */
.w-8            /* width: 2rem */
.w-24           /* width: 6rem */
.w-full         /* width: 100% */
```

### Height
```css
.h-3            /* height: 0.75rem */
.h-4            /* height: 1rem */
.h-5            /* height: 1.25rem */
.h-6            /* height: 1.5rem */
.h-7            /* height: 1.75rem */
.h-8            /* height: 2rem */
.h-24           /* height: 6rem */
.h-full         /* height: 100% */
```

### Max Width
```css
.max-w-2xl      /* max-width: 42rem */
```

## Spacing

### Margin
```css
.mb-1           /* margin-bottom: 0.25rem */
.mb-2           /* margin-bottom: 0.5rem */
.mb-3           /* margin-bottom: 0.75rem */
.mb-4           /* margin-bottom: 1rem */
.mb-6           /* margin-bottom: 1.5rem */
.mb-8           /* margin-bottom: 2rem */
.mt-1           /* margin-top: 0.25rem */
.mt-0\.5        /* margin-top: 0.125rem */
.mx-auto        /* margin-left/right: auto */
```

### Padding
```css
.pt-4           /* padding-top: 1rem */
.px-4           /* padding-left/right: 1rem */
.py-2           /* padding-top/bottom: 0.5rem */
```

### Space Between
```css
.space-y-3      /* margin-top: 0.75rem on all children except first */
.space-y-4      /* margin-top: 1rem on all children except first */
.space-y-6      /* margin-top: 1.5rem on all children except first */
.space-y-8      /* margin-top: 2rem on all children except first */
```

## Typography

### Font Family
```css
.font-heading   /* font-family: 'Inter', sans-serif */
.font-mono      /* font-family: monospace */
```

### Font Size
```css
.text-xs        /* font-size: 0.75rem; line-height: 1rem */
.text-sm        /* font-size: 0.875rem; line-height: 1.25rem */
.text-base      /* font-size: 1rem; line-height: 1.5rem */
.text-lg        /* font-size: 1.125rem; line-height: 1.75rem */
.text-xl        /* font-size: 1.25rem; line-height: 1.75rem */
.text-2xl       /* font-size: 1.5rem; line-height: 2rem */
.text-3xl       /* font-size: 1.875rem; line-height: 2.25rem */
.text-4xl       /* font-size: 2.25rem; line-height: 2.5rem */
.text-5xl       /* font-size: 3rem; line-height: 1 */
.text-6xl       /* font-size: 3.75rem; line-height: 1 */
```

### Font Weight
```css
.font-medium    /* font-weight: 500 */
.font-semibold  /* font-weight: 600 */
.font-bold      /* font-weight: 700 */
```

### Line Height
```css
.leading-relaxed /* line-height: 1.625 */
```

### Text Align
```css
.text-center    /* text-align: center */
```

### Text Color
```css
.text-foreground            /* color: hsl(var(--foreground)) */
.text-primary               /* color: hsl(var(--primary)) */
.text-primary-foreground    /* color: hsl(var(--primary-foreground)) */
.text-accent                /* color: hsl(var(--accent)) */
.text-muted-foreground      /* color: hsl(var(--muted-foreground)) */
.text-red-600               /* color: #dc2626 */
.text-green-600             /* color: #16a34a */
.text-primary-foreground/70 /* color: hsla(var(--primary-foreground) / 0.7) */
.text-primary-foreground/80 /* color: hsla(var(--primary-foreground) / 0.8) */
```

## Backgrounds

### Background Color
```css
.bg-muted               /* background-color: hsl(var(--muted)) */
.bg-muted-light         /* background-color: hsla(var(--muted) / 0.3) */
.bg-primary             /* background-color: hsl(var(--primary)) */
.bg-primary/5           /* background-color: hsla(var(--primary) / 0.05) */
.bg-primary/10          /* background-color: hsla(var(--primary) / 0.1) */
.bg-accent/10           /* background-color: hsla(var(--accent) / 0.1) */
.bg-accent/20           /* background-color: hsla(var(--accent) / 0.2) */
.bg-primary-foreground/5  /* background-color: hsla(var(--primary-foreground) / 0.05) */
.bg-primary-foreground/10 /* background-color: hsla(var(--primary-foreground) / 0.1) */
```

## Borders

### Border Radius
```css
.rounded-lg     /* border-radius: 0.5rem */
.rounded-full   /* border-radius: 9999px */
.rounded-3xl    /* border-radius: 1.5rem */
```

### Border
```css
.border-none                    /* border: none */
.border-primary-foreground/10   /* border-color: hsla(var(--primary-foreground) / 0.1) */
```

## Effects

### Backdrop Filter
```css
.backdrop-blur-sm /* backdrop-filter: blur(4px) */
```

## Responsive Design

### Breakpoints
- `sm:` - min-width: 640px
- `md:` - min-width: 768px
- `lg:` - min-width: 1024px
- `xl:` - min-width: 1280px

### Responsive Classes
```css
.sm\:flex-row   /* flex-direction: row on screens ≥640px */
.md\:text-3xl   /* font-size: 1.875rem on screens ≥768px */
.lg\:order-1    /* order: 1 on screens ≥1024px */
.lg\:order-2    /* order: 2 on screens ≥1024px */
```

## Component Classes

### Container
```css
.container      /* Responsive container with max-widths */
```

### Buttons
```css
.btn            /* Base button styles */
.btn-primary    /* Primary button (green) */
.btn-accent     /* Accent button (gold) */
.btn-outline    /* Outline button */
.btn-lg         /* Large button */
```

### Cards
```css
.card               /* Base card styles */
.card-icon-wrapper  /* Icon container */
.card-title         /* Card title */
.card-text          /* Card body text */
```

### Navigation
```css
.site-header        /* Fixed header */
.nav-container      /* Navigation container */
.nav-logo           /* Logo link */
.nav-link           /* Navigation link */
.nav-actions        /* CTA buttons container */
.mobile-menu-btn    /* Mobile menu toggle */
.mobile-menu        /* Mobile menu container */
.mobile-nav-link    /* Mobile navigation link */
```

### Sections
```css
.section            /* Standard section padding */
.section-header     /* Section header container */
.section-tag        /* Section tag/label */
.section-title      /* Section title */
.section-description /* Section description */
```

### Hero
```css
.hero-section       /* Hero section container */
.hero-bg            /* Hero background image */
.hero-overlay       /* Hero overlay */
.hero-content       /* Hero content container */
.hero-title         /* Hero title */
.hero-description   /* Hero description */
.hero-actions       /* Hero CTA buttons */
```

### Footer
```css
.site-footer        /* Footer container */
.footer-grid        /* Footer grid layout */
.footer-brand       /* Footer brand section */
.footer-heading     /* Footer section heading */
.footer-links       /* Footer links list */
.footer-link        /* Footer link */
.footer-bottom      /* Footer bottom bar */
.social-links       /* Social links container */
.social-link        /* Social link */
```

### Forms
```css
.form-group         /* Form group container */
.form-label         /* Form label */
.form-input         /* Form input */
.form-textarea      /* Form textarea */
.form-grid          /* Form grid layout */
```

### Grids
```css
.team-grid          /* Team member grid */
.vision-grid        /* Vision/mission grid */
.alignment-grid     /* Alignment grid (4 columns) */
.donation-grid      /* Donation options grid */
.values-grid        /* Values grid */
```

## Usage Examples

### Centered Card
```html
<div class="card mx-auto max-w-2xl">
  <h3 class="card-title mb-4">Title</h3>
  <p class="card-text">Content</p>
</div>
```

### Flex Row with Gap
```html
<div class="flex items-center gap-3">
  <i class="w-5 h-5"></i>
  <span>Text</span>
</div>
```

### Responsive Grid
```html
<div class="grid grid-cols-2 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Vertical Spacing
```html
<div class="space-y-4">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
</div>
```

### Button Group
```html
<div class="flex gap-4">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-outline">Secondary</button>
</div>
```
