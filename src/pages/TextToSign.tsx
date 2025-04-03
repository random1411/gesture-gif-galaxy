
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TextInput from '@/components/translation/TextInput';
import SignDisplay from '@/components/translation/SignDisplay';

const TextToSign = () => {
  const [translatedText, setTranslatedText] = useState('');
  
  const handleTranslate = (text: string) => {
    setTranslatedText(text);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container py-8 px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Text to Sign Language</h1>
            <p className="text-muted-foreground mt-2">
              Convert text or voice input into sign language gestures
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <TextInput onTranslate={handleTranslate} />
            </div>
            <div>
              <SignDisplay text={translatedText} />
            </div>
          </div>
          
          <div className="mt-12 bg-muted/30 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">How It Works</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Enter text in the input field or use voice input</li>
              <li>Click "Translate" to convert your text to sign language</li>
              <li>Watch as each word is displayed as a sign language gesture</li>
              <li>Use the playback controls to navigate through the signs</li>
            </ol>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TextToSign;
