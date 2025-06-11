
import React from 'react';
import OpenAIChat from '@/components/ai/OpenAIChat';

const AIChat = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            AI Chat Assistant
          </h1>
          <p className="text-gray-600">
            Powered by OpenAI - Ask me anything!
          </p>
        </div>
        <OpenAIChat />
      </div>
    </div>
  );
};

export default AIChat;
