import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Values = () => {
  const values = [
    {
      icon: "🎵",
      title: "Learners Are Our Heroes",
      description: "We design VIVA around real musicians' needs. Every user's goals, challenges, and journey drive our priorities. No two paths look the same — and that's what makes our community inspiring. We ask \"Who can help?\" rather than \"How do we do this?\" because the right people accelerate progress."
    },
    {
      icon: "💡",
      title: "Build with Passion and Precision",
      description: "We obsess over the details. Great work is the sum of hundreds of tiny improvements. We embrace Kaizen — continuous 1% progress everywhere. Each session should make you a better musician, and each release should feel more rewarding than the last."
    },
    {
      icon: "🤝",
      title: "Collaborate Like a Band",
      description: "Great music — and great products — are built together. We blend creativity, accountability, and honest communication so our team stays in rhythm. We hire people who raise the bar in competence, character, and culture, and build a shared mission that feels like being part of a band or orchestra."
    },
    {
      icon: "🚀",
      title: "Bias Toward Action",
      description: "We move fast and learn from every iteration. Like Bartlett's \"law of out-failing the competition,\" we encourage experiments and treat failure as tuition. By iterating quickly, we constantly improve VIVA so users always experience the best-quality practice."
    },
    {
      icon: "💬",
      title: "Feedback Is Our Forte",
      description: "Listening is part of our DNA. We collect and act on meaningful insights, practicing Kaizen to make small improvements every day. We celebrate momentum, because progress motivates more than perfection. Our users see themselves reflected in VIVA's evolution."
    },
    {
      icon: "❤️",
      title: "Give Back to the Music",
      description: "Every VIVA learner helps fund instruments, programs, and opportunities for the next generation. We invest in musical dreams at a time when arts funding is disappearing. Being part of VIVA means contributing to something bigger — a mission-driven, global music community."
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            ← Back to Home
          </Button>
        </Link>

        <h1 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-hot-pink to-vivid-violet bg-clip-text text-transparent animate-fade-in">
          Values
        </h1>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Our Philosophy</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              We believe every musician deserves direction, encouragement, and feedback that fuel real growth. 
              Musicians progress most when they receive guidance right when they're stuck: so VIVA listens, watches, 
              and gives real-time direction to help them problem-solve, reflect, and move forward.
            </p>
            <p>
              We're not about chasing perfection. We're about progress, joy, and possibility. Our users are the focus — 
              we simply build the tools that help them unlock their potential.
            </p>
          </div>
        </section>

        <section className="animate-fade-in">
          
          <div className="grid gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-hot-pink/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{value.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Values;
