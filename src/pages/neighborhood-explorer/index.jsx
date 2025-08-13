import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import MapView from './components/MapView';
import FilterPanel from './components/FilterPanel';
import NeighborhoodInsights from './components/NeighborhoodInsights';
import CommunityEvents from './components/CommunityEvents';
import DiscoverAreas from './components/DiscoverAreas';
import LocationSharing from './components/LocationSharing';

const NeighborhoodExplorer = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    distance: 5,
    availability: 'all',
    trustScore: 0
  });
  const [showEvents, setShowEvents] = useState(false);
  const [walkingDistanceMode, setWalkingDistanceMode] = useState(false);
  const [selectedView, setSelectedView] = useState('map');
  const [sidebarView, setSidebarView] = useState('insights');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const viewOptions = [
    { value: 'map', label: 'Map View', icon: 'Map' },
    { value: 'list', label: 'List View', icon: 'List' },
    { value: 'grid', label: 'Grid View', icon: 'Grid3X3' }
  ];

  const sidebarOptions = [
    { value: 'insights', label: 'Insights', icon: 'BarChart3' },
    { value: 'discover', label: 'Discover', icon: 'Compass' },
    { value: 'location', label: 'Share Location', icon: 'MapPin' }
  ];

  const handleItemClick = (item) => {
    console.log('Item clicked:', item);
    // In a real app, this would open item details modal or navigate to item page
  };

  const handleMemberClick = (member) => {
    console.log('Member clicked:', member);
    // In a real app, this would open member profile modal or navigate to profile page
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const toggleWalkingMode = () => {
    setWalkingDistanceMode(!walkingDistanceMode);
  };

  const toggleEvents = () => {
    setShowEvents(!showEvents);
  };

  const renderSidebarContent = () => {
    switch (sidebarView) {
      case 'insights':
        return <NeighborhoodInsights />;
      case 'discover':
        return <DiscoverAreas />;
      case 'location':
        return <LocationSharing />;
      default:
        return <NeighborhoodInsights />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Page Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  Neighborhood Explorer
                </h1>
                <p className="text-muted-foreground">
                  Discover sharing opportunities and connect with your community
                </p>
              </div>
              
              {/* Mobile Sidebar Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                iconName="Menu"
                className="lg:hidden"
              >
                Menu
              </Button>
            </div>

            {/* View Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {viewOptions?.map((option) => (
                  <button
                    key={option?.value}
                    onClick={() => setSelectedView(option?.value)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-warm ${
                      selectedView === option?.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card hover:bg-muted text-card-foreground'
                    }`}
                  >
                    <Icon 
                      name={option?.icon} 
                      size={16} 
                      color={selectedView === option?.value ? 'white' : 'var(--color-muted-foreground)'}
                    />
                    <span className="hidden sm:inline">{option?.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant={showEvents ? "default" : "outline"}
                  size="sm"
                  onClick={toggleEvents}
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Events
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Search"
                  iconPosition="left"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters Panel */}
            <div className="lg:col-span-1">
              <FilterPanel
                filters={filters}
                onFiltersChange={handleFiltersChange}
                onToggleWalkingMode={toggleWalkingMode}
                walkingDistanceMode={walkingDistanceMode}
              />
            </div>

            {/* Map/Content Area */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg shadow-warm overflow-hidden">
                {selectedView === 'map' && (
                  <div className="h-[600px]">
                    <MapView
                      selectedFilters={filters}
                      onItemClick={handleItemClick}
                      onMemberClick={handleMemberClick}
                      showEvents={showEvents}
                      walkingDistanceMode={walkingDistanceMode}
                    />
                  </div>
                )}
                
                {selectedView === 'list' && (
                  <div className="p-6">
                    <div className="text-center py-12">
                      <Icon name="List" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">List View</h3>
                      <p className="text-muted-foreground">
                        List view implementation would go here
                      </p>
                    </div>
                  </div>
                )}
                
                {selectedView === 'grid' && (
                  <div className="p-6">
                    <div className="text-center py-12">
                      <Icon name="Grid3X3" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">Grid View</h3>
                      <p className="text-muted-foreground">
                        Grid view implementation would go here
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              {/* Sidebar Navigation */}
              <div className="mb-4">
                <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 overflow-x-auto lg:overflow-x-visible">
                  {sidebarOptions?.map((option) => (
                    <button
                      key={option?.value}
                      onClick={() => setSidebarView(option?.value)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-warm whitespace-nowrap ${
                        sidebarView === option?.value
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card hover:bg-muted text-card-foreground'
                      }`}
                    >
                      <Icon 
                        name={option?.icon} 
                        size={16} 
                        color={sidebarView === option?.value ? 'white' : 'var(--color-muted-foreground)'}
                      />
                      <span>{option?.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sidebar Content */}
              <div className={`${isMobileSidebarOpen ? 'block' : 'hidden'} lg:block`}>
                {renderSidebarContent()}
              </div>
            </div>
          </div>

          {/* Community Events Overlay */}
          {showEvents && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden">
              <div className="absolute inset-4 overflow-y-auto">
                <CommunityEvents 
                  showEvents={showEvents} 
                  onToggleEvents={toggleEvents} 
                />
              </div>
            </div>
          )}

          {/* Desktop Events Sidebar */}
          {showEvents && (
            <div className="hidden lg:block fixed right-4 top-20 bottom-4 w-80 z-30">
              <CommunityEvents 
                showEvents={showEvents} 
                onToggleEvents={toggleEvents} 
              />
            </div>
          )}
        </div>
      </div>
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden">
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-background border-l border-border overflow-y-auto">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Menu</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileSidebarOpen(false)}
                  iconName="X"
                />
              </div>
              
              {/* Mobile Sidebar Navigation */}
              <div className="space-y-2 mb-6">
                {sidebarOptions?.map((option) => (
                  <button
                    key={option?.value}
                    onClick={() => {
                      setSidebarView(option?.value);
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-warm ${
                      sidebarView === option?.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card hover:bg-muted text-card-foreground'
                    }`}
                  >
                    <Icon 
                      name={option?.icon} 
                      size={16} 
                      color={sidebarView === option?.value ? 'white' : 'var(--color-muted-foreground)'}
                    />
                    <span>{option?.label}</span>
                  </button>
                ))}
              </div>
              
              {renderSidebarContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NeighborhoodExplorer;