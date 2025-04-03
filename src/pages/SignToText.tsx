
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CameraCapture from '@/components/translation/CameraCapture';
import DetectedTextDisplay from '@/components/translation/DetectedTextDisplay';

const SignToText = () => {
  const [detectedText, setDetectedText] = useState('');
  
  const handleCaptureComplete = (result: string) => {
    setDetectedText(result);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container py-8 px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Sign Language to Text</h1>
            <p className="text-muted-foreground mt-2">
              Capture sign language gestures and convert them to text
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <CameraCapture onCaptureComplete={handleCaptureComplete} />
            </div>
            <div>
              <DetectedTextDisplay detectedText={detectedText} />
            </div>
          </div>
          
          <div className="mt-12 bg-muted/30 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">How It Works</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Turn on your camera by clicking the "Turn On Camera" button</li>
              <li>Position yourself in the frame and make sure you're visible</li>
              <li>Click "Start Recording" to begin capturing your sign language</li>
              <li>Perform your sign language gestures clearly</li>
              <li>The system will automatically detect and translate your signs to text</li>
            </ol>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignToText;
