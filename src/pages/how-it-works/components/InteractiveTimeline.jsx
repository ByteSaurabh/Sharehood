import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const InteractiveTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const timelineSteps = [
    {
      id: 0,
      title: "Discover",
      subtitle: "Find what you need nearby",
      description: "Browse items in your neighborhood using our smart search filters. See what\'s available within walking distance and read reviews from trusted neighbors.",
      icon: "Search",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      features: ["Location-based search", "Real-time availability", "Neighbor reviews"],
      testimonial: {
        text: "Found a pressure washer just 2 blocks away! Saved me $200 and met a great neighbor.",
        author: "Sarah M.",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      }
    },
    {
      id: 1,
      title: "Connect",
      subtitle: "Chat with verified neighbors",
      description: "Message item owners directly through our secure platform. Ask questions, coordinate pickup times, and build trust before meeting.",
      icon: "MessageCircle",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop",
      features: ["Secure messaging", "Profile verification", "Response time tracking"],
      testimonial: {
        text: "The messaging system made coordination so easy. We arranged everything in minutes!",
        author: "Mike R.",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      }
    },
    {
      id: 2,
      title: "Exchange",
      subtitle: "Safe and simple handoffs",
      description: "Meet your neighbor for a quick, friendly exchange. Our platform handles payment securely, and both parties rate the experience.",
      icon: "Handshake",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
      features: ["Secure payments", "Insurance coverage", "Mutual ratings"],
      testimonial: {
        text: "Such a smooth experience! Payment was automatic and we both felt completely safe.",
        author: "Lisa K.",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg"
      }
    },
    {
      id: 3,
      title: "Build Community",
      subtitle: "Grow your neighborhood network",
      description: "Each successful exchange builds trust and expands your local network. Become a valued community member and discover new sharing opportunities.",
      icon: "Users",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      features: ["Trust score growth", "Community events", "Neighbor recommendations"],
      testimonial: {
        text: "Started with borrowing a drill, now I'm part of an amazing neighborhood community!",
        author: "David L.",
        avatar: "https://randomuser.me/api/portraits/men/38.jpg"
      }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Your Sharing Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to start sharing with your neighbors and building community connections
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4 bg-card rounded-full p-2 shadow-warm">
            {timelineSteps?.map((step, index) => (
              <button
                key={step?.id}
                onClick={() => setActiveStep(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-warm ${
                  activeStep === index
                    ? 'bg-primary text-primary-foreground shadow-warm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={step?.icon} size={20} />
                <span className="hidden sm:inline font-medium">{step?.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Content */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-warm-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name={timelineSteps?.[activeStep]?.icon} size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {timelineSteps?.[activeStep]?.title}
                  </h3>
                  <p className="text-primary font-medium">
                    {timelineSteps?.[activeStep]?.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {timelineSteps?.[activeStep]?.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {timelineSteps?.[activeStep]?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={20} className="text-success" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-muted rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src={timelineSteps?.[activeStep]?.testimonial?.avatar}
                    alt={timelineSteps?.[activeStep]?.testimonial?.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-foreground italic mb-2">
                      "{timelineSteps?.[activeStep]?.testimonial?.text}"
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                      — {timelineSteps?.[activeStep]?.testimonial?.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-warm-lg">
                <Image
                  src={timelineSteps?.[activeStep]?.image}
                  alt={timelineSteps?.[activeStep]?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Step Indicator */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-warm">
                <span className="text-xl font-bold text-accent-foreground">
                  {activeStep + 1}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {timelineSteps?.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-warm ${
                  index === activeStep ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;