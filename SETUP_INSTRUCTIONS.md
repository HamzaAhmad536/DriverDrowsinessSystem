# Driver Drowsiness Detection System - Setup Instructions

## Prerequisites

1. **Python 3.8+** - Download from [python.org](https://python.org)
2. **Node.js 16+** - Download from [nodejs.org](https://nodejs.org)
3. **Webcam** - For real-time detection

## Quick Start (Windows)

1. **Run the startup script:**
   ```bash
   start.bat
   ```
   This will automatically install dependencies and start both servers.

## Manual Setup

### Backend Setup

1. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Start the backend server:**
   ```bash
   python server.py
   ```
   The backend will run on `http://localhost:5000`

### Frontend Setup

1. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## Usage

1. Open your browser and go to `http://localhost:5173`
2. Click "Try Live Demo" or scroll to the demo section
3. Click "Start Camera Test" to begin real-time drowsiness detection
4. The system will analyze your eye movements and alert you if drowsiness is detected

## Features

- **Real-time Detection**: Uses your webcam to monitor eye movements
- **AI-Powered**: Machine learning model trained on eye state classification
- **Instant Alerts**: Immediate warnings when drowsiness is detected
- **Live Demo**: Interactive demonstration of the technology

## Troubleshooting

### Camera Issues
- Make sure your webcam is connected and not being used by another application
- Grant camera permissions to your browser
- Try refreshing the page if detection doesn't start

### Backend Connection Issues
- Ensure the Python server is running on port 5000
- Check that all dependencies are installed correctly
- Look for error messages in the backend console

### Model Loading Issues
- Verify that `models/drowsiness_model.h5` exists
- Ensure TensorFlow and other ML libraries are installed
- Check Python version compatibility (3.8+ recommended)

## Project Structure

```
driver-drowsiness-detection/
├── models/
│   ├── drowsiness_detection.py    # Main ML detection script
│   └── drowsiness_model.h5        # Trained model file
├── src/
│   ├── components/
│   │   ├── Demo.jsx              # Demo interface
│   │   ├── Hero.jsx              # Landing page
│   │   └── Contact.jsx           # Contact information
│   └── App.jsx                   # Main app component
├── server.py                     # Flask backend server
├── requirements.txt              # Python dependencies
└── package.json                  # Node.js dependencies
```

## Contact

**Hamza Ahmad**
- Location: Lahore, Pakistan
- Phone: 03264140389
- Role: Lead ML Engineer

## License

This project is for educational and research purposes.

