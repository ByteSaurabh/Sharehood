import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const ImpactCalculator = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [itemValue, setItemValue] = useState('');
  const [usageFrequency, setUsageFrequency] = useState('');
  const [results, setResults] = useState(null);

  const itemCategories = [
    { 
      id: 'power-drill', 
      name: 'Power Drill', 
      avgPrice: 120, 
      co2Impact: 15, 
      icon: 'Drill',
      description: 'Electric power drill with bits'
    },
    { 
      id: 'lawn-mower', 
      name: 'Lawn Mower', 
      avgPrice: 350, 
      co2Impact: 45, 
      icon: 'Scissors',
      description: 'Gas-powered lawn mower'
    },
    { 
      id: 'pressure-washer', 
      name: 'Pressure Washer', 
      avgPrice: 200, 
      co2Impact: 25, 
      icon: 'Droplets',
      description: 'Electric pressure washer'
    },
    { 
      id: 'camping-tent', 
      name: 'Camping Tent', 
      avgPrice: 180, 
      co2Impact: 20, 
      icon: 'Mountain',
      description: '4-person camping tent'
    },
    { 
      id: 'bike-rack', 
      name: 'Bike Rack', 
      avgPrice: 150, 
      co2Impact: 18, 
      icon: 'Bike',
      description: 'Car-mounted bike rack'
    },
    { 
      id: 'projector', 
      name: 'Projector', 
      avgPrice: 400, 
      co2Impact: 35, 
      icon: 'Monitor',
      description: 'HD home projector'
    }
  ];

  const frequencyOptions = [
    { value: '1', label: 'Once a year', multiplier: 1 },
    { value: '2', label: 'Few times a year', multiplier: 3 },
    { value: '6', label: 'Monthly', multiplier: 12 },
    { value: '12', label: 'Weekly', multiplier: 52 }
  ];

  const calculateImpact = () => {
    if (!selectedItem || !usageFrequency) return;
    
    const item = itemCategories?.find(i => i?.id === selectedItem);
    const frequency = frequencyOptions?.find(f => f?.value === usageFrequency);
    
    if (!item || !frequency) return;
    
    const annualSavings = item?.avgPrice * 0.1 * frequency?.multiplier; // 10% of item value per use
    const co2Savings = item?.co2Impact * frequency?.multiplier;
    const totalSavings = item?.avgPrice; // Savings from not buying
    
    setResults({
      item: item?.name,
      annualSavings: Math.round(annualSavings),
      co2Savings: Math.round(co2Savings),
      totalSavings: totalSavings,
      frequency: frequency?.label?.toLowerCase()
    });
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-warm border border-border">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <Icon name="Calculator" size={20} color="white" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Impact Calculator</h2>
      </div>
      <p className="text-muted-foreground mb-6">
        Discover how much money and CO2 you could save by sharing instead of buying.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              What item are you considering?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {itemCategories?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => setSelectedItem(item?.id)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    selectedItem === item?.id
                      ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name={item?.icon} size={20} color={selectedItem === item?.id ? 'var(--color-primary)' : 'var(--color-muted-foreground)'} />
                    <span className={`font-medium ${selectedItem === item?.id ? 'text-primary' : 'text-foreground'}`}>
                      {item?.name}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{item?.description}</p>
                  <p className="text-sm font-medium text-foreground mt-1">${item?.avgPrice}</p>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              How often would you use it?
            </label>
            <div className="space-y-2">
              {frequencyOptions?.map((option) => (
                <button
                  key={option?.value}
                  onClick={() => setUsageFrequency(option?.value)}
                  className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                    usageFrequency === option?.value
                      ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50 text-foreground'
                  }`}
                >
                  {option?.label}
                </button>
              ))}
            </div>
          </div>
          
          <Button 
            onClick={calculateImpact}
            disabled={!selectedItem || !usageFrequency}
            className="w-full"
          >
            Calculate My Impact
          </Button>
        </div>
        
        {/* Results */}
        <div className="space-y-6">
          {results ? (
            <div className="space-y-4">
              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Your Impact by Sharing a {results?.item}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="DollarSign" size={20} color="var(--color-success)" />
                      <div>
                        <p className="font-medium text-foreground">Money Saved</p>
                        <p className="text-sm text-muted-foreground">vs. buying new</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-success">${results?.totalSavings}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Leaf" size={20} color="var(--color-secondary)" />
                      <div>
                        <p className="font-medium text-foreground">CO2 Reduced</p>
                        <p className="text-sm text-muted-foreground">annually</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-secondary">{results?.co2Savings} lbs</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="TrendingUp" size={20} color="var(--color-accent)" />
                      <div>
                        <p className="font-medium text-foreground">Annual Savings</p>
                        <p className="text-sm text-muted-foreground">from sharing {results?.frequency}</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-accent">${results?.annualSavings}</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-start space-x-3">
                    <Icon name="Lightbulb" size={20} color="var(--color-primary)" />
                    <div>
                      <p className="font-medium text-primary mb-1">Pro Tip</p>
                      <p className="text-sm text-foreground">
                        By sharing this item with just 3 neighbors, you could collectively save ${results?.totalSavings * 3} 
                        and prevent {results?.co2Savings * 3} lbs of CO2 emissions!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button variant="default" className="w-full">
                Start Sharing This Item
              </Button>
            </div>
          ) : (
            <div className="bg-background rounded-lg p-8 border border-border text-center">
              <Icon name="Calculator" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">Ready to Calculate?</h3>
              <p className="text-muted-foreground">
                Select an item and usage frequency to see your potential impact.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImpactCalculator;