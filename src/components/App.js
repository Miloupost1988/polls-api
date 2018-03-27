import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuestions, clickQuestion } from '../actions';
import Questions from './Questions';
import QuestionDetail from './QuestionDetail';

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

  //set variable on state to hide and show detailed view
  onClick(questionDetails, dispatch) {
    dispatch(clickQuestion(questionDetails));
  };

  //to return to home page out of detailed view
  homeButtonClick(dispatch) {
    dispatch(clickQuestion())
  };

  render() {
    const {
      isFetching,
      questions,
      clicked,
      questionDetail,
    } = this.props;

    //to make sure questions is not empty
    const isEmpty = questions.length === 0;

    return (
      !isFetching ?
        <Wrapper>
          <Header onClick={() => this.homeButtonClick(this.props.dispatch)}>{'Questions'}</Header>
          { !isEmpty && !clicked ?
              <QuestionsWrapper>
                {questions.map(question => <Questions {...question} key={question.url} onClick={() => this.onClick(question, this.props.dispatch)} />)}
              </QuestionsWrapper> : null
          }
          { clicked ? <QuestionDetail {...questionDetail}/> : null }
        </Wrapper> : null
    );
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  questions: PropTypes.array.isRequired,
  clicked: PropTypes.bool.isRequired,
  questionDetail: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  const { questions, isFetching } = state.data;
  const { clicked, questionDetail } = state.questionDetail;

  return {
    questions,
    isFetching,
    clicked,
    questionDetail,
  }
}

export default connect(mapStateToProps)(App)
