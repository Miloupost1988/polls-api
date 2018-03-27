import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Choices from './Choices';

const QuestionDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionDetailHeader = styled.h1`
  font-size: 22px;
  margin: 25px;
  text-align: left;
  opacity: 0.75;
  font-family: Arial;
  transition: all 0.35s ease-in;
  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const QuestionDetailChoices = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 25px;
  word-spacing: 0;
  letter-spacing: 5px;
`;

const QuestionDetail = ({ choices, question }) => {

  return (
    <QuestionDetailWrapper>
      <QuestionDetailHeader>
        Question: {question}
      </QuestionDetailHeader>
      <QuestionDetailChoices>
        {choices.map(choice => <Choices {...choice} length={choices.length} key={Math.random()}/>)}
      </QuestionDetailChoices>
    </QuestionDetailWrapper>
  );
};

QuestionDetail.propTypes = {
  choices: propTypes.array.isRequired,
  question: propTypes.string.isRequired,
};

export default QuestionDetail;
