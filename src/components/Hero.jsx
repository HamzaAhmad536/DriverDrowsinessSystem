import { ArrowRight, Play, Shield, Eye, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import heroImage from '../assets/hero-image.jpeg'

const Hero = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLiveDemoClick = () => {
    window.open('https://hamzaa982-driverdrowsiness.hf.space', '_blank');
  }

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4 mr-2" />
                AI-Powered Safety Technology
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Prevent Drowsy
                <span className="text-blue-600"> Driving</span> with AI
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Advanced computer vision and machine learning technology that monitors driver alertness in real-time, 
                helping prevent accidents caused by drowsiness and fatigue.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Real-time Detection</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Safety First</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleLiveDemoClick}>
                Try Live Demo
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.2%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">&lt;100ms</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Driver Drowsiness Detection System"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              {/* Overlay elements */}
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Active Monitoring
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <div className="text-sm font-medium text-gray-900">Driver Status</div>
                <div className="text-green-600 font-semibold">Alert & Focused</div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

