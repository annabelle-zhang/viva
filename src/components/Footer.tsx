import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          <Link 
            to="/values" 
            className="text-lg text-muted-foreground hover:text-hot-pink transition-colors"
          >
            Values
          </Link>
          <Link 
            to="/founders" 
            className="text-lg text-muted-foreground hover:text-magenta transition-colors"
          >
            Founders Story
          </Link>
          <Link 
            to="/careers" 
            className="text-lg text-muted-foreground hover:text-vivid-violet transition-colors"
          >
            Careers
          </Link>
        </div>
        
        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            © {new Date().getFullYear()} VIVA. Making music education accessible to everyone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
