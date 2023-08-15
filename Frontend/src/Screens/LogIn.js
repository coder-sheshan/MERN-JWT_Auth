import React from 'react'
import Imagepage from '../Components/Imagepage'
import InputScreen from '../Components/InputScreen'

const LogIn = () => {
  return (
    <div className='flex items-center gap-10 p-5 m-0 justify-center  w-full h-[100%]' >
        <Imagepage/>
        
        <InputScreen/>
    </div>
  )
}

export default LogIn
