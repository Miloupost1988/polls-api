import { combineReducers } from 'redux';
import {
  FETCH_QUESTIONS,
  RECEIVE_QUESTIONS,
  CLICK_QUESTION,
} from '../actions/actionTypes';

const data = (state = {
  isFetching: false,
  questions: []
 }, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        isFetching: false,
        questions: action.questions,
      }
    default:
      return state
  }
}

const questionDetail = (state = {
  clicked: false,
  questionDetail: {},
}, action) => {
  switch (action.type) {
    case CLICK_QUESTION:
      return {
        ...state,
        clicked: !state.clicked,
        questionDetail: action.questionDetail,
      }
    default:
      return state
  }
}

export default combineReducers({
  data,
  questionDetail,
})
