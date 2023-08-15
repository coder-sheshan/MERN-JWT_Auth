import React from 'react'

const Button = ({buttonName , type='submit'}) => {
  return (  
    <div className='mt-3 mb-2'>
        <button type={type} className=' inline-block rounded-sm bg-indigo-600 border border-indigo-600 px-12 py-2 text-white text-md'>{buttonName}</button>
    </div>
  )
}

export default Button
