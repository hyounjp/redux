import * as types from '../actions/ActionTypes.js'

const initialState={
  number : 0
  dumbObject : {
    d : 0,
    u : 1,
    m : 2,
    b : 3
  }
};

export default function counter(state=initialState, action) { //state 가 undefinded 일때 initialState

  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number : state.number + 1,
        dumbObject : { ...state.dumbObject, u : 0 } //ES6 spread

      }

    case types.DECREMENT:
      return {
        ...state,
        number : state.number -1
      }
      break;

    default:
      return state;

  }

}
