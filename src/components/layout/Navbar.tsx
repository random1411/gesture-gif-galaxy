
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HandMetal, Mic, Languages } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <HandMetal className="h-6 w-6 text-gesture-purple" />
          <span className="font-bold text-xl">GestureTranslator</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-gesture-purple transition-colors">
            Home
          </Link>
          <Link to="/text-to-sign" className="text-sm font-medium hover:text-gesture-purple transition-colors">
            Text to Sign
          </Link>
          <Link to="/sign-to-text" className="text-sm font-medium hover:text-gesture-purple transition-colors">
            Sign to Text
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/text-to-sign">
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
              <Mic className="h-4 w-4" />
              <span>Translate Now</span>
            </Button>
          </Link>
          <Link to="/sign-to-text">
            <Button size="sm" className="hidden md:flex items-center gap-2 bg-gesture-purple hover:bg-gesture-lightPurple">
              <Languages className="h-4 w-4" />
              <span>Capture Signs</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
