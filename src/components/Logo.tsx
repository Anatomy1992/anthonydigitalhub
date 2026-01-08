import { Link } from "react-router-dom";
import logoImage from "@/assets/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <img 
        src={logoImage} 
        alt="Anthony Digital Hub - Full-Stack Web Developer Logo" 
        className="h-10 w-auto"
      />
    </Link>
  );
};

export default Logo;
