import React from 'react';
import Icon from '../../../components/AppIcon';

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      type: 'share',
      user: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      action: 'shared a Power Drill',
      item: 'Makita 18V Cordless Drill',
      impact: { co2: 5, money: 25 },
      timestamp: '2 hours ago',
      location: 'Oak Street'
    },
    {
      id: 2,
      type: 'borrow',
      user: 'Mike Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      action: 'borrowed a Lawn Mower',
      item: 'Honda Self-Propelled Mower',
      impact: { co2: 12, money: 45 },
      timestamp: '4 hours ago',
      location: 'Maple Avenue'
    },
    {
      id: 3,
      type: 'achievement',
      user: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      action: 'earned the "Community Builder" badge',
      item: 'Connected 25 neighbors',
      impact: { connections: 25 },
      timestamp: '6 hours ago',
      location: 'Pine District'
    },
    {
      id: 4,
      type: 'share',
      user: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      action: 'shared a Pressure Washer',
      item: 'Ryobi Electric Pressure Washer',
      impact: { co2: 8, money: 35 },
      timestamp: '8 hours ago',
      location: 'Cedar Lane'
    },
    {
      id: 5,
      type: 'milestone',
      user: 'Lisa Park',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
      action: 'reached 500 lbs CO2 saved',
      item: 'Sustainability milestone',
      impact: { co2: 500 },
      timestamp: '12 hours ago',
      location: 'Elm Street'
    },
    {
      id: 6,
      type: 'borrow',
      user: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      action: 'borrowed a Camping Tent',
      item: 'Coleman 4-Person Tent',
      impact: { co2: 15, money: 60 },
      timestamp: '1 day ago',
      location: 'Birch Road'
    }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'share': return 'Share2';
      case 'borrow': return 'Download';
      case 'achievement': return 'Award';
      case 'milestone': return 'Target';
      default: return 'Activity';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'share': return 'text-primary';
      case 'borrow': return 'text-secondary';
      case 'achievement': return 'text-warning';
      case 'milestone': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-warm border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Community Activity</h2>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span className="text-sm text-muted-foreground">Live</span>
        </div>
      </div>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {activities?.map((activity) => (
          <div key={activity?.id} className="flex items-start space-x-4 p-4 bg-background rounded-lg border border-border hover:shadow-warm transition-all">
            <img 
              src={activity?.avatar} 
              alt={activity?.user}
              className="w-10 h-10 rounded-full object-cover"
            />
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-foreground">{activity?.user}</span>
                  <Icon 
                    name={getActivityIcon(activity?.type)} 
                    size={16} 
                    className={getActivityColor(activity?.type)}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{activity?.timestamp}</span>
              </div>
              
              <p className="text-sm text-foreground mb-2">
                {activity?.action}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Icon name="MapPin" size={12} />
                  <span>{activity?.location}</span>
                </div>
                
                <div className="flex items-center space-x-4 text-xs">
                  {activity?.impact?.co2 && (
                    <div className="flex items-center space-x-1 text-secondary">
                      <Icon name="Leaf" size={12} />
                      <span>{activity?.impact?.co2} lbs CO2</span>
                    </div>
                  )}
                  {activity?.impact?.money && (
                    <div className="flex items-center space-x-1 text-success">
                      <Icon name="DollarSign" size={12} />
                      <span>${activity?.impact?.money}</span>
                    </div>
                  )}
                  {activity?.impact?.connections && (
                    <div className="flex items-center space-x-1 text-accent">
                      <Icon name="Users" size={12} />
                      <span>{activity?.impact?.connections} connections</span>
                    </div>
                  )}
                </div>
              </div>
              
              {activity?.item && (
                <div className="mt-2 p-2 bg-muted rounded text-xs text-muted-foreground">
                  {activity?.item}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
          View All Activity
        </button>
      </div>
    </div>
  );
};

export default ActivityFeed;