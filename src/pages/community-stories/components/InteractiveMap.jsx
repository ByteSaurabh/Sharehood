import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveMap = ({ stories, onStorySelect }) => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(null);

  const neighborhoods = [
    { 
      id: 'downtown', 
      name: 'Downtown', 
      stories: 12, 
      coords: { lat: 40.7589, lng: -73.9851 },
      color: 'bg-primary'
    },
    { 
      id: 'suburbs', 
      name: 'Suburbs', 
      stories: 8, 
      coords: { lat: 40.7505, lng: -73.9934 },
      color: 'bg-secondary'
    },
    { 
      id: 'university', 
      name: 'University District', 
      stories: 15, 
      coords: { lat: 40.7614, lng: -73.9776 },
      color: 'bg-accent'
    },
    { 
      id: 'riverside', 
      name: 'Riverside', 
      stories: 6, 
      coords: { lat: 40.7505, lng: -73.9758 },
      color: 'bg-success'
    }
  ];

  const getNeighborhoodStories = (neighborhoodId) => {
    return stories?.filter(story => story?.neighborhoodId === neighborhoodId);
  };

  return (
    <div className="bg-card rounded-lg shadow-warm overflow-hidden mb-12">
      <div className="p-6 border-b border-border">
        <h2 className="text-2xl font-bold text-foreground mb-2">Stories by Neighborhood</h2>
        <p className="text-muted-foreground">
          Explore transformation stories from communities like yours
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Map Section */}
        <div className="relative h-96 bg-muted">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="Community Stories Map"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=40.7589,-73.9851&z=12&output=embed"
            className="w-full h-full"
          />
          
          {/* Map Overlay with Neighborhood Markers */}
          <div className="absolute inset-0 pointer-events-none">
            {neighborhoods?.map((neighborhood) => (
              <div
                key={neighborhood?.id}
                className="absolute pointer-events-auto"
                style={{
                  top: `${Math.random() * 60 + 20}%`,
                  left: `${Math.random() * 60 + 20}%`
                }}
              >
                <button
                  onClick={() => setSelectedNeighborhood(neighborhood)}
                  className={`${neighborhood?.color} text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg hover:scale-110 transition-warm`}
                >
                  {neighborhood?.stories}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Neighborhood List */}
        <div className="p-6">
          <div className="space-y-4">
            {neighborhoods?.map((neighborhood) => (
              <div
                key={neighborhood?.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-warm ${
                  selectedNeighborhood?.id === neighborhood?.id
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                }`}
                onClick={() => setSelectedNeighborhood(neighborhood)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{neighborhood?.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`w-3 h-3 rounded-full ${neighborhood?.color}`}></span>
                    <span className="text-sm text-muted-foreground">
                      {neighborhood?.stories} stories
                    </span>
                  </div>
                </div>
                
                {selectedNeighborhood?.id === neighborhood?.id && (
                  <div className="mt-4 space-y-2">
                    {getNeighborhoodStories(neighborhood?.id)?.slice(0, 3)?.map((story) => (
                      <div
                        key={story?.id}
                        className="flex items-center justify-between p-2 bg-background rounded cursor-pointer hover:bg-muted transition-warm"
                        onClick={(e) => {
                          e?.stopPropagation();
                          onStorySelect(story);
                        }}
                      >
                        <span className="text-sm text-foreground truncate">{story?.title}</span>
                        <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
                      </div>
                    ))}
                    
                    {getNeighborhoodStories(neighborhood?.id)?.length > 3 && (
                      <Button variant="outline" size="sm" fullWidth>
                        View All {getNeighborhoodStories(neighborhood?.id)?.length} Stories
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;