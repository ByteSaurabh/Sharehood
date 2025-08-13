import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ShareStorySection = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    location: '',
    story: '',
    impact: {
      moneySaved: '',
      connections: '',
      itemsShared: ''
    }
  });
  const [uploadedImages, setUploadedImages] = useState([]);

  const categories = [
    'Tool Sharing',
    'Family & Kids',
    'Sustainability',
    'Community Building',
    'Events & Gatherings'
  ];

  const storyTemplates = [
    {
      id: 'transformation',
      title: 'Community Transformation',
      description: 'How sharing changed your neighborhood',
      template: `Before sharing on Sharehood:\n[Describe the situation before]\n\nWhat happened:\n[Describe your sharing experience]\n\nThe impact:\n[How it changed things for you and your community]`
    },
    {
      id: 'friendship',
      title: 'New Friendship',
      description: 'Connections made through sharing',
      template: `How we met:\n[Describe how you connected through sharing]\n\nWhat we shared:\n[Items or experiences shared]\n\nOur friendship today:\n[How the relationship has grown]`
    },
    {
      id: 'sustainability',
      title: 'Environmental Impact',
      description: 'Your contribution to sustainability',
      template: `The problem:\n[Environmental issue you wanted to address]\n\nSharing solution:\n[How sharing helped]\n\nMeasurable impact:\n[Specific environmental benefits]`
    }
  ];

  const handleInputChange = (field, value) => {
    if (field?.includes('.')) {
      const [parent, child] = field?.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev?.[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleTemplateSelect = (template) => {
    setFormData(prev => ({
      ...prev,
      story: template?.template
    }));
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event?.target?.files);
    const newImages = files?.map(file => ({
      id: Date.now() + Math.random(),
      file,
      preview: URL.createObjectURL(file)
    }));
    setUploadedImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (imageId) => {
    setUploadedImages(prev => prev?.filter(img => img?.id !== imageId));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission
    console.log('Story submitted:', formData, uploadedImages);
  };

  return (
    <div className="bg-card rounded-lg shadow-warm p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Share Your Story</h2>
        <p className="text-muted-foreground">
          Inspire others by sharing how Sharehood transformed your community experience
        </p>
      </div>
      {/* Story Templates */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Choose a Story Template</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {storyTemplates?.map((template) => (
            <div
              key={template?.id}
              className="p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition-warm"
              onClick={() => handleTemplateSelect(template)}
            >
              <h4 className="font-medium text-foreground mb-2">{template?.title}</h4>
              <p className="text-sm text-muted-foreground">{template?.description}</p>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Story Title"
            type="text"
            placeholder="Give your story a compelling title"
            value={formData?.title}
            onChange={(e) => handleInputChange('title', e?.target?.value)}
            required
          />

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Category</label>
            <select
              value={formData?.category}
              onChange={(e) => handleInputChange('category', e?.target?.value)}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
              required
            >
              <option value="">Select a category</option>
              {categories?.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Input
          label="Location"
          type="text"
          placeholder="Your neighborhood or area"
          value={formData?.location}
          onChange={(e) => handleInputChange('location', e?.target?.value)}
          required
        />

        {/* Story Content */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Your Story</label>
          <textarea
            value={formData?.story}
            onChange={(e) => handleInputChange('story', e?.target?.value)}
            placeholder="Tell us about your sharing experience and its impact..."
            rows={8}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground resize-none"
            required
          />
        </div>

        {/* Impact Metrics */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Impact Metrics (Optional)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              label="Money Saved ($)"
              type="number"
              placeholder="0"
              value={formData?.impact?.moneySaved}
              onChange={(e) => handleInputChange('impact.moneySaved', e?.target?.value)}
            />
            <Input
              label="New Connections"
              type="number"
              placeholder="0"
              value={formData?.impact?.connections}
              onChange={(e) => handleInputChange('impact.connections', e?.target?.value)}
            />
            <Input
              label="Items Shared"
              type="number"
              placeholder="0"
              value={formData?.impact?.itemsShared}
              onChange={(e) => handleInputChange('impact.itemsShared', e?.target?.value)}
            />
          </div>
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Photos</label>
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="photo-upload"
            />
            <label htmlFor="photo-upload" className="cursor-pointer">
              <Icon name="Upload" size={32} className="text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground mb-2">
                Click to upload photos or drag and drop
              </p>
              <p className="text-xs text-muted-foreground">
                PNG, JPG up to 10MB each
              </p>
            </label>
          </div>

          {uploadedImages?.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {uploadedImages?.map((image) => (
                <div key={image?.id} className="relative">
                  <img
                    src={image?.preview}
                    alt="Upload preview"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(image?.id)}
                    className="absolute -top-2 -right-2 bg-error text-error-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-error/90 transition-warm"
                  >
                    <Icon name="X" size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-6">
          <Button type="submit" size="lg" className="px-8">
            <Icon name="Send" size={20} className="mr-2" />
            Submit Your Story
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ShareStorySection;