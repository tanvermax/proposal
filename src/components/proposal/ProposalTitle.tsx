import React from 'react';

type ProposalStatus = 'pending' | 'yes' | 'condition';

interface ProposalTitleProps {
  proposalStatus: ProposalStatus;
}

const ProposalTitle: React.FC<ProposalTitleProps & { conditionSubmitted?: boolean }> = ({
  proposalStatus,
  conditionSubmitted
}) => {
  return (
    <div className="relative text-center">
      <div className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-pink-300 via-red-200 to-pink-400 rounded-full"></div>
      {proposalStatus === 'yes' ? (
        <h1 className="relative text-5xl sm:text-6xl font-extrabold text-pink-700 animate-bounce drop-shadow-lg">
          SHE SAID YES! 💍✨
        </h1>
      ) : conditionSubmitted ? (
        <h1 className="relative text-4xl sm:text-5xl font-bold text-blue-600 animate-pulse">
          Okay! Your condition will be sent to your special one 💌
        </h1>
      ) : proposalStatus === 'condition' ? (
        <h1 className="relative text-4xl sm:text-5xl font-bold text-blue-600 animate-pulse">
          A Condition! 😅 Write it down ✍️
        </h1>
      ) : (
        <h1 className="relative text-xl sm:text-5xl font-semibold text-gray-800">
          My Dearest <span className="text-pink-600 font-bold">Fiha</span>,<br />
          Will You Marry Me? 💖
        </h1>
      )}
    </div>
  );
};


export default ProposalTitle;
