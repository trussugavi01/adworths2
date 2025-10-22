import React, { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const allProjects = [
  {
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Branding',
    title: 'Corporate Rebranding for TechCorp',
    description: 'A complete visual overhaul to position TechCorp as a modern industry leader.',
  },
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Digital',
    title: 'Lead Generation Campaign for Innovate LLC',
    description: 'A multi-channel digital campaign that boosted lead acquisition by 150%.',
  },
  {
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Outdoor',
    title: 'Product Launch Event for Fusion Drinks',
    description: 'An immersive launch experience that generated massive social media buzz.',
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Branding',
    title: 'Brand Identity for a Startup',
    description: 'Creating a fresh and appealing brand identity for a new market entrant.',
  },
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Digital',
    title: 'Social Media Strategy for a Fashion Brand',
    description: 'Elevating online presence and engagement through strategic content.',
  },
  {
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Outdoor',
    title: 'City-wide Billboard Campaign',
    description: 'A high-visibility campaign that captured the city\'s attention.',
  },
];
const categories = ['All', 'Branding', 'Digital', 'Outdoor'];
export function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('All');
  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return allProjects;
    return allProjects.filter(p => p.category === activeTab);
  }, [activeTab]);
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-charcoal-gray">Our Work</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            We're proud of the work we do. Explore some of our favorite projects.
          </p>
        </div>
      </section>
      {/* Portfolio Gallery */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
              {categories.map(category => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <Card key={project.title} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-w-4 aspect-h-3">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm font-semibold text-primary-blue">{project.category}</p>
                    <h3 className="text-xl font-bold mt-2 text-charcoal-gray">{project.title}</h3>
                    <p className="mt-2 text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
}