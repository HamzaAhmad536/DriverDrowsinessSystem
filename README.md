# Driver Drowsiness Detection System

A real-time driver drowsiness detection system using AI and computer vision. The system monitors eye movements and facial features to detect signs of drowsiness and provides immediate alerts.

## Features

- **Real-time Detection**: Live webcam monitoring with instant drowsiness alerts
- **AI-Powered**: Machine learning model trained on eye state classification
- **Web Interface**: Modern React frontend with live camera feed
- **Backend API**: Flask server handling ML model inference
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
driver-drowsiness-detection/
├── models/
│   ├── drowsiness_detection.py    # ML detection functions
│   └── drowsiness_model.h5        # Trained model file
├── src/
│   ├── components/
│   │   ├── Demo.jsx              # Live demo interface
│   │   ├── Hero.jsx              # Landing page
│   │   └── Contact.jsx           # Contact information
│   └── App.jsx                   # Main app component
├── server.py                     # Flask backend server
├── requirements.txt              # Python dependencies
├── package.json                  # Node.js dependencies
└── public/
    └── _redirects               # Netlify SPA support
```

## Local Development

### Prerequisites

- Python 3.8+
- Node.js 16+
- Webcam for testing

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd driver-drowsiness-detection
   ```

2. **Install dependencies**
   ```bash
   # Python dependencies
   pip install -r requirements.txt
   
   # Node.js dependencies
   npm install
   ```

3. **Start the backend server**
   ```bash
   python server.py
   ```
   Backend will run on `http://localhost:5000`

4. **Start the frontend**
   ```bash
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

5. **Test the application**
   - Open `http://localhost:5173` in your browser
   - Click "Try Live Demo" or "Start Camera Test"
   - Allow camera access when prompted

## Deployment

### Backend Deployment (Required for ML functionality)

The backend needs to be deployed to a service that supports Python. Here are the recommended options:

#### Option 1: Render (Recommended)

1. **Create a Render account** at [render.com](https://render.com)

2. **Create a new Web Service**
   - Connect your GitHub repository
   - Set build command: `pip install -r requirements.txt`
   - Set start command: `python server.py`
   - Set environment variables:
     - `PORT`: `10000`

3. **Update the frontend API URL**
   - Get your Render URL (e.g., `https://your-app.onrender.com`)
   - Update `API_BASE` in `src/components/Demo.jsx`

#### Option 2: Heroku

1. **Create a Heroku account** and install Heroku CLI

2. **Create Procfile**
   ```
   web: python server.py
   ```

3. **Deploy**
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

#### Option 3: Railway

1. **Create a Railway account** at [railway.app](https://railway.app)

2. **Connect your repository** and deploy automatically

### Frontend Deployment (Netlify)

1. **Build the frontend**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder, OR
   - Connect your GitHub repository and set build command: `npm run build`

3. **Configure environment variables** (if needed)
   - Add your backend URL as an environment variable

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Backend URL (update with your deployed backend URL)
REACT_APP_API_BASE_URL=https://your-backend-url.com/api
```

### Update API URL

In `src/components/Demo.jsx`, update the API base URL:

```javascript
// For local development
const API_BASE = 'http://localhost:5000/api'

// For production (replace with your backend URL)
const API_BASE = 'https://your-backend-url.com/api'
```

## Troubleshooting

### Common Issues

1. **Camera not working**
   - Ensure HTTPS is enabled (required for camera access)
   - Check browser permissions
   - Try refreshing the page

2. **Backend connection errors**
   - Verify the backend is running
   - Check the API URL in the frontend
   - Ensure CORS is properly configured

3. **Model loading errors**
   - Verify `models/drowsiness_model.h5` exists
   - Check TensorFlow installation
   - Ensure Python version compatibility

### Performance Optimization

- The backend processes frames at 10 FPS for optimal performance
- Frontend polls the backend every second for status updates
- Camera feed is displayed directly in the browser for low latency

## Contact

**Hamza Ahmad**
- Location: Lahore, Pakistan
- Phone: 03264140389
- Role: Lead ML Engineer

## License

This project is for educational and research purposes.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Acknowledgments

- MediaPipe for facial landmark detection
- TensorFlow for machine learning framework
- React and Vite for frontend development

