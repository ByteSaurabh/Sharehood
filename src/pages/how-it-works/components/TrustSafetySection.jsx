import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TrustSafetySection = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const safetyFeatures = [
    {
      icon: "Shield",
      title: "Identity Verification",
      description: "Multi-level verification process including phone, email, and government ID verification for all community members.",
      color: "text-success"
    },
    {
      icon: "CreditCard",
      title: "Secure Payments",
      description: "All transactions processed through encrypted payment systems with automatic escrow protection and dispute resolution.",
      color: "text-primary"
    },
    {
      icon: "FileText",
      title: "Insurance Coverage",
      description: "Comprehensive insurance protection for all shared items up to $10,000, covering damage, theft, and liability.",
      color: "text-secondary"
    },
    {
      icon: "MessageSquare",
      title: "Community Guidelines",
      description: "Clear community standards enforced by our moderation team and community reporting system for safe interactions.",
      color: "text-accent"
    }
  ];

  const verificationSteps = [
    {
      step: 1,
      title: "Basic Profile",
      description: "Create your profile with photo and basic information",
      icon: "User"
    },
    {
      step: 2,
      title: "Phone & Email",
      description: "Verify your contact information with SMS and email codes",
      icon: "Smartphone"
    },
    {
      step: 3,
      title: "Identity Check",
      description: "Upload government ID for identity verification",
      icon: "FileCheck"
    },
    {
      step: 4,
      title: "Community Trust",
      description: "Build reputation through successful sharing experiences",
      icon: "Star"
    }
  ];

  const faqItems = [
    {
      question: "What happens if an item gets damaged?",
      answer: "Our comprehensive insurance covers damage up to $10,000. Simply report the incident through our app, and our claims team will handle the rest. Most claims are resolved within 48 hours."
    },
    {
      question: "How do you verify community members?",
      answer: "We use a multi-step verification process including phone number, email address, and government ID verification. Members also build trust scores through successful sharing experiences and community reviews."
    },
    {
      question: "What if someone doesn't return my item?",
      answer: "Our platform tracks all rentals with automatic return reminders. If an item isn't returned, our dispute resolution team intervenes immediately, and insurance covers replacement costs."
    },
    {
      question: "How do you handle disputes between members?",
      answer: "Our dedicated mediation team reviews all disputes within 24 hours. We use transaction history, messages, and community feedback to reach fair resolutions. Most disputes are resolved amicably through guided communication."
    },
    {
      question: "Is my personal information safe?",
      answer: "Yes, we use bank-level encryption for all data and never share personal information between members without consent. You control what information is visible in your public profile."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trust & Safety First
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your security and peace of mind are our top priorities. Here's how we keep our community safe and trustworthy.
          </p>
        </div>

        {/* Safety Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {safetyFeatures?.map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-card flex items-center justify-center shadow-warm ${feature?.color}`}>
                <Icon name={feature?.icon} size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature?.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Verification Process */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 mb-16 shadow-warm-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Verification Process
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our step-by-step verification ensures every community member is authentic and trustworthy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {verificationSteps?.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < verificationSteps?.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-muted -translate-x-1/2 z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center shadow-warm">
                    <Icon name={step?.icon} size={24} color="white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                    {step?.step}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {step?.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {step?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-muted-foreground">
              Get answers to common questions about safety and security
            </p>
          </div>

          <div className="space-y-4">
            {faqItems?.map((item, index) => (
              <div key={index} className="bg-card rounded-lg shadow-warm overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted transition-warm"
                >
                  <span className="font-medium text-foreground pr-4">
                    {item?.question}
                  </span>
                  <Icon 
                    name={expandedFaq === index ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-muted-foreground flex-shrink-0"
                  />
                </button>
                
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {item?.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="ExternalLink"
            iconPosition="right"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            View Complete Safety Guidelines
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrustSafetySection;