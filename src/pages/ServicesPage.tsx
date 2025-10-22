import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Brush, Megaphone, PenTool, Search, Users, Globe } from 'lucide-react';
const allServices = [
  {
    icon: Brush,
    title: 'Brand Identity Design',
    description: 'From logos to complete brand guidelines, we craft unique visual identities that tell your brand’s story and captivate your audience.',
  },
  {
    icon: Megaphone,
    title: 'Marketing & Communication Strategy',
    description: 'Developing data-driven, integrated marketing plans that amplify your reach, engage your audience, and drive measurable results.',
  },
  {
    icon: BarChart,
    title: 'Creative Content Development',
    description: 'Producing compelling content—video, copy, and graphics—across all platforms to engage, inform, and convert your target market.',
  },
  {
    icon: Search,
    title: 'Brand Strategy & Consulting',
    description: 'We help you define your brand’s purpose, positioning, and messaging to build a strong foundation for growth and customer loyalty.',
  },
  {
    icon: Globe,
    title: 'Outdoor & Experiential Advertising',
    description: 'Creating memorable real-world experiences and high-impact outdoor campaigns that connect your brand with people in their daily lives.',
  },
  {
    icon: PenTool,
    title: 'Digital Marketing Services',
    description: 'Executing targeted digital campaigns, including SEO, SEM, social media, and email marketing, to boost your online presence.',
  },
];
export function ServicesPage() {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-charcoal-gray">Our Services</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            A complete suite of advertising and branding services designed to elevate your brand.
          </p>
        </div>
      </section>
      {/* Services Grid Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service) => (
              <Card key={service.title} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="flex-row items-start gap-4">
                  <div className="bg-primary-blue text-white rounded-md p-3 mt-1">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-charcoal-gray">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}