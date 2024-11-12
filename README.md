# Subin Kurian Varghese - Portfolio

This is the personal portfolio website for Subin Kurian Varghese, showcasing skills, projects, experience, and a contact form for direct communication. The portfolio is built with HTML, CSS, and JavaScript, and utilizes EmailJS for message handling in the contact form.

## Table of Contents

1. Features
2. Getting Started
3. File Structure
4. Usage
5. Deployment
6. Contact

---

## Features

- **Responsive Design:** Optimized for desktop and mobile.
- **Interactive Project Section:** Expandable project details for easy viewing.
- **Contact Form Integration with EmailJS:** Allows visitors to directly reach out through the website.
- **Smooth Navigation:** Sticky header with links to different sections of the portfolio.

## Getting Started

To view or edit the portfolio locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Open the index.html** in your preferred browser:
   ```bash
   open index.html
   ```

3. **Install EmailJS (Optional for Local Testing)**:
   If you want to test the contact form functionality, sign up for [EmailJS](https://www.emailjs.com/) and add your public key and service details to `contact.js`.

## File Structure

```plaintext
portfolio-website/
├── index.html               # Main landing page
├── css/
│   └── styles.css           # CSS styling for the portfolio
├── js/
│   └── script.js           # JavaScript for contact form and EmailJS integration
└── images/                  # Images for skills, project previews, etc.
```

## Usage

### Sections

1. **Home**: Introduction and primary links.
2. **About**: Skills and brief personal profile.
3. **Projects**: Descriptions of key projects, including links to GitHub repositories.
4. **Experience**: Work experience and educational background.
5. **Contact**: Contact form allowing visitors to reach out via EmailJS.

### Contact Form Setup

1. Go to [EmailJS](https://www.emailjs.com/) and sign up.
2. Create a service (e.g., Gmail, Outlook) and a template.
3. Add your public key to `contact.js`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   ```
4. Customize the service ID and template ID in `contact.js`.

### Sticky Header

The header becomes sticky when you scroll down the page. This is implemented in JavaScript with the `window.scrollY` method.

## Deployment

1. Host the website with GitHub Pages:
   - Go to your repository settings in GitHub.
   - Enable GitHub Pages and select the branch (e.g., `main`).
   - Your website will be live at `https://your-username.github.io/portfolio-website/`.

2. Alternative hosting options include [Netlify](https://www.netlify.com/) and [Vercel](https://vercel.com/).

## Contact

Feel free to reach out if you have any questions or would like to collaborate!

- **Email**: subin125vk@gmail.com
- **LinkedIn**: [Subin Kurian Varghese](https://www.linkedin.com/in/subin-kurian-varghese)
