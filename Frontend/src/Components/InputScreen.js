import React, {useEffect} from 'react'
import InputFeilds from './InputFeilds'
import Button from './Button'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';


const InputScreen = () => {



  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email Format').required("Email is Required"),
    password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    'Password must be at least 8 characters long and contain at least one letter and one number')
    .required("Required valid Password")
  })


  const Myformik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form Values", values);
    }
  })

useEffect(() => {
  document.title = "LogIn"
},[])

  return (
    <div className='flex flex-col items-start justify-center'>
      <div>
        <h4 className='text-gray-500 text-xl'>Welcome</h4>
        <h1 className='text-black font-semibold text-3xl'>Login</h1>
      </div>
      {/* Input Feilds */}
      <form onSubmit={(e) => { e.preventDefault(); Myformik.handleSubmit(); }}>
        <div className='mt-10 mb-5'>
          <div className='flex  text-gray-600'>
            <label for="Email Address">Email</label>
            <p className='text-red-400'>*</p>
          </div>
          <InputFeilds
            name='email'
            id='email'
            onChange={Myformik.handleChange}
            values={Myformik.values.email}
            error={Myformik.touched.email && Boolean(Myformik.errors.email)}
            errorMsg={Myformik.errors.email}
            placeholder="John.snow@gmail.com"
          />
          <div className='flex  text-gray-600'>
            <label for="Email Address">Password</label>
            <p className='text-red-400'>*</p>
          </div>
          <InputFeilds
            name='password'
            id='password'
            onChange={Myformik.handleChange}
            errorMsg={Myformik.errors.password}
            values={Myformik.values.password}
            error={Myformik.touched.password && Boolean(Myformik.errors.password)}
            placeholder="Password"
            type={"password"}
          />
        </div>
        <Button
          type={"submit"}
          buttonName={"LogIn"}
        />
      </form>
      <Link to="/forgotpassword" className='mt-1 pl-64 text-sm text-blue-600 hover:underline'>Forgot Password?</Link>
      <p className='font-normal text-xs leading-5 text-gray-400'>Don't have an account ? <Link to='/signup' className='font-normal text-blue-600 hover:underline'>Sign up</Link></p>
    </div>
  )
}

export default InputScreen