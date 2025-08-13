import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunityAchievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Carbon Crusher",
      description: "Saved 1,000 lbs of CO2 through sharing",
      icon: "Leaf",
      color: "bg-secondary",
      earned: true,
      earnedDate: "Dec 2024",
      rarity: "Epic",
      progress: 100
    },
    {
      id: 2,
      title: "Community Builder",
      description: "Connected 25+ neighbors through sharing",
      icon: "Users",
      color: "bg-accent",
      earned: true,
      earnedDate: "Nov 2024",
      rarity: "Rare",
      progress: 100
    },
    {
      id: 3,
      title: "Tool Master",
      description: "Shared 50 different tools with neighbors",
      icon: "Wrench",
      color: "bg-primary",
      earned: false,
      progress: 76,
      target: 50,
      current: 38,
      rarity: "Epic"
    },
    {
      id: 4,
      title: "Green Champion",
      description: "Prevented 500 lbs of waste from landfills",
      icon: "Recycle",
      color: "bg-success",
      earned: false,
      progress: 45,
      target: 500,
      current: 225,
      rarity: "Legendary"
    },
    {
      id: 5,
      title: "Sharing Streak",
      description: "Shared items for 30 consecutive days",
      icon: "Zap",
      color: "bg-warning",
      earned: true,
      earnedDate: "Oct 2024",
      rarity: "Rare",
      progress: 100
    },
    {
      id: 6,
      title: "Neighborhood Hero",
      description: "Helped 100+ neighbors access needed items",
      icon: "Heart",
      color: "bg-error",
      earned: false,
      progress: 67,
      target: 100,
      current: 67,
      rarity: "Legendary"
    }
  ];

  const milestones = [
    {
      id: 1,
      title: "First Share",
      description: "Shared your first item with a neighbor",
      date: "March 2024",
      icon: "Gift"
    },
    {
      id: 2,
      title: "Trust Builder",
      description: "Received your first 5-star review",
      date: "April 2024",
      icon: "Star"
    },
    {
      id: 3,
      title: "Community Member",
      description: "Joined 5 neighborhood sharing groups",
      date: "June 2024",
      icon: "Users"
    },
    {
      id: 4,
      title: "Eco Warrior",
      description: "Saved your first 100 lbs of CO2",
      date: "August 2024",
      icon: "Leaf"
    }
  ];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Common': return 'text-gray-500';
      case 'Rare': return 'text-blue-500';
      case 'Epic': return 'text-purple-500';
      case 'Legendary': return 'text-yellow-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Achievements Grid */}
      <div className="bg-card rounded-lg p-6 shadow-warm border border-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Your Achievements</h2>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Award" size={16} />
            <span>4 of 6 earned</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements?.map((achievement) => (
            <div 
              key={achievement?.id} 
              className={`relative p-4 rounded-lg border-2 transition-all ${
                achievement?.earned 
                  ? 'border-primary bg-primary/5' :'border-border bg-background opacity-75'
              }`}
            >
              {achievement?.earned && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <Icon name="Check" size={14} color="white" />
                </div>
              )}
              
              <div className="flex items-start justify-between mb-3">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${achievement?.color} ${
                  !achievement?.earned ? 'opacity-50' : ''
                }`}>
                  <Icon name={achievement?.icon} size={24} color="white" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${getRarityColor(achievement?.rarity)} bg-current/10`}>
                  {achievement?.rarity}
                </span>
              </div>
              
              <h3 className={`font-semibold mb-2 ${achievement?.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                {achievement?.title}
              </h3>
              <p className={`text-sm mb-3 ${achievement?.earned ? 'text-muted-foreground' : 'text-muted-foreground/70'}`}>
                {achievement?.description}
              </p>
              
              {achievement?.earned ? (
                <div className="flex items-center space-x-2 text-sm text-success">
                  <Icon name="Calendar" size={14} />
                  <span>Earned {achievement?.earnedDate}</span>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">{achievement?.current} / {achievement?.target}</span>
                    <span className="text-muted-foreground">{achievement?.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${achievement?.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline">
            Share Achievements
          </Button>
        </div>
      </div>
      {/* Milestones Timeline */}
      <div className="bg-card rounded-lg p-6 shadow-warm border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-6">Your Journey</h2>
        
        <div className="space-y-4">
          {milestones?.map((milestone, index) => (
            <div key={milestone?.id} className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Icon name={milestone?.icon} size={20} color="white" />
                </div>
                {index < milestones?.length - 1 && (
                  <div className="w-0.5 h-8 bg-border mt-2"></div>
                )}
              </div>
              
              <div className="flex-1 pb-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-foreground">{milestone?.title}</h3>
                  <span className="text-sm text-muted-foreground">{milestone?.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{milestone?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Social Sharing */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20">
        <div className="text-center">
          <Icon name="Share2" size={32} color="var(--color-primary)" className="mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">Share Your Impact</h3>
          <p className="text-muted-foreground mb-6">
            Show your friends how you're making a difference in your community!
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="outline" size="sm">
              <Icon name="Facebook" size={16} className="mr-2" />
              Facebook
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Twitter" size={16} className="mr-2" />
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Instagram" size={16} className="mr-2" />
              Instagram
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Linkedin" size={16} className="mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityAchievements;