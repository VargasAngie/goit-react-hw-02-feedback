import React from "react";
import StyledSection from "./Section.styled";
import { PropTypes } from 'prop-types';

const Section = ({ title, children }) => (
  <StyledSection>
    <h2>{title}</h2>
    {children}
  </StyledSection>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Section;