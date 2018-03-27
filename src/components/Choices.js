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

const PercentageFiller = styled.div`
  background-color: #ffdb43;
  height: 100%;
  width: ${props => props.width};
`;

//calculate percentage of total votes
const calculatePercentage = (total, currentVotes) => {
  const toPercentage = (currentVotes / total) * 100;
  const percentage = toPercentage.toFixed(2);

  return percentage;
}

//add px for props in styles
const addPxToWidth = (width) => {
  return `${width}px`
}

const Choices = ({ choice, votes, totalVotes }) => {
  const votePercentage = calculatePercentage(totalVotes, votes);

  return (
    <ChoicesWrapper>
      <Choice>{choice}</Choice>
      <Votes>Votes: {votes}</Votes>
      <Percentage>{votePercentage} %</Percentage>
      <PercentageBar>
        <PercentageFiller width={addPxToWidth(votePercentage)}/>
      </PercentageBar>
    </ChoicesWrapper>
  );
};

Choices.propTypes = {
  choice: propTypes.string.isRequired,
  votes: propTypes.number.isRequired,
  totalVotes: propTypes.number.isRequired,
};

export default Choices;
