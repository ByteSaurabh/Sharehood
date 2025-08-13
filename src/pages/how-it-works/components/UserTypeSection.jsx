import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const UserTypeSection = () => {
  const [activeTab, setActiveTab] = useState('borrowers');

  const borrowerSteps = [
    {
      title: "Smart Discovery",
      description: "Use our intelligent search to find exactly what you need within your preferred distance. Filter by category, availability, and neighbor ratings.",
      icon: "Search",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
      features: ["Location radius control", "Category filters", "Availability calendar", "Price range selection"]
    },
    {
      title: "Profile Verification",
      description: "View detailed neighbor profiles with verification badges, ratings, and community contributions. Make informed decisions about who to borrow from.",
      icon: "UserCheck",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      features: ["Identity verification", "Community ratings", "Response time tracking", "Sharing history"]
    },
    {
      title: "Seamless Booking",
      description: "Book items instantly with our integrated calendar system. Coordinate pickup times through secure messaging and automatic payment processing.",
      icon: "Calendar",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
      features: ["Real-time availability", "Instant booking", "Secure messaging", "Automatic payments"]
    }
  ];

  const lenderSteps = [
    {
      title: "Easy Listing Creation",
      description: "Create compelling listings with our photo guide and smart pricing suggestions based on local market data. Get your items discovered quickly.",
      icon: "Camera",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=200&fit=crop",
      features: ["Photo optimization tips", "Smart pricing suggestions", "Category recommendations", "Availability scheduling"]
    },
    {
      title: "Market Intelligence",
      description: "Access local market data to price your items competitively. See what similar items rent for in your area and optimize your earnings.",
      icon: "TrendingUp",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      features: ["Local pricing data", "Demand analytics", "Seasonal trends", "Revenue optimization"]
    },
    {
      title: "Reputation Building",
      description: "Build your reputation through positive exchanges and become a trusted community member. Higher ratings lead to more bookings and better rates.",
      icon: "Star",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop",
      features: ["Trust score system", "Review management", "Community badges", "Referral rewards"]
    }
  ];

  const currentSteps = activeTab === 'borrowers' ? borrowerSteps : lenderSteps;

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Designed for Every Sharing Style
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking to borrow or lend, we've streamlined the process to make sharing effortless and rewarding
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-background rounded-full p-1 shadow-warm">
            <button
              onClick={() => setActiveTab('borrowers')}
              className={`px-8 py-3 rounded-full font-medium transition-warm ${
                activeTab === 'borrowers' ?'bg-primary text-primary-foreground shadow-warm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              For Borrowers
            </button>
            <button
              onClick={() => setActiveTab('lenders')}
              className={`px-8 py-3 rounded-full font-medium transition-warm ${
                activeTab === 'lenders' ?'bg-secondary text-secondary-foreground shadow-warm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              For Lenders
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {currentSteps?.map((step, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-warm hover:shadow-warm-lg transition-warm">
              {/* Image */}
              <div className="aspect-[3/2] rounded-lg overflow-hidden mb-6">
                <Image
                  src={step?.image}
                  alt={step?.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex items-start space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  activeTab === 'borrowers' ? 'bg-primary' : 'bg-secondary'
                }`}>
                  <Icon name={step?.icon} size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step?.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step?.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {step?.features?.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            variant="default"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            className={`${
              activeTab === 'borrowers' ?'bg-primary hover:bg-primary/90' :'bg-secondary hover:bg-secondary/90'
            } shadow-warm`}
          >
            {activeTab === 'borrowers' ? 'Start Borrowing' : 'Start Lending'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UserTypeSection;