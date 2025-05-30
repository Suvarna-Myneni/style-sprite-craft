
import React from 'react';
import { Button } from '@/components/ui/button';

export const TrainingBanner = () => {
  return (
    <div className="relative w-full h-20 bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-blue-800 rounded-lg" />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-between px-6">
        {/* Title Text */}
        <h2 className="text-white text-xl font-normal font-['Roboto'] leading-7">
          Revenos & Solutions onboarding training
        </h2>
        
        {/* Watch Video Button */}
        <Button 
          variant="secondary" 
          className="bg-white text-[#1B489B] hover:bg-gray-50 px-4 py-2 rounded-md font-normal text-base h-auto"
        >
          Watch Video
        </Button>
      </div>
    </div>
  );
};
