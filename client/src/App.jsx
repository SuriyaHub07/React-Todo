import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Approutes from './Routes/Approutes'
import {UseProvider} from './Context/ThemeContext'
import { AuthProvider } from './Context/AuthContext'




function App() {
  return (
    <>
    <BrowserRouter>
    <AuthProvider>
    <UseProvider>
     <Approutes/>
    </UseProvider>
    </AuthProvider>
    </BrowserRouter>
    </>

     
  )
}

export default App;
