import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions';
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
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchQuestions());
  };

  render() {
    const { isFetching, questions } = this.props;

    const isEmpty = questions.length === 0;

    return (
      !isFetching ?
        <Wrapper>
          <Header>{'Questions'}</Header>
          { !isEmpty ?
              <QuestionsWrapper>
                {questions.map(question => <Questions {...question} key={question.url}/>)}
              </QuestionsWrapper> : null
          }
        </Wrapper> : null
    );
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  questions: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  const { questions, isFetching } = state.data;

  return {
    questions,
    isFetching,
  }
}

export default connect(mapStateToProps)(App)
