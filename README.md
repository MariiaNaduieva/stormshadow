# One-Page Business Card Website for "Storm Shadow" Company

This project was created on behalf of **Storm Shadow** company and is a modern one-page business card website. It is fully responsive and showcases the company's services, portfolio, and contact information in a sleek and accessible manner.

---

## Website Structure

1. **Main Section (Banner)**  
   — A large background banner with a title and semi-transparent text overlay  
   — An animated arrow pointing down for smooth navigation to the next sections

2. **"UsageSection"**  
   — Cards with key advantages of using the AJAX system  
   — Informative icons/images on the left, text on the right  
   — Subtle hover effect for highlighting cards

3. **"RemoteUsageSection"**  
   — Description of remote video surveillance via phone, tablet, or PC  
   — Illustration on the right, text on the left  
   — Scroll-triggered animation (`framer-motion`)

4. **"AdvantagesSection"**  
   — Four advantage tiles for the AJAX system, two per row  
   — Smooth tile scaling effect on hover

5. **"ExamplesSection"**  
   — Grid of 4 clickable images/preview tiles  
   — Click opens a modal with a carousel and navigation arrows  
   — Text description above and below the image grid

6. **"ContactSection"**  
   — Interactive blocks: address, phone, email, business hours  
   — Clicking on a block opens Google Maps / makes a call / opens an email client  
   — Hover effect highlights the entire block

---

## Features

- **React + Material-UI**: All interface components from MUI, unified style and theme
- **Functional React**: `forwardRef`, `useRef`, `useState`, `useEffect` hooks
- **Smooth Navigation**: Sections scroll smoothly via `scrollIntoView({ behavior: "smooth" })`
- **Animations**: Section appearances (`framer-motion`), hover effects using MUI SX styles
- **Mobile Responsiveness**: All grids and elements adapt to any screen size
- **Clickability**: Entire "Contact" block is clickable, not just the text links
