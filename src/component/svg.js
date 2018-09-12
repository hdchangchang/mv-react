import React, { Component } from 'react'

export default class SvgIcon extends Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      svgClass: 'svg-icon '+(this.props.svgClass || ''),
      useHref: '#'+this.props.iconClass
    }
  }
  render(){
    return (
      <svg className={this.state.svgClass} aria-hidden='true'>
        <use xlinkHref={this.state.useHref}></use>
      </svg>
    )
  }
}