//import { INCREMENT, DECREMENT, SET_DIFF } from './ActionTypes';
import * as types from './ActionTypes'; //types 로 불러오기

export function increment(){
  return {
    type : types.INCREMENT
  }
}

export function decrement(){
  return {
    type : types.DECREMENT
  }
}

export function setColor(color){
  return {
    type : types.SET_COLOR,
    color
  }
}
