import {Routes,Route,Navigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Signin from  '../pages/Signin'
import Signup from '../pages/Signup'
import Landingpages from '../components/Landingpages'




const Approutes = () => {
  return (
    <div>
    <Navbar />
    <Routes>
        <Route path='/login' element={<Signin/>} />
        <Route path='/' element={<Landingpages/>}/>
        <Route path='/register' element={<Signup/>}/>
    </Routes>
    </div>
  )
}

export default Approutes