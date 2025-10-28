import React, { createContext, useContext, useState, useCallback } from 'react';

const ScoreContext = createContext({
  score: {
    wins: 0,
    loses: 0,
    ties: 0
  },
  addScore: (prop, amount) => {
    console.error("addScore was called outside of a ScoreProvider.");
  },
});

export const useScore = () => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error('useScore must be used within a ScoreProvider');
  }
  return context;
};

export function ScoreProvider({ children }) {
  const [score, setScore] = useState({
    wins: 0,
    loses: 0,
    ties: 0
  });

  const addScore = useCallback((prop, amount) => {
    if (typeof amount === 'number' && amount !== 0) {
      setScore(currentScore => ({
        ...currentScore,
        [prop]: currentScore[prop] + amount
      }));
    }
  }, []);

  const contextValue = {
    score,
    addScore,
  };

  return (
    <ScoreContext.Provider value={contextValue}>
      {children}
    </ScoreContext.Provider>
  );
}
