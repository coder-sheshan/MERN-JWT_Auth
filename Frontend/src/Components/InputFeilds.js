import React from 'react'

const InputFeilds = ({placeholder , type="text" , onChange ,name  ,id , values , errorMsg , touched}) => {
    
    return (
        <div className='mt-1 mb-5'>
            <div>
                <input type={type} onChange={onChange}  touched={touched} values={values}  name={name} id={id}  class="border border-gray-200 rounded-md mt-1 pl-5 pr-40 py-2 " placeholder={placeholder} />
            </div>
            <p className='text-sm text-red-500'>{ errorMsg && errorMsg }</p>
        </div>
    )
}

export default InputFeilds
