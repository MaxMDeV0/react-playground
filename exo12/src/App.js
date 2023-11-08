import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [value, setValue]=useState('')
  const [todo, setTodo]=useState([
    {
      title : 'tache 1',
      isCompleted: false,
      isEditing: false,
      id: 1,
    },
    {
      title : 'tache 2',
      isCompleted: false,
      isEditing: false,
      id: 2,
    },
    {
      title : 'tache 3',
      isCompleted: false,
      isEditing: false,
      id: 3,
    }])
  const [filter, setFilter]=useState(null)

  const submitHandler = (e) => {
    e.preventDefault();
    setValue('')
    e.target.blur()
    setTodo(prevState =>([...prevState, {title:value, isCompleted:false, isEditing:false, id:new Date().getTime()}]))
  }
  const escapeHandler = (e) =>{
    if(e.key === 'Escape'){
      e.target.value = ''
      e.target.blur()
    }
  }
  const changeHandler = (e)=>{
    setValue(e.target.value)
  }
  const removeTasks=()=>{
    setTodo(prevState=>prevState.filter(element=>{
      if(!element.isCompleted){
        return element
      }
    }))
  }
  return (
    <div className="App">
      Listes des tâches à réaliser
      <form action="#" onSubmit={submitHandler} >
        <input type='text' onKeyDown={escapeHandler} onChange={changeHandler} value={value} id='test'/>
      </form>

      <TodoFilter setFilter={setFilter}/>
      <button onClick={removeTasks}>Supprimer les tâches complétées</button>

      <TodoList list={todo} filter={filter} setTodo={setTodo}/>
    </div>
  );
}

function TodoList({list, filter, setTodo}){
  return <ul>
    {list.map((item)=><TodoItem item={item} key={item.id} style={{display:'flex', color:'red'}} filter={filter} setTodo={setTodo}/>)}
  </ul>
}

function TodoItem({item, filter, setTodo}){
  const [isCompleted, setIsCompleted]=useState(item.isCompleted)
  const [isEditing, setIsEditing]=useState(item.isEditing)
  const [title, setTitle]=useState(item.title)
  const clickHandler = ()=>{
    setIsCompleted(prevState=>!prevState)
  }
  const changeTitle = ()=>{
    setIsEditing(true)

  }
  useEffect(()=>{
    document.getElementById(item.id).focus()
  },[isEditing])
  useEffect(()=>{
    setTodo(prevState=>prevState.map(element=>{
      if(element.id==item.id){
        return {...element, isCompleted:isCompleted}
      }
      return element
    }
    ))
  },[isCompleted])
  const escapeHandler = (e) =>{
    if(e.key === 'Escape'){
      e.target.blur()
      setIsEditing(false)
    }
  }
  const submitHandler = (e) => {
    e.preventDefault();
    e.target.blur()
    setIsEditing(false)
  }

  return <li style={filter===null? (isCompleted? {textDecoration:'line-through'}: null):filter===true? isCompleted? {textDecoration:'line-through'}:{display:'none'}:!isCompleted?null:{display:'none'}}>
    <input type='checkbox' onClick={clickHandler}/>
    <p onDoubleClick={changeTitle} style={!isEditing? null:{display:'none'}}>{title}</p>
    <form action="#" onSubmit={submitHandler} >

    <input value={title} onChange={(e)=>setTitle(e.target.value)} style={isEditing? null:{display:'none'}} onKeyDown={escapeHandler} onBlur={()=>setIsEditing(false)} id={item.id}/>
    </form>

  </li>
}

function TodoFilter({setFilter}){
  const filterHandler = (filter)=>{
    setFilter(filter)
  }
  return <>
    <button onClick={()=>filterHandler(null)}>Pas de Filtre</button>
    <button onClick={()=>filterHandler(false)}>Tâches en cours</button>
    <button onClick={()=>filterHandler(true)}>Tâches complétées</button>
  </>
}

export default App;
