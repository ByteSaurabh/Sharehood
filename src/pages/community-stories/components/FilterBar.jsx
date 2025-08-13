import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterBar = ({ 
  selectedCategory, 
  onCategoryChange, 
  selectedLocation, 
  onLocationChange,
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange 
}) => {
  const categories = [
    { id: 'all', name: 'All Stories', icon: 'Grid3X3' },
    { id: 'tools', name: 'Tool Sharing', icon: 'Wrench' },
    { id: 'family', name: 'Family & Kids', icon: 'Baby' },
    { id: 'sustainability', name: 'Sustainability', icon: 'Leaf' },
    { id: 'community', name: 'Community Building', icon: 'Users' },
    { id: 'events', name: 'Events & Gatherings', icon: 'Calendar' }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'downtown', name: 'Downtown' },
    { id: 'suburbs', name: 'Suburbs' },
    { id: 'university', name: 'University District' },
    { id: 'riverside', name: 'Riverside' },
    { id: 'hillside', name: 'Hillside' }
  ];

  const sortOptions = [
    { id: 'recent', name: 'Most Recent' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'impact', name: 'Highest Impact' },
    { id: 'savings', name: 'Most Savings' }
  ];

  return (
    <div className="bg-card rounded-lg p-6 shadow-warm mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search stories by title, location, or impact..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
        />
      </div>
      {/* Category Filters */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-foreground mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories?.map((category) => (
            <Button
              key={category?.id}
              variant={selectedCategory === category?.id ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category?.id)}
              className="flex items-center space-x-2"
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.name}</span>
            </Button>
          ))}
        </div>
      </div>
      {/* Location and Sort Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Location</label>
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e?.target?.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
          >
            {locations?.map((location) => (
              <option key={location?.id} value={location?.id}>
                {location?.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e?.target?.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
          >
            {sortOptions?.map((option) => (
              <option key={option?.id} value={option?.id}>
                {option?.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;