import React, { Component } from 'react'
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
      <a href={`/`}>
        <h2>Ji Eun.</h2>
      </a>
      <div className='profile'>
       
        <div className='myname'>
            <h2>안녕하세요 도전하는 개발자 백지은입니다.</h2>
            <h3>현재 프론트엔드 개발자로 구직중입니다.봐주셔서 감사합니다.</h3>
            
            <div className='info'>
                <h2>My Profile</h2>
                <h3>Name: 백지은</h3>
                <h3>Age: 25, 1999.07</h3>
                <h3>Phone: 010.6513.7691</h3>
                <h3>Email: uzzz7899@gmail.com</h3>
            </div>
        </div>
      </div>
      </div>
    )
  }
}
