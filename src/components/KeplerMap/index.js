import React, { Component } from 'react'
import Entity from './Entity'
import EntitySelf from './EntitySelf'
import FogOfWar from './Fog'
import { List } from 'immutable'

export default class KeplerMap extends Component {
  render() {
    const state = this.props.gameState
    const entities = List(state.entities)
    const me = entities.find((e) => e.id === state.me)
    const scale = 60
    return (
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${scale} ${scale}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg viewBox={`${(me.pos.x - (scale / 2))} ${(-me.pos.y) - (scale / 2)} ${scale} ${scale}`} preserveAspectRatio="xMidYMid meet"
>
          {entities.map((entity) => {
            return <Entity
              pos={entity.pos}
              rot={entity.rot}
              opacity={1}
              color="black"
              key={entity.entity} />
          })}
          <EntitySelf pos={me.pos} rot={me.rot}/>
        </svg>

        <FogOfWar r={20} />
      </svg>
    )
  }
}
