
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border-2 hover:border-gesture-purple/20">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-gesture-purple/10 to-gesture-teal/10 mb-4">
          <Icon className="w-6 h-6 text-gesture-purple" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
