# Kanban Board - Launch Career

## Project Overview
A responsive Kanban board application built with HTML, CSS, and JavaScript. This project replicates the Figma design mockup and allows users to organize tasks across different status columns (TODO, DOING, DONE).

## Features
- ✅ **Multiple Task Columns** - Organize tasks by status (TODO, DOING, DONE)
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ✅ **Interactive Task Cards** - Click or press Enter/Space to view task details
- ✅ **Dynamic Task Counts** - Automatically updates column headers with task counts
- ✅ **Professional UI** - Matches Figma design with consistent styling and spacing
- ✅ **Sidebar Navigation** - Fixed sidebar with kanban branding and board selection
- ✅ **Accessibility** - Keyboard-friendly task card interactions

## Technologies Used
- **HTML5** - Semantic markup structure
- **CSS3** - Flexbox layout, responsive media queries, custom properties
- **JavaScript (ES6)** - DOM manipulation, event listeners
- **Google Fonts** - Plus Jakarta Sans typography
- **Figma Design** - Reference mockup and design specifications

## Project Structure
```
d:\BonoloBee\LEBMOL2522_PTO2508_GroupB_Lebone-Moloi_JSL01\
├── index.html          # Main HTML file with board structure
├── style.css           # Styling and responsive design
├── main.js             # JavaScript functionality
└── README.md           # Project documentation
```

## Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Live Server extension (optional, for local development)

### Steps to Run
1. **Clone or download the project files**
   ```bash
   cd d:\BonoloBee\LEBMOL2522_PTO2508_GroupB_Lebone-Moloi_JSL01
   ```

2. **Open in browser**
   - **Option A:** Double-click `index.html` to open directly
   - **Option B:** Use Live Server in VS Code (right-click → Open with Live Server)
   - **Option C:** Run a local server
     ```bash
     python -m http.server 8000
     # Then navigate to http://localhost:8000
     ```

3. **Explore the board**
   - View tasks organized in three columns
   - Click any task card to see its title
   - Resize browser window to see responsive design

## Usage

### Viewing Tasks
- **Desktop:** All three columns visible side-by-side
- **Tablet:** Horizontal scroll to view columns
- **Mobile:** Stack view with scrollable columns

### Interacting with Tasks
1. **Mouse:** Click on any task card
2. **Keyboard:** 
   - Tab to focus a task card
   - Press Enter or Space to activate

### Column Structure
- **TODO (4)** - Tasks to be started (blue dot)
- **DOING (2)** - Tasks in progress (purple dot)
- **DONE (2)** - Completed tasks (green dot)

## File Descriptions

### index.html
- Sidebar with kanban logo and board selection
- Header with "Launch Career" title
- Three task columns with sample tasks
- Semantic HTML structure

### style.css
- Root CSS variables for colors and spacing
- Flexbox-based layout system
- Responsive media queries (768px, 480px breakpoints)
- Card hover effects and transitions
- Sidebar and column styling

### main.js
- `updateCounts()` - Dynamically counts and displays tasks per column
- `enableTaskClicks()` - Makes task cards interactive and accessible
- Event listeners for click and keyboard interactions

## Design Specifications

### Color Scheme
- **Primary Purple:** #635FC7 (buttons, accents)
- **Background:** #F4F7FD (light blue-gray)
- **Text Dark:** #000112 (headings, titles)
- **Text Gray:** #828FA3 (labels, subtitles)

### Typography
- **Font Family:** Plus Jakarta Sans (weights: 500, 700)
- **Headings:** 24px, font-weight: 700
- **Labels:** 12px, uppercase, letter-spacing: 2.4px
- **Task Cards:** 15px, font-weight: 700

### Responsive Breakpoints
- **Desktop:** 1024px and above (fixed sidebar layout)
- **Tablet:** 768px - 1023px (adjusted padding/gaps)
- **Mobile:** Below 480px (stacked layout, full-width columns)

## Key Features Explained

### 1. Responsive Layout
The board uses CSS Flexbox to adapt across devices:
```css
/* Desktop: sidebar + main content */
body { display: flex; }
nav { width: 260px; position: fixed; }
.main-container { margin-left: 260px; }

/* Mobile: stacked layout */
@media (max-width: 768px) {
  nav { width: 100%; position: relative; }
  .main-container { margin-left: 0; }
}
```

### 2. Task Card Interactivity
JavaScript adds click and keyboard support:
```javascript
card.addEventListener('click', () => alert(title));
card.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    alert(title);
  }
});
```

### 3. Dynamic Counting
Automatically updates task counts based on HTML:
```javascript
const tasks = column.querySelectorAll('.task-card');
header.innerText = `TODO (${tasks.length})`;
```

## Browser Compatibility
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements
- [ ] Add task creation/deletion functionality
- [ ] Implement drag-and-drop between columns
- [ ] Add local storage to persist tasks
- [ ] Dark mode toggle
- [ ] Task filtering and search
- [ ] User authentication
- [ ] Backend integration for data persistence

## Known Limitations
- Tasks are static (hardcoded in HTML)
- No data persistence between sessions
- Task details shown via alert (not modal)
- Drag-and-drop not implemented

## Credits
- **Design Reference:** Figma mockup provided
- **Typography:** Google Fonts (Plus Jakarta Sans)
- **Project Type:** Educational/Learning Project

## License
This project is for educational purposes as part of CodeSpace JSL01 assessment.

## Support & Contact
For questions or issues:
- Check the code comments in HTML/CSS/JS files
- Review the Figma design specifications
- Test in different browsers and devices

---

**Last Updated:** January 29, 2026
**Status:** ✅ Complete - Meets all requirements
