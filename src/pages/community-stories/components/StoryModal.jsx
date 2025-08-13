import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StoryModal = ({ story, isOpen, onClose }) => {
  if (!isOpen || !story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-lg shadow-warm-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <Image 
            src={story?.image} 
            alt={story?.title}
            className="w-full h-64 object-cover"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm hover:bg-background"
          >
            <Icon name="X" size={20} />
          </Button>
          <div className="absolute bottom-4 left-4">
            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              {story?.category}
            </span>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Image 
                src={story?.author?.avatar} 
                alt={story?.author?.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-foreground">{story?.author?.name}</p>
                <p className="text-sm text-muted-foreground flex items-center">
                  <Icon name="MapPin" size={14} className="mr-1" />
                  {story?.location}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">{story?.readTime}</p>
              <p className="text-xs text-muted-foreground">{story?.publishDate}</p>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-foreground mb-4">{story?.title}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 p-6 bg-muted rounded-lg">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">${story?.metrics?.moneySaved}</p>
              <p className="text-sm text-muted-foreground">Money Saved</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary">{story?.metrics?.connections}</p>
              <p className="text-sm text-muted-foreground">New Connections</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">{story?.metrics?.itemsShared}</p>
              <p className="text-sm text-muted-foreground">Items Shared</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-success">{story?.metrics?.carbonSaved}kg</p>
              <p className="text-sm text-muted-foreground">CO₂ Saved</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="text-foreground leading-relaxed space-y-4">
              {story?.content?.split('\n\n')?.map((paragraph, index) => (
                <p key={index} className="text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {story?.gallery && story?.gallery?.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Photo Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {story?.gallery?.map((photo, index) => (
                  <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                    <Image 
                      src={photo?.url} 
                      alt={photo?.caption}
                      className="w-full h-full object-cover hover:scale-105 transition-warm"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Icon name="Heart" size={16} className="mr-2" />
                  Like Story
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Share2" size={16} className="mr-2" />
                  Share
                </Button>
              </div>
              <Button variant="default">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Contact {story?.author?.name}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;