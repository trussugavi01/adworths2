import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
// Mock data - in a real app, this would come from a CMS or API
const blogPosts = {
  'the-art-of-brand-storytelling': {
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&h=600&auto=format&fit=crop',
    category: 'Branding',
    title: 'The Art of Brand Storytelling in the Digital Age',
    author: 'Sarah Rodriguez',
    date: 'October 26, 2025',
    content: `
      <p>In a world saturated with content, brand storytelling has emerged as a powerful tool to cut through the noise. It's not just about what you sell; it's about the story you tell. A compelling narrative can forge a deep emotional connection with your audience, transforming passive consumers into loyal advocates.</p>
      <h2>Why Storytelling Matters</h2>
      <p>Stories are fundamental to human communication. They help us make sense of the world and connect with each other on a deeper level. For brands, storytelling is a way to humanize your business, share your values, and build trust. A good story can make your brand more memorable, relatable, and authentic.</p>
      <blockquote>"People don't buy what you do; they buy why you do it." - Simon Sinek</blockquote>
      <p>This quote perfectly encapsulates the power of brand storytelling. By communicating your "why," you can attract customers who share your values and believe in your mission. This creates a much stronger bond than one based solely on product features or price.</p>
      <h2>Elements of a Great Brand Story</h2>
      <ul>
        <li><strong>Authenticity:</strong> Your story must be genuine and true to your brand's identity.</li>
        <li><strong>Emotion:</strong> The best stories evoke emotion, whether it's joy, inspiration, or empathy.</li>
        <li><strong>Consistency:</strong> Your story should be consistent across all touchpoints, from your website to your social media channels.</li>
        <li><strong>Simplicity:</strong> A clear and concise narrative is more effective than a complex one.</li>
      </ul>
    `
  },
  // Add other posts here if needed for direct navigation testing
};
export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;
  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl font-display font-bold">Post not found</h1>
        <p className="mt-4 text-lg text-muted-foreground">The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="mt-6 inline-flex items-center text-primary-blue hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </div>
    );
  }
  return (
    <div className="animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <article>
          <header className="text-center mb-12">
            <p className="text-base font-semibold text-primary-blue uppercase tracking-wide">{post.category}</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold text-charcoal-gray leading-tight">{post.title}</h1>
            <div className="mt-6 flex justify-center items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </header>
          <div className="aspect-[16/9] rounded-lg overflow-hidden mb-12">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
          <div 
            className="prose prose-lg max-w-none text-charcoal-gray"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="mt-12 border-t pt-8 text-center">
            <Link to="/blog" className="inline-flex items-center text-primary-blue hover:underline font-semibold">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}