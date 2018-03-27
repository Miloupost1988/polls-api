import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Questions from './Questions';

const Wrapper = styled.div`
  padding: 5px;
`;

const Header = styled.h1`
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

const QuestionsWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap;
`;

class App extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <Wrapper>
        <Header>{'Questions'}</Header>
          <QuestionsWrapper>
            <Questions />
          </QuestionsWrapper>
      </Wrapper>
    );
  }
}

App.propTypes = {
};

export default App;
