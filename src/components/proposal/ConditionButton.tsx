import React from 'react';
import { Button } from '@/components/ui/button';

interface ConditionButtonProps {
  onClick: () => void;
}

const ConditionButton: React.FC<ConditionButtonProps> = ({ onClick }) => (
  <div className="absolute top-[75%] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
    <Button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-4 sm:px-10 sm:py-5 rounded-full shadow-lg hover:scale-105 transition-all"
    >
      Condition 📝
    </Button>
  </div>
);

export default ConditionButton;
