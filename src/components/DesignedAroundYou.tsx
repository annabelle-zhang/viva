const DesignedAroundYou = () => {
  const principles = [
    "Base every decision on real musicians' needs and goals",
    "Actively collect, analyse, and respond to user feedback",
    "Celebrate the diversity of our learners' ambitions — there's no single right outcome",
    "Continuously refine what users already love while exploring new ways to surprise and delight them",
    "Treat every interaction — feedback forms, support chats, and feature requests — as an opportunity to listen, learn, and grow",
    "Sweat the small stuff: every 1% improvement compounds into something magical"
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vivid-violet/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10 animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-vivid-violet to-electric-indigo bg-clip-text text-transparent pb-2 leading-tight">
          Designed Around You
        </h2>
        
        <div className="space-y-8 text-lg text-center md:text-xl leading-relaxed text-muted-foreground mb-16">
          <p>
            At VIVA, our learners are the heroes. Every update begins with a single question:
          </p>
          
          <p className="text-3xl md:text-2xl font-bold text-center text-foreground mb-16">
            "What do our users need the most?"
          </p>
        
          <p>
            We understand there isn't one "right" outcome for a musician. 
            We celebrate the many ways people grow; from bedroom producers and singers to world-class 
            instrumentalists. Through feedback loops, user stories, and constant dialogue, we evolve VIVA 
            to reflect the people who inspire it: <span className="text-white"> you! </span>
          </p>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">
            Customer-Centric Promise
          </h3>
          
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground mb-8">At VIVA, we:</p>
            <ul className="space-y-4">
              {principles.map((principle, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-hot-pink text-2xl flex-shrink-0">●</span>
                  <span className="text-foreground text-lg">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignedAroundYou;
