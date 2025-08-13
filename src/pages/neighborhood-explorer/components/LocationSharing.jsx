import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationSharing = () => {
  const [isSharing, setIsSharing] = useState(false);
  const [sharingDuration, setSharingDuration] = useState(30);
  const [sharingPurpose, setSharingPurpose] = useState('');
  const [nearbyRequests, setNearbyRequests] = useState([]);

  const sharingOptions = [
    { value: 'available', label: 'Available for exchanges', icon: 'RefreshCw' },
    { value: 'demonstrations', label: 'Item demonstrations', icon: 'Play' },
    { value: 'pickup', label: 'Quick pickups/returns', icon: 'Package' },
    { value: 'help', label: 'Helping neighbors', icon: 'Heart' }
  ];

  const durationOptions = [
    { value: 15, label: '15 minutes' },
    { value: 30, label: '30 minutes' },
    { value: 60, label: '1 hour' },
    { value: 120, label: '2 hours' }
  ];

  // Mock nearby requests
  const mockRequests = [
    {
      id: 1,
      user: 'Emma Wilson',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      item: 'Ladder',
      distance: '0.2 miles',
      timeAgo: '5 min ago',
      urgency: 'high',
      message: 'Need to change a light bulb, can pick up immediately!'
    },
    {
      id: 2,
      user: 'David Park',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      item: 'Drill',
      distance: '0.4 miles',
      timeAgo: '12 min ago',
      urgency: 'medium',
      message: 'Quick project, need for about an hour'
    }
  ];

  useEffect(() => {
    if (isSharing) {
      setNearbyRequests(mockRequests);
    } else {
      setNearbyRequests([]);
    }
  }, [isSharing]);

  const handleStartSharing = () => {
    if (!sharingPurpose) return;
    setIsSharing(true);
    // In a real app, this would update the user's location and status
    console.log(`Started sharing location for ${sharingPurpose} for ${sharingDuration} minutes`);
  };

  const handleStopSharing = () => {
    setIsSharing(false);
    setSharingPurpose('');
    setNearbyRequests([]);
  };

  const handleRespondToRequest = (requestId, response) => {
    console.log(`Responded to request ${requestId} with: ${response}`);
    // Remove the request from the list
    setNearbyRequests(prev => prev?.filter(req => req?.id !== requestId));
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high':
        return 'var(--color-error)';
      case 'medium':
        return 'var(--color-warning)';
      case 'low':
        return 'var(--color-success)';
      default:
        return 'var(--color-muted-foreground)';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-warm">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-2">
          <Icon name="MapPin" size={20} color="var(--color-primary)" />
          <h3 className="font-semibold text-card-foreground">Share Your Location</h3>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          Let neighbors know when you're available for immediate exchanges
        </p>
      </div>
      <div className="p-4">
        {!isSharing ? (
          /* Setup Location Sharing */
          (<div className="space-y-4">
            {/* Purpose Selection */}
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">
                What are you available for?
              </label>
              <div className="space-y-2">
                {sharingOptions?.map((option) => (
                  <button
                    key={option?.value}
                    onClick={() => setSharingPurpose(option?.value)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-warm ${
                      sharingPurpose === option?.value
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted text-card-foreground'
                    }`}
                  >
                    <Icon 
                      name={option?.icon} 
                      size={16} 
                      color={sharingPurpose === option?.value ? 'white' : 'var(--color-muted-foreground)'}
                    />
                    <span className="text-sm">{option?.label}</span>
                    {sharingPurpose === option?.value && (
                      <Icon name="Check" size={16} color="white" className="ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            {/* Duration Selection */}
            {sharingPurpose && (
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  How long will you be available?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {durationOptions?.map((option) => (
                    <button
                      key={option?.value}
                      onClick={() => setSharingDuration(option?.value)}
                      className={`p-3 rounded-lg text-sm transition-warm ${
                        sharingDuration === option?.value
                          ? 'bg-secondary text-secondary-foreground'
                          : 'bg-muted hover:bg-muted/80 text-card-foreground'
                      }`}
                    >
                      {option?.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {/* Start Sharing Button */}
            <Button
              variant="default"
              fullWidth
              onClick={handleStartSharing}
              disabled={!sharingPurpose}
              iconName="MapPin"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90"
            >
              Start Sharing Location
            </Button>
            {/* Privacy Note */}
            <div className="bg-muted/50 rounded-lg p-3">
              <div className="flex items-start space-x-2">
                <Icon name="Shield" size={16} color="var(--color-muted-foreground)" />
                <div className="text-xs text-muted-foreground">
                  <p className="font-medium mb-1">Privacy Protected</p>
                  <p>Your exact location is only shared with verified neighbors when you approve specific requests. You can stop sharing anytime.</p>
                </div>
              </div>
            </div>
          </div>)
        ) : (
          /* Active Sharing Status */
          (<div className="space-y-4">
            {/* Active Status */}
            <div className="bg-success/10 border border-success/20 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-success">Location Sharing Active</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleStopSharing}
                  iconName="X"
                  className="text-success hover:text-success/80"
                >
                  Stop
                </Button>
              </div>
              <p className="text-sm text-card-foreground">
                Available for {sharingOptions?.find(opt => opt?.value === sharingPurpose)?.label?.toLowerCase()}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {sharingDuration} minutes remaining
              </p>
            </div>
            {/* Nearby Requests */}
            {nearbyRequests?.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-card-foreground mb-3">
                  Nearby Requests ({nearbyRequests?.length})
                </h4>
                <div className="space-y-3">
                  {nearbyRequests?.map((request) => (
                    <div key={request?.id} className="border border-border rounded-lg p-3">
                      <div className="flex items-start space-x-3 mb-3">
                        <img
                          src={request?.avatar}
                          alt={request?.user}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm font-medium text-card-foreground">
                              {request?.user}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {request?.distance} • {request?.timeAgo}
                            </span>
                            <div 
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: getUrgencyColor(request?.urgency) }}
                            />
                          </div>
                          <p className="text-sm text-card-foreground mb-1">
                            Needs: <span className="font-medium">{request?.item}</span>
                          </p>
                          <p className="text-xs text-muted-foreground">
                            "{request?.message}"
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => handleRespondToRequest(request?.id, 'accept')}
                          iconName="Check"
                          iconPosition="left"
                          className="flex-1"
                        >
                          Help Out
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRespondToRequest(request?.id, 'decline')}
                          iconName="X"
                          iconPosition="left"
                          className="flex-1"
                        >
                          Not Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* No Requests */}
            {nearbyRequests?.length === 0 && (
              <div className="text-center py-6">
                <Icon name="Clock" size={32} color="var(--color-muted-foreground)" className="mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  No nearby requests at the moment
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  We'll notify you when neighbors need help nearby
                </p>
              </div>
            )}
          </div>)
        )}
      </div>
    </div>
  );
};

export default LocationSharing;