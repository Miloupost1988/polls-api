import {
  FETCH_QUESTIONS,
  RECEIVE_QUESTIONS,
} from './actionTypes';

const requestQuestions = (state) => ({
  type: FETCH_QUESTIONS,
  isFetching: state.data.isFetching,
});

const receiveQuestions = (json) => ({
  type: RECEIVE_QUESTIONS,
  questions: json,
});

export const fetchQuestions = () => (dispatch, getState) => {
  dispatch(requestQuestions(getState()))
  return fetch('https://polls.apiblueprint.org/questions')
    .then(response => response.json())
    .then(json => dispatch(receiveQuestions(json)))
};
