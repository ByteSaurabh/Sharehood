import React from 'react';
import Icon from '../../../components/AppIcon';

const ImpactStats = () => {
  const stats = [
    {
      id: 1,
      title: "Total Money Saved",
      value: "$2.4M",
      change: "+23%",
      icon: "DollarSign",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 2,
      title: "Carbon Footprint Reduced",
      value: "1,250 tons",
      change: "+18%",
      icon: "Leaf",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      id: 3,
      title: "New Friendships Formed",
      value: "8,432",
      change: "+31%",
      icon: "Users",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      id: 4,
      title: "Items Kept from Landfills",
      value: "45,678",
      change: "+27%",
      icon: "Recycle",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <div className="bg-card rounded-lg p-8 shadow-warm mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Impact by Numbers</h2>
        <p className="text-muted-foreground">
          Real community transformation through sharing
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats?.map((stat) => (
          <div key={stat?.id} className="text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat?.bgColor} mb-4`}>
              <Icon name={stat?.icon} size={24} className={stat?.color} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-1">{stat?.value}</h3>
            <p className="text-sm text-muted-foreground mb-2">{stat?.title}</p>
            <div className="flex items-center justify-center">
              <Icon name="TrendingUp" size={14} className="text-success mr-1" />
              <span className="text-sm text-success font-medium">{stat?.change} this month</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          Data collected from {new Date()?.getFullYear()} community activities across all neighborhoods
        </p>
      </div>
    </div>
  );
};

export default ImpactStats;