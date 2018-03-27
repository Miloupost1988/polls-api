import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { media } from './css.js';

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  margin: 10px;
  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.05);
  }
  ${media.phone`
      width: 250px;
      margin: 20px;
    `}
`;

const QuestionHeader = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 25px;
  word-spacing: 0;
  letter-spacing: 5px;
`;

const PublishedAt = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  background: #ffdb43;
  font-size: 10px;
  letter-spacing: 2px;
  padding: 5px;
`;

const Choices = styled.div`
  line-height: 25px;
  letter-spacing: 3px;
  font-family: 'Gentium Basic', serif;
  font-size: 18px;
  color: #888;
  font-weight: 800;
`;

const Questions = ({ question, published_at, choices, onClick }) => {

  return (
    <QuestionWrapper onClick={(e) => onClick(e)}>
      <QuestionHeader>
        {question}
      </QuestionHeader>
      <PublishedAt>{published_at}</PublishedAt>
      <Choices>
        Amount Of Answers: {choices.length}
      </Choices>
    </QuestionWrapper>
  );
};

Questions.propTypes = {
  question: propTypes.string.isRequired,
  published_at: propTypes.string.isRequired,
  choices: propTypes.array.isRequired,
};

export default Questions;
