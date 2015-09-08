import React, { Component } from 'react'

import MapView from 'kepler-client/lib/Display/MapView'
import HUD from 'kepler-client/lib/Display/HUD'

export default class Viewport extends Component {
  render() {
    const { height, gameState: { me } } = this.props
    return <div style={{height}}>
      <MapView
        pos={me.pos}
        entities = {this.props.gameState.sensors} />
      <HUD
        life={me.life} />
    </div>
  }
}
