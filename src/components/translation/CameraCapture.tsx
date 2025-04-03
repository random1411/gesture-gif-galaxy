
import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Camera, Video, StopCircle, RefreshCw } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface CameraCaptureProps {
  onCaptureComplete: (result: string) => void;
}

const CameraCapture = ({ onCaptureComplete }: CameraCaptureProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [countdown, setCountdown] = useState(0);
  
  // Effect for handling camera permissions and setup
  useEffect(() => {
    if (isCameraOn) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(mediaStream => {
          if (videoRef.current) {
            videoRef.current.srcObject = mediaStream;
            setStream(mediaStream);
          }
        })
        .catch(error => {
          console.error("Error accessing camera:", error);
          toast({
            title: "Camera Access Denied",
            description: "Please allow camera access to use this feature",
            variant: "destructive"
          });
          setIsCameraOn(false);
        });
    } else if (stream) {
      // Turn off camera when component unmounts or when isCameraOn is set to false
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
    
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isCameraOn]);
  
  // Handle recording countdown
  useEffect(() => {
    if (isRecording && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else if (isRecording && countdown === 0) {
      // Simulate processing after recording completes
      setTimeout(() => {
        handleProcessSignCapture();
      }, 1500);
    }
  }, [isRecording, countdown]);
  
  const toggleCamera = () => {
    setIsCameraOn(prev => !prev);
  };
  
  const startRecording = () => {
    setIsRecording(true);
    setCountdown(3); // 3 second recording
    toast({
      title: "Recording Started",
      description: "Recording sign language for 3 seconds"
    });
  };
  
  const stopRecording = () => {
    setIsRecording(false);
    setCountdown(0);
  };
  
  const handleProcessSignCapture = () => {
    setIsRecording(false);
    
    // Simulate sign language processing
    // In a real implementation, this would send video data to a processing service
    setTimeout(() => {
      // Mock result
      const detectedText = "Hello, nice to meet you";
      
      toast({
        title: "Sign Language Detected",
        description: "Processing complete"
      });
      
      onCaptureComplete(detectedText);
    }, 1500);
  };
  
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera className="h-5 w-5 text-gesture-purple" />
          <h3 className="font-medium text-lg">Capture Sign Language</h3>
        </div>
        
        <Button
          variant={isCameraOn ? "outline" : "default"}
          className={`${isCameraOn ? "" : "bg-gesture-purple hover:bg-gesture-lightPurple"}`}
          onClick={toggleCamera}
        >
          {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
        </Button>
      </div>
      
      <div className="relative bg-black rounded-lg overflow-hidden aspect-video w-full flex items-center justify-center">
        {isCameraOn ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            
            {isRecording && (
              <div className="absolute top-4 right-4 flex items-center justify-center bg-red-500 text-white w-10 h-10 rounded-full animate-pulse">
                {countdown > 0 ? countdown : <StopCircle className="h-6 w-6" />}
              </div>
            )}
          </>
        ) : (
          <div className="text-white/70 flex flex-col items-center justify-center">
            <Camera className="h-12 w-12 mb-2" />
            <p>Camera is turned off</p>
          </div>
        )}
      </div>
      
      <div className="flex justify-between">
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={toggleCamera}
        >
          <RefreshCw className="h-4 w-4" />
          {isCameraOn ? "Switch Camera" : "Start Camera"}
        </Button>
        
        {isCameraOn && (
          <Button
            className={`flex items-center gap-2 ${isRecording ? "bg-red-500 hover:bg-red-600" : "bg-gesture-purple hover:bg-gesture-lightPurple"}`}
            onClick={isRecording ? stopRecording : startRecording}
            disabled={!isCameraOn}
          >
            {isRecording ? (
              <>
                <StopCircle className="h-4 w-4" />
                Stop Recording
              </>
            ) : (
              <>
                <Video className="h-4 w-4" />
                Start Recording
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CameraCapture;
