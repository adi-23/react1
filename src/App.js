import React,{ useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  
  //const [todos,setTodos] =useState([])
  // const todoNameRef = useRef()
  // function handleAddTodo(e){
  //   const name = todoNameRef.current.value
  //   if (name === ''){
  //     setTodos(prevTodos => {
  //       return [...prevTodos,{id: 1,name: name, complete: false}]
  //     })
  //   }
  //   todoNameRef.current.value = null



  return (
    <>
      
      
      
      <button>Clear</button>
      <div>0 left to do</div>
    </>
  );

}
export default App;
