import React from 'react';
import Icon from '../../../components/AppIcon';

const NeighborhoodInsights = () => {
  const insights = {
    totalMembers: 247,
    activeToday: 32,
    itemsShared: 1456,
    co2Saved: 2.3,
    mostSharedItems: [
      { name: 'Power Tools', count: 89, icon: 'Wrench' },
      { name: 'Kitchen Appliances', count: 67, icon: 'ChefHat' },
      { name: 'Books', count: 54, icon: 'Book' },
      { name: 'Outdoor Gear', count: 43, icon: 'Mountain' },
      { name: 'Electronics', count: 38, icon: 'Smartphone' }
    ],
    peakSharingTimes: [
      { time: '9-11 AM', activity: 85 },
      { time: '2-4 PM', activity: 72 },
      { time: '6-8 PM', activity: 91 }
    ],
    seasonalTrends: [
      { season: 'Winter', items: ['Heaters', 'Snow Tools', 'Holiday Decor'] },
      { season: 'Spring', items: ['Garden Tools', 'Cleaning Supplies', 'Bikes'] },
      { season: 'Summer', items: ['Camping Gear', 'Pool Equipment', 'BBQ Grills'] },
      { season: 'Fall', items: ['Leaf Blowers', 'Ladders', 'Storage Boxes'] }
    ]
  };

  const currentSeason = 'Summer';

  return (
    <div className="bg-card border border-border rounded-lg shadow-warm">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-2">
          <Icon name="BarChart3" size={20} color="var(--color-primary)" />
          <h3 className="font-semibold text-card-foreground">Neighborhood Insights</h3>
        </div>
      </div>
      <div className="p-4 space-y-6">
        {/* Community Stats */}
        <div>
          <h4 className="text-sm font-medium text-card-foreground mb-3">Community Stats</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <Icon name="Users" size={16} color="var(--color-primary)" />
                <span className="text-xs text-muted-foreground">Total Members</span>
              </div>
              <div className="text-lg font-bold text-card-foreground">{insights?.totalMembers}</div>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <Icon name="Activity" size={16} color="var(--color-secondary)" />
                <span className="text-xs text-muted-foreground">Active Today</span>
              </div>
              <div className="text-lg font-bold text-card-foreground">{insights?.activeToday}</div>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <Icon name="Package" size={16} color="var(--color-accent)" />
                <span className="text-xs text-muted-foreground">Items Shared</span>
              </div>
              <div className="text-lg font-bold text-card-foreground">{insights?.itemsShared}</div>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <Icon name="Leaf" size={16} color="var(--color-success)" />
                <span className="text-xs text-muted-foreground">CO₂ Saved</span>
              </div>
              <div className="text-lg font-bold text-card-foreground">{insights?.co2Saved}T</div>
            </div>
          </div>
        </div>

        {/* Most Shared Items */}
        <div>
          <h4 className="text-sm font-medium text-card-foreground mb-3">Most Shared Items</h4>
          <div className="space-y-2">
            {insights?.mostSharedItems?.map((item, index) => (
              <div key={item?.name} className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-warm">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                    <Icon name={item?.icon} size={12} color="var(--color-primary)" />
                  </div>
                  <span className="text-sm text-card-foreground">{item?.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-card-foreground">{item?.count}</span>
                  <div className="w-12 h-1 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(item?.count / insights?.mostSharedItems?.[0]?.count) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Peak Sharing Times */}
        <div>
          <h4 className="text-sm font-medium text-card-foreground mb-3">Peak Sharing Times</h4>
          <div className="space-y-3">
            {insights?.peakSharingTimes?.map((period) => (
              <div key={period?.time} className="flex items-center justify-between">
                <span className="text-sm text-card-foreground">{period?.time}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-secondary rounded-full"
                      style={{ width: `${period?.activity}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-8">{period?.activity}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Trends */}
        <div>
          <h4 className="text-sm font-medium text-card-foreground mb-3">
            Seasonal Trends - {currentSeason}
          </h4>
          <div className="bg-accent/10 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="TrendingUp" size={16} color="var(--color-accent)" />
              <span className="text-sm font-medium text-card-foreground">Trending Now</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {insights?.seasonalTrends?.find(trend => trend?.season === currentSeason)
                ?.items?.map((item) => (
                  <span 
                    key={item}
                    className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="pt-4 border-t border-border">
          <div className="grid grid-cols-2 gap-2">
            <button className="flex items-center justify-center space-x-2 p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-warm">
              <Icon name="Plus" size={16} color="var(--color-primary)" />
              <span className="text-sm font-medium text-primary">Share Item</span>
            </button>
            <button className="flex items-center justify-center space-x-2 p-3 bg-secondary/10 hover:bg-secondary/20 rounded-lg transition-warm">
              <Icon name="Search" size={16} color="var(--color-secondary)" />
              <span className="text-sm font-medium text-secondary">Find Items</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeighborhoodInsights;