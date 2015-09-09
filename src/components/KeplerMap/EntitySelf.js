import React, { Component } from 'react'
import { List } from 'immutable'

const Entity = require('./Entity');

const MAX_HISTORY = 10;

export default class EntitySelf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: List()
    }
  }

  componentWillReceiveProps(newProps) {
    let { history } = this.state
    history = history.unshift(newProps)
    history = history.slice(0,MAX_HISTORY)
    this.setState({
      history
    })
  }

  renderHistory(state, age) {
    let opacity = (MAX_HISTORY - age) / (3 * MAX_HISTORY);
    return <Entity
      color="blue"
      pos={state.pos}
      rot={state.rot}
      opacity={opacity}
      key={age} />
  }

  render() {
    const {pos, rot} = this.props;
    const {history} = this.state;
    return (
      <g>
        {history.map((s, i) => this.renderHistory(s, i))}
        <Entity
          pos={pos}
          rot={rot}
          color="blue" />
      </g>
    )
  }
}
