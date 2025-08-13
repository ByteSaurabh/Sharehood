import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const CommunityImpactChart = ({ data, type = 'line', title, color = '#D4704A' }) => {
  const formatTooltip = (value, name) => {
    if (name === 'co2Saved') return [`${value} lbs CO2`, 'CO2 Saved'];
    if (name === 'itemsShared') return [`${value} items`, 'Items Shared'];
    if (name === 'connections') return [`${value} connections`, 'New Connections'];
    return [value, name];
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-warm border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      
      <div className="h-64" aria-label={`${title} Chart`}>
        <ResponsiveContainer width="100%" height="100%">
          {type === 'line' ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F5F2ED" />
              <XAxis 
                dataKey="month" 
                stroke="#636E72"
                fontSize={12}
              />
              <YAxis 
                stroke="#636E72"
                fontSize={12}
              />
              <Tooltip 
                formatter={formatTooltip}
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #F5F2ED',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(212, 112, 74, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={color}
                strokeWidth={3}
                dot={{ fill: color, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: color, strokeWidth: 2 }}
              />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F5F2ED" />
              <XAxis 
                dataKey="month" 
                stroke="#636E72"
                fontSize={12}
              />
              <YAxis 
                stroke="#636E72"
                fontSize={12}
              />
              <Tooltip 
                formatter={formatTooltip}
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #F5F2ED',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(212, 112, 74, 0.1)'
                }}
              />
              <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CommunityImpactChart;