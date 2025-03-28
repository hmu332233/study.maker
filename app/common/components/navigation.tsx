import { Link } from "react-router";

export default function Navigation() {
  return (
    <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
      <div>
        <Link to="/" className="font-bold tracking-tight text-lg">wemake</Link>
      </div>
    </nav>
  );
} 