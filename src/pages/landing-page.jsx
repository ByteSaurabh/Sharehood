import React from "react";
import Header from "../components/ui/Header";
import Icon from "../components/AppIcon";
import Button from "../components/ui/Button";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Icon name="Users" size={56} color="var(--color-primary)" className="mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-foreground mb-6">Welcome to Sharehood</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Connect, share, and thrive in your neighborhood. Discover stories, join community events, and make a positive impact together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => window.location.href='/register'}>
                Join Now
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href='/login'}>
                Sign In
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-card rounded-lg p-6 shadow-warm border border-border">
                <Icon name="Home" size={32} color="var(--color-accent)" className="mb-3" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Explore Your Neighborhood</h3>
                <p className="text-muted-foreground">Find local events, resources, and connect with neighbors nearby.</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-warm border border-border">
                <Icon name="TrendingUp" size={32} color="var(--color-success)" className="mb-3" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Track Your Impact</h3>
                <p className="text-muted-foreground">See how sharing and collaboration make a difference in your community.</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-warm border border-border">
                <Icon name="Shield" size={32} color="var(--color-primary)" className="mb-3" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Safe & Trusted</h3>
                <p className="text-muted-foreground">Enjoy a secure, welcoming space with verified profiles and community guidelines.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
