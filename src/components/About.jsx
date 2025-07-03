import { Brain, Eye, Shield, Zap, Camera, AlertTriangle } from 'lucide-react'
import carInterior from '../assets/car-interior.jpg'

const About = () => {
  const features = [
    {
      icon: Eye,
      title: "Eye Tracking",
      description: "Advanced computer vision algorithms monitor eye movements, blink patterns, and gaze direction to detect signs of drowsiness."
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep learning models trained on thousands of hours of driving data to accurately identify fatigue patterns."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast analysis with sub-100ms response times for immediate drowsiness detection and alerts."
    },
    {
      icon: Camera,
      title: "Computer Vision",
      description: "State-of-the-art facial recognition and analysis using OpenCV and TensorFlow for precise monitoring."
    },
    {
      icon: Shield,
      title: "Safety Alerts",
      description: "Immediate audio and visual warnings when drowsiness is detected, helping prevent accidents before they happen."
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Continuous monitoring and risk scoring to provide early warnings and prevent dangerous situations."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our Technology Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our driver drowsiness detection system combines cutting-edge computer vision, 
            machine learning, and real-time processing to keep drivers safe on the road.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <img
              src={carInterior}
              alt="Car Interior with Driver"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-2xl"></div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
              <div className="text-sm font-medium text-gray-900">Camera Feed</div>
              <div className="text-blue-600 text-xs">Analyzing...</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Advanced AI-Powered Detection
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our system uses a sophisticated H5 model built with TensorFlow and Keras, 
              trained on extensive datasets of driver behavior. The Python backend processes 
              video feeds in real-time, analyzing facial features, eye movements, and head position.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Brain className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Deep Learning Model</h4>
                  <p className="text-gray-600 text-sm">Convolutional Neural Networks (CNN) for accurate pattern recognition</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Eye className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Computer Vision</h4>
                  <p className="text-gray-600 text-sm">OpenCV for real-time facial landmark detection and analysis</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Zap className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Real-time Processing</h4>
                  <p className="text-gray-600 text-sm">Optimized algorithms for instant drowsiness detection</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 p-3 rounded-lg w-fit mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Technical Details */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>TensorFlow/Keras H5 Model</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>OpenCV Computer Vision</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Python Backend Processing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Real-time Video Analysis</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">99.2%</div>
                  <div className="text-sm text-gray-600">Detection Accuracy</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">&lt;100ms</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">30 FPS</div>
                  <div className="text-sm text-gray-600">Processing Rate</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

