import React from 'react'
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom";
import CreateNote from './pages/CreateNote'
import Navbar from './components/Navbar'
import Fotter from "./components/Fotter";

const App = () => {
  return (

 
    < >
    
<Navbar/>


<main className='flex-1  container mx-auto p-4'>
<Routes>

<Route path="/" element={<Home/>}/>


<Route path="/create" element={<CreateNote/>}/>

</Routes>



</main>









<Fotter/>
    </>

  )

}

export default App
