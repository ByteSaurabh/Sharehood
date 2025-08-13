import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningHub = () => {
  const articles = [
    {
      id: 1,
      title: "The Science Behind Sharing Economy",
      description: "Understanding how sharing reduces environmental impact and builds stronger communities.",
      category: "Environment",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400",
      icon: "BookOpen",
      featured: true
    },
    {
      id: 2,
      title: "Building Trust in Your Neighborhood",
      description: "Tips for creating meaningful connections through sharing and community engagement.",
      category: "Community",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
      icon: "Heart",
      featured: false
    },
    {
      id: 3,
      title: "Maximizing Your Sharing Impact",
      description: "Strategies to increase your environmental and social impact through smart sharing choices.",
      category: "Tips",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400",
      icon: "TrendingUp",
      featured: false
    },
    {
      id: 4,
      title: "Circular Economy Basics",
      description: "Learn how the circular economy works and your role in creating sustainable communities.",
      category: "Education",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400",
      icon: "Recycle",
      featured: false
    }
  ];

  const tips = [
    {
      id: 1,
      title: "Take Quality Photos",
      description: "Good photos increase borrowing requests by 300%",
      icon: "Camera"
    },
    {
      id: 2,
      title: "Set Clear Availability",
      description: "Update your calendar to avoid scheduling conflicts",
      icon: "Calendar"
    },
    {
      id: 3,
      title: "Respond Quickly",
      description: "Fast responses build trust and improve your rating",
      icon: "MessageCircle"
    },
    {
      id: 4,
      title: "Share Usage Tips",
      description: "Include helpful instructions with your items",
      icon: "Info"
    }
  ];

  const challenges = [
    {
      id: 1,
      title: "30-Day Sharing Challenge",
      description: "Share something new every day for a month",
      participants: 234,
      reward: "Sharing Streak Badge",
      difficulty: "Medium",
      icon: "Target"
    },
    {
      id: 2,
      title: "Zero Waste Weekend",
      description: "Meet all your needs through sharing this weekend",
      participants: 89,
      reward: "Eco Warrior Certificate",
      difficulty: "Hard",
      icon: "Leaf"
    },
    {
      id: 3,
      title: "Neighbor Connection",
      description: "Help 5 new neighbors this week",
      participants: 156,
      reward: "Community Helper Badge",
      difficulty: "Easy",
      icon: "Users"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-success bg-success/10';
      case 'Medium': return 'text-warning bg-warning/10';
      case 'Hard': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="space-y-8">
      {/* Featured Article */}
      <div className="bg-card rounded-lg p-6 shadow-warm border border-border">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="GraduationCap" size={20} color="white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Learning Hub</h2>
        </div>
        
        {articles?.filter(article => article?.featured)?.map((article) => (
          <div key={article?.id} className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                  Featured
                </span>
                <span className="text-xs text-muted-foreground">{article?.category}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{article?.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{article?.title}</h3>
              <p className="text-muted-foreground mb-4">{article?.description}</p>
              
              <Button variant="default">
                Read Article
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={article?.image} 
                alt={article?.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Tips */}
        <div className="bg-card rounded-lg p-6 shadow-warm border border-border">
          <h3 className="text-xl font-bold text-foreground mb-4">Quick Tips</h3>
          
          <div className="space-y-4">
            {tips?.map((tip) => (
              <div key={tip?.id} className="flex items-start space-x-3 p-3 bg-background rounded-lg border border-border">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={tip?.icon} size={16} color="white" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{tip?.title}</h4>
                  <p className="text-sm text-muted-foreground">{tip?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Challenges */}
        <div className="bg-card rounded-lg p-6 shadow-warm border border-border">
          <h3 className="text-xl font-bold text-foreground mb-4">Community Challenges</h3>
          
          <div className="space-y-4">
            {challenges?.map((challenge) => (
              <div key={challenge?.id} className="p-4 bg-background rounded-lg border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                      <Icon name={challenge?.icon} size={16} color="white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{challenge?.title}</h4>
                      <p className="text-sm text-muted-foreground">{challenge?.description}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(challenge?.difficulty)}`}>
                    {challenge?.difficulty}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Icon name="Users" size={14} />
                    <span>{challenge?.participants} participating</span>
                  </div>
                  <div className="flex items-center space-x-2 text-primary">
                    <Icon name="Award" size={14} />
                    <span>{challenge?.reward}</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full mt-3">
                  Join Challenge
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* More Articles */}
      <div className="bg-card rounded-lg p-6 shadow-warm border border-border">
        <h3 className="text-xl font-bold text-foreground mb-6">More Articles</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles?.filter(article => !article?.featured)?.map((article) => (
            <div key={article?.id} className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-warm transition-all">
              <img 
                src={article?.image} 
                alt={article?.title}
                className="w-full h-32 object-cover"
              />
              
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs text-primary">{article?.category}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{article?.readTime}</span>
                </div>
                
                <h4 className="font-semibold text-foreground mb-2">{article?.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{article?.description}</p>
                
                <Button variant="ghost" size="sm" className="w-full">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningHub;