import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

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

const QuestionDetail = () => {

  return (
    <QuestionDetailWrapper>
      <QuestionDetailHeader>
        Question: Question
      </QuestionDetailHeader>
      <QuestionDetailChoices>
        Choices
      </QuestionDetailChoices>
    </QuestionDetailWrapper>
  );
};

QuestionDetail.propTypes = {
};

export default QuestionDetail;
