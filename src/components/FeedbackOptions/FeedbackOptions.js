import React from 'react';
import { FeedbackList, Button } from './FeedbackOptions.styled';

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

export default FeedbackOptions;
