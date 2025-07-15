import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, Scissors, TrendingUp, Zap, Clock, Target, Star } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const ClipVibeLanding = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/aae41acb-4137-4052-bcb2-797c290ba6dd.png" 
              alt="ClipVibe Logo" 
              className="h-16 md:h-20 mx-auto mb-8 animate-fade-in"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="clipvibe-gradient-text">Your Videos Deserve</span>
            <br />
            <span className="text-shadow-glow">to Go Viral</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We help influencers turn average clips into viral reels.
          </p>
          
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg font-semibold clipvibe-gradient hover-glow transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Get Viral Now
            <Zap className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 scroll-reveal">
            How It <span className="clipvibe-gradient-text">Works</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glassmorphism border-border/50 hover:border-primary/50 transition-all duration-300 scroll-reveal">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 clipvibe-gradient rounded-full flex items-center justify-center animate-float">
                  <MessageCircle className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">We Message</h3>
                <p className="text-muted-foreground">
                  Our team reaches out to you with a personalized approach, understanding your content style and goals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-border/50 hover:border-primary/50 transition-all duration-300 scroll-reveal" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 clipvibe-gradient rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Scissors className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">We Clip</h3>
                <p className="text-muted-foreground">
                  Our AI-powered editors transform your raw footage into engaging, viral-worthy content with professional polish.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-border/50 hover:border-primary/50 transition-all duration-300 scroll-reveal" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 clipvibe-gradient rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">You Grow</h3>
                <p className="text-muted-foreground">
                  Watch your engagement soar as your professionally edited content captures attention and drives viral growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Examples of Work Section */}
      <section id="examples" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 scroll-reveal">
            <span className="clipvibe-gradient-text">Examples</span> of Work
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="glassmorphism border-border/50 hover:border-primary/50 transition-all duration-300 scroll-reveal group cursor-pointer" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="p-4">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-primary ml-1"></div>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">Viral Dance Challenge</h3>
                  <p className="text-sm text-muted-foreground">2.3M views • 45K likes</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 scroll-reveal">
            Why <span className="clipvibe-gradient-text">Choose Us</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glassmorphism border-border/50 hover:border-primary/50 transition-all duration-300 scroll-reveal">
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">AI-Powered Editing</h3>
                <p className="text-muted-foreground">
                  Our cutting-edge AI technology ensures your content meets the latest viral trends and formats.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-border/50 hover:border-primary/50 transition-all duration-300 scroll-reveal" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">24H Turnaround</h3>
                <p className="text-muted-foreground">
                  Fast delivery without compromising quality. Your viral content ready in just 24 hours.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-border/50 hover:border-primary/50 transition-all duration-300 scroll-reveal" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Viral Formats</h3>
                <p className="text-muted-foreground">
                  We specialize in trending formats that maximize engagement and reach across all platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 scroll-reveal">
            What <span className="clipvibe-gradient-text">Creators</span> Say
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "@sarah_lifestyle", followers: "2.3M", quote: "ClipVibe transformed my content game! My videos are hitting 10M+ views regularly now." },
              { name: "@fitnessjake", followers: "1.8M", quote: "The turnaround is insane. 24 hours and my workout clips are ready to go viral!" },
              { name: "@foodie_emma", followers: "3.1M", quote: "Finally found editors who understand viral content. My engagement is through the roof!" },
            ].map((testimonial, i) => (
              <Card key={i} className="glassmorphism border-border/50 hover:border-primary/50 transition-all duration-300 scroll-reveal" style={{ animationDelay: `${i * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full clipvibe-gradient flex items-center justify-center text-primary-foreground font-bold mr-4">
                      {testimonial.name[1].toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.followers} followers</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 scroll-reveal">
            Ready to Go <span className="clipvibe-gradient-text">Viral?</span>
          </h2>
          
          <Card className="glassmorphism border-border/50 scroll-reveal">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-muted/30 border-border/50 focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Your Instagram Handle (@username)" 
                    className="bg-muted/30 border-border/50 focus:border-primary/50 transition-colors"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="w-full py-6 text-lg font-semibold clipvibe-gradient hover-glow transition-all duration-300"
                >
                  Let's Talk
                  <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClipVibeLanding;