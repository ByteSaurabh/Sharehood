import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import PersonalImpactCard from './components/PersonalImpactCard';
import CommunityImpactChart from './components/CommunityImpactChart';
import SustainabilityChallenges from './components/SustainabilityChallenges';
import ImpactCalculator from './components/ImpactCalculator';
import CommunityAchievements from './components/CommunityAchievements';
import ActivityFeed from './components/ActivityFeed';
import LearningHub from './components/LearningHub';

const ImpactDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock personal impact data
  const personalImpactData = [
    {
      title: "CO2 Saved",
      value: "1,247",
      unit: "lbs",
      icon: "Leaf",
      color: "bg-secondary",
      description: "Equivalent to planting 15 trees",
      trend: 12
    },
    {
      title: "Money Saved",
      value: "$2,340",
      unit: "",
      icon: "DollarSign",
      color: "bg-success",
      description: "Through sharing vs. buying",
      trend: 8
    },
    {
      title: "Items Shared",
      value: "47",
      unit: "items",
      icon: "Share2",
      color: "bg-primary",
      description: "Helping neighbors access tools",
      trend: 15
    },
    {
      title: "Connections Made",
      value: "23",
      unit: "neighbors",
      icon: "Users",
      color: "bg-accent",
      description: "New community relationships",
      trend: 20
    }
  ];

  // Mock community chart data
  const communityTrendData = [
    { month: 'Jul', value: 45, co2Saved: 320, itemsShared: 45, connections: 12 },
    { month: 'Aug', value: 62, co2Saved: 450, itemsShared: 62, connections: 18 },
    { month: 'Sep', value: 78, co2Saved: 580, itemsShared: 78, connections: 25 },
    { month: 'Oct', value: 95, co2Saved: 720, itemsShared: 95, connections: 32 },
    { month: 'Nov', value: 112, co2Saved: 890, itemsShared: 112, connections: 41 },
    { month: 'Dec', value: 134, co2Saved: 1050, itemsShared: 134, connections: 48 }
  ];

  const co2TrendData = [
    { month: 'Jul', value: 320 },
    { month: 'Aug', value: 450 },
    { month: 'Sep', value: 580 },
    { month: 'Oct', value: 720 },
    { month: 'Nov', value: 890 },
    { month: 'Dec', value: 1050 }
  ];

  const connectionsTrendData = [
    { month: 'Jul', value: 12 },
    { month: 'Aug', value: 18 },
    { month: 'Sep', value: 25 },
    { month: 'Oct', value: 32 },
    { month: 'Nov', value: 41 },
    { month: 'Dec', value: 48 }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'BarChart3' },
    { id: 'challenges', name: 'Challenges', icon: 'Target' },
    { id: 'calculator', name: 'Calculator', icon: 'Calculator' },
    { id: 'achievements', name: 'Achievements', icon: 'Award' },
    { id: 'activity', name: 'Activity', icon: 'Activity' },
    { id: 'learn', name: 'Learn', icon: 'BookOpen' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Personal Impact Cards */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Your Impact This Year</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {personalImpactData?.map((data, index) => (
                  <PersonalImpactCard key={index} {...data} />
                ))}
              </div>
            </div>
            {/* Community Impact Charts */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Your Neighborhood Impact</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <CommunityImpactChart 
                  data={communityTrendData} 
                  title="Items Shared Monthly" 
                  type="bar"
                  color="#D4704A"
                />
                <CommunityImpactChart 
                  data={co2TrendData} 
                  title="CO2 Savings Trend" 
                  type="line"
                  color="#7A9B76"
                />
              </div>
              <CommunityImpactChart 
                data={connectionsTrendData} 
                title="Community Connections Growth" 
                type="line"
                color="#E8A87C"
              />
            </div>
            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">89%</div>
                  <p className="text-foreground font-medium">Waste Reduction</p>
                  <p className="text-sm text-muted-foreground">vs. buying new items</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">156</div>
                  <p className="text-foreground font-medium">Active Sharers</p>
                  <p className="text-sm text-muted-foreground">in your neighborhood</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">4.9</div>
                  <p className="text-foreground font-medium">Trust Score</p>
                  <p className="text-sm text-muted-foreground">community average</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'challenges':
        return <SustainabilityChallenges />;
      case 'calculator':
        return <ImpactCalculator />;
      case 'achievements':
        return <CommunityAchievements />;
      case 'activity':
        return <ActivityFeed />;
      case 'learn':
        return <LearningHub />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="BarChart3" size={24} color="white" />
                </div>
                <h1 className="text-4xl font-bold text-foreground">Impact Dashboard</h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Track your environmental impact, celebrate achievements, and see how your sharing 
                actions are building a more sustainable community.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-card border-b border-border sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-1 overflow-x-auto py-4">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab?.id
                      ? 'bg-primary text-primary-foreground shadow-warm'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderTabContent()}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <Icon name="Heart" size={48} className="mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Ready to Make an Even Bigger Impact?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join our community challenges, share more items, and help build the most 
              sustainable neighborhood in the city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Share Your First Item
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Invite Friends
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ImpactDashboard;