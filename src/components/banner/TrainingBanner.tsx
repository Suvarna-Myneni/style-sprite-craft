
import React from 'react';
import { Button } from '@/components/ui/button';

export const TrainingBanner = () => {
  return (
    <div className="relative w-full h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg overflow-hidden">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center rounded-lg opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      
      {/* Blue overlay for proper contrast */}
      <div className="absolute inset-0 bg-blue-600/80 rounded-lg" />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-between px-6">
        {/* Title Text */}
        <h2 className="text-white text-2xl font-normal font-['Roboto'] leading-7">
          Revenos & Solutions onboarding training
        </h2>
        
        {/* Watch Video Button */}
        <Button 
          variant="secondary" 
          className="bg-white text-[#1B489B] hover:bg-gray-50 px-4 py-2 rounded-md font-normal text-base h-auto min-w-[100px]"
        >
          Watch Video
        </Button>
      </div>
    </div>
  );
};
