import React from 'react';
import Icon from '../../../components/AppIcon';

const PersonalImpactCard = ({ title, value, unit, icon, color, description, trend }) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-warm border border-border">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
          <Icon name={icon} size={24} color="white" />
        </div>
        {trend && (
          <div className="flex items-center space-x-1 text-sm text-success">
            <Icon name="TrendingUp" size={16} />
            <span>+{trend}%</span>
          </div>
        )}
      </div>
      
      <div className="mb-2">
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-foreground">{value}</span>
          <span className="text-sm text-muted-foreground">{unit}</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground mt-1">{title}</h3>
      </div>
      
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default PersonalImpactCard;