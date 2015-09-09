import React, { Component } from 'react'

export default class Entity extends Component {
  render() {
    const {pos, opacity, color, rot} = this.props
    return (
      <g transform={`rotate(${rot} ${pos.x + 0.5} ${-pos.y + 0.5})`}>
      <rect
        x={pos.x}
        y={-pos.y}  // Must invert y axis
        fill={color}
        fillOpacity={opacity}
        width="1"
        height="1"
      />
      </g>
    )
  }
}

Entity.defaultProps = {
  opacity: 1,
  color: 'black',
}
