import React, { Component } from 'react'
import Header from './Header';
import './Home.css';
import Footer from './Footer';


class TypingEffect extends Component {
  state = {
    text: "|",
    content: "안녕하세요 도전하는 개발자 백지은 입니다.",
    index: 0,
  };

  componentDidMount() {
    setTimeout(() => {
      this.removeCursor();
    },70)

    this.typingInterval=setInterval(this.typing,100);
  }


  componentWillUnmount() {
    clearInterval(this.typingInterval);
  }

  typing = () => {
    const { content, index } = this.state;
    
    if (index < content.length) {
      this.setState((prevState) => ({
        text: prevState.text + content[index],
        index: prevState.index + 1,
      }));
    } else {
      clearInterval(this.typingInterval);
    }
  };

  removeCursor = () => {
    // "|" 제거
    this.setState({
      text: this.state.text.slice(0, -1),
    });
  };
  render() {
    return <h2>{this.state.text}</h2>;
  }
}
export default class Home extends Component {
 
  
  render() {
    return (
      
      <div className='home'>
      <Header />
      
      <div className='profile'>
        <div className='image'>
          <img className='photo' src='img/idpoto.jpg' alt='idpoto' />
        </div>
       
            <div className='text_blink'>
            <TypingEffect/>
            </div>
        <div className='myname'>          
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
      <Footer/>
      </div>
    )
  }
}
