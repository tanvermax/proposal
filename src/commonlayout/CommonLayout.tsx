'use client';

import React, { useState, useEffect, useRef } from 'react';
import ButtonsContainer from '@/components/proposal/ButtonsContainer';
import ConditionForm from '@/components/proposal/ConditionForm';
import FloatingHearts from '@/components/proposal/FloatingHearts';
import ProposalTitle from '@/components/proposal/ProposalTitle';

type ProposalStatus = 'pending' | 'yes' | 'condition';

interface Position {
  x: number;
  y: number;
}

const getRandomPosition = (width: number, height: number, size = 120): Position => {
  const maxX = width - size;
  const maxY = height - size;
  return { x: Math.random() * maxX, y: Math.random() * maxY };
};

const CommonLayout: React.FC = () => {
  const [proposalStatus, setProposalStatus] = useState<ProposalStatus>('pending');
  const [noPosition, setNoPosition] = useState<Position>({ x: 0, y: 0 });
  const [conditionText, setConditionText] = useState('');
  const ref = useRef<HTMLDivElement>(null); // ✅ only one ref

  const handleNoHover = () => {
    if (ref.current) {
      const { clientWidth, clientHeight } = ref.current;
      setNoPosition(getRandomPosition(clientWidth, clientHeight));
    }
  };

  useEffect(() => {
    if (ref.current) {
      const { clientWidth, clientHeight } = ref.current;
      setNoPosition({ x: clientWidth * 0.7, y: clientHeight * 0.7 });
    }
  }, []);

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
          noButtonPosition={noPosition}
          onYesClick={() => setProposalStatus('yes')}
          onConditionClick={() => setProposalStatus('condition')}
          onNoHover={handleNoHover}
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
