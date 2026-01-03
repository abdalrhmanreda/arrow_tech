# 📊 Data-Driven Website - Easy Maintenance Guide

## ✨ Overview

Your Arrow Academy website is now **data-driven**! All content (courses, testimonials, age groups, etc.) is stored in **one central JavaScript file** (`js/data.js`), making updates super easy.

## 🎯 How It Works

```
js/data.js → js/renderer.js → academy.html
   (Data)     (Populates)      (Display)
```

1. **data.js** - Contains ALL website content
2. **renderer.js** - Reads data and populates the HTML
3. **academy.js** - Handles interactivity (unchanged)

## 📝 How to Update Content

### ✏️ **Edit Website Content**

Open `js/data.js` and find the section you want to edit:

#### Update Hero Stats
```javascript
stats: [
    { number: "5,000+", label: "Students" },
    { number: "15+", label: "Courses" },      // ← Change these numbers
    { number: "98%", label: "Parent Satisfaction" }
]
```

#### Add/Edit Courses
```javascript
courses: [
    {
        icon: "🎮",
        title: "New Course Name",              // ← Edit title
        description: "Course description...",   // ← Edit description
        ageRange: "Ages 10-12",                // ← Edit age
        level: "Beginner",                     // ← Edit level
        duration: "12 weeks"                   // ← Edit duration
    },
    // Add more courses here...
]
```

#### Update Age Groups
```javascript
ageGroups: [
    {
        emoji: "🎮",
        range: "10 - 12 Years",
        label: "Young Explorers",
        description: "Your description...",
        skills: [
            "Skill 1",                         // ← Add/remove skills
            "Skill 2",
            "Skill 3"
        ]
    }
]
```

#### Change Testimonials
```javascript
testimonials: [
    {
        stars: 5,                              // ← Number of stars
        text: "Parent feedback here...",       // ← Testimonial text
        avatar: "👩",                           // ← Avatar emoji
        name: "Parent Name",                   // ← Name
        role: "Parent of 13-year-old"          // ← Role
    }
]
```

#### Update FAQ
```javascript
faq: [
    {
        question: "Your question?",            // ← Add question
        answer: "Your detailed answer..."      // ← Add answer
    }
]
```

## 🚀 Common Tasks

### Add a New Course

1. Open `js/data.js`
2. Find the `courses:` array
3. Add a new object:
```javascript
{
    icon: "🎯",                                // Pick an emoji
    title: "New Course Title",
    description: "What students will learn...",
    ageRange: "Ages 13-15",
    level: "Intermediate",
    duration: "16 weeks"
}
```
4. Save & refresh the page!

### Change Hero Stats

1. Open `js/data.js`
2. Find `hero: { stats: [...]`
3. Update the numbers:
```javascript
{ number: "10,000+", label: "Students" }  // Changed from 5,000+
```

### Add a New Age Group

1. Open `js/data.js`
2. Find `ageGroups:` array
3. Add new group object following the same structure
4. Save & refresh!

### Update Footer Links

1. Open `js/data.js`
2. Find `footer: { sections: [...]`
3. Edit existing links or add new ones:
```javascript
{
    title: "Resources",
    links: [
        { text: "New Link", href: "#new" }    // Add here
    ]
}
```

## 📁 File Structure

```
js/
├── data.js          ← ALL CONTENT HERE (edit this!)
├── renderer.js      ← Renders data to HTML (don't edit)
└── academy.js       ← Interactivity (don't edit)
```

## ⚡ Quick Tips

### ✅ DO:
- ✅ Edit `data.js` to update content
- ✅ Keep the object structure intact
- ✅ Use consistent formatting
- ✅ Test after changes (refresh page)

### ❌ DON'T:
- ❌ Edit hardcoded HTML (it's now dynamic!)
- ❌ Change object property names
- ❌ Forget commas between objects
- ❌ Mix up quote types (`"` vs `'`)

## 🐛 Troubleshooting

### Content not showing?
1. Check browser console for errors (F12)
2. Verify `data.js` syntax (commas, brackets)
3. Clear browser cache and refresh

### Syntax error in data.js?
- Missing comma between objects
- Unclosed bracket or quote
- Use a JSON validator or code editor

## 📋 Example: Adding a New Testimonial

**Before:**
```javascript
testimonials: [
    { /* existing testimonial */ }
]
```

**After:**
```javascript
testimonials: [
    { /* existing testimonial */ },
    {
        stars: 5,
        text: "Arrow Academy is amazing! My son...",
        avatar: "👨",
        name: "John Doe",
        role: "Parent of 14-year-old"
    }
]
```

## 🎯 Benefits of This System

✅ **Easy Updates** - Change content in one place
✅ **No HTML Editing** - Just edit JavaScript data
✅ **Consistency** - Same structure everywhere
✅ **Fast** - Update multiple sections quickly
✅ **Safe** - Less chance of breaking HTML

## 🆘 Need Help?

If you need to update content:
1. Open `js/data.js`
2. Find the section (use Ctrl+F)
3. Edit the values
4. Save and refresh!

---

**Remember:** All your content lives in `js/data.js` now! 🎉
