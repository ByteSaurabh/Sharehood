import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterPanel = ({ filters, onFiltersChange, onToggleWalkingMode, walkingDistanceMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { value: 'all', label: 'All Categories', icon: 'Grid3X3' },
    { value: 'Tools', label: 'Tools & Hardware', icon: 'Wrench' },
    { value: 'Electronics', label: 'Electronics', icon: 'Smartphone' },
    { value: 'Outdoor', label: 'Outdoor & Sports', icon: 'Mountain' },
    { value: 'Kitchen', label: 'Kitchen & Appliances', icon: 'ChefHat' },
    { value: 'Books', label: 'Books & Media', icon: 'Book' },
    { value: 'Furniture', label: 'Furniture', icon: 'Armchair' },
    { value: 'Garden', label: 'Garden & Yard', icon: 'Flower' },
    { value: 'Baby', label: 'Baby & Kids', icon: 'Baby' }
  ];

  const distances = [
    { value: 0.5, label: '0.5 miles' },
    { value: 1, label: '1 mile' },
    { value: 2, label: '2 miles' },
    { value: 5, label: '5 miles' },
    { value: 10, label: '10+ miles' }
  ];

  const availabilityOptions = [
    { value: 'all', label: 'All Items' },
    { value: 'available', label: 'Available Now' },
    { value: 'upcoming', label: 'Available Soon' }
  ];

  const trustScores = [
    { value: 0, label: 'Any Rating' },
    { value: 3, label: '3+ Stars' },
    { value: 4, label: '4+ Stars' },
    { value: 4.5, label: '4.5+ Stars' }
  ];

  const handleFilterChange = (key, value) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      category: 'all',
      distance: 5,
      availability: 'all',
      trustScore: 0
    });
  };

  const activeFiltersCount = Object.values(filters)?.filter(value => 
    value !== 'all' && value !== 0 && value !== 5
  )?.length;

  return (
    <div className="bg-card border border-border rounded-lg shadow-warm">
      {/* Filter Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Filter" size={20} color="var(--color-primary)" />
            <h3 className="font-semibold text-card-foreground">Filters</h3>
            {activeFiltersCount > 0 && (
              <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear All
              </Button>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-muted rounded transition-warm lg:hidden"
            >
              <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} />
            </button>
          </div>
        </div>
      </div>
      {/* Filter Content */}
      <div className={`${isExpanded ? 'block' : 'hidden'} lg:block`}>
        <div className="p-4 space-y-6">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-card-foreground mb-3">
              Category
            </label>
            <div className="grid grid-cols-1 gap-2">
              {categories?.map((category) => (
                <button
                  key={category?.value}
                  onClick={() => handleFilterChange('category', category?.value)}
                  className={`flex items-center space-x-3 p-3 rounded-lg text-left transition-warm ${
                    filters?.category === category?.value
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted text-card-foreground'
                  }`}
                >
                  <Icon 
                    name={category?.icon} 
                    size={16} 
                    color={filters?.category === category?.value ? 'white' : 'var(--color-muted-foreground)'}
                  />
                  <span className="text-sm">{category?.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Distance Filter */}
          <div>
            <label className="block text-sm font-medium text-card-foreground mb-3">
              Distance
            </label>
            <div className="space-y-2">
              {distances?.map((distance) => (
                <button
                  key={distance?.value}
                  onClick={() => handleFilterChange('distance', distance?.value)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-warm ${
                    filters?.distance === distance?.value
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted text-card-foreground'
                  }`}
                >
                  <span className="text-sm">{distance?.label}</span>
                  {filters?.distance === distance?.value && (
                    <Icon name="Check" size={16} color="white" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Availability Filter */}
          <div>
            <label className="block text-sm font-medium text-card-foreground mb-3">
              Availability
            </label>
            <div className="space-y-2">
              {availabilityOptions?.map((option) => (
                <button
                  key={option?.value}
                  onClick={() => handleFilterChange('availability', option?.value)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-warm ${
                    filters?.availability === option?.value
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted text-card-foreground'
                  }`}
                >
                  <span className="text-sm">{option?.label}</span>
                  {filters?.availability === option?.value && (
                    <Icon name="Check" size={16} color="white" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Trust Score Filter */}
          <div>
            <label className="block text-sm font-medium text-card-foreground mb-3">
              Minimum Trust Score
            </label>
            <div className="space-y-2">
              {trustScores?.map((score) => (
                <button
                  key={score?.value}
                  onClick={() => handleFilterChange('trustScore', score?.value)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-warm ${
                    filters?.trustScore === score?.value
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted text-card-foreground'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">{score?.label}</span>
                    {score?.value > 0 && (
                      <Icon name="Star" size={12} color="var(--color-warning)" />
                    )}
                  </div>
                  {filters?.trustScore === score?.value && (
                    <Icon name="Check" size={16} color="white" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Walking Distance Toggle */}
          <div className="pt-4 border-t border-border">
            <button
              onClick={onToggleWalkingMode}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-warm ${
                walkingDistanceMode
                  ? 'bg-secondary text-secondary-foreground'
                  : 'hover:bg-muted text-card-foreground'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon 
                  name="Footprints" 
                  size={16} 
                  color={walkingDistanceMode ? 'white' : 'var(--color-muted-foreground)'}
                />
                <div className="text-left">
                  <div className="text-sm font-medium">Walking Distance Mode</div>
                  <div className="text-xs opacity-80">Optimize for car-free sharing</div>
                </div>
              </div>
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                walkingDistanceMode ? 'border-white bg-white' : 'border-muted-foreground'
              }`}>
                {walkingDistanceMode && (
                  <Icon name="Check" size={12} color="var(--color-secondary)" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;