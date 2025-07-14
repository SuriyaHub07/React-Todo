import React from 'react'

const TaskForm = () => {
  return (
    <div className='h-[350px] w-[30%] ml-8 mt-4 p-6 bg-white dark:bg-gray-600 shadow-lg rounded-lg' >
     <h1 className='text-center font-bold text-xl text-gray-800 dark:text-white mb-4'>AddTodo</h1>
     <form>
        <div className='mb-4'>
            <label htmlFor='discription' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>Discription</label>
            <textarea  id='discription' placeholder='Enter your task discription'
            className='w-full  p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600' />
        
        </div>
        <div className='mb-3'>
            <label htmlFor='status' className='block text-sm  font-medium text-gray-700 dark:text-gray-300 mb-1'>Status</label>
            <select className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600">
                <option value='assigned'>Assigned</option>
                <option value='started'>Started</option>
                <option value='completed'>completed</option>
            </select>
        </div>
        <button className='bg-blue-500 w-full text-center py-2 text-white font-bold  hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-500'>Add Todo</button>
     </form>
    </div>
  )
}

export default TaskForm