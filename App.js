import React,{useState} from 'react'
import './App.css'


function App()
 { 
const questions=[
  {questionText:'What does HTML stand for?',
    answerOptions:[
      {answerText:'Hyperlinks and Text Markup Language',isCorrect:false},
      {answerText:'Hyper Text Markup Language',isCorrect:true},
      {answerText:'Home Tool Markup Language',isCorrect:false},
      {answerText:'Home Tool Markup Language',isCorrect:false}]
  },
  {
    questionText:'Choose the correct HTML element for the largest heading:',
    answerOptions:[
      {answerText:'<h6>',isCorrect:false},
      {answerText:'<head>',isCorrect:false},
      {answerText:'<heading>',isCorrect:false},
      {answerText:' <h1>',isCorrect:true}]
  },
  {questionText:'Which character is used to indicate an end tag?',
    answerOptions:[
      {answerText:'*',isCorrect:false},
      {answerText:'/',isCorrect:true},
      {answerText:'<',isCorrect:false},
      {answerText:'^',isCorrect:false}]},
  {questionText:'The Bootstrap grid system is based on how many columns?',
    answerOptions:[
      {answerText:'12',isCorrect:true},
      {answerText:'3',isCorrect:false},
      {answerText:'6',isCorrect:false},
      {answerText:'9',isCorrect:false}
      ]},
  {questionText:' Which tag is used when creating a list with a specific order (by default, will show up as a numbered list)?',
    answerOptions:[
      {answerText:'<dl>',isCorrect:false},
      {answerText:'<ul>',isCorrect:false},
      {answerText:'<list>',isCorrect:false},
      {answerText:'<ol>',isCorrect:true}]
    },
  {questionText:'Which tag would you generally use to make a list of items that have no particular order (by default, will show up as a bullet list)?',
    answerOptions:[
      {answerText:'<dl>',isCorrect:false},
      {answerText:'<ul>',isCorrect:true},
      {answerText:'<list>',isCorrect:false},
      {answerText:'<ol>',isCorrect:false}]
    },
  {questionText:'What does CSS stand for?',
    answerOptions:[
      {answerText:'Computer Style Sheets',isCorrect:false},
      {answerText:'Creative Style Sheets',isCorrect:false},
      {answerText:'Cascading Style Sheets',isCorrect:true},
      {answerText:'Colorful Style Sheets',isCorrect:false}]},
  {questionText:'Inside which HTML element do we put the JavaScript?',
    answerOptions:[
      {answerText:'<scripting',isCorrect:false},
      {answerText:'<script>',isCorrect:true},
      {answerText:'<javascript>',isCorrect:false},
      {answerText:'<js>',isCorrect:false}]},
  {questionText:'Which class shapes an image to a circle?',
    answerOptions:[
      {answerText:'.img-circle',isCorrect:true},
      {answerText:'.img-rounded',isCorrect:false},
      {answerText:'.img-round',isCorrect:false},
      {answerText:'.img-thumbnail',isCorrect:false}]
    },
  {questionText:'Which class provides a responsive fixed width container?',
    answerOptions:[
      {answerText:'.container-fixed',isCorrect:false},
      {answerText:'.container-fluid',isCorrect:false},
      {answerText:'.container',isCorrect:true}]}
    ];
const[currentquestion,setCurrentquestion]=useState(0);
const [score,setScore]=useState(0);
const[showscore,setShowscore]=useState(false);
const handlesubmit=(isCorrect)=>{
  if(isCorrect == true)
    {
    setScore(score+1)
  }
  if(isCorrect == false)
    {
    setScore(score-1)
  }
  const nextQuestion=currentquestion+1;
  if(nextQuestion<questions.length)
    {
    setCurrentquestion(nextQuestion);
  }
  else{
    setShowscore(true);
  }
}
return(
<>
<h1 className='title'>Quiz Program</h1>
<div className='app'>
  {
    showscore ? 
    (
      <div className='score-section'>

<h3>You have scored {score} out of {questions.length} </h3><br></br>
<h2>THANK YOU!!!</h2>
<p> 1 marks will be deducted for incorrect answer</p>

    </div>)
  
    :
    (
      <>
      <div className='Question-section'>
        {/*question-section*/}
        <h1>Questions {currentquestion+1}/{questions.length}</h1>
      <div className='question-text'>
        {questions[currentquestion].questionText}
      </div>
      </div>
  
      <div className='Answer-section'>
        {
questions[currentquestion].answerOptions.map((answerOptions)=>
(
<button onClick={()=>handlesubmit(answerOptions.isCorrect)}>
  {answerOptions.answerText}
</button>
))


        }

    </div>
    </>
    )
  }

</div>
</>
)
}
export default App

