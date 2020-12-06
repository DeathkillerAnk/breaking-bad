import {
    FETCH_CHARS_REQUEST,
    FETCH_CHARS_SUCCESS,
    FETCH_CHARS_FAILURE
  } from './actionTypes'
  
  const initialState = {
    loading: false,
    chars: [],
    error: ''
  }
  
  const charReducers = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CHARS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_CHARS_SUCCESS:
        return {
          ...state,
          loading: false,
          chars: action.payload,
          error: '',
        }
      case FETCH_CHARS_FAILURE:
        return {
          loading: false,
          chars: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default charReducers