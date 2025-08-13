import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const DiscoverAreas = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const nearbyAreas = [
    {
      id: 1,
      name: 'Greenwich Village',
      distance: '1.2 miles',
      activeMembers: 89,
      totalItems: 234,
      sharingScore: 4.8,
      description: 'Vibrant community with a strong focus on sustainable living and creative sharing.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400',
      topCategories: ['Books', 'Art Supplies', 'Kitchen Tools'],
      highlights: [
        'Weekly book swap meetups',
        'Artist tool sharing network',
        'Community garden tools'
      ],
      recentActivity: 'High activity in the last 24 hours'
    },
    {
      id: 2,
      name: 'Brooklyn Heights',
      distance: '2.1 miles',
      activeMembers: 156,
      totalItems: 387,
      sharingScore: 4.6,
      description: 'Family-friendly neighborhood with excellent sharing culture for household items and kids gear.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400',
      topCategories: ['Baby & Kids', 'Home & Garden', 'Sports'],
      highlights: [
        'Active parent sharing network',
        'Seasonal decoration exchanges',
        'Sports equipment library'
      ],
      recentActivity: 'New members joined this week'
    },
    {
      id: 3,
      name: 'Lower East Side',
      distance: '0.8 miles',
      activeMembers: 203,
      totalItems: 445,
      sharingScore: 4.9,
      description: 'Tech-savvy community with innovative sharing solutions and high-tech equipment.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400',
      topCategories: ['Electronics', 'Tools', 'Photography'],
      highlights: [
        'Professional camera gear sharing',
        'Tech startup equipment pool',
        'Maker space tool library'
      ],
      recentActivity: 'Trending in electronics sharing'
    }
  ];

  const handleExploreArea = (area) => {
    setSelectedArea(area);
    // In a real app, this would navigate to that area's map view
    console.log(`Exploring ${area?.name}`);
  };

  const getSharingScoreColor = (score) => {
    if (score >= 4.8) return 'var(--color-success)';
    if (score >= 4.5) return 'var(--color-warning)';
    return 'var(--color-muted-foreground)';
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-warm">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-2">
          <Icon name="Compass" size={20} color="var(--color-primary)" />
          <h3 className="font-semibold text-card-foreground">Discover New Areas</h3>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          Explore nearby neighborhoods with active sharing communities
        </p>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {nearbyAreas?.map((area) => (
            <div 
              key={area?.id} 
              className={`border rounded-lg overflow-hidden transition-warm cursor-pointer ${
                selectedArea?.id === area?.id 
                  ? 'border-primary shadow-warm' 
                  : 'border-border hover:border-muted-foreground'
              }`}
              onClick={() => setSelectedArea(selectedArea?.id === area?.id ? null : area)}
            >
              {/* Area Header */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-card-foreground">{area?.name}</h4>
                      <span className="text-sm text-muted-foreground">• {area?.distance}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {area?.description}
                    </p>
                    <div className="text-xs text-accent font-medium">
                      {area?.recentActivity}
                    </div>
                  </div>
                  <div className="ml-4">
                    <Image
                      src={area?.image}
                      alt={area?.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-card-foreground">{area?.activeMembers}</div>
                    <div className="text-xs text-muted-foreground">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-card-foreground">{area?.totalItems}</div>
                    <div className="text-xs text-muted-foreground">Items</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <span className="text-lg font-bold text-card-foreground">{area?.sharingScore}</span>
                      <Icon 
                        name="Star" 
                        size={12} 
                        color={getSharingScoreColor(area?.sharingScore)} 
                      />
                    </div>
                    <div className="text-xs text-muted-foreground">Score</div>
                  </div>
                </div>

                {/* Top Categories */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {area?.topCategories?.map((category) => (
                    <span 
                      key={category}
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* Expand/Collapse Indicator */}
                <div className="flex items-center justify-center">
                  <Icon 
                    name={selectedArea?.id === area?.id ? "ChevronUp" : "ChevronDown"} 
                    size={16} 
                    color="var(--color-muted-foreground)" 
                  />
                </div>
              </div>

              {/* Expanded Content */}
              {selectedArea?.id === area?.id && (
                <div className="border-t border-border bg-muted/30">
                  <div className="p-4">
                    {/* Highlights */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-card-foreground mb-2">
                        Community Highlights
                      </h5>
                      <div className="space-y-2">
                        {area?.highlights?.map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Icon name="Check" size={12} color="var(--color-success)" />
                            <span className="text-sm text-card-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Button
                        variant="default"
                        size="sm"
                        onClick={(e) => {
                          e?.stopPropagation();
                          handleExploreArea(area);
                        }}
                        iconName="Map"
                        iconPosition="left"
                        className="flex-1"
                      >
                        Explore Area
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e?.stopPropagation();
                          console.log(`Viewing items in ${area?.name}`);
                        }}
                        iconName="Package"
                        iconPosition="left"
                        className="flex-1"
                      >
                        View Items
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Expand Search */}
        <div className="mt-4 pt-4 border-t border-border">
          <Button
            variant="ghost"
            fullWidth
            iconName="Search"
            iconPosition="left"
          >
            Search More Neighborhoods
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverAreas;