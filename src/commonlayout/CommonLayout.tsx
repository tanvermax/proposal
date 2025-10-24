'use client';

import React, { useState, useRef } from 'react';
import ButtonsContainer from '@/components/proposal/ButtonsContainer';
import ConditionForm from '@/components/proposal/ConditionForm';
import FloatingHearts from '@/components/proposal/FloatingHearts';
import ProposalTitle from '@/components/proposal/ProposalTitle';

type ProposalStatus = 'pending' | 'yes' | 'condition';

interface Position {
  x: number;
  y: number;
}

const CommonLayout: React.FC = () => {
  const [proposalStatus, setProposalStatus] = useState<ProposalStatus>('pending');
  const [noPositionIndex, setNoPositionIndex] = useState(0);
  const [conditionText, setConditionText] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  // 4 fixed positions for the "No" button
  const noButtonPositions: Position[] = [
    { x: 40, y: 40 },   // top-left
    { x: 300, y: 40 },  // top-right
    { x: 40, y: 300 },  // bottom-left
    { x: 300, y: 300 }, // bottom-right
  ];

  // Move to next position on hover/tap
  const handleNoHover = () => {
    setNoPositionIndex((prev) => (prev + 1) % noButtonPositions.length);
  };

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center 
                 bg-gradient-to-br from-rose-100 via-pink-50 to-pink-200 overflow-hidden"
    >
      <FloatingHearts />

      <div className="z-20 bg-white/80 rounded-2xl shadow-xl p-8 max-w-4xl w-full text-center backdrop-blur-sm">
        <ProposalTitle proposalStatus={proposalStatus} />
      </div>

      {proposalStatus === 'pending' && (
        <ButtonsContainer
          containerRef={ref}
          noButtonPosition={noButtonPositions[noPositionIndex]} // ✅ pass current position
          onYesClick={() => setProposalStatus('yes')}
          onConditionClick={() => setProposalStatus('condition')}
          onNoHover={handleNoHover} // ✅ pass handler
        />
      )}

      {proposalStatus === 'condition' && (
        <ConditionForm
          conditionText={conditionText}
          onConditionTextChange={(e) => setConditionText(e.target.value)}
          onSubmit={() => console.log('Submitted:', conditionText)}
        />
      )}
    </div>
  );
};

export default CommonLayout;
