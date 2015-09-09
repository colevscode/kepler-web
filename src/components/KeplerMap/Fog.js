import React, { Component } from 'react'

export default class Fog extends Component {
  render() {
    return (
      <g>
        <defs>
          <mask id="fog" x="0" y="0" width="100" height="100">
            <rect x="0" y="0" width="100" height="100" fill="white" />
            <circle cx="50%" cy="50%" r={this.props.r} fill="black" />
          </mask>
        </defs>

        <rect x="0" y="0" width="100%" height="100%" style={{mask: 'url(#fog)'}}
           fill="rgba(0, 0, 0, 0.1)"/>
      </g>
    )
  }
}
