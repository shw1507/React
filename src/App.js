/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [course, setCourse] = useState(["React 강좌", "JavaScipt 강좌", "CSS 강좌"]);
  const [good,setGood] = useState(0);

  function ChangeCourse () {
    let newCourse = [...course];
    newCourse[0] = "Html 강좌";
    setCourse( newCourse );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={ ChangeCourse }>버튼</button>

      <div className='list'>
        <h3> { course[0] } <span onClick={ ()=>{ setGood(good + 1) } }>👍 {good}</span>  </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <div className='list'>
        <h3> { course[1] }  </h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>

      <div className='list'>
        <h3> { course[2] }  </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>

      <Modal />
      <p>2월 23일 발행</p>
    </div>
  );
}

function Modal() {
  return(
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p> 
    </div>
  )
}

export default App;
