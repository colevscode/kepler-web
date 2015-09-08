import { combineReducers } from 'redux'
import {
  SRC_CHANGE,
  TICK, KICK
} from '../actions'

function isFunction(obj) {
  return Object.prototype.toString.call(obj) === '[object Function]'
}

function compileSrc(botState) {
  const src = botState.src;
  try {
    const fn =  eval('(' + src + ')')
    return {
      ...botState,
      err: null,
      fn,
    }
  } catch(err) {
    return {
      ...botState,
      fn: null,
      err,
    }
  }
}

const initialBotState = {
  src: `function think(state) {
    return ['MOVE', '↑']
}`
}

function bot(state = compileSrc(initialBotState), action) {
  switch (action.type) {
  case SRC_CHANGE:
    return compileSrc({
      ...state,
      src: action.src,
    })
  default:
    return state
  }
}

function gameState(state = null, action) {
  switch (action.type) {
  case TICK:
    return action.state
  case KICK:
    return null
  default:
    return state
  }
}

export default combineReducers({
  bot,
  gameState,
})
