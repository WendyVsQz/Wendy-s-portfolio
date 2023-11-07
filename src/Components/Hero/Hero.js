import React, { Component } from 'react'
import './Hero.scss'
import Name from '../../Assets/images/coollogo_com-31020544.png'
import Portfolio from './Portfolio/Portfolio'

export default class Hero extends Component {
  render() {
    return (
     <div className='Hero'>
       <img src={Name} alt='Logo' class='name'/>
       <Portfolio/>
      </div>
    )
  }
}
