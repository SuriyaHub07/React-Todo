import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Approutes from './Routes/Approutes'
import {UseProvider} from '../Context/ThemeContext'




function App() {
  return (
    <>
    <BrowserRouter>
    <UseProvider>
     <Approutes/>
    </UseProvider>
    </BrowserRouter>
    </>

     
  )
}

export default App;
