import {Routes,Route,Navigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Signin from  '../pages/Signin'
import Signup from '../pages/Signup'
import Landingpages from '../components/Landingpages'
import { ErrorProvider } from '../Context/ErrorContext'
import Tasklist from '../pages/Tasklist'
import TaskForm from '../components/TaskForm'




const Approutes = () => {
  return (
    <div>
    <Navbar />
    
    <ErrorProvider>
    <Routes>
        <Route path='/login' element={<Signin/>} />
        <Route path='/' element={<Landingpages/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path ='/tasks' element={<TaskForm/>}/>
    </Routes>
    </ErrorProvider>
    </div>
  )
}

export default Approutes