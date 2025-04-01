# Deploying Your Portfolio to Netlify

This guide provides steps to deploy your portfolio website to Netlify with the name "markportfolio".

## Prerequisites

- A GitHub, GitLab, or Bitbucket account to host your code
- Your project pushed to a repository on one of these platforms

## Deployment Steps

### 1. Sign up or Log in to Netlify

- Go to [Netlify](https://app.netlify.com/)
- Sign up or log in with your GitHub, GitLab, or Bitbucket account

### 2. Connect Your Repository

- Click "Add new site" > "Import an existing project"
- Choose your Git provider (GitHub, GitLab, or Bitbucket)
- Authorize Netlify to access your repositories if prompted
- Select the repository containing your portfolio website

### 3. Configure Build Settings

Netlify should automatically detect your build settings from the netlify.toml file, but verify the following:

- **Base directory**: client
- **Build command**: npm run build
- **Publish directory**: dist
- **Functions directory**: netlify/functions

### 4. Environment Variables Setup

You need to set the following environment variables in Netlify:

- Go to Site settings > Environment variables
- Add the following variables:
  - `EMAIL_USER`: markosassefa22@gmail.com
  - `EMAIL_PASS`: [Your Gmail app-specific password]

### 5. Set Custom Domain

To set "markportfolio" as your site name:

- Go to Site settings > General > Site details
- Click "Change site name"
- Enter "markportfolio" (if available) or choose another name like "mark-portfolio" or "markos-portfolio"
- Your site will be available at: https://markportfolio.netlify.app (if the name is available)

### 6. Deploy and Verify

- Netlify will automatically build and deploy your site
- Once deployed, verify that:
  - The site loads correctly
  - All links and navigation work
  - The contact form successfully sends emails

## Troubleshooting

If your contact form doesn't work:
- Check Netlify function logs in the Netlify dashboard
- Verify environment variables are set correctly
- Make sure your Gmail account has "Less secure app access" enabled or use an app-specific password

Need more help? Check [Netlify Documentation](https://docs.netlify.com/).
