import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const ChoicesWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 40px;
  margin: 20px;
  border: 1px solid red;
  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Choice = styled.h6`
`;

const Votes = styled.h6`
`;

const Percentage = styled.h6`
  color: black;
  margin: auto 10px auto;
`;

const PercentageBar = styled.section`
  border: 1px solid black;
  border-radius: 4px;
  margin: auto 20px auto;
  width: 100px;
  height: 20px;
`;

const Choices = ({ choice, votes }) => {

  return (
    <ChoicesWrapper>
      <Choice>{choice}</Choice>
      <Votes>Votes</Votes>
      <Percentage>Percentage%</Percentage>
      <PercentageBar>
      </PercentageBar>
    </ChoicesWrapper>
  );
};

Choices.propTypes = {
  choice: propTypes.string.isRequired,
  votes: propTypes.number.isRequired,
};

export default Choices;
