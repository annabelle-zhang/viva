import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Founders = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <Link to="/">
          <Button variant="ghost" className="mb-8 hover:text-magenta">
            ← Back to Home
          </Button>
        </Link>

        <h1 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-magenta to-vivid-violet bg-clip-text text-transparent animate-fade-in">
          Founders Story
        </h1>

        <div className="space-y-12 animate-fade-in">
          <section className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-6xl">🎸</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Founders: Harry & Sunny</h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Best friends from Australia who moved to Boston to pursue music — and discovered a shared frustration: the countless hours in the practice room without meaningful feedback.
              </p>
              
              <p>
                VIVA was born from that struggle. Their vision is simple but powerful:
              </p>
              
              <blockquote className="border-l-4 border-magenta pl-6 py-4 my-8 bg-background/50 rounded-r-lg">
                <p className="text-foreground text-xl md:text-2xl italic">
                  "To give anyone, anywhere, the same chance to learn and love music that we've been privileged to experience."
                </p>
              </blockquote>
              
              <p>
                They believe everyone deserves the right tools to discover what they're truly capable of — whether that's mastering an instrument, finding their voice, or rekindling a love of music.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-magenta/10 to-vivid-violet/10 border border-magenta/30 rounded-2xl p-8">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">The Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                From Sydney to Boston, Harry and Sunny experienced firsthand the challenges of becoming professional musicians. Long hours in practice rooms, limited feedback, and the struggle to stay motivated sparked the idea for VIVA.
              </p>
            </div>

            <div className="bg-gradient-to-br from-vivid-violet/10 to-royal-purple/10 border border-vivid-violet/30 rounded-2xl p-8">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">The Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to world-class music education. VIVA brings the expertise of the best teachers to anyone with a passion for music, regardless of location or background.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Founders;
