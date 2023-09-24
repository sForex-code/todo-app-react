import React from 'react'

const Tasks = ({tittle,description,deletTask,index}) => {
  return (
    <div className='tasks'>
        <div>
            <p>{tittle}</p>
            <span>{description}</span>
        </div>
         <button onClick={()=>deletTask(index)}>-</button>
    </div>
  )
}

export default Tasks