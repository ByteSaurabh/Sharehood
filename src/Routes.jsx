import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import CommunityStories from './pages/community-stories';
import HowItWorks from './pages/how-it-works';
import ImpactDashboard from './pages/impact-dashboard';
import NeighborhoodExplorer from './pages/neighborhood-explorer';
import Homepage from './pages/homepage';
import TrustSafety from './pages/trust-safety';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

import Login from './pages/login';
import Register from './pages/register';
import LandingPage from './pages/landing-page';

function ProtectedRoute({ element }) {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  if (user === undefined) return null;
  return user ? element : <Login />;
}

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<ProtectedRoute element={<Homepage />} />} />
        <Route path="/community-stories" element={<ProtectedRoute element={<CommunityStories />} />} />
        <Route path="/how-it-works" element={<ProtectedRoute element={<HowItWorks />} />} />
        <Route path="/impact-dashboard" element={<ProtectedRoute element={<ImpactDashboard />} />} />
        <Route path="/neighborhood-explorer" element={<ProtectedRoute element={<NeighborhoodExplorer />} />} />
        <Route path="/trust-safety" element={<ProtectedRoute element={<TrustSafety />} />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
