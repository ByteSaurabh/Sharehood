import React from "react";
import Header from "../components/ui/Header";
import Icon from "../components/AppIcon";
import Button from "../components/ui/Button";

const TrustSafety = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Icon name="Shield" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Trust & Safety</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Your safety and trust are our top priorities. Learn how Sharehood keeps your community secure, respectful, and welcoming for everyone.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Learn More
            </Button>
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="bg-card rounded-lg p-6 shadow-warm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">How We Keep You Safe</h2>
            <ul className="space-y-4 text-left">
              <li className="flex items-start space-x-3">
                <Icon name="UserCheck" size={24} color="var(--color-success)" />
                <span className="text-foreground">Verified profiles and community moderation</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="ShieldCheck" size={24} color="var(--color-primary)" />
                <span className="text-foreground">Secure messaging and privacy controls</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="AlertCircle" size={24} color="var(--color-destructive)" />
                <span className="text-foreground">Report and block features for inappropriate behavior</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="ThumbsUp" size={24} color="var(--color-accent)" />
                <span className="text-foreground">Community guidelines and positive feedback system</span>
              </li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-warm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment</h2>
            <p className="text-muted-foreground mb-4">
              We believe in building trust through transparency, accountability, and ongoing support. Our team is always here to help and listen to your concerns.
            </p>
            <Button variant="outline" size="lg" className="w-full">
              Contact Support
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TrustSafety;
