import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import StoryCard from './components/StoryCard';
import StoryModal from './components/StoryModal';
import FilterBar from './components/FilterBar';
import ImpactStats from './components/ImpactStats';
import InteractiveMap from './components/InteractiveMap';
import ShareStorySection from './components/ShareStorySection';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const CommunityStories = () => {
  const navigate = useNavigate();
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [showShareForm, setShowShareForm] = useState(false);

  // Mock stories data
  const stories = [
    {
      id: 1,
      title: "The Tool Library That Built Friendships",
      excerpt: "How a simple drill sharing request turned into a neighborhood tool library and lasting friendships across our suburban community.",
      category: "tools",
      location: "Maple Grove Suburbs",
      neighborhoodId: "suburbs",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500",
      author: {
        name: "Sarah Mitchell",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      },
      readTime: "5 min read",
      publishDate: "December 8, 2024",
      metrics: {
        moneySaved: 1250,
        connections: 12,
        itemsShared: 45,
        carbonSaved: 89
      },
      content: `It started with a simple need - I needed a drill for a weekend project but didn't want to buy one for occasional use. I posted on Sharehood and within hours, my neighbor Tom responded.\n\nWhat began as a quick tool exchange turned into something much bigger. Tom and I started talking about all the tools we had sitting unused in our garages. We realized our entire neighborhood was full of duplicate tools that rarely got used.\n\nWe decided to create an informal tool library. We mapped out who had what tools and created a simple sharing system. Within three months, 15 households were participating, and we had saved thousands of dollars collectively.\n\nBut the real magic wasn't in the money saved - it was in the relationships formed. Weekend projects became community events. Neighbors who had never spoken were now helping each other with home improvements.\n\nToday, our tool library has grown to include 30 families and over 200 tools. We've organized workshops, skill-sharing sessions, and even started a community garden using our shared tools. What started as needing a drill became the foundation for a truly connected neighborhood.`,
      gallery: [
        { url: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?w=300", caption: "Community tool collection" },
        { url: "https://images.pixabay.com/photo-2017/08/10/08/47/laptop-2619564_1280.jpg?w=300", caption: "Digital tool tracking system" },
        { url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300", caption: "Neighborhood workshop day" }
      ]
    },
    {
      id: 2,
      title: "From Strangers to Sustainability Champions",
      excerpt: "An urban apartment complex reduced waste by 40% through strategic sharing, creating an environmental success story.",
      category: "sustainability",
      location: "Downtown Metro Complex",
      neighborhoodId: "downtown",
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?w=500",
      author: {
        name: "Marcus Chen",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      readTime: "7 min read",
      publishDate: "December 5, 2024",
      metrics: {
        moneySaved: 2100,
        connections: 28,
        itemsShared: 156,
        carbonSaved: 245
      },
      content: `Living in a 200-unit apartment complex, I barely knew my neighbors despite sharing walls with them. The building's waste management costs were skyrocketing, and our environmental impact was concerning.\n\nI started small - sharing my rarely-used kitchen appliances through Sharehood. The response was overwhelming. Neighbors I'd never met were borrowing my stand mixer, food processor, and specialty cooking tools.\n\nSeeing the interest, I proposed a building-wide sharing initiative to our management company. We created designated sharing spaces on each floor and implemented a digital tracking system through Sharehood.\n\nThe results exceeded all expectations. Within six months, we had reduced building waste by 40%. Residents were sharing everything from cleaning supplies to exercise equipment. Our collective purchasing power allowed us to buy higher-quality items that everyone could access.\n\nThe environmental impact was measurable - we tracked a 245kg reduction in carbon footprint and diverted tons of potential waste from landfills. But beyond the numbers, we had transformed from a building of strangers into a community of sustainability champions.\n\nToday, our building serves as a model for urban sustainable living. We host monthly sustainability workshops, coordinate group purchases of eco-friendly products, and have even started a rooftop garden using shared tools and resources.`,
      gallery: [
        { url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300", caption: "Shared kitchen appliances area" },
        { url: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?w=300", caption: "Community recycling center" },
        { url: "https://images.pixabay.com/photo-2016/11/29/05/45/astronomy-1867616_1280.jpg?w=300", caption: "Rooftop community garden" }
      ]
    },
    {
      id: 3,
      title: "The New Parent Network",
      excerpt: "Baby gear sharing created a support system that helped new parents navigate the challenges of parenthood together.",
      category: "family",
      location: "University District",
      neighborhoodId: "university",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500",
      author: {
        name: "Jennifer Rodriguez",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg"
      },
      readTime: "6 min read",
      publishDate: "December 3, 2024",
      metrics: {
        moneySaved: 3200,
        connections: 18,
        itemsShared: 89,
        carbonSaved: 156
      },
      content: `As a new parent, I was overwhelmed by the amount of baby gear needed and the short time each item would be useful. The costs were staggering, and I felt isolated in my new role as a mother.\n\nI discovered Sharehood when searching for a high chair that my baby would only use for a few months. Not only did I find one nearby, but I connected with another new mom, Lisa, who became my lifeline during those challenging early months.\n\nLisa and I realized we weren't alone in our struggles. We started a baby gear sharing network through Sharehood, connecting new parents in our area. What began with sharing cribs and strollers evolved into sharing experiences, advice, and emotional support.\n\nOur network grew to include 18 families, sharing everything from baby carriers to toys to maternity clothes. We calculated that each family saved an average of $3,200 in the first year alone. But the real value was in the community we built.\n\nWe organized playdates, parenting workshops, and support groups. New parents had experienced mentors, and children had built-in playmates. The sharing network became a comprehensive support system for navigating parenthood.\n\nThree years later, our children are growing up together, and many of us have become lifelong friends. We've expanded to include toddler gear, educational toys, and even coordinated childcare. What started as sharing baby items became sharing the journey of parenthood itself.`,
      gallery: [
        { url: "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?w=300", caption: "Shared baby gear collection" },
        { url: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=300", caption: "Parent support group meeting" },
        { url: "https://images.pixabay.com/photo-2017/11/04/15/27/baby-2918237_1280.jpg?w=300", caption: "Children playing together" }
      ]
    },
    {
      id: 4,
      title: "Community Garden Revolution",
      excerpt: "Shared gardening tools and knowledge transformed empty lots into thriving community spaces that feed neighborhoods.",
      category: "community",
      location: "Riverside District",
      neighborhoodId: "riverside",
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?w=500",
      author: {
        name: "David Thompson",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg"
      },
      readTime: "8 min read",
      publishDate: "November 28, 2024",
      metrics: {
        moneySaved: 1800,
        connections: 35,
        itemsShared: 78,
        carbonSaved: 312
      },
      content: `Our neighborhood had several empty lots that were becoming eyesores and safety concerns. As someone passionate about gardening, I saw potential where others saw problems.\n\nI started by sharing my gardening tools through Sharehood, hoping to connect with other gardening enthusiasts. The response revealed a hidden community of people who wanted to garden but lacked tools, space, or knowledge.\n\nWe organized our first community meeting in my backyard. Fifteen neighbors showed up, each bringing different skills and resources. We decided to approach the city about converting one of the empty lots into a community garden.\n\nThe city approved our proposal, and we began transforming the space. Through Sharehood, we coordinated tool sharing, bulk purchasing of supplies, and knowledge exchange. Experienced gardeners mentored beginners, and everyone contributed according to their abilities.\n\nThe garden became more than just a place to grow food. It became a community hub where neighbors gathered, children learned about nature, and families shared meals made from fresh produce. We organized seasonal festivals, cooking classes, and educational workshops.\n\nOur success inspired three more community gardens in neighboring areas. We've created a network of urban farmers who share resources, knowledge, and harvests. The environmental impact includes reduced food miles, increased biodiversity, and improved air quality.\n\nToday, our gardens feed over 100 families and have become a model for urban agriculture. What started as sharing gardening tools became sharing the vision of a more sustainable, connected community.`,
      gallery: [
        { url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300", caption: "Community garden in full bloom" },
        { url: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?w=300", caption: "Shared gardening tools shed" },
        { url: "https://images.pixabay.com/photo-2016/08/11/23/48/vegetables-1589099_1280.jpg?w=300", caption: "Fresh harvest sharing" }
      ]
    },
    {
      id: 5,
      title: "The Holiday Decoration Exchange",
      excerpt: "Seasonal sharing of decorations brought festive joy to the entire neighborhood while reducing storage needs and costs.",
      category: "events",
      location: "Hillside Community",
      neighborhoodId: "suburbs",
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=500",
      author: {
        name: "Maria Gonzalez",
        avatar: "https://randomuser.me/api/portraits/women/41.jpg"
      },
      readTime: "4 min read",
      publishDate: "November 25, 2024",
      metrics: {
        moneySaved: 950,
        connections: 22,
        itemsShared: 134,
        carbonSaved: 67
      },
      content: `Every year, I struggled with the same problem - wanting to decorate for holidays but lacking storage space and budget for elaborate displays. My garage was overflowing with decorations used only once a year.\n\nLast Halloween, I decided to share my extensive collection of spooky decorations through Sharehood. The response was incredible - neighbors I'd never met were borrowing pumpkins, lights, and props to create amazing displays.\n\nSeeing the enthusiasm, I proposed a neighborhood-wide holiday decoration exchange. We created a shared inventory of decorations for all major holidays - Halloween, Christmas, Easter, Fourth of July, and more.\n\nThe system worked beautifully. Families could create elaborate displays without the expense or storage burden. Children were thrilled to see their neighborhood transform for each holiday, and adults enjoyed the creative collaboration.\n\nWe organized decoration setup and takedown parties, turning the work into social events. Neighbors shared decorating tips, coordinated themes, and even created joint displays that spanned multiple properties.\n\nThe financial savings were significant - families saved hundreds of dollars while achieving better decorations than they could afford individually. But the real magic was in the community spirit we created.\n\nOur neighborhood became known for its spectacular holiday displays. Local news featured our community, and other neighborhoods started their own decoration sharing programs. We had transformed from individual decorators into a coordinated community celebration.`,
      gallery: [
        { url: "https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?w=300", caption: "Halloween decoration sharing" },
        { url: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=300", caption: "Christmas lights coordination" },
        { url: "https://images.pixabay.com/photo-2017/07/04/15/11/fireworks-2470000_1280.jpg?w=300", caption: "Fourth of July community display" }
      ]
    },
    {
      id: 6,
      title: "Student Success Through Sharing",
      excerpt: "University students created a textbook and study resource sharing network that improved academic outcomes while reducing costs.",
      category: "community",
      location: "University District",
      neighborhoodId: "university",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?w=500",
      author: {
        name: "Alex Kim",
        avatar: "https://randomuser.me/api/portraits/men/23.jpg"
      },
      readTime: "5 min read",
      publishDate: "November 20, 2024",
      metrics: {
        moneySaved: 2800,
        connections: 45,
        itemsShared: 267,
        carbonSaved: 134
      },
      content: `As a college student, textbook costs were crushing my budget. I was spending over $1,000 per semester on books I'd use for just a few months. Many of my classmates were in the same situation.\n\nI started sharing my previous semester's textbooks through Sharehood, hoping to help other students while recouping some costs. The demand was overwhelming, and I realized we could create a comprehensive student resource sharing network.\n\nWe organized by academic departments and created a system for sharing textbooks, study guides, calculators, and other academic resources. Students could access materials they needed without the financial burden of purchasing everything new.\n\nThe network expanded beyond textbooks to include study groups, tutoring exchanges, and academic mentoring. Upper-class students shared knowledge and resources with newcomers, creating a supportive academic community.\n\nWe tracked impressive results - participating students saved an average of $2,800 per year on academic materials. More importantly, academic performance improved as students had better access to resources and peer support.\n\nThe sharing network also included practical items like mini-fridges, furniture, and electronics that students needed temporarily. We coordinated moves, shared transportation, and created a comprehensive support system for student life.\n\nOur success led to official university recognition and support. The administration provided space for our resource center and integrated our sharing model into orientation programs. What started as textbook sharing became a model for student success through community support.`,
      gallery: [
        { url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300", caption: "Shared textbook library" },
        { url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?w=300", caption: "Study group meeting" },
        { url: "https://images.pixabay.com/photo-2016/11/29/06/15/library-1867716_1280.jpg?w=300", caption: "Academic resource center" }
      ]
    }
  ];

  // Filter stories based on selected filters
  const filteredStories = stories?.filter(story => {
    const matchesCategory = selectedCategory === 'all' || story?.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || story?.neighborhoodId === selectedLocation;
    const matchesSearch = searchTerm === '' || 
      story?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      story?.excerpt?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      story?.location?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    
    return matchesCategory && matchesLocation && matchesSearch;
  });

  // Sort stories
  const sortedStories = [...filteredStories]?.sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return (b?.metrics?.connections + b?.metrics?.itemsShared) - (a?.metrics?.connections + a?.metrics?.itemsShared);
      case 'impact':
        return b?.metrics?.carbonSaved - a?.metrics?.carbonSaved;
      case 'savings':
        return b?.metrics?.moneySaved - a?.metrics?.moneySaved;
      default: // recent
        return new Date(b.publishDate) - new Date(a.publishDate);
    }
  });

  const handleStoryClick = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Community Stories
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover how sharing transforms neighborhoods into thriving communities. 
                Real stories from real people making a difference through connection and collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => setShowShareForm(true)}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Icon name="Plus" size={20} className="mr-2" />
                  Share Your Story
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Map" size={20} className="mr-2" />
                  Explore by Location
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Impact Statistics */}
          <ImpactStats />

          {/* Interactive Map */}
          <InteractiveMap stories={stories} onStorySelect={handleStoryClick} />

          {/* Filter Bar */}
          <FilterBar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedLocation={selectedLocation}
            onLocationChange={setSelectedLocation}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          {/* Stories Grid */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                {filteredStories?.length === stories?.length 
                  ? 'All Stories' 
                  : `${filteredStories?.length} Stories Found`
                }
              </h2>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Filter" size={16} />
                <span>
                  {selectedCategory !== 'all' && `${selectedCategory} • `}
                  {selectedLocation !== 'all' && `${selectedLocation} • `}
                  {sortBy}
                </span>
              </div>
            </div>

            {sortedStories?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedStories?.map((story) => (
                  <StoryCard
                    key={story?.id}
                    story={story}
                    onClick={handleStoryClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No Stories Found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search terms to find more stories.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedLocation('all');
                    setSearchTerm('');
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </section>

          {/* Share Your Story Section */}
          {showShareForm && (
            <section className="mb-12">
              <ShareStorySection />
              <div className="text-center mt-6">
                <Button 
                  variant="outline" 
                  onClick={() => setShowShareForm(false)}
                >
                  Hide Form
                </Button>
              </div>
            </section>
          )}

          {/* Call to Action */}
          {!showShareForm && (
            <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Have a Story to Share?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Your sharing experience could inspire others to build stronger communities. 
                Share your story and become part of the Sharehood transformation narrative.
              </p>
              <Button 
                size="lg" 
                onClick={() => setShowShareForm(true)}
                className="bg-primary hover:bg-primary/90"
              >
                <Icon name="PenTool" size={20} className="mr-2" />
                Tell Your Story
              </Button>
            </section>
          )}
        </div>

        {/* Story Modal */}
        <StoryModal
          story={selectedStory}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center shadow-warm-lg hover:bg-primary/90 transition-warm z-40"
          aria-label="Scroll to top"
        >
          <Icon name="ArrowUp" size={20} />
        </button>
      </main>
    </div>
  );
};

export default CommunityStories;