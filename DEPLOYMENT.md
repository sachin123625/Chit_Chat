# Chit Chat Backend Deployment Guide

## Quick Fix for Render Deployment Error

The deployment error you encountered was due to missing `build` script in package.json. This has been fixed by adding the necessary scripts.

## Backend Server (`server_backend`)

### Package.json Scripts Added:
- `start`: Production start command
- `dev`: Development with nodemon  
- `build`: Build script (returns success for Node.js projects)

### Environment Variables Required:
```
PORT=5000
ATLAS_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
CLIENT_URL=your_frontend_url
NODE_ENV=production
```

## Socket Server (`soket`)

### Package.json Scripts Added:
- `start`: Production start command
- `dev`: Development with nodemon
- `build`: Build script (returns success for Node.js projects)

### Environment Variables Required:
```
PORT=3000
CLIENT_URL=your_frontend_url
NODE_ENV=production
```

## Deployment Steps for Render:

1. **Backend Server:**
   - Repository: Point to your GitHub repo
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Environment: Add all required environment variables

2. **Socket Server:**
   - Repository: Point to your GitHub repo  
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Environment: Add required environment variables

3. **Frontend (if deploying separately):**
   - Build Command: `npm run build`
   - Publish Directory: `dist`

## Important Notes:

- Make sure to set correct CORS origins in environment variables
- MongoDB Atlas connection string should be properly formatted
- JWT secret should be a strong, random string
- Update CLIENT_URL to match your deployed frontend URL

## Troubleshooting:

If you still encounter issues:
1. Check all environment variables are set correctly
2. Verify MongoDB connection string format
3. Ensure all dependencies are listed in package.json
4. Check Render build logs for specific error details
