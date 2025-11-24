import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const WaitlistForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    instrument: "",
    genres: "",
    experienceLevel: "",
    practiceStruggles: "",
    consistencyIssues: "",
    enjoyment: "",
    learningStyle: "",
    name: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to VIVA! 🎵",
      description: "You've been added to our waitlist. We'll be in touch soon!",
    });
    // Reset form
    setFormData({
      instrument: "",
      genres: "",
      experienceLevel: "",
      practiceStruggles: "",
      consistencyIssues: "",
      enjoyment: "",
      learningStyle: "",
      name: "",
      email: ""
    });
  };

  return (
    <section id="waitlist" className="py-24 px-6">
      <div className="max-w-3xl mx-auto animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-hot-pink via-magenta to-electric-indigo bg-clip-text text-transparent">
          Join the Waitlist
        </h2>
        
        <p className="text-xl text-center text-muted-foreground mb-12">
          Help us build VIVA around your needs. Tell us about your musical journey.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="instrument" className="text-lg">Instrument or Voice Type</Label>
            <Input
              id="instrument"
              value={formData.instrument}
              onChange={(e) => setFormData({ ...formData, instrument: e.target.value })}
              required
              className="bg-zinc-800 rounded-none"
            />
          </div>

          <br></br>

          <div className="space-y-2">
            <Label htmlFor="genres" className="text-lg">Genres</Label>
            <Input
              id="genres"
              value={formData.genres}
              onChange={(e) => setFormData({ ...formData, genres: e.target.value })}
              required
              className="bg-zinc-800 rounded-none"
            />
          </div>

          <br></br>

          <div className="space-y-2">
            <Label htmlFor="experience" className="text-lg">Experience Level</Label>
            <Select value={formData.experienceLevel} onValueChange={(value) => setFormData({ ...formData, experienceLevel: value })} required>
              <SelectTrigger className="!bg-zinc-800 rounded-none !text-zinc-100 [&>span]:!text-white">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700">
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <br></br>

          <div className="space-y-2">
            <Label htmlFor="struggles" className="text-lg">Practice Struggles</Label>
            <Textarea
              id="struggles"
              value={formData.practiceStruggles}
              onChange={(e) => setFormData({ ...formData, practiceStruggles: e.target.value })}
              required
              className="bg-zinc-800 rounded-none"
            />
          </div>

          <br></br>

          <div className="space-y-2">
            <Label htmlFor="consistency" className="text-lg">Consistency</Label>
            <Textarea
              id="consistency"
              value={formData.consistencyIssues}
              onChange={(e) => setFormData({ ...formData, consistencyIssues: e.target.value })}
              required
              className="bg-zinc-800 rounded-none"
            />
          </div>

          <br></br>

          <div className="space-y-2">
            <Label htmlFor="enjoyment" className="text-lg">Enjoyment (Optional)</Label>
            <Textarea
              id="enjoyment"
              value={formData.enjoyment}
              onChange={(e) => setFormData({ ...formData, enjoyment: e.target.value })}
              className="bg-zinc-800 rounded-none"
            />
          </div>

          <br></br>

          <div className="space-y-2">
            <Label htmlFor="learning" className="text-lg">Learning Style</Label>
            <Select value={formData.learningStyle} onValueChange={(value) => setFormData({ ...formData, learningStyle: value })} required>
              <SelectTrigger className="bg-zinc-800 rounded-none text-zinc-100 [&>span]:text-white">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700">
                <SelectItem value="auditory">Auditory - Learn by ear, remember melodies easily, prefer listening over reading music</SelectItem>
                <SelectItem value="visual">Visual - Need sheet music/videos, watch hand positions, think in patterns</SelectItem>
                <SelectItem value="kinesthetic">Kinesthetic - Learn by doing, memorize through repetition, need to move while learning</SelectItem>
                <SelectItem value="analytical">Analytical - Focus on theory, understand patterns, need the "why" behind music</SelectItem>
                <SelectItem value="social">Social - Learn better with others, thrive in groups, pick up feel from ensemble playing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <br></br>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-zinc-800 rounded-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-zinc-800 rounded-none"
              />
            </div>
          </div>

          <br></br>

          <Button 
            type="submit" 
            size="lg"
            className="w-full bg-[#3A0CA3] hover:bg-[#2e0a82] text-white font-semibold py-6 text-lg rounded-lg transition-all"
          >
            Submit
          </Button>
        </form>
        <br></br>
        <p className="text-s text-center text-muted-foreground mb-12">
          By clicking "Submit" I agree to share the provided information with VIVA to be contacted with more details or offers about VIVA products.
        </p>
      </div>
    </section>
  );
};

export default WaitlistForm;
