import React, { useContext } from 'react'
import { Notecontext } from '../context/Notecontext'
import Notecard from '../components/Notecard'

const Home = () => {
     const {notes,loading}=useContext(Notecontext)
         console.log(notes)

if(loading){
  return(
    <div className='flex justify-center items-center min-h-screen'>
      <p className='text-lg text-gray-600'>Loading..</p>
    </div>

  )
}
if(notes.length===0){
  return(
    <div className='flex justify-center items-center min-h-screen'>
      <p className='text-lg text-gray-700'>No notes available</p>
    </div>
  )
}

  return (
   
    

    
    <div className='grid sm :grid-cols-2 md:grid-col-3 lg:grid-col-4 gap-6 p-4'>{

notes.map(note=>{
  
  return <Notecard key={note._id} note={note}/>
})




      }</div>
  )
}

export default Home