const Mission = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-magenta to-vivid-violet bg-clip-text text-transparent">
          Our Mission
        </h2>
        
        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground">
          <p>
            To democratise music education and provide the tools to learn, practise, and fall in 
            love with music. We want every person, no matter where they come from, to experience the joy of 
            learning music with guidance that feels personal.
          </p>
          
          <p>
            Just as we were lucky to learn from world-class teachers, we want to share that privilege globally. 
            Our tool empowers those who might have never imagined they could become musicians, like people in 
            rural or under-resourced communities.
          </p>
          
          <blockquote className="border-l-4 border-hot-pink pl-6 py-4 my-12 bg-card/50 backdrop-blur-sm rounded-r-lg">
            <p className="text-foreground italic text-xl md:text-2xl mb-4">
              "We both moved from Australia to Boston to become musicians and faced the hours and struggles 
              of the practice room. VIVA was born from that journey — we knew we wanted to make high-quality 
              personalised feedback accessible to everyone."
            </p>
            <footer className="text-muted-foreground text-lg">
              — Harry & Sunny, Co-Founders
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Mission;
