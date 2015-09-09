import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  srcChanged, launchBot
} from '../actions'
import Playground from '../components/Playground'
import 'basscss/css/basscss.css'
import '../styles/index.css'

class App extends Component {
  render() {
    const { dispatch } = this.props
    return (
      <div className="py4 container">
        <h1 className="mb2">Kepler</h1>
        <div className="h4 mt0 mb4 gray">v0.1.0 - Automata Apoapsis</div>

        <ol className="list-reset flex mxn1 mb4">
          <li><a className="p1" href="#story">Story</a></li>
          <li><a className="p1" href="#playground">Playground</a></li>
          <li><a className="p1" href="#documentation">Documentation</a></li>
        </ol>

        <h2 id="story">Story</h2>
        <p>Humanity is interstellar. Planets are starting to be colonized with the help of robot companions (&ldquo;man's best friend&rdquo;). As humans travel to the boundaries of the universe, they also push the boundaries of artificial intelligence. The game starts at the cusp of the singularity on the planet <em>Kepler 1a</em>. You are a robot trying to achieve sentience. Create your own destiny in an unforgiving environment.</p>

        <h2 id="playground">Playground</h2>
        <div className="rounded overflow-hidden vignette mxn4">
        <Playground
          bot={this.props.bot}
          gameState={this.props.gameState}
          height="20rem"
          onHandleSrcChange={src => dispatch(srcChanged(src)) }
          onHandleLaunch={() => dispatch(launchBot()) } />
        </div>

        <h2 id="documentation">Documentation</h2>
        <p className="gray">Coming soon…</p>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
