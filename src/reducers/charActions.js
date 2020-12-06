import axios from 'axios'
import {
  FETCH_CHARS_REQUEST,
  FETCH_CHARS_SUCCESS,
  FETCH_CHARS_FAILURE
} from './actionTypes'

export const fetchChars = () => {
  return (dispatch) => {
    dispatch(fetchCharsRequest())
    axios
      .get('https://www.breakingbadapi.com/api/characters?limit=30')
      .then(response => {
        // response.data is the chars
        const chars = response.data
        dispatch(fetchCharsSuccess(chars))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchCharsFailure(error.message))
      })
  }
}

export const fetchCharsRequest = () => {
  return {
    type: FETCH_CHARS_REQUEST
  }
}

export const fetchCharsSuccess = chars => {
  return {
    type: FETCH_CHARS_SUCCESS,
    payload: chars
  }
}

export const fetchCharsFailure = error => {
  return {
    type: FETCH_CHARS_FAILURE,
    payload: error
  }
}