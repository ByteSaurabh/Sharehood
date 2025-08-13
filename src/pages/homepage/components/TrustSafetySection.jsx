import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSafetySection = () => {
  const trustFeatures = [
    {
      icon: "Shield",
      title: "Trust Score System",
      description: "Dynamic scoring based on successful rentals, reviews, and community engagement. Higher scores unlock better rental rates.",
      color: "text-success",
      metric: "95% avg score"
    },
    {
      icon: "DollarSign", 
      title: "Fair Pricing Guarantee",
      description: "Algorithm ensures reasonable rental prices. Community-driven pricing keeps costs affordable for everyone.",
      color: "text-primary",
      metric: "$8-25/day avg"
    },
    {
      icon: "Users",
      title: "Verified Community",
      description: "Multi-step verification process ensures you're connecting with real, trustworthy neighbors who share our values.",
      color: "text-secondary",
      metric: "50K+ verified"
    },
    {
      icon: "Umbrella",
      title: "Complete Protection",
      description: "Comprehensive insurance coverage for all rentals, plus secure payments with fraud protection and dispute resolution.",
      color: "text-accent",
      metric: "$2M coverage"
    }
  ];

  const verificationBadges = [
    {
      name: "Identity Verified",
      icon: "CheckCircle",
      description: "Government ID confirmed",
      trustPoints: "+15 trust points"
    },
    {
      name: "Phone Verified",
      icon: "Phone",
      description: "Phone number confirmed",
      trustPoints: "+10 trust points"
    },
    {
      name: "Address Verified", 
      icon: "MapPin",
      description: "Home address confirmed",
      trustPoints: "+10 trust points"
    },
    {
      name: "Community Leader",
      icon: "Star",
      description: "Outstanding sharing record",
      trustPoints: "+25 trust points"
    }
  ];

  const trustBenefits = [
    {
      scoreRange: "90-100%",
      benefits: ["Best rental rates", "Priority support", "Extended rental periods", "Lower security deposits"],
      color: "text-success",
      bgColor: "bg-success/5 border-success/20"
    },
    {
      scoreRange: "80-89%",
      benefits: ["Good rental rates", "Standard support", "Normal rental periods", "Standard deposits"],
      color: "text-primary",
      bgColor: "bg-primary/5 border-primary/20"
    },
    {
      scoreRange: "70-79%",
      benefits: ["Fair rental rates", "Basic support", "Limited periods", "Higher deposits"],
      color: "text-warning",
      bgColor: "bg-warning/5 border-warning/20"
    }
  ];

  const safetyStats = [
    {
      value: "95.4%",
      label: "Average Trust Score",
      description: "Community-wide reliability"
    },
    {
      value: "$47",
      label: "Average Savings",
      description: "Per rental transaction"
    },
    {
      value: "24/7",
      label: "Trust Support",
      description: "Always here to help"
    },
    {
      value: "99.2%",
      label: "Fair Price Rating",
      description: "Community satisfaction"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Shield" size={16} />
            <span>Trust & Affordable Sharing</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Higher trust scores = <span className="text-primary font-accent">better rental rates</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive trust system rewards reliable community members with access to the best rental prices. 
            Build trust, save more, and strengthen your neighborhood connections.
          </p>
        </div>

        {/* Trust Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustFeatures?.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-warm border border-border hover:shadow-warm-lg transition-warm text-center group"
            >
              <div className={`w-12 h-12 ${feature?.color?.replace('text-', 'bg-')}/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-warm`}>
                <Icon name={feature?.icon} size={24} className={feature?.color} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature?.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{feature?.description}</p>
              <div className={`text-xs font-medium ${feature?.color} bg-current/10 px-2 py-1 rounded-full`}>
                {feature?.metric}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Trust Score Benefits */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Trust Score Benefits & Pricing Tiers
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Your trust score directly impacts your rental rates and community privileges. 
              Higher scores unlock better prices and enhanced sharing opportunities.
            </p>

            <div className="space-y-4">
              {trustBenefits?.map((tier, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${tier?.bgColor}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className={`font-semibold ${tier?.color}`}>Trust Score: {tier?.scoreRange}</h4>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className={tier?.color} />
                      <span className={`text-sm font-medium ${tier?.color}`}>
                        {tier?.scoreRange?.split('-')?.[0]}%+
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {tier?.benefits?.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-sm">
                        <Icon name="Check" size={12} className={tier?.color} />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Profile Preview */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-6 shadow-warm-lg border border-border">
              {/* Profile Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Sarah Chen profile"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-card flex items-center justify-center">
                    <Icon name="Check" size={12} color="white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Sarah Chen</h4>
                  <p className="text-sm text-muted-foreground">Riverside Commons • Member since 2023</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {[1, 2, 3, 4, 5]?.map((star) => (
                      <Icon key={star} name="Star" size={12} className="text-warning fill-current" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">(47 rentals)</span>
                  </div>
                </div>
              </div>

              {/* Verification Badges with Trust Points */}
              <div className="grid grid-cols-1 gap-3 mb-6">
                {verificationBadges?.slice(0, 4)?.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-success/5 rounded-lg border border-success/20"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name={badge?.icon} size={16} className="text-success" />
                      <div>
                        <span className="text-sm font-medium text-foreground">{badge?.name}</span>
                        <p className="text-xs text-muted-foreground">{badge?.description}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">
                      {badge?.trustPoints}
                    </span>
                  </div>
                ))}
              </div>

              {/* Enhanced Trust Score Display */}
              <div className="bg-background rounded-lg p-4 border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-sm font-medium text-foreground">Trust Score</span>
                    <p className="text-xs text-muted-foreground">Unlocks best rental rates</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-success">98%</span>
                    <p className="text-xs text-success">Premium tier</p>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-success to-success/80 h-3 rounded-full" style={{ width: '98%' }}></div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-success font-medium">Excellent standing</span>
                  <span className="text-muted-foreground">47 successful rentals</span>
                </div>
              </div>

              {/* Rental Benefits */}
              <div className="mt-4 p-3 bg-success/5 rounded-lg border border-success/20">
                <h5 className="text-sm font-semibold text-success mb-2">Your Trust Benefits:</h5>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-foreground">• 15% better rates</div>
                  <div className="text-foreground">• Priority bookings</div>
                  <div className="text-foreground">• Lower deposits</div>
                  <div className="text-foreground">• Extended rentals</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Community Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Trusted Community, Affordable Sharing
            </h3>
            <p className="text-muted-foreground">
              Real metrics from our trusted community of neighbors sharing at fair prices
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {safetyStats?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat?.value}
                </div>
                <div className="font-medium text-foreground mb-1">{stat?.label}</div>
                <div className="text-sm text-muted-foreground">{stat?.description}</div>
              </div>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 text-center">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Why Trust Scores Matter for Affordable Sharing
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Higher trust = lower risk = better rental rates for everyone in the community
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-success">
                <Icon name="TrendingDown" size={16} />
                <span>Lower Prices</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <Icon name="Shield" size={16} />
                <span>Higher Trust</span>
              </div>
              <div className="flex items-center space-x-2 text-secondary">
                <Icon name="Heart" size={16} />
                <span>Stronger Community</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-warm shadow-warm mr-4">
            Build Your Trust Score
          </button>
          <button className="border border-success text-success px-8 py-3 rounded-lg font-medium hover:bg-success hover:text-success-foreground transition-warm">
            View Pricing Tiers
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustSafetySection;