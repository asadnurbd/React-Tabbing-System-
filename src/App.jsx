import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let[todoData,settodoData]=useState([])
  
  function saveToDoData(e) {
    let fetchData=e.target.inputData.value;
    if(!todoData.includes(fetchData)){
      let finaltodolist=[...todoData,fetchData]
      settodoData(finaltodolist)  
      console.log(todoData)
    }else{
       alert("Data Exist")
    }
  
    // let maindata=todoData.includes(fetchData)
    e.preventDefault();
  }

  let list=todoData.map((value,index)=>{
      return(
        <ShowbdData value={value} key={index} indexNum={index} list={todoData} settodoData={settodoData}/>
      )
  })
  return (
    <>
     <div>
       <h1>To Do List</h1>
       <form onSubmit={saveToDoData}>
        <input type="text" name='inputData'/> <button>Submit</button>
       </form>
       <ul>
       {list}

       </ul>
     </div>
    </>
  )
}

export default App

function ShowbdData({value,indexNum,list,settodoData}){
  let[Showstatus,setStatus]=useState(false);
  let deleteRow=()=>{
    // const arr=[20,25,40]
   let final=list.filter((item, index) => index !== indexNum)
   let deletvalue=settodoData(final)

    console.log(deletvalue)
  }

  let showstatus=()=>{
    setStatus(!Showstatus)
  }
  return(
    <li className={(Showstatus)?'activetodo': ''} onClick={showstatus}>{indexNum+1}{value}<span onClick={deleteRow} >&times;</span></li>
  )
  
}