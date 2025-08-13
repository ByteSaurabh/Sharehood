import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CommunityEvents = ({ showEvents, onToggleEvents }) => {
  const [rsvpStatus, setRsvpStatus] = useState({});

  const events = [
    {
      id: 1,
      title: 'Community Swap Meet',
      description: 'Bring items you no longer need and discover treasures from your neighbors. Perfect for decluttering and finding unique items.',
      location: 'Central Park Pavilion',
      address: '123 Park Ave, New York, NY',
      date: '2025-08-15',
      time: '10:00 AM - 2:00 PM',
      attendees: 24,
      maxAttendees: 50,
      category: 'Swap Event',
      organizer: 'Sarah Johnson',
      organizerAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Family Friendly', 'Free', 'Outdoor']
    },
    {
      id: 2,
      title: 'Sustainability Workshop',
      description: 'Learn practical tips for reducing waste, upcycling household items, and building a more sustainable lifestyle in your neighborhood.',
      location: 'Community Center',
      address: '456 Main St, New York, NY',
      date: '2025-08-18',
      time: '6:00 PM - 8:00 PM',
      attendees: 18,
      maxAttendees: 30,
      category: 'Workshop',
      organizer: 'Mike Chen',
      organizerAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Educational', 'Indoor', 'Eco-Friendly']
    },
    {
      id: 3,
      title: 'Tool Library Launch',
      description: 'Join us for the grand opening of our neighborhood tool library! Learn how to borrow and share tools with your community.',
      location: 'Maple Street Garage',
      address: '789 Maple St, New York, NY',
      date: '2025-08-22',
      time: '11:00 AM - 3:00 PM',
      attendees: 31,
      maxAttendees: 40,
      category: 'Launch Event',
      organizer: 'Alex Rivera',
      organizerAvatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Grand Opening', 'Tools', 'Community']
    }
  ];

  const handleRSVP = (eventId) => {
    setRsvpStatus(prev => ({
      ...prev,
      [eventId]: !prev?.[eventId]
    }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Swap Event':
        return 'RefreshCw';
      case 'Workshop':
        return 'GraduationCap';
      case 'Launch Event':
        return 'Rocket';
      default:
        return 'Calendar';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Swap Event':
        return 'var(--color-primary)';
      case 'Workshop':
        return 'var(--color-secondary)';
      case 'Launch Event':
        return 'var(--color-accent)';
      default:
        return 'var(--color-foreground)';
    }
  };

  if (!showEvents) return null;

  return (
    <div className="bg-card border border-border rounded-lg shadow-warm">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={20} color="var(--color-primary)" />
            <h3 className="font-semibold text-card-foreground">Community Events</h3>
          </div>
          <button
            onClick={onToggleEvents}
            className="p-1 hover:bg-muted rounded transition-warm"
          >
            <Icon name="X" size={16} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {events?.map((event) => (
            <div key={event?.id} className="border border-border rounded-lg overflow-hidden hover:shadow-warm transition-warm">
              {/* Event Image */}
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={event?.image}
                  alt={event?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2">
                  <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <Icon 
                      name={getCategoryIcon(event?.category)} 
                      size={12} 
                      color={getCategoryColor(event?.category)} 
                    />
                    <span className="text-xs font-medium text-foreground">
                      {event?.category}
                    </span>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-xs font-medium text-foreground">
                    {formatDate(event?.date)}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-card-foreground">{event?.title}</h4>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Icon name="Users" size={12} />
                    <span className="text-xs">{event?.attendees}/{event?.maxAttendees}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {event?.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-3">
                  <div className="flex items-center space-x-2 text-sm text-card-foreground">
                    <Icon name="MapPin" size={14} color="var(--color-muted-foreground)" />
                    <span>{event?.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-card-foreground">
                    <Icon name="Clock" size={14} color="var(--color-muted-foreground)" />
                    <span>{event?.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-card-foreground">
                    <Image
                      src={event?.organizerAvatar}
                      alt={event?.organizer}
                      className="w-4 h-4 rounded-full object-cover"
                    />
                    <span>Organized by {event?.organizer}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {event?.tags?.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* RSVP Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(event?.attendees / event?.maxAttendees) * 100}%` }}
                      />
                    </div>
                  </div>
                  <Button
                    variant={rsvpStatus?.[event?.id] ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleRSVP(event?.id)}
                    iconName={rsvpStatus?.[event?.id] ? "Check" : "Plus"}
                    iconPosition="left"
                    className="ml-3"
                  >
                    {rsvpStatus?.[event?.id] ? 'Going' : 'RSVP'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events */}
        <div className="mt-4 pt-4 border-t border-border">
          <Button
            variant="ghost"
            fullWidth
            iconName="Calendar"
            iconPosition="left"
          >
            View All Community Events
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunityEvents;