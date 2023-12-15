import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Project extends Component {
  static propTypes = {}

  render() {
    return (
        <div className='home'>
      <a href={`/`}>
        <h2>Ji Eun.</h2>
      </a>
      <div>Project</div>
      </div>
    )
  }
}

export default Project