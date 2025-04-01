# Modern Portfolio Website

A modern, responsive, and interactive personal portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive for all devices
- 🌓 Dark/Light mode toggle
- ⚡ Smooth animations and transitions
- 📝 Contact form with backend integration
- 🎯 SEO optimized
- 🚀 Fast loading and performance optimized

## Tech Stack

- **Frontend:**
  - React.js
  - Material-UI
  - Framer Motion
  - Axios

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Nodemailer

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the server directory
   - Add the following variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASS=your_email_app_password
     ```

4. Start the development servers:
   ```bash
   # Start backend server (from server directory)
   npm run dev

   # Start frontend development server (from client directory)
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Customization

1. Update personal information:
   - Edit the content in each component under `client/src/components`
   - Replace the placeholder image in the About component
   - Update social media links in the Footer component

2. Modify styles:
   - Theme configuration is in `client/src/App.jsx`
   - Global styles are in `client/src/index.css`

3. Add/Remove sections:
   - Components are modular and can be easily added or removed
   - Update the navigation in `Navbar.jsx` accordingly

## Deployment

1. Frontend:
   - Build the React application:
     ```bash
     cd client
     npm run build
     ```
   - Deploy the `dist` directory to platforms like Vercel, Netlify, or GitHub Pages

2. Backend:
   - Deploy to platforms like Render, Heroku, or DigitalOcean
   - Set up environment variables on your hosting platform
   - Update the API base URL in the frontend code

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
