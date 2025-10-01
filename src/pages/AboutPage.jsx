import React from 'react'
import { Mail, ExternalLink, BookOpen, Users, Lightbulb, Target, MessageSquare } from 'lucide-react'

const AboutPage = () => {
  const keyPrinciples = [
    {
      icon: Target,
      title: "Technology-Agnostic Approach",
      description: "These patterns are important regardless of whether AI agents fully materialize as promised. They address fundamental challenges of delegation relationships between citizens and government."
    },
    {
      icon: Users,
      title: "Citizen-Centered Design",
      description: "Focus on delegation comfort, transparency, and control. Government services should adapt to citizen needs, not the other way around."
    },
    {
      icon: Lightbulb,
      title: "Proactive Preparation",
      description: "Better to develop these capabilities now than reactively. Government agencies have historically lagged behind private sector adoption of new technologies."
    }
  ]

  const researchBackground = [
    {
      title: "The Administrative Burden Opportunity",
      description: "Government processes are often complex, requiring people to navigate multi-step applications, understand bureaucratic requirements, and coordinate across multiple agencies. This complexity systematically disadvantages those with limited time, education, or digital literacy. Autonomous agents could potentially democratize access by removing these procedural barriers."
    },
    {
      title: "Why Current Design Patterns Fall Short",
      description: "Much of government digital service design assumes individual-controlled, step-by-step interactions. True agentic services represent a fundamentally different interaction model where people delegate tasks to autonomous agents that can act on their behalf while they're doing something else."
    },
    {
      title: "The Delegation Paradigm Shift",
      description: "This transforms the public-government relationship from self-service to delegation. People need to negotiate boundaries for autonomous action, understand what's happening on their behalf while offline, and maintain appropriate oversight of agent actions."
    }
  ]

  return (
    <div className="min-h-screen bg-gov-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-gov-blue-50 to-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gov-gray-900 mb-6">
              About This Site
            </h1>
            <p className="text-xl md:text-2xl text-gov-gray-700 mb-8 leading-relaxed">
              Seeking to highlight the need for new patterns in government services design as we move 
              from self-service to delegation-based interactions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gov-gray-900 mb-4">
              Guiding Principles
            </h2>
            <p className="text-lg text-gov-gray-700 max-w-3xl mx-auto">
              Delegation-based design patterns should be built on fundamental principles that prioritize citizen needs 
              and government accountability, regardless of the underlying technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyPrinciples.map((principle, index) => {
              const Icon = principle.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gov-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-gov-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gov-gray-900 mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-gov-gray-700">
                    {principle.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research Background */}
      <section className="section-padding bg-gov-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gov-gray-900 mb-4">
              Background
            </h2>
            <p className="text-lg text-gov-gray-700 max-w-3xl mx-auto">
              Why government agencies should prepare for delegation-based interactions now, 
              even amid uncertainty about AI agent technology.
            </p>
          </div>

          <div className="space-y-12">
            {researchBackground.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gov-gray-200">
                <h3 className="text-2xl font-semibold text-gov-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gov-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Current Landscape */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gov-gray-900 mb-6">
                The Current AI Agent Landscape
              </h2>
              <div className="space-y-4 text-gov-gray-700">
                <p>
                  The AI agent landscape tells a contradictory story. While nearly 80% of organizations 
                  report using AI agents, with 82% planning integration within 1-3 years, <a 
                    href="https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gov-blue-600 hover:text-gov-blue-700 underline font-medium"
                  >Gartner has 
                  placed AI agents</a> at the "Peak of Inflated Expectations" and predicts over 40% of 
                  agentic AI projects will be canceled by the end of 2027.
                </p>
                <p>
                  Much of the data on this topic is impacted by <a 
                    href="https://www.forbes.com/sites/bernardmarr/2025/07/11/what-is-ai-agent-washing-and-why-is-it-a-risk-to-businesses/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gov-blue-600 hover:text-gov-blue-700 underline font-medium"
                  >agent washing</a> - the rebranding of existing 
                  products as "AI tools" without substantial agentic capabilities. Yet AI models are demonstrating 
                  increasingly sophisticated reasoning capabilities that suggest the technical foundation 
                  for fully agentic services may be maturing.
                </p>
                <p>
                  This uncertainty makes it tempting for government agencies to adopt a wait-and-see 
                  approach, but that could be a mistake. Government agencies have historically lagged 
                  behind the private sector, and waiting could mean scrambling to catch up once public 
                  expectations are already established.
                </p>
              </div>
            </div>
            <div className="bg-gov-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gov-gray-900 mb-4">Key Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gov-gray-700">Organizations using AI agents</span>
                  <span className="text-2xl font-bold text-gov-blue-600">80%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gov-gray-700">Planning integration 1-3 years</span>
                  <span className="text-2xl font-bold text-gov-blue-600">82%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gov-gray-700">Projected cancellations by 2027</span>
                  <span className="text-2xl font-bold text-red-600">40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gov-gray-700">Agent startup funding in 2024</span>
                  <span className="text-2xl font-bold text-green-600">$3.8B</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gov-blue-200">
                <a 
                  href="https://www.cbinsights.com/research/ai-agent-trends-to-watch-2025/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-gov-blue-600 hover:text-gov-blue-700 font-medium"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="section-padding bg-gov-blue-600">
        <div className="container-max">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Building a Foundation Amid Uncertainty
            </h2>
            <p className="text-xl text-gov-blue-100 max-w-3xl mx-auto">
              Government agencies can take concrete preparatory steps without committing to unproven technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Research and Design</h3>
              <ul className="space-y-2 text-gov-blue-100">
                <li>• Conduct user research on current administrative burden experiences</li>
                <li>• Identify tasks citizens would be most willing to delegate</li>
                <li>• Test design patterns through pilot programs with existing staff</li>
                <li>• Develop policy frameworks for delegation-based services</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Institutional Capabilities</h3>
              <ul className="space-y-2 text-gov-blue-100">
                <li>• Build institutional knowledge about delegation relationships</li>
                <li>• Validate public comfort with different autonomy levels</li>
                <li>• Establish oversight structures for autonomous systems</li>
                <li>• Create cross-agency coordination protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gov-gray-900 mb-4">
              Get Involved
            </h2>
            <p className="text-lg text-gov-gray-700 max-w-3xl mx-auto">
              We welcome feedback, collaboration, and discussion 
              from government agencies, researchers, and civic technology practitioners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gov-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-gov-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gov-gray-900 mb-2">Email Us</h3>
              <a 
                href="mailto:hello@adhocteam.us" 
                className="text-gov-blue-600 hover:text-gov-blue-700 font-medium"
              >
                hello@adhocteam.us
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gov-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-gov-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gov-gray-900 mb-2">Join the Discussion</h3>
              <a 
                href="https://github.com/delegation-design" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gov-blue-600 hover:text-gov-blue-700 font-medium inline-flex items-center"
              >
                GitHub Discussions
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gov-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gov-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gov-gray-900 mb-2">Read the background</h3>
              <a 
                href="https://adhoc.team/2025/10/01/designing-for-delegation/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gov-blue-600 hover:text-gov-blue-700 font-medium inline-flex items-center"
              >
                Original post on these patterns
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage