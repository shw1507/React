/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [course, setCourse] = useState(["React 강좌", "JavaScipt 강좌", "CSS 강좌"]);
  const [goodArray,setGoodArray] = useState([0, 0, 0]);
  const [modalArray, setModalArray] = useState([false, false, false]);

  function changeCourse () {
    let newCourse = [...course];
    newCourse[0] = "Html 강좌";
    setCourse( newCourse );
  }

  const increaseGoodArray = (index) => {
    const newGoodArray = goodArray.map((number, idx) => idx === index ? number + 1 : number);
    setGoodArray(newGoodArray); // 새로운 배열로 상태 업데이트
  };

  const screenModal = (index) => {
    const newModalArray = modalArray.map((bool, idx) => idx === index ? !bool : bool);
    setModalArray(newModalArray); // 새로운 배열로 상태 업데이트
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {
        course.map((a, i)=>{
          return(
            <div className='list' key={i}>
              <h3 onClick={()=>screenModal(i)}> { course[i] } <span onClick={ (e)=>{ e.stopPropagation(); increaseGoodArray(i) } }>👍 {goodArray[i]}</span>  </h3>
              <p>2월 17일 발행</p>
              <hr/>
              {
                modalArray[i] === true ? <Modal title={course[i]} onChangeCourse = {changeCourse} /> : null
              }
            </div>
          )})
      }

      

    </div>
  );
}

function Modal( {title, onChangeCourse} ) { 
  return(
    <div className='modal'>
        <h2>{title}</h2>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={onChangeCourse}>글수정</button> 
    </div>
  )
}

export default App;
