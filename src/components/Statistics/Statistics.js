import React from 'react';
import { PropTypes } from 'prop-types';

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

Statistics.propTypes = {
  state: PropTypes.object,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
};

export default Statistics;
