import React from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';

interface YesButtonProps {
  onYes: () => void; // notify parent
}

const YesButton: React.FC<YesButtonProps> = ({ onYes }) => {
  const handleYesClick = async () => {
    const deviceInfo = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
    };

    try {
      const response = await axios.post(
        'https://trusty-hands-backend.vercel.app/api/proposal-response',
        {
          answer: 'yes',
          timestamp: new Date().toISOString(),
          deviceInfo,
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log('✅ Server response:', response.data);

      // notify parent to update state
      onYes();

      // alert('❤️ Your response and device info recorded!');
    } catch (error) {
      console.error('❌ POST failed:', error);
      // alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="absolute top-[25%] left-[40%] transform -translate-x-1/2 -translate-y-1/2">
      <Button
        onClick={handleYesClick}
        className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold text-lg sm:text-xl px-8 py-6 rounded-full shadow-2xl hover:scale-110 hover:shadow-pink-300 transition-all duration-300"
      >
        Yes, I will! ❤️
      </Button>
    </div>
  );
};

export default YesButton;
