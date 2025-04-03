
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FeatureCard from '@/components/home/FeatureCard';
import { 
  HandMetal, 
  Mic, 
  Camera, 
  Globe, 
  Languages, 
  Brain, 
  Accessibility
} from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pattern-bg py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 animate-fade-in">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Two-Way Hand Gesture <span className="gradient-text">Translator</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Breaking barriers in communication with AI-powered sign language translation.
                    Instantly convert between text, voice, and sign language gestures.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/text-to-sign">
                    <Button className="bg-gesture-purple hover:bg-gesture-lightPurple">
                      Text to Sign
                    </Button>
                  </Link>
                  <Link to="/sign-to-text">
                    <Button variant="outline">Sign to Text</Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end animate-fade-in">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden bg-gesture-purple/10 flex items-center justify-center">
                  <img
                    src="https://via.placeholder.com/500/8B5CF6/FFFFFF?text=Sign+Language"
                    alt="Sign Language Illustration"
                    className="object-cover w-[80%] h-[80%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful Features
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our gesture translator offers powerful tools to make communication seamless.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <FeatureCard
                icon={Mic}
                title="Voice to Sign"
                description="Convert spoken language into sign language gestures in real-time with our advanced speech recognition."
              />
              <FeatureCard
                icon={Camera}
                title="Sign to Text"
                description="Capture sign language through your camera and instantly translate it into readable text."
              />
              <FeatureCard
                icon={Globe}
                title="Multi-language Support"
                description="Support for multiple languages ensures inclusive communication across language barriers."
              />
              <FeatureCard
                icon={Brain}
                title="AI-Powered"
                description="Leveraging state-of-the-art AI for accurate and context-aware translations."
              />
              <FeatureCard
                icon={Languages}
                title="Real-time Translation"
                description="Experience minimal delay with our optimized real-time translation system."
              />
              <FeatureCard
                icon={Accessibility}
                title="Accessibility Focused"
                description="Designed with accessibility in mind to empower all users regardless of ability."
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gesture-purple/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Start Translating Today
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Begin your journey to seamless communication across languages and modalities.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/text-to-sign">
                  <Button className="bg-gesture-purple hover:bg-gesture-lightPurple">
                    Convert Text to Sign
                  </Button>
                </Link>
                <Link to="/sign-to-text">
                  <Button variant="outline">
                    Translate Sign to Text
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
