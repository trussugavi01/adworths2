import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, BarChart, Brush, Megaphone, Quote } from 'lucide-react';
const services = [
  {
    icon: Brush,
    title: 'Brand Identity Design',
    description: 'Crafting unique visual identities that tell your brand’s story and captivate your audience.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Strategy',
    description: 'Developing data-driven marketing plans that amplify your reach and drive measurable results.',
  },
  {
    icon: BarChart,
    title: 'Creative Content',
    description: 'Producing compelling content across all platforms to engage and convert your target market.',
  },
];
const projects = [
  {
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop',
    category: 'Branding',
    title: 'Corporate Rebranding for TechCorp',
  },
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    category: 'Digital Marketing',
    title: 'Lead Generation Campaign for Innovate LLC',
  },
  {
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
    category: 'Experiential',
    title: 'Product Launch Event for Fusion Drinks',
  },
];
const testimonials = [
  {
    quote: "AdWorths transformed our brand's digital presence. Their strategic approach led to a 200% increase in engagement. Truly exceptional!",
    name: 'John Doe',
    title: 'CEO, TechCorp',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote: "The creativity and professionalism of the AdWorths team are unmatched. They delivered a campaign that exceeded all our expectations.",
    name: 'Jane Smith',
    title: 'Marketing Director, Innovate LLC',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];
export function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-deep-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-balance">
            We are the <span className="text-accent-orange">Ads</span> to Your Brand.
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-off-white/80 text-pretty">
            A creative and strategic advertising agency building powerful brand experiences through integrated marketing, design, and communication.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-accent-orange hover:bg-accent-orange/90 text-white font-bold text-lg px-8 py-6 transition-transform hover:scale-105 active:scale-95">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white/50 hover:bg-off-white hover:text-deep-navy font-bold text-lg px-8 py-6 transition-all">
              <Link to="/portfolio">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-gray">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a complete suite of advertising services to help your brand shine.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="items-center">
                  <div className="bg-primary-blue text-white rounded-full p-4">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4 text-xl font-semibold text-charcoal-gray">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Projects Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-gray">Featured Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We're proud of the work we do. Here are some of our favorite projects.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <Link to="/portfolio" key={project.title} className="group relative overflow-hidden rounded-lg shadow-lg block">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm font-semibold text-accent-orange">{project.category}</p>
                  <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-gray">What Our Clients Say</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-white">
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-primary-blue/20" />
                  <p className="mt-4 text-lg text-charcoal-gray italic">"{testimonial.quote}"</p>
                  <div className="mt-6 flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-charcoal-gray">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-primary-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Ready to Amplify Your Brand?</h2>
          <p className="mt-4 text-lg text-off-white/80 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch with us to start your journey.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent-orange hover:bg-accent-orange/90 text-white font-bold text-lg px-8 py-6 transition-transform hover:scale-105 active:scale-95 group">
            <Link to="/contact">
              Let's Talk <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}