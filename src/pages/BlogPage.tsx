import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
const blogPosts = [
  {
    slug: 'the-art-of-brand-storytelling',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&h=500&auto=format&fit=crop',
    category: 'Branding',
    title: 'The Art of Brand Storytelling in the Digital Age',
    excerpt: 'Learn how compelling narratives can build a loyal community around your brand and drive growth.',
    author: 'Sarah Rodriguez',
    date: 'October 26, 2025',
  },
  {
    slug: 'unlocking-growth-with-performance-marketing',
    image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=800&h=500&auto=format&fit=crop',
    category: 'Marketing',
    title: 'Unlocking Growth with Performance Marketing',
    excerpt: 'A deep dive into data-driven strategies that deliver measurable ROI and scale your business effectively.',
    author: 'David Lee',
    date: 'October 15, 2025',
  },
  {
    slug: 'design-trends-to-watch-in-2026',
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=800&h=500&auto=format&fit=crop',
    category: 'Design',
    title: 'Creative Design Trends to Watch in 2026',
    excerpt: 'From neo-brutalism to AI-generated art, we explore the visual trends that will define the upcoming year.',
    author: 'Emily White',
    date: 'September 28, 2025',
  },
];
export function BlogPage() {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-charcoal-gray">Insights & Ideas</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Our take on the latest trends in advertising, branding, and creative strategy.
          </p>
        </div>
      </section>
      {/* Blog Grid Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="aspect-w-16 aspect-h-9">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </Link>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <p className="text-sm font-semibold text-primary-blue">{post.category}</p>
                  <h3 className="text-xl font-bold mt-2 text-charcoal-gray">
                    <Link to={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link>
                  </h3>
                  <p className="mt-2 text-muted-foreground flex-grow">{post.excerpt}</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}