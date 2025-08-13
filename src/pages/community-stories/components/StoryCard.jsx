import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StoryCard = ({ story, onClick }) => {
  return (
    <div 
      className="bg-card rounded-lg shadow-warm hover:shadow-warm-lg transition-warm cursor-pointer overflow-hidden"
      onClick={() => onClick(story)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={story?.image} 
          alt={story?.title}
          className="w-full h-full object-cover hover:scale-105 transition-warm"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {story?.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-2">
          <Icon name="MapPin" size={16} className="text-primary" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
          {story?.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {story?.excerpt}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Image 
              src={story?.author?.avatar} 
              alt={story?.author?.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-foreground">{story?.author?.name}</p>
              <p className="text-xs text-muted-foreground">{story?.location}</p>
            </div>
          </div>
          <span className="text-xs text-muted-foreground">{story?.readTime}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
          <div className="text-center">
            <p className="text-lg font-bold text-primary">${story?.metrics?.moneySaved}</p>
            <p className="text-xs text-muted-foreground">Saved</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-secondary">{story?.metrics?.connections}</p>
            <p className="text-xs text-muted-foreground">Connections</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-accent">{story?.metrics?.itemsShared}</p>
            <p className="text-xs text-muted-foreground">Items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;