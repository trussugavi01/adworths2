import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { AdWorthsLogo } from '@/components/AdWorthsLogo';
export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/adworths' },
    { icon: Twitter, href: 'https://www.twitter.com/adworths' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/adworths' },
  ];
  const quickLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Our Work' },
    { to: '/contact', label: 'Contact' },
  ];
  return (
    <footer className="bg-deep-navy text-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <AdWorthsLogo variant="white" />
            <p className="text-sm text-off-white/80">
              We are the Ads to Your Brand. Creative and strategic advertising to build powerful brand experiences.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-off-white/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-off-white/80">
              <li>123 Advertising Ave, Lagos, Nigeria</li>
              <li>+234 123 456 7890</li>
              <li>hello@adworths.ng</li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-off-white/80 hover:text-white transition-colors">
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-off-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-off-white/60">
          <p>&copy; {new Date().getFullYear()} AdWorths Advertising Limited. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}