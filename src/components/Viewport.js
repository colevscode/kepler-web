import React, { Component } from 'react'
import { List } from 'immutable'
import MapView from './KeplerMap'
import HUD from './HUD'

export default class Viewport extends Component {
  render() {
    const { height, gameState } = this.props
    const entities = List(gameState.entities)
    const me = entities.find((e) => e.id === gameState.me)

    return <div style={{height}}>
      <HUD
        life={me.life}
        energy={me.energy}>
        <MapView gameState={gameState} />
      </HUD>
    </div>
  }
}
