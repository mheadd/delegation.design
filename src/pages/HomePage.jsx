import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Shield, Zap, AlertTriangle } from 'lucide-react'

const HomePage = () => {
  const keyPoints = [
    {
      icon: AlertTriangle,
      title: "Hype vs Reality",
      description: "Along with considerable hype, there is significant investment taking place in agentic services and advancements in AI model capabilities continue apace"
    },
    {
      icon: Users,
      title: "Reducing Administrative Burden",
      description: "Potential to democratize access by removing procedural barriers that systematically disadvantage those with limited time or digital literacy"
    },
    {
      icon: Zap,
      title: "Governments Get Ready",
      description: "Historical pattern of lagging behind private sector tech adoption means agencies need to prepare design patterns regardless of tech uncertainty"
    },
    {
      icon: Shield,
      title: "Four Essential Pattern Categories",
      description: "Four essential patterns seem crucial: Delegation boundaries, asynchronous communication, cross-system navigation, and trust & verification patterns"
    }
  ]

  const patterns = [
    {
      title: "Delegation Boundary Establishment",
      description: "Help citizens establish appropriate autonomy boundaries through scenario-based questions",
      example: "Business license renewal with address change scenarios"
    },
    {
      title: "Asynchronous Action Communication",
      description: "Transparent reporting of actions taken while citizens were offline and an agent acts on their behalf",
      example: "Overnight license renewal completion tracking"
    },
    {
      title: "Cross-System Navigation",
      description: "Visibility when agents coordinate across government boundaries",
      example: "Food truck permit requiring 4 agencies coordination"
    },
    {
      title: "Trust and Verification",
      description: "Complete transparency about agent capabilities and limitations",
      example: "Unemployment benefits with confidence assessment"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gov-blue-50 to-white section-padding" aria-labelledby="hero-heading">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gov-gray-900 mb-6">
              Beyond Self-Service: Design Patterns for 
              <span className="text-gov-blue-600"> Government Agent Delegation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gov-gray-700 mb-8 leading-relaxed">
              Preparing for citizen-agent interactions in government services — 
              moving from "AI as another channel" to true delegation with autonomous capabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/patterns" 
                className="btn-primary inline-flex items-center text-lg px-8 py-3"
                aria-describedby="patterns-description"
              >
                Explore Design Patterns
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Link>
              <span id="patterns-description" className="sr-only">
                View interactive examples of the four design pattern categories
              </span>
              <Link 
                to="/about" 
                className="btn-secondary inline-flex items-center text-lg px-8 py-3"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-padding bg-white" aria-labelledby="why-matters-heading">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 id="why-matters-heading" className="text-3xl md:text-4xl font-bold text-gov-gray-900 mb-4">
              Why Government Agent Delegation Matters
            </h2>
            <p className="text-lg text-gov-gray-700 max-w-3xl mx-auto">
              Government services often require navigating complex multi-step processes. 
              Delegation-based interactions could democratize access by removing procedural barriers, 
              but they require entirely new design patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gov-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <Icon className="w-8 h-8 text-gov-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gov-gray-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gov-gray-700 text-sm">
                    {point.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pattern Preview */}
      <section className="section-padding bg-gov-gray-50" aria-labelledby="patterns-preview-heading">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 id="patterns-preview-heading" className="text-3xl md:text-4xl font-bold text-gov-gray-900 mb-4">
              Four Essential Design Pattern Categories
            </h2>
            <p className="text-lg text-gov-gray-700 max-w-3xl mx-auto">
              These patterns address some fundamental challenges in delegation-based service design, 
               helping agencies prepare for autonomous interactions regardless of the underlying technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {patterns.map((pattern, index) => (
              <article key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gov-gray-200">
                <h3 className="text-xl font-semibold text-gov-gray-900 mb-3">
                  {pattern.title}
                </h3>
                <p className="text-gov-gray-700 mb-4">
                  {pattern.description}
                </p>
                <div className="bg-gov-blue-50 rounded-lg p-4" role="complementary">
                  <p className="text-sm text-gov-blue-800">
                    <strong>Example:</strong> {pattern.example}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/patterns" 
              className="btn-primary inline-flex items-center text-lg px-8 py-3"
              aria-describedby="interactive-examples-description"
            >
              View Interactive Examples
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </Link>
            <span id="interactive-examples-description" className="sr-only">
              Experience hands-on demonstrations of all four design patterns
            </span>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="section-padding bg-gov-blue-600" aria-labelledby="quotes-heading">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 id="quotes-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perspectives on the Future
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <blockquote className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed italic">
                "Agents are not only going to change how everyone interacts with computers. They're also going to upend the software industry, bringing about the biggest revolution in computing since we went from typing commands to tapping on icons."
              </p>
              <footer className="text-gov-blue-100">
                <cite className="text-lg font-medium not-italic">— Bill Gates</cite>
              </footer>
            </blockquote>
            
            <blockquote className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed italic">
                "The future is already here—it's just not evenly distributed."
              </p>
              <footer className="text-gov-blue-100">
                <cite className="text-lg font-medium not-italic">— William Gibson</cite>
              </footer>
            </blockquote>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl text-gov-blue-100 mb-8">
              Government agencies can't afford to wait. By preparing for agentic services now, 
              agencies can lay a foundation for delegation-based interactions while AI technologies continuie to evolve
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/patterns" 
                className="bg-white text-gov-blue-600 hover:bg-gov-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                Explore the Patterns
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white hover:bg-white hover:text-gov-blue-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Learn About Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage