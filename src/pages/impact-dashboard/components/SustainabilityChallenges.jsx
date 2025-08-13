import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SustainabilityChallenges = () => {
  const challenges = [
    {
      id: 1,
      title: "Share 100 Power Tools",
      description: "Help neighbors access tools without buying new ones",
      progress: 67,
      target: 100,
      current: 67,
      timeLeft: "12 days left",
      reward: "Community Champion Badge",
      participants: 45,
      category: "Tools",
      icon: "Wrench",
      color: "bg-primary"
    },
    {
      id: 2,
      title: "Save 500 Pounds of CO2",
      description: "Reduce carbon footprint through sharing economy",
      progress: 82,
      target: 500,
      current: 410,
      timeLeft: "8 days left",
      reward: "Eco Warrior Certificate",
      participants: 78,
      category: "Environment",
      icon: "Leaf",
      color: "bg-secondary"
    },
    {
      id: 3,
      title: "Connect 50 New Neighbors",
      description: "Build stronger community bonds through sharing",
      progress: 34,
      target: 50,
      current: 17,
      timeLeft: "20 days left",
      reward: "Community Builder Badge",
      participants: 23,
      category: "Social",
      icon: "Users",
      color: "bg-accent"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Sarah Chen", points: 1250, avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150" },
    { rank: 2, name: "Mike Rodriguez", points: 1180, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" },
    { rank: 3, name: "Emma Thompson", points: 1050, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150" },
    { rank: 4, name: "David Kim", points: 980, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" },
    { rank: 5, name: "Lisa Park", points: 920, avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150" }
  ];

  return (
    <div className="space-y-6">
      {/* Active Challenges */}
      <div className="bg-card rounded-lg p-6 shadow-warm border border-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Monthly Challenges</h2>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {challenges?.map((challenge) => (
            <div key={challenge?.id} className="bg-background rounded-lg p-4 border border-border">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${challenge?.color}`}>
                  <Icon name={challenge?.icon} size={20} color="white" />
                </div>
                <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                  {challenge?.category}
                </span>
              </div>
              
              <h3 className="font-semibold text-foreground mb-2">{challenge?.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{challenge?.description}</p>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-foreground">{challenge?.current} / {challenge?.target}</span>
                  <span className="text-muted-foreground">{challenge?.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${challenge?.color}`}
                    style={{ width: `${challenge?.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Icon name="Users" size={14} />
                  <span>{challenge?.participants} participating</span>
                </div>
                <span className="text-warning font-medium">{challenge?.timeLeft}</span>
              </div>
              
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} color="var(--color-primary)" />
                  <span className="text-sm font-medium text-foreground">Reward: {challenge?.reward}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Leaderboard */}
      <div className="bg-card rounded-lg p-6 shadow-warm border border-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Community Leaderboard</h2>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Trophy" size={16} />
            <span>This Month</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {leaderboard?.map((member) => (
            <div key={member?.rank} className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
              <div className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  member?.rank === 1 ? 'bg-yellow-500 text-white' :
                  member?.rank === 2 ? 'bg-gray-400 text-white' :
                  member?.rank === 3 ? 'bg-amber-600 text-white': 'bg-muted text-muted-foreground'
                }`}>
                  {member?.rank}
                </div>
                <img 
                  src={member?.avatar} 
                  alt={member?.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-medium text-foreground">{member?.name}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="font-bold text-primary">{member?.points}</span>
                <span className="text-sm text-muted-foreground">points</span>
                {member?.rank <= 3 && (
                  <Icon name="Crown" size={16} color="var(--color-warning)" />
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline">
            View Full Leaderboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityChallenges;