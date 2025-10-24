import React from 'react';
import { Button } from '@/components/ui/button';

interface YesButtonProps {
  onClick: () => void;
}

const YesButton: React.FC<YesButtonProps> = ({ onClick }) => (
  <div className="absolute top-[25%] left-[40%] transform -translate-x-1/2 -translate-y-1/2">
    <Button
      onClick={onClick}
      className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold text-lg sm:text-xl px-8 py-6 rounded-full shadow-2xl hover:scale-110 hover:shadow-pink-300 transition-all duration-300"
    >
      Yes, I will! ❤️
    </Button>
  </div>
);

export default YesButton;
