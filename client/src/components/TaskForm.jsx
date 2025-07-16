import{ useState,useEffect } from 'react'

const TaskForm = ({etask,onAddTodo}) => {
  const [todo,setDiscription] = useState(etask?.todo??"");
  const [status,setStatus] = useState(etask?.status??"assigned");

  useEffect(()=>{
   setDiscription(etask?.todo??" ");
   setStatus(etask?.status??"assigned");
  },[etask]);

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(todo.trim == ""){
      alert("discription cannot be empty");
      return;
    }
    onAddTodo({todo,status});
    setDiscription(" ");
    setStatus("assigned");
    
  }
  return (
    <div className='h-[350px] w-[30%] ml-8 mt-4 p-6 bg-white dark:bg-gray-600 shadow-lg rounded-lg' >
     <h1 className='text-center font-bold text-xl text-gray-800 dark:text-white mb-4'>AddTodo</h1>
     <form onSubmit={handleSubmit}>
        <div className='mb-4'>
            <label htmlFor='discription' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1' value={todo} onChange={(e)=>setDiscription(e.target.value)}>Discription</label>
            <textarea  id='discription' placeholder='Enter your task discription'
            className='w-full  p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600' />
        
        </div>
        <div className='mb-3'>
            <label htmlFor='status' className='block text-sm  font-medium text-gray-700 dark:text-gray-300 mb-1' value={status} onChange={(e)=>setStatus(e.target.value)}>Status</label>
            <select className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600">
                <option value='assigned'>Assigned</option>
                <option value='started'>Started</option>
                <option value='completed'>completed</option>
            </select>
        </div>
        <button type="submit" className='bg-blue-500 w-full text-center py-2 text-white font-bold  hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-500'>
          {etask?"Edit Todo":"onAddTodo"}</button>
     </form>
    </div>
  )
}

export default TaskForm