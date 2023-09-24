import React, { useState } from "react"
import Task from './tasks'
import { useEffect } from "react"
const Home = () => {
    const data=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]
    let [tasks,setTasks]=useState(data)
    const [title,setTitle]=useState("")
    const [description,setdescription]=useState("")
    const submitHandler=(e)=>{
        e.preventDefault()
        setTasks([...tasks,{title,description}])
        setTitle("")
        setdescription("")
    }
    const deletTask=(index)=>{
        const filterrd= tasks.filter((val,i)=>{
          return i !== index
        })
        setTasks(filterrd)
    }

    useEffect(() => {
        localStorage.setItem("tasks",JSON.stringify(tasks))
        console.log([...tasks,{title,description}])
    }, [tasks])
    
    return (
      <div className='container'>
        <h1>let do all tasks</h1>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="tittle" value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <textarea name="description" placeholder="description" value={description} id="" onChange={(e)=>setdescription(e.target.value)}></textarea>
        <button type='submit'>add</button>
        </form>
        {tasks.map((item,index)=>(
            <Task key={index} tittle={item.title} description={item.description}
            deletTask={deletTask}
            index={index}/>
        ))}
      </div>
    )
  }
  export default Home