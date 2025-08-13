import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const OnboardingSection = () => {
  const [selectedPath, setSelectedPath] = useState('explorer');

  const onboardingPaths = [
    {
      id: 'explorer',
      title: "The Explorer",
      subtitle: "Perfect for first-time borrowers",
      description: "Start by discovering what's available in your neighborhood. Browse categories, read reviews, and make your first connection.",
      icon: "Compass",
      color: "primary",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      steps: [
        "Complete your profile with photo and basic info",
        "Verify your phone number and email address",
        "Browse available items in your area",
        "Make your first booking with a trusted neighbor"
      ],
      timeEstimate: "15 minutes",
      difficulty: "Beginner"
    },
    {
      id: 'sharer',
      title: "The Sharer",
      subtitle: "Ideal for those ready to lend",
      description: "Jump in by sharing items you already own. Create listings, set your availability, and start earning while helping neighbors.",
      icon: "Heart",
      color: "secondary",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop",
      steps: [
        "Set up your detailed profile and verification",
        "Take great photos of items you want to share",
        "Create your first listing with smart pricing",
        "Respond to your first booking request"
      ],
      timeEstimate: "25 minutes",
      difficulty: "Intermediate"
    },
    {
      id: 'connector',
      title: "The Connector",
      subtitle: "For community builders",
      description: "Become a neighborhood catalyst by both borrowing and lending. Help build the local sharing economy and earn community badges.",
      icon: "Users",
      color: "accent",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=200&fit=crop",
      steps: [
        "Complete full profile with identity verification",
        "Create multiple high-quality listings",
        "Make several borrowing connections",
        "Participate in community discussions and events"
      ],
      timeEstimate: "45 minutes",
      difficulty: "Advanced"
    }
  ];

  const currentPath = onboardingPaths?.find(path => path?.id === selectedPath);

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary',
        text: 'text-primary',
        border: 'border-primary',
        hover: 'hover:bg-primary hover:text-white'
      },
      secondary: {
        bg: 'bg-secondary',
        text: 'text-secondary',
        border: 'border-secondary',
        hover: 'hover:bg-secondary hover:text-white'
      },
      accent: {
        bg: 'bg-accent',
        text: 'text-accent',
        border: 'border-accent',
        hover: 'hover:bg-accent hover:text-accent-foreground'
      }
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Start Your First Share
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your path and get personalized guidance to become an active member of your neighborhood sharing community
          </p>
        </div>

        {/* Path Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {onboardingPaths?.map((path) => {
            const colors = getColorClasses(path?.color);
            const isSelected = selectedPath === path?.id;
            
            return (
              <button
                key={path?.id}
                onClick={() => setSelectedPath(path?.id)}
                className={`text-left p-6 rounded-xl border-2 transition-warm ${
                  isSelected
                    ? `${colors?.border} ${colors?.bg} text-white shadow-warm-lg`
                    : `border-border bg-background hover:border-muted-foreground hover:shadow-warm`
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isSelected ? 'bg-white/20' : colors?.bg
                  }`}>
                    <Icon 
                      name={path?.icon} 
                      size={24} 
                      color={isSelected ? 'white' : 'white'} 
                    />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${
                      isSelected ? 'text-white' : 'text-foreground'
                    }`}>
                      {path?.title}
                    </h3>
                    <p className={`text-sm ${
                      isSelected ? 'text-white/80' : 'text-muted-foreground'
                    }`}>
                      {path?.subtitle}
                    </p>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${
                  isSelected ? 'text-white/90' : 'text-muted-foreground'
                }`}>
                  {path?.description}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
                  <span className={`text-xs font-medium ${
                    isSelected ? 'text-white/80' : 'text-muted-foreground'
                  }`}>
                    {path?.timeEstimate}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    isSelected 
                      ? 'bg-white/20 text-white' :'bg-muted text-muted-foreground'
                  }`}>
                    {path?.difficulty}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Path Details */}
        <div className="bg-background rounded-2xl p-8 lg:p-12 shadow-warm-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getColorClasses(currentPath?.color)?.bg}`}>
                  <Icon name={currentPath?.icon} size={32} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {currentPath?.title} Path
                  </h3>
                  <p className={`font-medium ${getColorClasses(currentPath?.color)?.text}`}>
                    {currentPath?.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {currentPath?.description}
              </p>

              {/* Steps */}
              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-bold text-foreground mb-4">
                  Your Journey Steps:
                </h4>
                {currentPath?.steps?.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${getColorClasses(currentPath?.color)?.bg}`}>
                      {index + 1}
                    </div>
                    <p className="text-foreground pt-1">{step}</p>
                  </div>
                ))}
              </div>

              {/* Meta Info */}
              <div className="flex items-center space-x-6 mb-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>Estimated time: {currentPath?.timeEstimate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="BarChart3" size={16} />
                  <span>Difficulty: {currentPath?.difficulty}</span>
                </div>
              </div>

              {/* CTA */}
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className={`${getColorClasses(currentPath?.color)?.bg} hover:opacity-90 shadow-warm`}
              >
                Start {currentPath?.title} Journey
              </Button>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-warm-lg">
                <Image
                  src={currentPath?.image}
                  alt={currentPath?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlay Badge */}
              <div className={`absolute -top-4 -right-4 px-4 py-2 rounded-full text-white font-medium shadow-warm ${getColorClasses(currentPath?.color)?.bg}`}>
                {currentPath?.difficulty}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Not sure which path is right for you?
          </p>
          <Button
            variant="outline"
            size="lg"
            iconName="HelpCircle"
            iconPosition="left"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Take Our Quick Quiz
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSection;