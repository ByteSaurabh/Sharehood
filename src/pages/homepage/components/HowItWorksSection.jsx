import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Discover",
      subtitle: "Find affordable rentals nearby",
      description: "Browse thousands of items from verified neighbors at reasonable prices. From tools to party supplies, everything you need is available for just a fraction of retail cost.",
      icon: "Search",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
      features: [
        "Price-based search filters",
        "Trust score visibility",
        "Real-time cost comparisons"
      ],
      savings: "Save 60-90% vs buying"
    },
    {
      id: 2,
      title: "Connect",
      subtitle: "Build trust with neighbors",
      description: "Message trusted community members through our secure platform. View detailed trust scores, read reviews, and coordinate affordable rentals that work for everyone.",
      icon: "MessageCircle",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80",
      features: [
        "Trust score transparency",
        "Verified member profiles",
        "Fair pricing negotiation"
      ],
      savings: "95% trust score average"
    },
    {
      id: 3,
      title: "Share",
      subtitle: "Save money & build community",
      description: "Complete exchanges with confidence through our trusted platform. Every successful rental builds your trust score and helps create a stronger, more affordable community.",
      icon: "Handshake",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      features: [
        "Secure budget-friendly payments",
        "Trust score improvement system",
        "Community reputation building"
      ],
      savings: "$47 average savings per rental"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="TrendingDown" size={16} />
            <span>Affordable Community Sharing</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How <span className="text-primary font-accent">Trust & Savings</span> Work Together
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to access affordable rentals from trusted neighbors. 
            Build community connections while saving thousands on items you only need occasionally.
          </p>
        </div>

        <div className="space-y-20">
          {steps?.map((step, index) => (
            <div
              key={step?.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-warm">
                    <Icon name={step?.icon} size={24} color="white" />
                  </div>
                  <div className="text-4xl font-bold text-primary font-accent">
                    {String(step?.id)?.padStart(2, '0')}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {step?.title}
                  </h3>
                  <p className="text-lg text-primary font-medium mb-4">
                    {step?.subtitle}
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step?.description}
                  </p>
                </div>

                {/* Savings Highlight */}
                <div className="bg-success/10 rounded-lg p-4 border border-success/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="PiggyBank" size={16} className="text-success" />
                    <span className="font-semibold text-success">Money Saving Impact</span>
                  </div>
                  <p className="text-success font-medium">{step?.savings}</p>
                </div>

                <div className="space-y-3">
                  {step?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={12} color="white" />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-warm-lg">
                  <Image
                    src={step?.image}
                    alt={`${step?.title} - ${step?.subtitle}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Enhanced Floating Card */}
                <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-warm-lg border border-border max-w-xs">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <Icon name={step?.icon} size={16} color="white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">Step {step?.id}</p>
                        <p className="text-xs text-muted-foreground">{step?.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 bg-success/10 px-2 py-1 rounded-full">
                      <Icon name="TrendingDown" size={10} className="text-success" />
                      <span className="text-xs font-medium text-success">Save</span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Trusted community sharing
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to save money and build trust?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of neighbors saving an average of $47 per rental while building stronger community connections through trusted sharing.
            </p>
            
            {/* Value Props */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-sm text-success">
                <Icon name="DollarSign" size={16} />
                <span>70% average savings</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-primary">
                <Icon name="Shield" size={16} />
                <span>95% trust score avg</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-secondary">
                <Icon name="Users" size={16} />
                <span>50K+ trusted members</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-warm shadow-warm">
                Start Saving Today
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-warm">
                See Trust System
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;