import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const InteractiveMapPreview = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const nearbyItems = [
    {
      id: 1,
      name: "Power Drill",
      category: "Tools",
      price: "$8/day",
      distance: "0.2 miles",
      owner: "Mike R.",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      position: { top: '25%', left: '30%' },
      available: true
    },
    {
      id: 2,
      name: "Stand Mixer",
      category: "Kitchen",
      price: "$12/day",
      distance: "0.4 miles",
      owner: "Sarah C.",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      position: { top: '45%', left: '60%' },
      available: true
    },
    {
      id: 3,
      name: "Camping Tent",
      category: "Outdoor",
      price: "$15/day",
      distance: "0.6 miles",
      owner: "David P.",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      position: { top: '65%', left: '25%' },
      available: false
    },
    {
      id: 4,
      name: "DSLR Camera",
      category: "Electronics",
      price: "$20/day",
      distance: "0.3 miles",
      owner: "Emma T.",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      position: { top: '35%', left: '75%' },
      available: true
    },
    {
      id: 5,
      name: "Ladder",
      category: "Tools",
      price: "$10/day",
      distance: "0.5 miles",
      owner: "James W.",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      position: { top: '55%', left: '45%' },
      available: true
    }
  ];

  const categories = [
    { name: "All", icon: "Grid3X3", active: true },
    { name: "Tools", icon: "Wrench", active: false },
    { name: "Kitchen", icon: "ChefHat", active: false },
    { name: "Electronics", icon: "Smartphone", active: false },
    { name: "Outdoor", icon: "Trees", active: false }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Map" size={16} />
            <span>Interactive Map</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Discover what's <span className="text-primary font-accent">nearby</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See available items in real-time on our interactive neighborhood map. 
            Everything you need is closer than you think.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Preview */}
          <div className="lg:col-span-2">
            <div className="bg-background rounded-2xl p-6 shadow-warm-lg border border-border">
              {/* Map Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span className="font-medium text-foreground">Riverside Commons</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-muted rounded-lg transition-warm">
                    <Icon name="ZoomIn" size={16} className="text-muted-foreground" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-lg transition-warm">
                    <Icon name="ZoomOut" size={16} className="text-muted-foreground" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-lg transition-warm">
                    <Icon name="Maximize" size={16} className="text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="relative aspect-[4/3] bg-muted rounded-xl overflow-hidden">
                {/* Map Background */}
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Neighborhood Map"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=45.5152,-122.6784&z=14&output=embed"
                  className="opacity-60"
                />

                {/* Item Markers */}
                {nearbyItems?.map((item) => (
                  <div
                    key={item?.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ top: item?.position?.top, left: item?.position?.left }}
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className={`w-8 h-8 rounded-full border-2 border-background shadow-warm flex items-center justify-center transition-warm ${
                      item?.available ? 'bg-primary' : 'bg-muted-foreground'
                    } ${hoveredItem?.id === item?.id ? 'scale-125' : 'hover:scale-110'}`}>
                      <Icon 
                        name={item?.category === 'Tools' ? 'Wrench' : 
                              item?.category === 'Kitchen' ? 'ChefHat' :
                              item?.category === 'Electronics' ? 'Smartphone' : 'Trees'} 
                        size={16} 
                        color="white" 
                      />
                    </div>

                    {/* Hover Card */}
                    {hoveredItem?.id === item?.id && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-background rounded-lg shadow-warm-lg border border-border p-4 z-10">
                        <div className="flex items-start space-x-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={item?.image}
                              alt={item?.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-foreground truncate">{item?.name}</h4>
                            <p className="text-sm text-muted-foreground">{item?.category}</p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="font-medium text-primary">{item?.price}</span>
                              <div className="flex items-center space-x-1">
                                <Icon name="Star" size={12} className="text-warning fill-current" />
                                <span className="text-xs text-muted-foreground">{item?.rating}</span>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                              {item?.distance} • {item?.owner}
                            </p>
                          </div>
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-background"></div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-warm">
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-foreground">Available</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                      <span className="text-foreground">Unavailable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Category Filter */}
            <div className="bg-background rounded-xl p-6 shadow-warm border border-border">
              <h3 className="font-semibold text-foreground mb-4">Filter by Category</h3>
              <div className="space-y-2">
                {categories?.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-warm ${
                      category?.active 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-muted text-foreground'
                    }`}
                  >
                    <Icon name={category?.icon} size={16} />
                    <span className="font-medium">{category?.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-background rounded-xl p-6 shadow-warm border border-border">
              <h3 className="font-semibold text-foreground mb-4">In Your Area</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Available Items</span>
                  <span className="font-medium text-foreground">247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Active Members</span>
                  <span className="font-medium text-foreground">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Avg. Distance</span>
                  <span className="font-medium text-foreground">0.4 mi</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Avg. Price</span>
                  <span className="font-medium text-foreground">$12/day</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 text-center">
              <Icon name="MapPin" size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Explore Full Map</h4>
              <p className="text-sm text-muted-foreground mb-4">
                See all available items in your neighborhood
              </p>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-warm w-full">
                Open Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMapPreview;