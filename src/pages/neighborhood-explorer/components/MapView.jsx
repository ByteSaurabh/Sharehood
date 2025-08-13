import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MapView = ({ selectedFilters, onItemClick, onMemberClick, showEvents, walkingDistanceMode }) => {
  const [mapCenter, setMapCenter] = useState({ lat: 40.7128, lng: -74.0060 });
  const [hoveredItem, setHoveredItem] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  // Mock data for map items
  const mapItems = [
    {
      id: 1,
      type: 'item',
      title: 'Power Drill Set',
      category: 'Tools',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400',
      lat: 40.7589,
      lng: -73.9851,
      distance: '0.3 miles',
      owner: 'Mike Chen',
      ownerAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      trustScore: 4.8,
      available: true,
      price: '$8/day'
    },
    {
      id: 2,
      type: 'item',
      title: 'Camping Tent (4-person)',
      category: 'Outdoor',
      image: 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&w=400',
      lat: 40.7505,
      lng: -73.9934,
      distance: '0.5 miles',
      owner: 'Sarah Johnson',
      ownerAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      trustScore: 4.9,
      available: true,
      price: '$15/day'
    },
    {
      id: 3,
      type: 'member',
      name: 'Alex Rivera',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      lat: 40.7614,
      lng: -73.9776,
      trustScore: 4.7,
      itemsShared: 12,
      status: 'Available for exchanges',
      specialties: ['Electronics', 'Books']
    },
    {
      id: 4,
      type: 'event',
      title: 'Community Swap Meet',
      location: 'Central Park',
      lat: 40.7829,
      lng: -73.9654,
      date: '2025-08-15',
      time: '10:00 AM',
      attendees: 24,
      category: 'Swap Event'
    }
  ];

  useEffect(() => {
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation?.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position?.coords?.latitude,
            lng: position?.coords?.longitude
          });
          setMapCenter({
            lat: position?.coords?.latitude,
            lng: position?.coords?.longitude
          });
        },
        (error) => {
          console.log('Location access denied');
        }
      );
    }
  }, []);

  const getMarkerIcon = (item) => {
    switch (item?.type) {
      case 'item':
        return item?.available ? 'Package' : 'PackageX';
      case 'member':
        return 'User';
      case 'event':
        return 'Calendar';
      default:
        return 'MapPin';
    }
  };

  const getMarkerColor = (item) => {
    switch (item?.type) {
      case 'item':
        return item?.available ? 'var(--color-primary)' : 'var(--color-muted-foreground)';
      case 'member':
        return 'var(--color-secondary)';
      case 'event':
        return 'var(--color-accent)';
      default:
        return 'var(--color-foreground)';
    }
  };

  const filteredItems = mapItems?.filter(item => {
    if (selectedFilters?.category && selectedFilters?.category !== 'all' && item?.category !== selectedFilters?.category) {
      return false;
    }
    if (selectedFilters?.availability === 'available' && !item?.available) {
      return false;
    }
    if (selectedFilters?.trustScore && item?.trustScore < selectedFilters?.trustScore) {
      return false;
    }
    return true;
  });

  return (
    <div className="relative w-full h-full bg-card rounded-lg overflow-hidden">
      {/* Map Container */}
      <div className="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Neighborhood Explorer Map"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${mapCenter?.lat},${mapCenter?.lng}&z=14&output=embed`}
          className="border-0"
        />
      </div>
      {/* Map Overlay with Markers */}
      <div className="absolute inset-0 pointer-events-none">
        {filteredItems?.map((item) => (
          <div
            key={`${item?.type}-${item?.id}`}
            className="absolute pointer-events-auto cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${((item?.lng + 74.0060) / 0.05) * 100}%`,
              top: `${((40.7828 - item?.lat) / 0.05) * 100}%`
            }}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => {
              if (item?.type === 'item') {
                onItemClick(item);
              } else if (item?.type === 'member') {
                onMemberClick(item);
              }
            }}
          >
            {/* Marker */}
            <div className="relative">
              <div className="w-8 h-8 bg-background border-2 border-current rounded-full flex items-center justify-center shadow-warm">
                <Icon 
                  name={getMarkerIcon(item)} 
                  size={16} 
                  color={getMarkerColor(item)} 
                />
              </div>
              
              {/* Hover Card */}
              {hoveredItem?.id === item?.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-popover border border-border rounded-lg shadow-warm-lg p-3 z-10">
                  {item?.type === 'item' && (
                    <>
                      <div className="flex items-start space-x-3">
                        <Image
                          src={item?.image}
                          alt={item?.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-popover-foreground truncate">
                            {item?.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {item?.category} • {item?.distance}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-sm font-medium text-primary">
                              {item?.price}
                            </span>
                            <div className="flex items-center space-x-1">
                              <Icon name="Star" size={12} color="var(--color-warning)" />
                              <span className="text-xs text-muted-foreground">
                                {item?.trustScore}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {item?.type === 'member' && (
                    <div className="flex items-center space-x-3">
                      <Image
                        src={item?.avatar}
                        alt={item?.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-popover-foreground">
                          {item?.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item?.itemsShared} items shared
                        </p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Icon name="Star" size={12} color="var(--color-warning)" />
                          <span className="text-xs text-muted-foreground">
                            {item?.trustScore}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {item?.type === 'event' && (
                    <div>
                      <h4 className="font-medium text-popover-foreground">
                        {item?.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item?.location}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item?.date} at {item?.time}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item?.attendees} attending
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center shadow-warm hover:bg-muted transition-warm">
          <Icon name="Plus" size={16} />
        </button>
        <button className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center shadow-warm hover:bg-muted transition-warm">
          <Icon name="Minus" size={16} />
        </button>
        <button className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center shadow-warm hover:bg-muted transition-warm">
          <Icon name="Locate" size={16} />
        </button>
      </div>
      {/* Walking Distance Toggle */}
      {walkingDistanceMode && (
        <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-3 py-2 rounded-lg shadow-warm flex items-center space-x-2">
          <Icon name="Footprints" size={16} />
          <span className="text-sm font-medium">Walking Distance Mode</span>
        </div>
      )}
    </div>
  );
};

export default MapView;