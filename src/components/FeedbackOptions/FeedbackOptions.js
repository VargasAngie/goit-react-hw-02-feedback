import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map((option, index) => {
      return (
        <li key={index}>
          <button onClick={() => onLeaveFeedback(option)}>{option}</button>
        </li>
      );
    })}
  </ul>
);

export default FeedbackOptions;
