# Portfolio Website Deployment Guide

## GitHub Deployment

1. Create a new GitHub repository:
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon in the top right corner and select "New repository"
   - Name your repository (e.g., "portfolio-website")
   - Make it public or private according to your preference
   - Click "Create repository"

2. Connect your local repository to GitHub (replace with your GitHub username):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git branch -M main
   git push -u origin main
   ```

## Netlify Deployment

1. Sign up or log in to [Netlify](https://app.netlify.com/)

2. Connect your GitHub repository:
   - Click "New site from Git"
   - Select "GitHub" as your Git provider
   - Authorize Netlify to access your GitHub account
   - Select your "portfolio-website" repository

3. Configure build settings:
   - Base directory: `client`
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`

4. Configure environment variables:
   - After deployment, go to Site settings > Environment variables
   - Add the following environment variables:
     - `EMAIL_USER`: markosassefa22@gmail.com
     - `EMAIL_PASS`: uphg gcur yeqf ogdk

5. Function Dependencies Setup:
   - We've implemented multiple strategies to fix the function dependencies issue:
     1. Added the `@netlify/plugin-functions-install-core` plugin in `netlify.toml`
     2. Added `nodemailer` to the main project dependencies
     3. Added a `postinstall` script to ensure function dependencies are installed
     4. Modified the build command to explicitly run `npm install` before building
   
   - This comprehensive approach ensures that your Netlify functions will have access to all required dependencies.

6. Deploy the site:
   - Click "Deploy site"
   - Wait for the build to complete
   - Your site will be available at a Netlify domain (e.g., random-name.netlify.app)

7. Set up a custom domain (optional):
   - In Netlify dashboard, go to your site
   - Navigate to "Domain settings"
   - Click "Add custom domain" and follow the instructions

## Testing After Deployment

1. Test the contact form by filling it out with your information
2. Check your email to verify that you receive the form submission
3. Test all animations and interactions on different devices and browsers

## Troubleshooting

If the email functionality does not work after deployment:
1. Verify that the environment variables are correctly set in Netlify
2. Check Netlify's Function logs for any errors
3. Ensure that your Gmail account has "Less secure app access" enabled or that you're using an app-specific password

If you encounter issues with Netlify Functions:
1. Go to the Netlify dashboard > Functions tab to check for any function errors
2. Verify that your functions are using the correct path: `/.netlify/functions/contact`
3. If you still face dependency issues, you can try:
   - Clearing the Netlify cache and redeploying
   - Checking the Netlify build logs for specific dependency errors
   - Ensuring package.json files are correctly formatted

## Future Updates

To update your site after making changes:
1. Make your changes locally
2. Commit them to git: `git add . && git commit -m "Description of changes"`
3. Push to GitHub: `git push origin main`
4. Netlify will automatically rebuild and deploy your site
