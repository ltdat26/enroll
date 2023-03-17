import React, { Component } from 'react'

export default class States extends Component {
  constructor() {
    super()
    this.state = {
      name: "Nissan Skyline",
      model: "1.0",
      colors: ['black', 'blue', 'yellow', 'white', 'cyan', 'pink']
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.model}</p>
      </div>
    )
  }
}
