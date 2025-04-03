
import React from 'react';
import { Link } from 'react-router-dom';
import { HandMetal, Github, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-2">
              <HandMetal className="h-6 w-6 text-gesture-purple" />
              <span className="font-bold text-xl">GestureTranslator</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Breaking barriers in communication through technology.
            </p>
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-semibold mb-3">Features</h3>
            <Link to="/text-to-sign" className="text-sm text-muted-foreground hover:text-gesture-purple py-1">
              Text to Sign
            </Link>
            <Link to="/sign-to-text" className="text-sm text-muted-foreground hover:text-gesture-purple py-1">
              Sign to Text
            </Link>
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-semibold mb-3">Resources</h3>
            <a href="#" className="text-sm text-muted-foreground hover:text-gesture-purple py-1">
              Documentation
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-gesture-purple py-1">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-gesture-purple py-1">
              Terms of Service
            </a>
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-semibold mb-3">Connect</h3>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-muted-foreground hover:text-gesture-purple">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gesture-purple">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gesture-purple">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 GestureTranslator. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Built with ❤️ for accessibility
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
