import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onLocationDetect, onWatchVideo }) => {
  const [isLocationLoading, setIsLocationLoading] = useState(false);

  const handleLocationDetect = async () => {
    setIsLocationLoading(true);
    try {
      await onLocationDetect();
    } finally {
      setIsLocationLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-muted">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
          alt="Neighbors sharing items in a friendly community setting"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-success/20 text-success-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="DollarSign" size={16} />
              <span>Save 70% on everyday items</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Share, Rent & Save at{' '}
              <span className="text-primary font-accent">Affordable Prices</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
              Access thousands of items from trusted neighbors at reasonable rental prices. 
              Build community trust while saving money on tools, appliances, and more you only need occasionally.
            </p>

            {/* Value Propositions */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="PiggyBank" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Affordable Rentals</p>
                  <p className="text-sm text-muted-foreground">$5-15/day average</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg border border-border">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={20} className="text-success" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Trusted Community</p>
                  <p className="text-sm text-muted-foreground">95% trust score avg</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                loading={isLocationLoading}
                iconName="MapPin"
                iconPosition="left"
                onClick={handleLocationDetect}
                className="bg-primary hover:bg-primary/90 shadow-warm-lg"
              >
                Start Saving Today
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Play"
                iconPosition="left"
                onClick={onWatchVideo}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                How Trust Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-success" />
                <span>50K+ Verified Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} className="text-warning" />
                <span>4.9 Trust Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="DollarSign" size={16} className="text-primary" />
                <span>$2M+ Saved</span>
              </div>
            </div>
          </div>

          {/* Right Content - Community Stats */}
          <div className="relative">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-warm-lg border border-border">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="TrendingDown" size={20} color="white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Available Near You</h3>
                  <p className="text-sm text-muted-foreground">Affordable rentals from trusted neighbors</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Icon name="Drill" size={16} color="white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Power Drill</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-xs text-muted-foreground">Sarah M. • 0.3 mi</p>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={10} className="text-warning fill-current" />
                          <span className="text-xs text-success font-medium">98%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-primary font-bold">$8/day</span>
                    <p className="text-xs text-muted-foreground line-through">Store: $89</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Camera" size={16} color="white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">DSLR Camera</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-xs text-muted-foreground">Mike R. • 0.5 mi</p>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={10} className="text-warning fill-current" />
                          <span className="text-xs text-success font-medium">96%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-primary font-bold">$15/day</span>
                    <p className="text-xs text-muted-foreground line-through">Store: $1,200</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center">
                      <Icon name="Tent" size={16} color="white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Camping Tent</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-xs text-muted-foreground">Emma T. • 0.7 mi</p>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={10} className="text-warning fill-current" />
                          <span className="text-xs text-success font-medium">99%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-primary font-bold">$12/day</span>
                    <p className="text-xs text-muted-foreground line-through">Store: $180</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Average savings per rental</span>
                  <span className="font-bold text-success">$47</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Trusted neighbors online</span>
                  <span className="font-medium text-foreground">247 active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;