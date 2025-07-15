import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { label: 'Home', id: 'hero' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Examples', id: 'examples' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glassmorphism border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="/lovable-uploads/aae41acb-4137-4052-bcb2-797c290ba6dd.png" 
              alt="ClipVibe Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="clipvibe-gradient hover-glow transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glassmorphism border-b border-border/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted/30 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="px-3 py-2">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full clipvibe-gradient hover-glow transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;