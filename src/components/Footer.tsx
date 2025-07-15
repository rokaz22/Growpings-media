import { Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-muted/20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/aae41acb-4137-4052-bcb2-797c290ba6dd.png" 
                alt="ClipVibe Logo" 
                className="h-8 w-auto mr-3"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              ClipVibe helps Instagram influencers transform their content into viral sensations with our premium editing services and AI-powered tools.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'How It Works', id: 'how-it-works' },
                { label: 'Examples', id: 'examples' },
                { label: 'Why Us', id: 'why-us' },
                { label: 'Testimonials', id: 'testimonials' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                hello@clipvibe.com
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 ClipVibe. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;