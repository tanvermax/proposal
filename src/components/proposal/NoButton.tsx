import React from 'react';
import { Button } from '@/components/ui/button';

interface Position {
  x: number;
  y: number;
}

interface NoButtonProps {
  position: Position;
  onHover: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const NoButton: React.FC<NoButtonProps> = ({ position, onHover }) => (
  <div
    className="absolute transition-all duration-200 ease-out"
    style={{ left: `${position.x}px`, top: `${position.y}px` }}
  >
    <Button
      onMouseEnter={onHover}
      className="bg-red-400 hover:bg-red-500 text-white px-6 py-4 sm:px-10 sm:py-5 rounded-full shadow-lg hover:cursor-not-allowed opacity-80"
    >
      No, I won’t 💔
    </Button>
  </div>
);

export default NoButton;
