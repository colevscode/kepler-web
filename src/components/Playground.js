import React, { Component, PropTypes } from 'react'
import brace from 'brace'
import 'brace/mode/javascript'
import 'brace/theme/tomorrow_night_bright'
import AceEditor from 'react-ace'
import Viewport from './Viewport'

export default class Playground extends Component {
  render() {
    const { bot, gameState, height } = this.props
    const src = (bot && bot.src)
    return (
      <div className="sm-flex flex-center flex-justify">

        <div className="flex-last sm-col-6">
          {this.renderViewport()}
        </div>

        <div className="flex flex-column sm-col-6">
          <div className="p1" style={{backgroundColor: 'black', height: `calc(${height} - 1rem)`}}>
            <AceEditor
              mode="javascript"
              theme="tomorrow_night_bright"
              value={src}
              showGutter={false}
              onChange={e => this.handleSrcChange(e)}
              width="100%"
              height={`calc(${height} - 2rem)`}
            />
          </div>
        </div>
      </div>
    )
  }

  renderViewport() {
    const { gameState, height } = this.props
    if (gameState) {
      return <Viewport gameState={gameState} height={height} />
    } else {
      const { bot } = this.props

      if (bot.err) {
        return <div className="center red p2">
          {bot.err.toString()}
        </div>
      } else {
        return <div className="center">
          <button className="btn bg-green white rounded" onClick={e => this.handleLaunch(e)}>
            Launch
          </button>
        </div>
      }
    }
  }

  handleSrcChange(src) {
    this.props.onHandleSrcChange(src)
  }

  handleLaunch(e) {
    this.props.onHandleLaunch()
  }
}
