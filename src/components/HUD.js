import React, { Component } from 'react'

function valColor(val) {
  if (val <= 10) {
    return 'red'
  } else if (val <= 20) {
    return 'orange'
  }
}

export default class KeplerHUD extends Component {
  render() {
    const { children, life, energy } = this.props
    return (
      <div className="relative">
        <div className="absolute flex h6 px1 col-12 border-box">
          <div className="flex-auto" />
          <div className="p1">
            <span>⚡</span>
            <span className={valColor(energy)}>{energy}</span>
          </div>
          <div className="p1">
            <span className="red">♥️</span>
            <span className={valColor(life)}>{Math.round(life)}</span>
          </div>
        </div>
        {children}
      </div>
    )
  }
}
