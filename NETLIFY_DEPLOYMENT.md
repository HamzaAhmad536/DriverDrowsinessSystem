# Netlify Deployment Guide

This guide will help you deploy your Driver Drowsiness Detection System to Netlify (frontend) and a backend service.

## Prerequisites

- GitHub account
- Netlify account (free at [netlify.com](https://netlify.com))
- Backend hosting service account (Render, Heroku, or Railway)

## Step 1: Deploy Backend First

### Option A: Render (Recommended - Free Tier Available)

1. **Sign up at [render.com](https://render.com)**

2. **Create a new Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Choose your repository

3. **Configure the service**
   - **Name**: `driver-drowsiness-backend` (or any name)
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python server.py`
   - **Plan**: Free (or paid if needed)

4. **Set Environment Variables**
   - Click "Environment" tab
   - Add: `PORT` = `10000`

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (usually 2-5 minutes)

6. **Get your backend URL**
   - Copy the URL (e.g., `https://your-app.onrender.com`)
   - This is your backend API endpoint

### Option B: Railway

1. **Sign up at [railway.app](https://railway.app)**

2. **Create new project**
   - Click "New Project"
   - Choose "Deploy from GitHub repo"
   - Select your repository

3. **Configure deployment**
   - Railway will auto-detect Python
   - It will use `requirements.txt` automatically
   - Set start command: `python server.py`

4. **Deploy and get URL**
   - Railway will deploy automatically
   - Copy the generated URL

## Step 2: Update Frontend API URL

1. **Update the API base URL in your code**

   In `src/components/Demo.jsx`, change:
   ```javascript
   // Replace this line:
   const API_BASE = 'http://localhost:5000/api'
   
   // With your backend URL:
   const API_BASE = 'https://your-backend-url.com/api'
   ```

2. **Commit and push your changes**
   ```bash
   git add .
   git commit -m "Update API URL for deployment"
   git push origin main
   ```

## Step 3: Deploy Frontend to Netlify

### Method 1: Drag & Drop (Quick)

1. **Build your project locally**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to the Netlify dashboard
   - Your site will be live instantly!

### Method 2: Git Integration (Recommended)

1. **Connect GitHub to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and authorize

2. **Select your repository**
   - Choose your driver drowsiness detection repository
   - Click "Deploy site"

3. **Configure build settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Click "Deploy site"

4. **Wait for deployment**
   - Netlify will build and deploy your site
   - You'll get a URL like `https://random-name.netlify.app`

## Step 4: Configure Custom Domain (Optional)

1. **In Netlify dashboard**
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Follow the instructions

## Step 5: Test Your Deployment

1. **Test the frontend**
   - Visit your Netlify URL
   - Check if the site loads properly

2. **Test the backend**
   - Visit `https://your-backend-url.com/api/health`
   - Should return: `{"status": "healthy"}`

3. **Test the full system**
   - Click "Start Camera Test" on your Netlify site
   - Allow camera access
   - Check if detection works

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure your backend allows all origins
   - Check that the API URL is correct

2. **Camera Not Working**
   - HTTPS is required for camera access
   - Check browser permissions
   - Try refreshing the page

3. **Backend Not Responding**
   - Check if your backend service is running
   - Verify the API URL in the frontend
   - Check backend logs for errors

4. **Build Failures**
   - Check Netlify build logs
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

### Environment Variables

If you need to set environment variables in Netlify:

1. **Go to Site settings** → **Environment variables**
2. **Add variables**:
   - `REACT_APP_API_BASE_URL`: Your backend URL

### Performance Optimization

1. **Enable Netlify optimizations**
   - Go to Site settings → **Build & deploy**
   - Enable asset optimization

2. **Add caching headers**
   - Create `public/_headers` file:
   ```
   /*
     Cache-Control: public, max-age=31536000
   ```

## Final URLs

After deployment, you should have:

- **Frontend**: `https://your-site.netlify.app`
- **Backend**: `https://your-backend-url.com`

## Next Steps

1. **Monitor your deployment**
   - Check Netlify analytics
   - Monitor backend performance

2. **Set up monitoring**
   - Enable Netlify notifications
   - Set up backend health checks

3. **Scale if needed**
   - Upgrade to paid plans if you need more resources
   - Consider CDN for better performance

## Support

If you encounter issues:

1. Check the deployment logs
2. Verify all URLs are correct
3. Test locally first
4. Check browser console for errors

Your Driver Drowsiness Detection System should now be live on the web! 🚀 