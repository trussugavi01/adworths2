import React from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function ContactPage() {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-charcoal-gray">Let's Talk</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>
      </section>
      {/* Contact Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-display font-bold text-charcoal-gray">Send us a Message</h2>
              <p className="mt-2 text-muted-foreground">Fill out the form below, and we'll get back to you as soon as possible.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            {/* Contact Details */}
            <div className="bg-off-white p-8 lg:p-12 rounded-lg">
              <h2 className="text-3xl font-display font-bold text-charcoal-gray">Contact Information</h2>
              <p className="mt-2 text-muted-foreground">Find us at our office or reach out through our channels.</p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-charcoal-gray">Our Office</h3>
                    <p className="text-muted-foreground">123 Advertising Ave, Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-charcoal-gray">Email Us</h3>
                    <a href="mailto:hello@adworths.ng" className="text-muted-foreground hover:text-primary-blue transition-colors">hello@adworths.ng</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-charcoal-gray">Call Us</h3>
                    <a href="tel:+2341234567890" className="text-muted-foreground hover:text-primary-blue transition-colors">+234 123 456 7890</a>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t pt-8">
                 <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg">
                    <a href="https://wa.me/2341234567890" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                    </a>
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}