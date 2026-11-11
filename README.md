# CineVault

CineVault is a premium-style video streaming platform built as a static frontend demo for a BTech cloud computing assignment. The project is designed to showcase a modern OTT-inspired interface, localStorage-based demo authentication, subscription logic and a deployment-ready static website that can be hosted on an AWS EC2 Ubuntu instance with Nginx.

## Objective

The aim of this project is to create a professional-looking streaming website that demonstrates:

- Frontend web design using HTML, CSS and JavaScript
- LocalStorage-based authentication and user session demo
- Video access control with free vs premium access
- Subscription plan simulation for academic demonstration
- Cloud deployment workflow using AWS EC2 and Nginx

## Features

- Cinematic dark UI inspired by premium OTT platforms
- Responsive navigation and mobile-friendly layouts
- Featured hero banner and multiple movie recommendation rows
- Search, category and access filters in the catalogue
- Frontend-only login and registration flow using LocalStorage
- Demo premium plan activation and plan expiry logic
- Video player modal with HTML5 controls and restriction rules
- Cloud architecture section explaining AWS EC2 hosting setup
- Documentation for Nginx deployment on Ubuntu EC2

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage
- Nginx
- AWS EC2 Ubuntu

## Project Folder Structure

```text
CineVault/
├── index.html
├── style.css
├── script.js
├── README.md
├── AWS_DEPLOYMENT.md
├── assets/
│   ├── images/
│   ├── icons/
│   └── videos/
└── README.md
```

## Local Setup Instructions

1. Open a terminal in the project folder.
2. Start a local static server:

```bash
cd CineVault
python -m http.server 8000
```

3. Open the site in the browser:

```text
http://localhost:8000
```

4. For testing the authentication and subscription demo, use the demo account:

```text
Email: demo@cinevault.com
Password: Demo@123
```

## Important Notice

This authentication system is intentionally frontend-only and uses LocalStorage to persist demonstration data. It is provided for academic demonstration only and is not suitable for real user authentication, real user data storage or sensitive information.

## Screenshots

Add screenshots of the homepage, catalogue, dashboard and cloud architecture page here before final submission.

Example placeholder:

```text
screenshot-home.png
screenshot-catalog.png
screenshot-dashboard.png
screenshot-cloud-architecture.png
```

## AWS Architecture Overview

The website is hosted on a single Ubuntu EC2 instance running Nginx. The request flow is:

1. User opens the website in a browser.
2. Browser sends an HTTP request to the EC2 public IP.
3. Nginx handles the request.
4. Nginx serves static files from /var/www/html.
5. HTML, CSS and JavaScript render the CineVault interface.

Optional future architecture components:

- S3 can be used to store static assets.
- CloudFront can be used for CDN-style content delivery.

These are proposed future enhancements and are not required for the current static frontend assignment.

## EC2 Deployment Overview

This project is prepared for static website hosting on Ubuntu EC2 using Nginx. The deployment process includes:

- Launching an EC2 Ubuntu instance
- Installing Nginx
- Uploading the front-end files
- Copying files to /var/www/html
- Enabling the web server
- Accessing the website using the EC2 public IP address

See [AWS_DEPLOYMENT.md](./AWS_DEPLOYMENT.md) for the exact commands and troubleshooting guide.

## GitHub Pages Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/pages.yml`. To publish the site:

1. Create a GitHub repository and push the contents of this project to its `main` branch.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. Open the **Actions** tab and wait for **Deploy CineVault to GitHub Pages** to complete.
4. Open the published URL shown by the workflow or in **Settings → Pages**.

The site is static and requires no build step. GitHub Pages hosting does not replace the AWS EC2 deployment; both are deployment options for this frontend.

## Future Improvements

- Add real secure authentication with a backend service
- Store user profiles and watch history in a database
- Integrate video hosting and CDN delivery
- Add real subscription billing workflow (demo only, not recommended here)
- Expand the catalogue with real content metadata and API integration

## Final Assignment Checklist

- [x] Premium UI and responsive design
- [x] Video catalogue and filters
- [x] Login and registration demo
- [x] Premium restriction logic
- [x] Subscription plan demo
- [x] Dashboard and local history
- [x] AWS EC2 deployment instructions
- [x] Nginx hosting documentation
