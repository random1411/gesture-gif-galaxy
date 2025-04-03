
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Languages, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

interface DetectedTextDisplayProps {
  detectedText: string;
}

const DetectedTextDisplay = ({ detectedText }: DetectedTextDisplayProps) => {
  const handleCopyText = () => {
    navigator.clipboard.writeText(detectedText);
    toast({
      title: "Copied to clipboard",
      description: "Text has been copied to your clipboard"
    });
  };
  
  if (!detectedText) {
    return (
      <Card className="w-full">
        <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px]">
          <div className="text-muted-foreground text-center">
            <p>Capture sign language to see detected text</p>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Languages className="h-5 w-5 text-gesture-purple" />
            <CardTitle>Detected Text</CardTitle>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleCopyText}
            title="Copy to clipboard"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="bg-muted/50 p-4 rounded-md">
          <p className="text-lg font-medium">{detectedText}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetectedTextDisplay;
