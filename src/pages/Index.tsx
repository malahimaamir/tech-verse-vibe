import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechStack from '@/components/TechStack';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        
        <AboutSection />
        <TechStack />
        <ExperienceTimeline />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              © 2025 Malahima Amir. All rights reserved.
            </p>
            <p className="text-sm">
              Built with ❤️ using React, Next.js, and modern web technologies
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
