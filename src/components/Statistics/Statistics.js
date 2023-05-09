import React from 'react';

const Statistics = ({
  state,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  
  return (
    <div>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <p>Total: {countTotalFeedback}</p>
      <p>Positive feedback:{countPositiveFeedbackPercentage}%</p>
    </div>
  );
};

export default Statistics;
