import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const NeighborhoodSpotlight = () => {
  const [currentSpotlight, setCurrentSpotlight] = useState(0);

  const neighborhoods = [
    {
      id: 1,
      name: "Riverside Commons",
      location: "Portland, OR",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      stats: {
        members: 342,
        itemsShared: 1247,
        moneySaved: 8450,
        carbonReduced: 2.3
      },
      topCategories: ["Tools", "Kitchen", "Garden"],
      testimonial: {
        text: "I've saved over $500 this year just by borrowing instead of buying. Plus, I've made amazing friends!",
        author: "Maria Santos",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      }
    },
    {
      id: 2,
      name: "Maple Heights",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
      stats: {
        members: 428,
        itemsShared: 1653,
        moneySaved: 12200,
        carbonReduced: 3.1
      },
      topCategories: ["Electronics", "Sports", "Party"],
      testimonial: {
        text: "Our neighborhood feels like a real community now. We help each other and share resources sustainably.",
        author: "James Wilson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      }
    },
    {
      id: 3,
      name: "Sunset Village",
      location: "Denver, CO",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      stats: {
        members: 289,
        itemsShared: 947,
        moneySaved: 6800,
        carbonReduced: 1.8
      },
      topCategories: ["Outdoor", "Baby", "Books"],
      testimonial: {
        text: "From camping gear to baby items, I can find everything I need without cluttering my home.",
        author: "Lisa Chen",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpotlight((prev) => (prev + 1) % neighborhoods?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [neighborhoods?.length]);

  const currentNeighborhood = neighborhoods?.[currentSpotlight];

  return (
    <section className="py-20 bg-gradient-to-br from-card via-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="MapPin" size={16} />
            <span>Community Spotlight</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Thriving <span className="text-primary font-accent">neighborhoods</span> across the country
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how communities are transforming through sharing. Real impact, real savings, real connections.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image & Basic Info */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-warm-lg">
              <Image
                src={currentNeighborhood?.image}
                alt={`${currentNeighborhood?.name} neighborhood`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Neighborhood Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {currentNeighborhood?.name}
                  </h3>
                  <p className="text-muted-foreground flex items-center">
                    <Icon name="MapPin" size={16} className="mr-1" />
                    {currentNeighborhood?.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {neighborhoods?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSpotlight(index)}
                  className={`w-3 h-3 rounded-full transition-warm ${
                    index === currentSpotlight ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats & Details */}
          <div className="space-y-8">
            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-background rounded-xl p-6 shadow-warm border border-border text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {currentNeighborhood?.stats?.members?.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-warm border border-border text-center">
                <div className="text-2xl font-bold text-secondary mb-1">
                  {currentNeighborhood?.stats?.itemsShared?.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Items Shared</div>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-warm border border-border text-center">
                <div className="text-2xl font-bold text-accent mb-1">
                  ${currentNeighborhood?.stats?.moneySaved?.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Community Savings</div>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-warm border border-border text-center">
                <div className="text-2xl font-bold text-success mb-1">
                  {currentNeighborhood?.stats?.carbonReduced}T
                </div>
                <div className="text-sm text-muted-foreground">CO₂ Reduced</div>
              </div>
            </div>

            {/* Top Categories */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Most Shared Categories</h4>
              <div className="flex flex-wrap gap-2">
                {currentNeighborhood?.topCategories?.map((category, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-background rounded-xl p-6 shadow-warm border border-border">
              <div className="flex items-start space-x-4">
                <Image
                  src={currentNeighborhood?.testimonial?.avatar}
                  alt={currentNeighborhood?.testimonial?.author}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-foreground mb-3 italic">
                    "{currentNeighborhood?.testimonial?.text}"
                  </p>
                  <p className="font-medium text-foreground">
                    {currentNeighborhood?.testimonial?.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentNeighborhood?.name} Resident
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see your neighborhood featured here?
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-warm shadow-warm">
            Start Your Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodSpotlight;