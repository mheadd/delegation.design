import React, { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, ReferenceLine } from 'recharts';
import { Info } from 'lucide-react';

export default function DelegationCandidatesPage() {
  const [showLabels, setShowLabels] = useState(true);

  // Frequency mapping (logarithmic scale)
  // 1 = Once in lifetime, 2 = Every 10+ years, 3 = Every 5-10 years, 4 = Every 2-5 years, 
  // 5 = Annually, 6 = Semi-annually, 7 = Quarterly, 8 = Monthly, 9 = Weekly, 10 = Daily
  
  const data = [
    { name: 'Tax Preparation', frequency: 5, burden: 8, stakes: 'medium' },
    { name: 'Immigration Application', frequency: 1.5, burden: 9.5, stakes: 'critical' },
    { name: 'Building Permit (Major)', frequency: 2, burden: 9, stakes: 'high' },
    { name: 'Business License Renewal', frequency: 5, burden: 6, stakes: 'medium' },
    { name: 'Medicare Plan Selection', frequency: 5, burden: 8, stakes: 'high' },
    { name: 'Benefits Recertification', frequency: 5, burden: 7, stakes: 'high' },
    { name: 'Professional License Renewal', frequency: 4, burden: 5, stakes: 'medium' },
    { name: 'Driver\'s License Renewal', frequency: 3, burden: 3, stakes: 'low' },
    { name: 'Disability Benefits Application', frequency: 1.5, burden: 9, stakes: 'critical' },
    { name: 'Customs/Import Documentation', frequency: 7, burden: 7, stakes: 'high' },
    { name: 'Workers Comp Claim', frequency: 1, burden: 8, stakes: 'critical' },
    { name: 'Address Change (Multi-agency)', frequency: 2.5, burden: 4, stakes: 'low' },
    { name: 'Parking Permit', frequency: 9, burden: 2, stakes: 'low' },
    { name: 'FOIA Request', frequency: 2, burden: 5, stakes: 'low' },
    { name: 'Business Tax Filing', frequency: 6, burden: 7, stakes: 'high' },
    { name: 'Professional License (Multi-state)', frequency: 3, burden: 7, stakes: 'high' },
    { name: 'Passport Renewal', frequency: 2.5, burden: 3, stakes: 'medium' },
    { name: 'Grant Application (Nonprofit)', frequency: 4, burden: 8.5, stakes: 'high' },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const frequencyLabels = {
        1: 'Once in lifetime',
        1.5: 'Very rare',
        2: 'Every 10+ years',
        2.5: 'Every 5-10 years',
        3: 'Every 5-10 years',
        4: 'Every 2-5 years',
        5: 'Annually',
        6: 'Semi-annually',
        7: 'Quarterly',
        8: 'Monthly',
        9: 'Weekly',
        10: 'Daily'
      };

      const stakesLabels = {
        'low': 'Low stakes',
        'medium': 'Medium stakes',
        'high': 'High stakes',
        'critical': 'Critical stakes'
      };
      
      return (
        <div className="bg-white p-4 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold text-gray-900 mb-2">{data.name}</p>
          <p className="text-sm text-gray-600">Frequency: {frequencyLabels[data.frequency] || 'Unknown'}</p>
          <p className="text-sm text-gray-600">Burden: {data.burden}/10</p>
          <p className="text-sm font-medium text-gray-900 mt-1">
            Stakes: <span className={
              data.stakes === 'critical' ? 'text-red-600' :
              data.stakes === 'high' ? 'text-yellow-600' :
              data.stakes === 'medium' ? 'text-orange-600' : 'text-green-600'
            }>{stakesLabels[data.stakes]}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLabel = (props) => {
    const { x, y, payload } = props;
    if (!showLabels || !payload || !payload.name) return null;
    
    return (
      <text 
        x={x} 
        y={y} 
        dy={-10} 
        fill="#374151" 
        fontSize={11} 
        textAnchor="middle"
        className="pointer-events-none"
      >
        {payload.name}
      </text>
    );
  };

  const CustomDot = (props) => {
    const { cx, cy, payload } = props;
    const colors = {
      'critical': '#EF4444',
      'high': '#EAB308',
      'medium': '#FB923C',
      'low': '#22C55E'
    };
    
    return (
      <circle 
        cx={cx} 
        cy={cy} 
        r={6} 
        fill={colors[payload.stakes] || '#6B7280'}
        stroke="none"
      />
    );
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Government Service Delegation Candidates
          </h1>
          <p className="text-gray-600 mb-4">
            Mapping government services by burden and frequency to identify potential candidates for AI agent delegation
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="text-blue-900 font-medium mb-1">Reading the Chart</p>
                <p className="text-blue-800 text-sm">
                  <ul>
                    <li><strong>Position</strong> indicates delegation potential: upper-left quadrant (high burden, low frequency) shows 
                  services where delegation is most valuable.</li>
                    <li><strong>Mouse over</strong> each of the dots on the scatterplot to see the details of the service.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span className="text-gray-700">Critical Stakes (requires extensive human oversight)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <span className="text-gray-700">High Stakes (moderate oversight needed)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-orange-400"></div>
              <span className="text-gray-700">Medium Stakes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span className="text-gray-700">Low Stakes (good for AI pilots)</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={600}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 80, left: 80 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              type="number" 
              dataKey="frequency" 
              name="Frequency"
              domain={[0, 10]}
              ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              tickFormatter={(value) => {
                const labels = {
                  1: 'Lifetime',
                  2: '10+ yrs',
                  3: '5-10 yrs',
                  4: '2-5 yrs',
                  5: 'Annual',
                  6: 'Semi-annual',
                  7: 'Quarterly',
                  8: 'Monthly',
                  9: 'Weekly',
                  10: 'Daily'
                };
                return labels[value] || '';
              }}
            >
              <Label 
                value="← Frequency of Occurrence →" 
                position="bottom" 
                offset={40}
                style={{ fontSize: '14px', fill: '#374151', fontWeight: 500 }}
              />
            </XAxis>
            <YAxis 
              type="number" 
              dataKey="burden" 
              name="Burden"
              domain={[0, 10]}
              ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            >
              <Label 
                value="← Administrative Burden →" 
                angle={-90} 
                position="left"
                offset={40}
                style={{ fontSize: '14px', fill: '#374151', fontWeight: 500 }}
              />
            </YAxis>
            <Tooltip content={<CustomTooltip />} />
            
            {/* Reference lines to show quadrants */}
            <ReferenceLine x={5} stroke="#9CA3AF" strokeDasharray="5 5" />
            <ReferenceLine y={5} stroke="#9CA3AF" strokeDasharray="5 5" />
            
            {/* Single Scatter with all data points */}
            <Scatter
              data={data}
              shape={<CustomDot />}
              label={<CustomLabel />}
            />
          </ScatterChart>
        </ResponsiveContainer>

        {/* Key Insights */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-purple-900 mb-2">Upper-Left: High Delegation Potential</h3>
            <p className="text-sm text-purple-800">
              High burden + Low frequency = Strong delegation incentive. Citizens never build expertise, but specialists can. 
              These services are prime candidates regardless of stakes level.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="font-semibold text-amber-900 mb-2">Stakes Determine Implementation Approach</h3>
            <p className="text-sm text-amber-800">
              <strong className="text-red-600">Red (Critical):</strong> High delegation potential but require extensive human review<br/>
              <strong className="text-yellow-600">Yellow (High):</strong> Good candidates with moderate oversight<br/>
              <strong className="text-orange-500">Orange (Medium):</strong> Balanced automation potential<br/>
              <strong className="text-green-600">Green (Low):</strong> Ideal for early AI pilots with minimal oversight
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
