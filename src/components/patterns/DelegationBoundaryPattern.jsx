import React, { useState } from 'react'
import { AlertTriangle, CheckCircle, FileText, Clock, ArrowRight, Info } from 'lucide-react'

const DelegationBoundaryPattern = () => {
  const [selectedResponse, setSelectedResponse] = useState(null)
  const [showImplication, setShowImplication] = useState(false)

  const scenario = {
    icon: FileText,
    title: "Business License Renewal Scenario",
    context: "Your business license expires in 2 weeks. The agent discovers your address has changed since last renewal.",
    question: "What should the agent do?",
    options: [
      {
        id: 'minimal',
        text: "Stop and ask me to handle the address update myself",
        autonomyLevel: "Minimal Autonomy",
        implications: "Lower risk, but you'll need to manually coordinate between agencies and may face delays if you're not available.",
        boundarySettings: {
          informationSharing: 20,
          decisionMaking: 15,
          crossAgency: 10
        },
        icon: AlertTriangle,
        color: "red"
      },
      {
        id: 'moderate',
        text: "Update the address using DMV records, but confirm with me first",
        autonomyLevel: "Moderate Autonomy",
        implications: "Balanced approach - agent can gather information across agencies but gets your approval for significant changes.",
        boundarySettings: {
          informationSharing: 65,
          decisionMaking: 40,
          crossAgency: 55
        },
        icon: CheckCircle,
        color: "yellow"
      },
      {
        id: 'high',
        text: "Update the address automatically and complete the renewal",
        autonomyLevel: "High Autonomy",
        implications: "Fastest resolution, but agent will make decisions and cross agency boundaries without asking.",
        boundarySettings: {
          informationSharing: 85,
          decisionMaking: 80,
          crossAgency: 90
        },
        icon: Clock,
        color: "green"
      }
    ]
  }

  const handleSelection = (option) => {
    setSelectedResponse(option)
    setShowImplication(false)
    setTimeout(() => setShowImplication(true), 300)
  }

  const Icon = scenario.icon

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gov-gray-200 p-8">
      {/* Pattern Header */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gov-blue-100 rounded-lg flex items-center justify-center mr-3" aria-hidden="true">
            <Icon className="w-5 h-5 text-gov-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gov-gray-900">{scenario.title}</h3>
            <p className="text-sm text-gov-gray-600">Delegation Boundary Establishment Pattern</p>
          </div>
        </div>
        
        <div className="bg-gov-blue-50 border border-gov-blue-200 rounded-lg p-4 mb-6" role="complementary">
          <div className="flex items-start">
            <Info className="w-5 h-5 text-gov-blue-600 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="text-gov-blue-900 font-medium mb-1">Scenario Context</p>
              <p className="text-gov-blue-800 text-sm">{scenario.context}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gov-gray-900 mb-6">{scenario.question}</h4>
        
        <fieldset className="space-y-4">
          <legend className="sr-only">Choose your preferred delegation level</legend>
          {scenario.options.map((option) => {
            const OptionIcon = option.icon
            const isSelected = selectedResponse?.id === option.id
            
            return (
              <div key={option.id} className="relative">
                <input
                  type="radio"
                  id={option.id}
                  name="delegation-choice"
                  value={option.id}
                  checked={isSelected}
                  onChange={() => handleSelection(option)}
                  className="sr-only peer"
                  aria-describedby={`${option.id}-description`}
                />
                <label
                  htmlFor={option.id}
                  className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'border-gov-blue-500 bg-gov-blue-50'
                      : 'border-gov-gray-200 hover:border-gov-gray-300 hover:bg-gov-gray-50'
                  } focus-within:ring-2 focus-within:ring-gov-blue-500 focus-within:ring-offset-2`}
                >
                  <div className="flex items-start">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 ${
                      option.color === 'red' ? 'bg-red-100' :
                      option.color === 'yellow' ? 'bg-yellow-100' : 'bg-green-100'
                    }`} aria-hidden="true">
                      <OptionIcon className={`w-5 h-5 ${
                        option.color === 'red' ? 'text-red-600' :
                        option.color === 'yellow' ? 'text-yellow-600' : 'text-green-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-gov-gray-900">{option.text}</h5>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          option.color === 'red' ? 'bg-red-100 text-red-800' :
                          option.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {option.autonomyLevel}
                        </span>
                      </div>
                      <p id={`${option.id}-description`} className="text-sm text-gov-gray-600">
                        {option.implications}
                      </p>
                    </div>
                    {isSelected && (
                      <ArrowRight className="w-5 h-5 text-gov-blue-600 ml-2" aria-hidden="true" />
                    )}
                  </div>
                </label>
              </div>
            )
          })}
        </fieldset>

        {/* Implications Display */}
        {selectedResponse && showImplication && (
          <div 
            className="mt-6 p-4 bg-gov-blue-50 border border-gov-blue-200 rounded-lg"
            role="region"
            aria-live="polite"
            aria-labelledby="implications-heading"
          >
            <h5 id="implications-heading" className="font-semibold text-gov-blue-900 mb-3">
              Your Selection: {selectedResponse.autonomyLevel}
            </h5>
            <p className="text-gov-blue-800 mb-4">{selectedResponse.implications}</p>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-sm text-gov-gray-600 mb-1">Information Sharing</div>
                <div className="w-full bg-gov-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gov-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${selectedResponse.boundarySettings.informationSharing}%` }}
                    role="progressbar"
                    aria-valuenow={selectedResponse.boundarySettings.informationSharing}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={`Information sharing level: ${selectedResponse.boundarySettings.informationSharing} percent`}
                  />
                </div>
                <div className="text-xs text-gov-gray-500 mt-1">
                  {selectedResponse.boundarySettings.informationSharing}%
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-gov-gray-600 mb-1">Decision Making</div>
                <div className="w-full bg-gov-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gov-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${selectedResponse.boundarySettings.decisionMaking}%` }}
                    role="progressbar"
                    aria-valuenow={selectedResponse.boundarySettings.decisionMaking}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={`Decision making level: ${selectedResponse.boundarySettings.decisionMaking} percent`}
                  />
                </div>
                <div className="text-xs text-gov-gray-500 mt-1">
                  {selectedResponse.boundarySettings.decisionMaking}%
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-gov-gray-600 mb-1">Cross-Agency</div>
                <div className="w-full bg-gov-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gov-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${selectedResponse.boundarySettings.crossAgency}%` }}
                    role="progressbar"
                    aria-valuenow={selectedResponse.boundarySettings.crossAgency}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={`Cross-agency coordination level: ${selectedResponse.boundarySettings.crossAgency} percent`}
                  />
                </div>
                <div className="text-xs text-gov-gray-500 mt-1">
                  {selectedResponse.boundarySettings.crossAgency}%
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DelegationBoundaryPattern