import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_20px_hsl(217_91%_60%/0.4)] group-hover:shadow-[0_0_30px_hsl(217_91%_60%/0.6)] transition-all duration-300">
          <span className="text-primary-foreground font-bold text-lg">A</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-foreground font-bold text-lg leading-tight">
          Anthony
        </span>
        <span className="text-xs font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Digital Hub
        </span>
      </div>
    </Link>
  );
};

export default Logo;
