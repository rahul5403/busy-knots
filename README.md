# Busy Knots

## Overview

Busy Knots is a modern e-commerce platform specializing in soft nursery solutions. Our products are designed with sustainability, innovative designs, high quality, and timelessness in mind. We believe that baby products should be safe, pure, natural, ethical, and timeless so that they may be handed down through generations, with love.

This project is built using **React** and **Tailwind CSS**, with a focus on providing a seamless user experience for browsing and purchasing nursery products.

## Features

- **Responsive Design**: The website is fully responsive, ensuring a great user experience across all devices.
- **Product Browsing**: Users can browse through various categories and products.
- **Shopping Cart**: Users can add products to their cart, update quantities, and remove items.
- **User Authentication**: Users can sign up, log in, and manage their accounts.
- **Payment Integration**: Ready for payment integration (to be implemented).
- **Tailwind CSS**: Utilizes Tailwind CSS for styling, ensuring a modern and consistent design.

## Technologies Used

- **Frontend**: React, React Router, Redux, Tailwind CSS
- **Backend**: (To be implemented)
- **Authentication**: Google OAuth (via `@react-oauth/google`)
- **State Management**: Redux Toolkit, Redux Persist
- **API Calls**: Axios
- **Styling**: Tailwind CSS, CSS Modules

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rahul5403/busy-knots.git
   cd busy-knots
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

### Available Scripts

- **`npm start`**: Runs the app in development mode.
- **`npm test`**: Launches the test runner in interactive watch mode.
- **`npm run build`**: Builds the app for production to the `build` folder.
- **`npm run eject`**: Ejects the app from Create React App (one-way operation).

## Project Structure

```
busy-knots/
├── public/                  # Static assets
│   ├── index.html           # Main HTML file
│   ├── manifest.json        # PWA manifest
│   └── robots.txt           # Robots.txt file
├── src/                     # Source code
│   ├── assets/              # Images and other assets
│   ├── components/          # Reusable components
│   ├── data/                # Mock data (e.g., products)
│   ├── pages/               # Page components
│   ├── redux/               # Redux slices and store
│   ├── styles/              # CSS and Tailwind styles
│   ├── App.js               # Main application component
│   ├── index.js             # Entry point
│   └── reportWebVitals.js   # Performance monitoring
├── .gitignore               # Files to ignore in Git
├── package.json             # Project dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── README.md                # Project documentation
```

## Styling

This project uses **Tailwind CSS** for styling. Tailwind is a utility-first CSS framework that allows for rapid UI development. The configuration for Tailwind can be found in `tailwind.config.js`.

### Custom Styles

Custom styles are written in CSS files located in the `src/styles/` directory. These styles are imported into the respective components as needed.

## State Management

State management is handled using **Redux Toolkit** and **Redux Persist**. The Redux store is configured in `src/redux/store.js`, and slices for authentication and cart are located in `src/redux/authSlice.js` and `src/redux/cartSlice.js`, respectively.

## Deployment

To deploy the application, run the following command to create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory. You can then deploy the contents of this directory to your preferred hosting service (e.g., Netlify, Vercel, GitHub Pages).

