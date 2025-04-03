
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

interface SignDisplayProps {
  text: string;
}

// This is a mock component that would display sign language GIFs based on text input
const SignDisplay = ({ text }: SignDisplayProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [displayedGif, setDisplayedGif] = useState<string | null>(null);
  
  // Split the text into words
  const words = text ? text.split(/\s+/).filter(word => word.length > 0) : [];
  
  useEffect(() => {
    // Reset to the first word when new text comes in
    setCurrentWordIndex(0);
    setIsPlaying(true);
  }, [text]);
  
  useEffect(() => {
    if (!words.length) return;
    
    // This would be replaced with actual GIF fetching logic
    // For now, we'll simulate different GIFs with placeholders
    setDisplayedGif(`https://via.placeholder.com/300x300/8B5CF6/FFFFFF?text=${words[currentWordIndex]}`);
    
    // Auto-play through words if playing is enabled
    let timer: NodeJS.Timeout | null = null;
    
    if (isPlaying && currentWordIndex < words.length) {
      timer = setTimeout(() => {
        if (currentWordIndex < words.length - 1) {
          setCurrentWordIndex(prev => prev + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2000); // Each "sign" displays for 2 seconds
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentWordIndex, isPlaying, words]);
  
  const handlePlayPause = () => {
    setIsPlaying(prev => !prev);
  };
  
  const handlePrevious = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(prev => prev - 1);
    }
  };
  
  const handleNext = () => {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
    }
  };
  
  if (!text || !words.length) {
    return (
      <Card className="w-full">
        <CardContent className="p-6 flex flex-col items-center justify-center min-h-[400px]">
          <div className="text-muted-foreground text-center">
            <p>Enter text and press translate to see sign language translation</p>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex flex-col items-center">
          <div className="mb-4 text-center">
            <p className="font-medium">
              Showing sign for: <span className="text-gesture-purple font-bold">{words[currentWordIndex]}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Word {currentWordIndex + 1} of {words.length}
            </p>
          </div>
          
          <div className="relative bg-muted rounded-lg overflow-hidden mb-4 w-full max-w-[300px] h-[300px] flex items-center justify-center">
            {displayedGif ? (
              <img 
                src={displayedGif} 
                alt={`Sign for ${words[currentWordIndex]}`} 
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="animate-pulse flex items-center justify-center">Loading...</div>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={handlePrevious}
              disabled={currentWordIndex === 0}
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={handlePlayPause}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleNext}
              disabled={currentWordIndex === words.length - 1}
            >
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignDisplay;
