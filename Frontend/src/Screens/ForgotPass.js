import React, {useEffect} from 'react';
import InputFeilds from '../Components/InputFeilds';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yep from 'yup';

const ForgotPass = () => {

    const forgotvalidation = Yep.object().shape({
        email: Yep.string().email("Enter valid email").required("Email is required")
    })

    const formik = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: forgotvalidation,
        onSubmit: (values) => {
            console.log("Forgot Data", values);
        }
    })

    useEffect(() => {
        document.title = "Forgot password"
    },[])
    return (
        <div className='h-screen w-screen flex items-center justify-center shadow-lg'>
            <div className='h-[300px] w-[400px]  shadow-xl'>
                <div className='relative'>
                    <h1 className='font-semibold text-2xl absolute left-24 top-5'>Forgot Password?</h1>
                    <p className='hidden lg:block text-md font-normal text-gray-500 absolute left-10 top-14'>No worries, We'll send you reset instructions.</p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(); }}>
                    <div className='mt-24 ml-5'>
                        <div className='flex  text-gray-600'>
                            <label for="Email Address">Email</label>
                            <p className='text-red-400'>*</p>
                        </div>
                        <InputFeilds
                            id={"email"}
                            name={"email"}
                            values={formik.values.email}
                            onChange={formik.handleChange}
                            errorMsg={formik.errors.email}
                            error={formik.errors.email && Boolean(formik.errors.email)}
                            placeholder="Enter your Email"
                            type={"email"}
                        />
                        <Button
                            type='submit'
                            buttonName={"Reset Password"}
                        />
                        <Link to='/' className='font-normal text-sm ml-64 text-blue-600 hover:underline'>Back to Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPass
