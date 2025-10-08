import React, { useState } from 'react'
import { Bot, ArrowRight, BookOpen, Users } from 'lucide-react'
import DelegationBoundaryPattern from '../components/patterns/DelegationBoundaryPattern'
import AsyncActionPattern from '../components/patterns/AsyncActionPattern'
import CrossSystemPattern from '../components/patterns/CrossSystemPattern'
import TrustVerificationPattern from '../components/patterns/TrustVerificationPattern'

const PatternsPage = () => {
  const [activePattern, setActivePattern] = useState('delegation-boundary')

  const patterns = [
    {
      id: 'delegation-boundary',
      title: 'Delegation Boundary Establishment',
      description: 'Help citizens establish appropriate autonomy boundaries through scenario-based questions',
      component: DelegationBoundaryPattern,
      summary: 'Instead of asking users to configure abstract "autonomy levels," this pattern presents realistic scenarios that help users understand the practical implications of different delegation boundaries.'
    },
    {
      id: 'async-communication',
      title: 'Asynchronous Action Communication',
      description: 'Transparent reporting of actions taken while citizens are offline and an agent acts on their behalf',
      component: AsyncActionPattern,
      summary: 'This pattern provides citizens with clear visibility into autonomous actions taken on their behalf by an agent, including chronological timelines and reasoning transparency.'
    },
    {
      id: 'cross-system',
      title: 'Cross-System Navigation',
      description: 'Visibility when agents coordinate across government boundaries',
      component: CrossSystemPattern,
      summary: 'This pattern provides complete visibility when agents coordinate across multiple government agencies, with delegation chain visualization and accountability tracking.'
    },
    {
      id: 'trust-verification',
      title: 'Trust and Verification',
      description: 'Complete transparency about agent capabilities and limitations',
      component: TrustVerificationPattern,
      summary: 'This pattern provides transparency about agent capabilities, limitations, and human oversight before citizens delegate important tasks to autonomous agents.'
    }
  ]

  const getPattern = (id) => patterns.find(p => p.id === id)
  const ActiveComponent = getPattern(activePattern)?.component

  return (
    <div className="min-h-screen bg-gov-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gov-gray-200 section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gov-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Bot className="w-6 h-6 text-gov-blue-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gov-gray-900">
                Design Patterns for Delegation-based Digital Services
              </h1>
            </div>
            <p className="text-xl text-gov-gray-700 mb-8">
              Interactive examples of the four essential pattern categories for delegation-based public services. 
              These patterns address fundamental challenges regardless of the underlying technology.
            </p>
          </div>
        </div>
      </section>

      {/* Pattern Navigation */}
      <section className="bg-white border-b border-gov-gray-200">
        <div className="container-max">
          <div className="py-6">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {patterns.map((pattern) => (
                <button
                  key={pattern.id}
                  onClick={() => setActivePattern(pattern.id)}
                  className={`px-4 py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-200 ${
                    activePattern === pattern.id
                      ? 'bg-gov-blue-600 text-white shadow-md'
                      : 'bg-gov-gray-100 text-gov-gray-700 hover:bg-gov-gray-200'
                  }`}
                >
                  {pattern.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Active Pattern */}
      <section className="section-padding">
        <div className="container-max">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gov-gray-900 mb-4">
              {getPattern(activePattern)?.title}
            </h2>
            <p className="text-lg text-gov-gray-700 mb-6">
              {getPattern(activePattern)?.description}
            </p>
            <div className="bg-gov-blue-50 border border-gov-blue-200 rounded-lg p-4">
              <p className="text-gov-blue-800">
                <strong>Pattern Summary:</strong> {getPattern(activePattern)?.summary}
              </p>
            </div>
          </div>

          {/* Interactive Component */}
          <div className="mb-12">
            {ActiveComponent && <ActiveComponent />}
          </div>

          {/* Pattern Explanation */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gov-gray-200">
              <div className="flex items-center mb-4">
                <BookOpen className="w-5 h-5 text-gov-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gov-gray-900">Why This Pattern Matters</h3>
              </div>
              <div className="space-y-3 text-gov-gray-700">
                {activePattern === 'delegation-boundary' && (
                  <>
                    <p>Traditional user interfaces ask people to set abstract preferences without context. This pattern instead uses realistic government service scenarios to help citizens understand the practical implications of their delegation choices.</p>
                    <p>By presenting concrete examples (like address changes during license renewal), people can make informed decisions about how much autonomy to grant their agents across different situations.</p>
                  </>
                )}
                {activePattern === 'async-communication' && (
                  <>
                    <p>When agents act autonomously, citizens need transparency about what happened on their behalf without being overwhelmed by technical details. This pattern provides structured visibility into agent actions.</p>
                    <p>Key elements include chronological timelines, reasoning transparency, agency involvement disclosure, and controls for pausing or reversing actions when possible.</p>
                  </>
                )}
                {activePattern === 'cross-system' && (
                  <>
                    <p>Government services often require coordination across multiple agencies. This pattern ensures citizens maintain visibility into where their information goes and who remains accountable when agents work across boundaries.</p>
                    <p>The pattern includes delegation chain visualization, data sharing transparency, and clear accountability tracking at each agency handoff.</p>
                  </>
                )}
                {activePattern === 'trust-verification' && (
                  <>
                    <p>Before delegating important government tasks, citizens need to understand agent capabilities and limitations. This pattern provides granular confidence indicators and explicit disclosure of what agents cannot do.</p>
                    <p>The pattern includes confidence breakdowns by task component, automatic escalation triggers, and clear human oversight structures with contact information.</p>
                  </>
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gov-gray-200">
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 text-gov-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gov-gray-900">Implementation Considerations</h3>
              </div>
              <div className="space-y-3 text-gov-gray-700">
                {activePattern === 'delegation-boundary' && (
                  <>
                    <p><strong>User Research:</strong> Test scenarios with real government service users to ensure they reflect common situations and help people make informed decisions.</p>
                    <p><strong>Progressive Disclosure:</strong> Start with simple scenarios and gradually introduce more complex delegation choices as users become comfortable.</p>
                    <p><strong>Consistency:</strong> Apply boundary settings across similar government services to reduce cognitive load and setup time.</p>
                  </>
                )}
                {activePattern === 'async-communication' && (
                  <>
                    <p><strong>Notification Strategy:</strong> Balance transparency with information overload. Provide summaries with drill-down details rather than overwhelming users with every action.</p>
                    <p><strong>Timing:</strong> Send action summaries at appropriate intervals based on task complexity and user preferences.</p>
                    <p><strong>Recovery Options:</strong> Clearly indicate which actions can be reversed and provide simple mechanisms for corrections.</p>
                  </>
                )}
                {activePattern === 'cross-system' && (
                  <>
                    <p><strong>Privacy Compliance:</strong> Ensure data sharing transparency meets legal requirements while remaining understandable to citizens.</p>
                    <p><strong>Contact Integration:</strong> Provide working contact information and response time expectations for each agency involved.</p>
                    <p><strong>Status Updates:</strong> Keep delegation chain status current as processes move between agencies.</p>
                  </>
                )}
                {activePattern === 'trust-verification' && (
                  <>
                    <p><strong>Confidence Calibration:</strong> Ensure confidence indicators are based on actual performance data and updated regularly.</p>
                    <p><strong>Human Oversight:</strong> Establish clear escalation paths with trained staff who can review and override agent decisions.</p>
                    <p><strong>Limitation Disclosure:</strong> Be explicit about what agents cannot do rather than overselling capabilities.</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gov-blue-600 section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Implement These Patterns?
          </h2>
          <p className="text-xl text-gov-blue-100 mb-8 max-w-3xl mx-auto">
            These patterns can be adapted for your agency's specific services and technical environment. 
            Start with user research to understand which delegation scenarios matter most to your constituents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/Government Agent Delegation Design Patterns Guide.pdf"
              download
              className="bg-white text-gov-blue-600 hover:bg-gov-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Download Pattern Guide
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="/about" 
              className="border-2 border-white text-white hover:bg-white hover:text-gov-blue-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PatternsPage