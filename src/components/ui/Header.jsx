import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate('/');
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'How It Works', path: '/how-it-works', icon: 'HelpCircle' },
    { name: 'Community Stories', path: '/community-stories', icon: 'Users' },
    { name: 'Trust & Safety', path: '/trust-safety', icon: 'Shield' },
    { name: 'Impact Dashboard', path: '/impact-dashboard', icon: 'BarChart3' }
  ];

  const secondaryItems = [
    { name: 'Neighborhood Explorer', path: '/neighborhood-explorer', icon: 'Map' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [darkMode, setDarkMode] = useState(() => {
    return window.localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleToggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-warm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/homepage" className="flex items-center space-x-2 hover:opacity-80 transition-warm">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Home" size={20} color="white" />
            </div>
            <span className="text-xl font-bold text-foreground font-accent">Sharehood</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-warm hover:bg-muted ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item?.name}
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-warm flex items-center space-x-1">
                <span>More</span>
                <Icon name="ChevronDown" size={16} />
              </button>
              
              {/* Dropdown */}
              <div className="absolute right-0 top-full mt-1 w-48 bg-popover border border-border rounded-lg shadow-warm-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-warm">
                <div className="py-2">
                  {secondaryItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-2 px-4 py-2 text-sm hover:bg-muted transition-warm ${
                        isActivePath(item?.path)
                          ? 'text-primary font-medium' :'text-popover-foreground'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="sm" aria-label="Toggle dark mode" onClick={handleToggleDarkMode}>
              <Icon name={darkMode ? "Sun" : "Moon"} size={20} />
            </Button>
            {user ? (
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
                  Sign In
                </Button>
                <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90" onClick={() => navigate('/register')}>
                  Join Community
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button & Dark Mode */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button variant="ghost" size="sm" aria-label="Toggle dark mode" onClick={handleToggleDarkMode}>
              <Icon name={darkMode ? "Sun" : "Moon"} size={20} />
            </Button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-foreground hover:bg-muted transition-warm"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-warm ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {secondaryItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-warm ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 mt-4 border-t border-border space-y-2">
                {user ? (
                  <Button variant="ghost" fullWidth className="justify-start" onClick={handleLogout}>
                    Logout
                  </Button>
                ) : (
                  <>
                    <Button variant="ghost" fullWidth className="justify-start" onClick={() => { setIsMobileMenuOpen(false); navigate('/login'); }}>
                      Sign In
                    </Button>
                    <Button variant="default" fullWidth className="justify-start bg-primary hover:bg-primary/90" onClick={() => { setIsMobileMenuOpen(false); navigate('/register'); }}>
                      Join Community
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;