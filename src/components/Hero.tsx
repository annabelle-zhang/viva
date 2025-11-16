import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-hot-pink/20 to-magenta/20 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-vivid-violet/20 to-electric-indigo/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in-slow">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-hot-pink via-magenta to-vivid-violet bg-clip-text text-transparent">
            Smarter Practice
          </span>
          <br />
          <span className="bg-gradient-to-r from-vivid-violet via-royal-purple to-electric-indigo bg-clip-text text-transparent">
            Real Feedback
          </span>
          <br />
          <span className="text-foreground">
            For Every Musician
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Join VIVA's waitlist and become the musician you've always wanted to be
        </p>
        
        <Button 
          onClick={scrollToWaitlist}
          size="lg"
          className="bg-gradient-to-r from-hot-pink via-magenta to-vivid-violet hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-hot-pink/25 transition-all hover:shadow-xl hover:shadow-hot-pink/40 hover:scale-105"
        >
          Join the Waitlist!
        </Button>
      </div>
    </section>
  );
};

export default Hero;
