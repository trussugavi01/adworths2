import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Award, Target, Users } from 'lucide-react';
const teamMembers = [
  { name: 'Michael Chen', title: 'Founder & CEO', avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
  { name: 'Sarah Rodriguez', title: 'Creative Director', avatar: 'https://randomuser.me/api/portraits/women/75.jpg' },
  { name: 'David Lee', title: 'Head of Strategy', avatar: 'https://randomuser.me/api/portraits/men/76.jpg' },
  { name: 'Emily White', title: 'Lead Designer', avatar: 'https://randomuser.me/api/portraits/women/76.jpg' },
];
const awards = [
  { name: 'National Creativity Award', year: '2023' },
  { name: 'Best Digital Campaign', year: '2022' },
  { name: 'Agency of the Year Finalist', year: '2021' },
  { name: 'Marketing Excellence Award', year: '2020' },
];
export function AboutPage() {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold">About AdWorths</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-off-white/80">
            The creative minds behind brands that inspire, engage, and grow.
          </p>
        </div>
      </section>
      {/* Our Story Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-gray">Our Story</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Founded over a decade ago, AdWorths was born from a passion for blending art with strategy. We saw a need for an advertising agency that not only produced beautiful work but also delivered tangible results.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Today, we are a full-service agency that has helped hundreds of organizations amplify their visibility, create emotional connections, and drive measurable growth. Our core values—Creativity, Integrity, Innovation, and Excellence—guide every project we undertake.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-off-white p-8 rounded-lg text-center">
                    <Target className="h-12 w-12 text-primary-blue mx-auto" />
                    <h3 className="mt-4 text-xl font-bold font-display">Our Mission</h3>
                    <p className="mt-2 text-muted-foreground text-sm">To build powerful brand experiences through integrated marketing, design, and communication.</p>
                </div>
                <div className="bg-off-white p-8 rounded-lg text-center">
                    <Users className="h-12 w-12 text-accent-orange mx-auto" />
                    <h3 className="mt-4 text-xl font-bold font-display">Our Vision</h3>
                    <p className="mt-2 text-muted-foreground text-sm">To be the leading creative partner for ambitious brands seeking to make a lasting impact.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* Meet the Team Section */}
      <section className="bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-gray">Meet the Team</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A collective of strategists, creatives, and innovators dedicated to your success.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center border-0 shadow-none bg-transparent">
                <CardContent className="p-4">
                  <Avatar className="w-32 h-32 mx-auto shadow-lg">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-6 text-xl font-semibold text-charcoal-gray">{member.name}</h3>
                  <p className="text-primary-blue font-medium">{member.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Awards & Recognitions Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-gray">Awards & Recognitions</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by the industry's best.
            </p>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="divide-y divide-border">
              {awards.map((award) => (
                <div key={award.name} className="py-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Award className="h-6 w-6 text-accent-orange" />
                    <p className="font-medium text-charcoal-gray">{award.name}</p>
                  </div>
                  <p className="text-muted-foreground font-semibold">{award.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}