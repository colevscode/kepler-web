import WebSocket from 'ws'

export const SRC_CHANGE = 'SRC_CHANGE'
export const LAUNCH_STARTED = 'LAUNCH_STARTED'
export const LAUNCH_SUCCESS = 'LAUNCH_SUCCESS'
export const LAUNCH_FAIL = 'LAUNCH_FAIL'
export const TICK = 'TICK'
export const CMD = 'CMD'
export const KICK = 'KICK'

export function ticked(state) {
  return {
    type: TICK,
    state,
  }
}

export function kicked(msg) {
  return {
    type: KICK,
    msg,
  }
}

export function launchStarted() {
  return {
    type: LAUNCH_STARTED,
  }
}

export function launchSucceeded() {
  return {
    type: LAUNCH_SUCCESS,
  }
}

export function launchFailed() {
  return {
    type: LAUNCH_FAIL,
  }
}

export function srcChanged(src) {
  return {
    type: SRC_CHANGE,
    src,
  }
}

export function commanded(cmd) {
  return {
    type: CMD,
    cmd,
  }
}

export function launchBot() {
  return (dispatch, getState) => {
    dispatch(launchStarted())

    const { bot: { fn: think } } = getState()

    console.log('thinkfn', think)

    const ws = new WebSocket('ws://localhost:5000')

    ws.addEventListener('start', () => dispatch(launchSucceeded()))
    ws.addEventListener('close', () => dispatch(kicked()))
    ws.addEventListener('message', (msg) => {
      const state = JSON.parse(msg.data)
      dispatch(ticked(state))
      const cmd = think(state)
      ws.send(JSON.stringify(cmd || ''))
      dispatch(commanded(cmd))
    })
  }
}
