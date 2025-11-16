import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <Link to="/">
          <Button variant="ghost" className="mb-8 hover:text-vivid-violet">
            ← Back to Home
          </Button>
        </Link>

        <h1 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-vivid-violet to-electric-indigo bg-clip-text text-transparent animate-fade-in">
          Careers
        </h1>

        <div className="space-y-12 animate-fade-in">
          <section className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Culture & Hiring</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  What We Look For
                </h3>
                <p className="text-lg text-muted-foreground mb-4">We hire people who:</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-vivid-violet flex-shrink-0">●</span>
                    <span>Care deeply about their craft — whether that's code, design, marketing, operations, or music</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-vivid-violet flex-shrink-0">●</span>
                    <span>Move quickly, collaborate openly, and iterate without ego</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-vivid-violet flex-shrink-0">●</span>
                    <span>Value curiosity, quality, and continuous learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-vivid-violet flex-shrink-0">●</span>
                    <span>Believe in empowering others to reach their potential</span>
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We use Bartlett's Three Bars — competence, character, and culture fit — to guide hiring decisions. We don't hire "brilliant jerks." We hire people who raise the bar.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                  <span className="text-3xl">🚀</span>
                  What to Expect
                </h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    At VIVA, you'll join a team that values curiosity, ownership, and empathy. Many of us are musicians ourselves, so we understand the grind of the practice room and the thrill of improvement.
                  </p>
                  <p>
                    You'll have both autonomy and responsibility to shape our "rocket ship" as it grows. We create a culture of progress, offering growth opportunities, cross-disciplinary collaboration, and continuous learning.
                  </p>
                  <p>
                    Our leadership style adapts to each situation — balancing high standards with creative freedom.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                  <span className="text-3xl">📋</span>
                  Our Hiring Process
                </h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    We believe transparency and cultural fit are critical. Our process is designed to be respectful and constructive, from the first message to final decision.
                  </p>
                  <p>
                    We assess competence, character, and culture fit equally. We ask "Who can help us achieve our mission?" rather than "How will we do it?"
                  </p>
                  <p>
                    Every early hire shapes our culture — each person represents a significant part of who we become. We provide feedback at every stage, ensuring candidates also discover whether VIVA resonates with their values.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-r from-vivid-violet/10 to-electric-indigo/10 border border-vivid-violet/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Join the Band?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We're always looking for exceptional people who share our mission.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-vivid-violet to-electric-indigo hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-full"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
