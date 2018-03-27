import { combineReducers } from 'redux';
import {
  FETCH_QUESTIONS,
  RECEIVE_QUESTIONS,
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

export default combineReducers({
  data,
})
