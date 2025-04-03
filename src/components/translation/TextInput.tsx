
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Mic, Languages, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface TextInputProps {
  onTranslate: (text: string) => void;
}

const TextInput = ({ onTranslate }: TextInputProps) => {
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };
  
  const handleSubmit = () => {
    if (inputText.trim()) {
      onTranslate(inputText.trim());
    } else {
      toast({
        title: "Text is required",
        description: "Please enter some text to translate",
        variant: "destructive"
      });
    }
  };
  
  const handleVoiceInput = () => {
    // In a real implementation, this would use the Web Speech API
    setIsListening(true);
    
    // Simulate voice recognition
    setTimeout(() => {
      setIsListening(false);
      const sampleText = "Hello, how are you?";
      setInputText(sampleText);
      toast({
        title: "Voice captured",
        description: "Voice input has been processed",
      });
    }, 2000);
  };
  
  return (
    <div className="space-y-4 w-full">
      <div className="flex items-center gap-2">
        <Languages className="h-5 w-5 text-gesture-purple" />
        <h3 className="font-medium text-lg">Enter text or use voice input</h3>
      </div>
      
      <Textarea
        placeholder="Type text to translate into sign language..."
        className="min-h-[120px] text-base"
        value={inputText}
        onChange={handleTextChange}
      />
      
      <div className="flex justify-between">
        <Button 
          variant="outline"
          className="flex items-center gap-2"
          onClick={handleVoiceInput}
          disabled={isListening}
        >
          <Mic className={`h-4 w-4 ${isListening ? 'text-red-500 animate-pulse' : ''}`} />
          {isListening ? 'Listening...' : 'Voice Input'}
        </Button>
        
        <Button 
          className="flex items-center gap-2 bg-gesture-purple hover:bg-gesture-lightPurple"
          onClick={handleSubmit}
        >
          <Send className="h-4 w-4" />
          Translate
        </Button>
      </div>
    </div>
  );
};

export default TextInput;
