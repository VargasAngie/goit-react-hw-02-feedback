import React from 'react';
import NotificationText from './Notification.styled';
import { PropTypes } from 'prop-types';

const Notification = ({ message }) => (
  <NotificationText>{message}</NotificationText>
);

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
