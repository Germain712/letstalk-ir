Let’s Talk IR – Counselling & Intuitive Guidance Website
A bilingual counselling platform built for a real client, featuring Netlify Forms, Stripe Checkout, responsive UI, and a clean, accessible design.

🌐 Overview
Let’s Talk IR is a bilingual (English–Farsi) counselling and intuitive guidance website built for Shiva Maghsoudian.
The platform allows visitors to learn about Shiva’s services, book sessions, send messages, and complete payments securely — all through a fast, responsive, static site deployed on Netlify.

This project demonstrates real‑world frontend development, client collaboration, form handling, payment integration, accessibility, and deployment workflows.

✨ Features
Bilingual interface (English & Farsi) with a smooth language toggle

Responsive design for mobile, tablet, and desktop

Netlify Forms integration for contact and booking submissions

Email notifications for new messages and bookings

Stripe Checkout integration for secure payments

Accessible UI with ARIA labels, semantic HTML, and keyboard-friendly navigation

SEO‑optimised pages with meta tags, Open Graph data, and canonical links

Clean, modern UI built with custom CSS and lightweight JavaScript

Real client project deployed at https://letstalk-ir.com

🛠️ Tech Stack
Frontend:

HTML5

CSS3 (custom styles, responsive layout)

Vanilla JavaScript (ES6+)

Backend / Services:

Netlify Hosting

Netlify Forms

Netlify Functions (Stripe Checkout endpoint)

Stripe Payment API

Other:

Google Fonts

Accessibility best practices

SEO optimisation

Mobile-first design

📁 Project Structure
Code
letstalk-ir/
│
├── index.html
├── about.html
├── services.html
├── testimonials.html
├── bookings.html
├── contact.html
│
├── styles.css
├── script.js
│
├── assets/
│ ├── images/
│ └── icons/
│
└── netlify/
└── functions/
└── checkout.js
📬 Forms & Booking System
The website uses Netlify Forms for:

Contact messages

Booking requests

Each submission is stored in the Netlify dashboard and emailed to the business inbox:
📩 contact.letstalk.ir@gmail.com

💳 Payments
Stripe Checkout is integrated using a Netlify Function:

Secure payment sessions

Redirect to Stripe-hosted checkout

Supports multiple booking types

No backend server required

🚀 Deployment
The site is deployed on Netlify:

Automatic builds from GitHub

Form handling enabled at build time

Functions deployed under /.netlify/functions/

HTTPS enabled by default

Live site: https://letstalk-ir.com

👤 About the Developer
This project was developed for Nebuer Digital and is maintained as a proprietary client deliverable.

🏷️ Topics
Code
html
css
javascript
responsive-design
frontend
web-development
netlify
netlify-forms
stripe-checkout
static-site
counselling-website
mental-health
bilingual-website
farsi-language
client-project
portfolio-project
accessibility
seo
ui-design
ux-design
mobile-first
booking-system
contact-form
📄 License
This project is protected under a proprietary license.
All code, design assets, content, and related materials remain the property of Nebuer Digital and may not be copied, modified, distributed, or reused without explicit written permission.

See the LICENSE file for full terms.
