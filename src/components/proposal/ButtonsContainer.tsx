import React from 'react';
import YesButton from './YesButton';
import NoButton from './NoButton';
import ConditionButton from './ConditionButton';

interface Position {
  x: number;
  y: number;
}

interface ButtonsContainerProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  noButtonPosition: Position;
  onYesClick: () => void;
  onConditionClick: () => void;
  onNoHover: (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
}

const ButtonsContainer: React.FC<ButtonsContainerProps> = ({
  containerRef,
  noButtonPosition,
  onYesClick,
  onConditionClick,
  onNoHover,
}) => {
  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl h-[350px] sm:h-[450px] md:h-[500px] 
                 mt-8 border-4 border-dashed border-pink-300 rounded-2xl 
                 bg-white/60 backdrop-blur-md shadow-inner overflow-hidden"
    >
      <YesButton onYes={onYesClick} />
      <ConditionButton onClick={onConditionClick} />
      <NoButton
        position={noButtonPosition} // ✅ get from parent
        onHover={onNoHover}        // ✅ handler from parent
      />
    </div>
  );
};

export default ButtonsContainer;
