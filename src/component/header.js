import React, {Component} from 'react'
import SvgIcon from './svg.js'

export default class Header extends Component{
  render(){
    return (
      <header>
        <SvgIcon iconClass="people"></SvgIcon>
        <SvgIcon iconClass="undo"></SvgIcon>
      </header>
    )
  }
}
