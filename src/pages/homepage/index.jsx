import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LiveActivityFeed from './components/LiveActivityFeed';
import HowItWorksSection from './components/HowItWorksSection';
import NeighborhoodSpotlight from './components/NeighborhoodSpotlight';
import TrustSafetySection from './components/TrustSafetySection';
import InteractiveMapPreview from './components/InteractiveMapPreview';
import Icon from '../../components/AppIcon';

const Homepage = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  const handleLocationDetect = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation?.getCurrentPosition(
          (position) => {
            setUserLocation({
              lat: position?.coords?.latitude,
              lng: position?.coords?.longitude
            });
            // Simulate successful location detection
            alert('Location detected! Redirecting to your neighborhood...');
          },
          (error) => {
            console.error('Location detection failed:', error);
            // Fallback to manual location entry
            alert('Please allow location access or enter your address manually.');
          }
        );
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    } catch (error) {
      console.error('Error detecting location:', error);
    }
  };

  const handleWatchVideo = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <HeroSection 
        onLocationDetect={handleLocationDetect}
        onWatchVideo={handleWatchVideo}
      />
      {/* Live Activity Feed */}
      <LiveActivityFeed />
      {/* How It Works Section */}
      <HowItWorksSection />
      {/* Neighborhood Spotlight */}
      <NeighborhoodSpotlight />
      {/* Trust & Safety Section */}
      <TrustSafetySection />
      {/* Interactive Map Preview */}
      <InteractiveMapPreview />
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to transform your <span className="text-primary font-accent">neighborhood</span>?
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of neighbors who are already sharing, saving money, and building 
            stronger communities. Your next great neighbor connection is just one click away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={handleLocationDetect}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-warm shadow-warm-lg flex items-center justify-center space-x-2"
            >
              <Icon name="MapPin" size={20} />
              <span>Find Your Community</span>
            </button>
            
            <Link 
              to="/how-it-works"
              className="border border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-warm flex items-center justify-center space-x-2"
            >
              <Icon name="Play" size={20} />
              <span>Learn How It Works</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={16} className="text-primary" />
              <span>50,000+ Active Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-success" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={16} className="text-warning" />
              <span>4.9/5 Community Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Leaf" size={16} className="text-secondary" />
              <span>Carbon Neutral</span>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Home" size={20} color="white" />
                </div>
                <span className="text-xl font-bold font-accent">Sharehood</span>
              </div>
              <p className="text-background/80 text-sm leading-relaxed">
                Building stronger communities through sharing. Connect with neighbors, 
                save money, and reduce waste.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-sm">
                <Link to="/how-it-works" className="block text-background/80 hover:text-background transition-warm">
                  How It Works
                </Link>
                <Link to="/trust-safety" className="block text-background/80 hover:text-background transition-warm">
                  Trust & Safety
                </Link>
                <Link to="/community-stories" className="block text-background/80 hover:text-background transition-warm">
                  Community Stories
                </Link>
                <Link to="/impact-dashboard" className="block text-background/80 hover:text-background transition-warm">
                  Impact Dashboard
                </Link>
              </div>
            </div>

            {/* Community */}
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <div className="space-y-2 text-sm">
                <Link to="/neighborhood-explorer" className="block text-background/80 hover:text-background transition-warm">
                  Explore Neighborhoods
                </Link>
                <a href="#" className="block text-background/80 hover:text-background transition-warm">
                  Community Guidelines
                </a>
                <a href="#" className="block text-background/80 hover:text-background transition-warm">
                  Help Center
                </a>
                <a href="#" className="block text-background/80 hover:text-background transition-warm">
                  Contact Support
                </a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-background/80 hover:text-background transition-warm">
                  Newsletter
                </a>
                <a href="#" className="block text-background/80 hover:text-background transition-warm">
                  Blog
                </a>
                <a href="#" className="block text-background/80 hover:text-background transition-warm">
                  Social Media
                </a>
                <a href="#" className="block text-background/80 hover:text-background transition-warm">
                  Press Kit
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-background/80">
            <p>&copy; {new Date()?.getFullYear()} Sharehood. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-background transition-warm">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-warm">Terms of Service</a>
              <a href="#" className="hover:text-background transition-warm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">How Sharehood Works</h3>
              <button
                onClick={closeVideoModal}
                className="p-2 hover:bg-muted rounded-lg transition-warm"
              >
                <Icon name="X" size={20} className="text-muted-foreground" />
              </button>
            </div>
            
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Icon name="Play" size={48} className="text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Video player would be embedded here showing real Sharehood success stories
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;