/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [course, setCourse] = useState(["React 강좌", "JavaScipt 강좌", "CSS 강좌"]);
  const [good,setGood] = useState(0);
  const [goodArray,setGoodArray] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  function ChangeCourse () {
    let newCourse = [...course];
    newCourse[0] = "Html 강좌";
    setCourse( newCourse );
  }

  console.log(goodArray[0]);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {
        course.map((a, i)=>{
          return(
            <div className='list' key={i}>
              <h3 onClick={()=>{setModal(!modal)}}> { course[i] } <span onClick={ ()=>{ setGoodArray(++goodArray[i]); } }>👍 {goodArray[i]}</span>  </h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
          )})
      }

      <button onClick={ ChangeCourse }>버튼</button>

      

      {
        modal === true ? <Modal/> : null
      }

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
