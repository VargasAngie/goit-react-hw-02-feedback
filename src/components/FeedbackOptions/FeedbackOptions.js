import React from 'react';
import { FeedbackList, Button } from './FeedbackOptions.styled';
import { PropTypes } from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackList>
    {options.map((option, index) => {
      return (
        <li key={index}>
          <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
        </li>
      );
    })}
  </FeedbackList>
);

FeedbackList.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
