import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const NeighborhoodSimulator = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [animationPhase, setAnimationPhase] = useState('idle');

  const simulationItems = [
    {
      id: 1,
      name: "Power Drill",
      owner: "Mike",
      borrower: "Sarah",
      ownerAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      borrowerAvatar: "https://randomuser.me/api/portraits/women/28.jpg",
      itemImage: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=100&h=100&fit=crop",
      path: "drill-path",
      duration: "2 days",
      savings: "$45"
    },
    {
      id: 2,
      name: "Camping Tent",
      owner: "Lisa",
      borrower: "David",
      ownerAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
      borrowerAvatar: "https://randomuser.me/api/portraits/men/38.jpg",
      itemImage: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=100&h=100&fit=crop",
      path: "tent-path",
      duration: "1 week",
      savings: "$120"
    },
    {
      id: 3,
      name: "Stand Mixer",
      owner: "Emma",
      borrower: "Alex",
      ownerAvatar: "https://randomuser.me/api/portraits/women/52.jpg",
      borrowerAvatar: "https://randomuser.me/api/portraits/men/29.jpg",
      itemImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
      path: "mixer-path",
      duration: "3 days",
      savings: "$80"
    }
  ];

  const neighborhoodHouses = [
    { id: 1, x: 20, y: 30, owner: "Mike", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, x: 45, y: 20, owner: "Sarah", avatar: "https://randomuser.me/api/portraits/women/28.jpg" },
    { id: 3, x: 70, y: 35, owner: "Lisa", avatar: "https://randomuser.me/api/portraits/women/45.jpg" },
    { id: 4, x: 25, y: 65, owner: "David", avatar: "https://randomuser.me/api/portraits/men/38.jpg" },
    { id: 5, x: 60, y: 70, owner: "Emma", avatar: "https://randomuser.me/api/portraits/women/52.jpg" },
    { id: 6, x: 80, y: 60, owner: "Alex", avatar: "https://randomuser.me/api/portraits/men/29.jpg" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase('moving');
      setTimeout(() => {
        setActiveItem((prev) => (prev + 1) % simulationItems?.length);
        setAnimationPhase('idle');
      }, 2000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = simulationItems?.[activeItem];

  return (
    <section className="py-20 bg-gradient-to-br from-card to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            See Your Neighborhood in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how items flow through your community, creating connections and reducing waste with every share
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Simulator */}
          <div className="relative">
            <div className="bg-background rounded-2xl p-8 shadow-warm-lg">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                Live Neighborhood Activity
              </h3>
              
              {/* Neighborhood Map */}
              <div className="relative h-80 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-16 h-12 bg-green-400 rounded"></div>
                  <div className="absolute top-8 right-8 w-20 h-16 bg-blue-400 rounded"></div>
                  <div className="absolute bottom-6 left-12 w-12 h-8 bg-yellow-400 rounded"></div>
                </div>

                {/* Houses */}
                {neighborhoodHouses?.map((house) => (
                  <div
                    key={house?.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${house?.x}%`, top: `${house?.y}%` }}
                  >
                    <div className="relative">
                      <div className="w-8 h-8 bg-primary rounded-lg shadow-warm flex items-center justify-center">
                        <Icon name="Home" size={16} color="white" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                        <Image
                          src={house?.avatar}
                          alt={house?.owner}
                          className="w-6 h-6 rounded-full border-2 border-white shadow-warm"
                        />
                      </div>
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <span className="text-xs font-medium text-foreground bg-white px-2 py-1 rounded shadow-warm">
                          {house?.owner}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Moving Item */}
                <div
                  className={`absolute w-12 h-12 transition-all duration-2000 ease-in-out ${
                    animationPhase === 'moving' ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    left: animationPhase === 'moving' ? '60%' : '20%',
                    top: animationPhase === 'moving' ? '65%' : '30%',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-accent rounded-full shadow-warm-lg flex items-center justify-center">
                      <Image
                        src={currentItem?.itemImage}
                        alt={currentItem?.name}
                        className="w-8 h-8 rounded object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                      <Icon name="ArrowRight" size={12} color="white" />
                    </div>
                  </div>
                </div>

                {/* Connection Line */}
                {animationPhase === 'moving' && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D4704A" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#7A9B76" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 20% 30% Q 40% 10% 60% 65%"
                      stroke="url(#pathGradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>

          {/* Current Activity Details */}
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-warm">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={currentItem?.itemImage}
                  alt={currentItem?.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-xl font-bold text-foreground">
                    {currentItem?.name}
                  </h4>
                  <p className="text-muted-foreground">
                    Currently being shared
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Image
                      src={currentItem?.ownerAvatar}
                      alt={currentItem?.owner}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium text-foreground">
                      {currentItem?.owner}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Lender</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Image
                      src={currentItem?.borrowerAvatar}
                      alt={currentItem?.borrower}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium text-foreground">
                      {currentItem?.borrower}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Borrower</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-border">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium text-foreground">{currentItem?.duration}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Savings</p>
                  <p className="font-medium text-success">{currentItem?.savings}</p>
                </div>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-background rounded-lg p-4 text-center shadow-warm">
                <Icon name="Recycle" size={24} className="text-success mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">89%</p>
                <p className="text-xs text-muted-foreground">Waste Reduced</p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center shadow-warm">
                <Icon name="Users" size={24} className="text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">156</p>
                <p className="text-xs text-muted-foreground">Connections</p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center shadow-warm">
                <Icon name="DollarSign" size={24} className="text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">$2.4K</p>
                <p className="text-xs text-muted-foreground">Saved</p>
              </div>
            </div>

            {/* Activity Indicators */}
            <div className="flex justify-center space-x-2">
              {simulationItems?.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-warm ${
                    index === activeItem ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodSimulator;