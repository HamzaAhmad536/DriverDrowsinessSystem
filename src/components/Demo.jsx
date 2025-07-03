import { useState, useEffect, useRef } from 'react'
import { Play, Pause, Upload, Camera, Download, AlertCircle, CheckCircle, Eye, Brain, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
// import eyeTracking from '../assets/eye-tracking.jpg'

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [detectionStatus, setDetectionStatus] = useState('monitoring')
  const [isDetecting, setIsDetecting] = useState(false)
  const [detectionScore, setDetectionScore] = useState(87)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const videoRef = useRef(null)
  const [stream, setStream] = useState(null)

  // API base URL
  const API_BASE = 'http://localhost:5000/api'

  // Status polling interval
  useEffect(() => {
    let interval
    if (isDetecting) {
      interval = setInterval(async () => {
        try {
          const response = await fetch(`${API_BASE}/status`)
          const data = await response.json()
          setDetectionScore(data.score)
          if (data.status === 'drowsy') {
            setDetectionStatus('alert')
          } else if (data.status === 'alert') {
            setDetectionStatus('normal')
          } else if (data.status === 'no_face' || data.status === 'no_eyes') {
            setDetectionStatus('monitoring')
          }
        } catch (err) {
          // console.error('Error fetching status:', err)
        }
      }, 1000)
    }
    return () => { if (interval) clearInterval(interval) }
  }, [isDetecting])

  // Handle webcam stream
  useEffect(() => {
    if (isPlaying) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((mediaStream) => {
          setStream(mediaStream)
          if (videoRef.current) {
            videoRef.current.srcObject = mediaStream
          }
        })
        .catch((err) => {
          setError('Could not access webcam. Please allow camera access.')
        })
    } else {
      if (stream) {
        stream.getTracks().forEach(track => track.stop())
        setStream(null)
      }
    }
    // Cleanup on unmount
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop())
      }
    }
  }, [isPlaying])

  const startDetection = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(`${API_BASE}/start-detection`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await response.json()
      if (response.ok) {
        setIsDetecting(true)
        setIsPlaying(true)
        setDetectionStatus('monitoring')
        setDetectionScore(0)
      } else {
        setError(data.error || 'Failed to start detection')
      }
    } catch (err) {
      setError('Could not connect to detection server. Please make sure the backend is running.')
    } finally {
      setIsLoading(false)
    }
  }

  const stopDetection = async () => {
    try {
      await fetch(`${API_BASE}/stop-detection`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      setIsDetecting(false)
      setIsPlaying(false)
      setDetectionStatus('monitoring')
      setDetectionScore(87)
    } catch (err) {
      // console.error('Error stopping detection:', err)
    }
  }

  const togglePlayback = () => {
    if (isDetecting) {
      stopDetection()
    } else {
      startDetection()
    }
  }

  const statusConfig = {
    monitoring: {
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      icon: Camera,
      text: 'Monitoring Active'
    },
    alert: {
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      icon: AlertCircle,
      text: 'Drowsiness Detected'
    },
    normal: {
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      icon: CheckCircle,
      text: 'Driver Alert'
    }
  }

  const currentStatus = statusConfig[detectionStatus]

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our driver drowsiness detection system with live demo, 
            upload your own video, or test with your camera feed.
          </p>
        </div>
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span>{error}</span>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Video Demo */}
          <div className="space-y-6">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl">
              {/* Live webcam feed */}
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-64 object-cover bg-black"
                style={{ background: '#000' }}
              />
              {/* Video Controls Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Button
                  onClick={togglePlayback}
                  size="lg"
                  className="bg-white/90 hover:bg-white text-black rounded-full p-4"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-8 w-8 animate-spin" />
                  ) : isPlaying ? (
                    <Pause className="h-8 w-8" />
                  ) : (
                    <Play className="h-8 w-8" />
                  )}
                </Button>
              </div>
              {/* Status Indicator */}
              <div className="absolute top-4 left-4">
                <div className={`flex items-center space-x-2 ${currentStatus.bgColor} px-3 py-2 rounded-lg`}>
                  <currentStatus.icon className={`h-4 w-4 ${currentStatus.color}`} />
                  <span className={`text-sm font-medium ${currentStatus.color}`}>
                    {currentStatus.text}
                  </span>
                </div>
              </div>
              {/* Detection Overlay */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="text-sm font-medium text-gray-900">Detection Score</div>
                <div className="text-2xl font-bold text-blue-600">{detectionScore}%</div>
              </div>
            </div>
            {/* Demo Controls */}
            <div className="flex flex-wrap gap-3">
              <Button 
                onClick={() => setDetectionStatus('normal')}
                variant="outline" 
                className="flex-1 min-w-0"
                disabled={isDetecting}
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Normal State
              </Button>
              <Button 
                onClick={() => setDetectionStatus('alert')}
                variant="outline" 
                className="flex-1 min-w-0"
                disabled={isDetecting}
              >
                <AlertCircle className="h-4 w-4 mr-2" />
                Drowsy State
              </Button>
              <Button 
                onClick={() => setDetectionStatus('monitoring')}
                variant="outline" 
                className="flex-1 min-w-0"
                disabled={isDetecting}
              >
                <Camera className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
          {/* Interactive Options */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Try It Yourself</h3>
            {/* Upload Video */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Upload className="h-6 w-6 text-blue-600" />
                <h4 className="text-lg font-semibold text-gray-900">Upload Video</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Upload a video file to test our drowsiness detection algorithm on your own footage.
              </p>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-400">MP4, AVI, MOV up to 50MB</p>
              </div>
            </div>
            {/* Live Camera */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Camera className="h-6 w-6 text-green-600" />
                <h4 className="text-lg font-semibold text-gray-900">Live Camera</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Use your device's camera for real-time drowsiness detection testing.
              </p>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={startDetection}
                disabled={isLoading || isDetecting}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Starting...
                  </>
                ) : isDetecting ? (
                  <>
                    <Camera className="h-4 w-4 mr-2" />
                    Detection Active
                  </>
                ) : (
                  <>
                    <Camera className="h-4 w-4 mr-2" />
                    Start Camera Test
                  </>
                )}
              </Button>
            </div>
            {/* Download Model */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Download className="h-6 w-6 text-purple-600" />
                <h4 className="text-lg font-semibold text-gray-900">Download Model</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Get the pre-trained H5 model and Python implementation for your own projects.
              </p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  drowsiness_model.h5 (25.3 MB)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  detection_script.py (8.2 KB)
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* How It Works */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Detection Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">1. Capture</h4>
              <p className="text-sm text-gray-600">Camera captures driver's face and eye movements</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">2. Analyze</h4>
              <p className="text-sm text-gray-600">AI analyzes facial features and eye patterns</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">3. Process</h4>
              <p className="text-sm text-gray-600">Machine learning model detects drowsiness signs</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">4. Alert</h4>
              <p className="text-sm text-gray-600">Immediate warning if drowsiness detected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo

