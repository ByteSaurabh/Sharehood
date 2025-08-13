import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-muted py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-accent rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Sharing made{' '}
            <span className="text-primary font-accent">simple</span>,{' '}
            <span className="text-secondary font-accent">safe</span>, and{' '}
            <span className="text-accent font-accent">social</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your neighborhood into a thriving sharing community. From power tools to party supplies, 
            discover everything you need right next door while building meaningful connections with your neighbors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default" 
              size="lg" 
              iconName="Play" 
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 shadow-warm"
            >
              Watch How It Works
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              iconName="ArrowRight" 
              iconPosition="right"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Start Sharing Today
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-success" />
              <span>100% Secure Transactions</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} className="text-primary" />
              <span>50K+ Active Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={20} className="text-warning" />
              <span>4.9/5 Trust Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;