import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LiveActivityFeed = () => {
  const recentActivities = [
    {
      id: 1,
      type: "shared",
      user: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        location: "0.2 miles away",
        trustScore: 98
      },
      item: {
        name: "Stand Mixer",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "Kitchen",
        price: "$12/day",
        savedAmount: "$85"
      },
      timestamp: "2 minutes ago",
      action: "shared for affordable rental"
    },
    {
      id: 2,
      type: "borrowed",
      user: {
        name: "Mike Rodriguez",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        location: "0.4 miles away",
        trustScore: 96
      },
      item: {
        name: "Pressure Washer",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "Tools",
        price: "$18/day",
        savedAmount: "$120"
      },
      timestamp: "5 minutes ago",
      action: "rented at great price"
    },
    {
      id: 3,
      type: "returned",
      user: {
        name: "Emma Thompson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        location: "0.6 miles away",
        trustScore: 99
      },
      item: {
        name: "Extension Ladder",
        image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "Tools",
        price: "$15/day",
        savedAmount: "$95"
      },
      timestamp: "8 minutes ago",
      action: "returned - trust increased"
    },
    {
      id: 4,
      type: "shared",
      user: {
        name: "David Park",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        location: "0.8 miles away",
        trustScore: 94
      },
      item: {
        name: "4K Projector",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "Electronics",
        price: "$25/day",
        savedAmount: "$180"
      },
      timestamp: "12 minutes ago",
      action: "shared at low cost"
    }
  ];

  const getActionColor = (type) => {
    switch (type) {
      case 'shared': return 'text-success';
      case 'borrowed': return 'text-primary';
      case 'returned': return 'text-secondary';
      default: return 'text-muted-foreground';
    }
  };

  const getActionIcon = (type) => {
    switch (type) {
      case 'shared': return 'Plus';
      case 'borrowed': return 'ArrowRight';
      case 'returned': return 'RotateCcw';
      default: return 'Activity';
    }
  };

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Live Affordable Sharing</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real savings from <span className="text-primary font-accent">trusted neighbors</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch your community save money through affordable rentals. Every exchange builds trust and strengthens neighborhood connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentActivities?.map((activity) => (
            <div
              key={activity?.id}
              className="bg-background rounded-xl p-6 shadow-warm border border-border hover:shadow-warm-lg transition-warm group"
            >
              {/* User Info with Trust Score */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Image
                    src={activity?.user?.avatar}
                    alt={activity?.user?.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background flex items-center justify-center">
                    <Icon name={getActionIcon(activity?.type)} size={8} color="white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <p className="font-medium text-foreground truncate">{activity?.user?.name}</p>
                    <div className="flex items-center space-x-1 bg-success/10 px-2 py-0.5 rounded-full">
                      <Icon name="Shield" size={10} className="text-success" />
                      <span className="text-xs font-medium text-success">{activity?.user?.trustScore}%</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{activity?.user?.location}</p>
                </div>
              </div>

              {/* Item with Pricing */}
              <div className="mb-4">
                <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                  <Image
                    src={activity?.item?.image}
                    alt={activity?.item?.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-warm"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-foreground">{activity?.item?.name}</h3>
                  <span className="text-primary font-bold text-sm">{activity?.item?.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{activity?.item?.category}</p>
                  <p className="text-xs text-success">Saved {activity?.item?.savedAmount}</p>
                </div>
              </div>

              {/* Action */}
              <div className="flex items-center justify-between text-sm">
                <span className={`font-medium ${getActionColor(activity?.type)}`}>
                  {activity?.action}
                </span>
                <span className="text-muted-foreground">{activity?.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Bar */}
        <div className="mt-12 bg-background rounded-xl p-6 shadow-warm border border-border">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Building Trust Through Affordable Sharing</h3>
            <p className="text-muted-foreground">Real community impact this month</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">$47,280</div>
              <div className="text-sm text-muted-foreground">Community savings</div>
              <div className="text-xs text-success mt-1">↑ 23% from last month</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary mb-1">2,847</div>
              <div className="text-sm text-muted-foreground">Affordable rentals</div>
              <div className="text-xs text-primary mt-1">Avg $8/day cost</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success mb-1">96.8%</div>
              <div className="text-sm text-muted-foreground">Average trust score</div>
              <div className="text-xs text-success mt-1">↑ 2.1% increase</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">1,234</div>
              <div className="text-sm text-muted-foreground">Active sharers</div>
              <div className="text-xs text-warning mt-1">98% positive reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveActivityFeed;