
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HandMetal } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <HandMetal className="h-16 w-16 text-gesture-purple mx-auto" />
        
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        
        <p className="text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        
        <div className="pt-4">
          <Link to="/">
            <Button size="lg" className="bg-gesture-purple hover:bg-gesture-lightPurple">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
