import React, {useEffect} from 'react'
import InputFeilds from './InputFeilds'
import Dropbox from './Dropbox'
import Button from './Button'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yep from 'yup'

const SignUpScreen = () => {

    const validationSchema = Yep.object().shape({
        fullname: Yep.string().required("Enter your Fullname"),
        email: Yep.string().email("Enter valid email").required("Enter your Email address"),
        password: Yep.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            'Password must be at least 8 characters long and contain at least one letter and one number'
        ).required('Enter your password'),
        phnumber: Yep.string().matches(
            /^\d{10}$/,
            'Phone number must be a valid 10-digit number'
        ).required("Enter your Phone Number"),
        confirmpassword: Yep.string()
            .oneOf([Yep.ref("password"), null], 'passwords must matched').required("Enter your confirm password"),
        date: Yep.date().required("Enter the Date"),
        securityquestion: Yep.string().required("Enter Your Security Question"),
        address: Yep.string().required("Enter Your Address")
    })

    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            password: "",
            phnumber: "",
            confirmpassword: "",
            date: "",
            securityquestion: "",
            address: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("Form Values", values);
        }
    })

    useEffect(() => {
        document.title = "Signup"
      },[])

    return (
        <div className='flex flex-col  shadow-xl p-10'>
            <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(); }}>
                <div>
                    <h4 className='text-gray-500 text-xl'>Welcome</h4>
                    <h1 className='text-black font-semibold text-3xl'>Sign up</h1>
                </div>
                {/* Main Feild */}
                <div className='flex gap-5 flex-col md:flex-row'>
                    {/* Input Feilds 1*/}
                    <div className='mt-10 mb-5'>
                        <div className=' text-gray-600'>
                            <label for="Email Address">Full name</label>
                        </div>
                        <InputFeilds
                            name={"fullname"}
                            id={"fullname"}
                            onChange={formik.handleChange}
                            values={formik.values.fullname}
                            error={formik.errors.fullname && Boolean(formik.errors.fullname)}
                            errorMsg={formik.errors.fullname}
                            placeholder="John Doe"
                        />
                        <div className=' text-gray-600'>
                            <label for="Email Address">Date of birth</label>
                        </div>
                        <InputFeilds
                            name={"date"}
                            id={"date"}
                            onChange={formik.handleChange}
                            values={formik.values.date}
                            error={formik.errors.date && Boolean(formik.errors.date)}
                            errorMsg={formik.errors.date}
                            placeholder="12/12/12"
                            type={"date"}
                        />

                        <div className='  text-gray-600'>
                            <label for="Email Address">Phone Number </label>
                        </div>
                        <InputFeilds
                            name={"phnumber"}
                            id={"phnumber"}
                            onChange={formik.handleChange}
                            values={formik.values.phnumber}
                            error={formik.errors.phnumber && Boolean(formik.errors.phnumber)}
                            errorMsg={formik.errors.phnumber}
                            placeholder="+91-9876543210"
                            type={"number"}
                        />

                        <div className=' text-gray-600'>
                            <label for="Email Address">Security Question</label>
                            <h4 className='text-gray-400 text-sm'>What is your School name ?</h4>
                        </div>
                        <InputFeilds
                            name={"securityquestion"}
                            id={"securityquestion"}
                            onChange={formik.handleChange}
                            values={formik.values.securityquestion}
                            error={formik.errors.securityquestion && Boolean(formik.errors.securityquestion)}
                            errorMsg={formik.errors.securityquestion}
                            type={"text"}
                        />
                    </div>
                    {/* Input Feilds 2 */}
                    <div className='mt-10 mb-5'>
                        <div className='flex  text-gray-600'>
                            <label for="Email Address">Email</label>
                        </div>
                        <InputFeilds
                            name={"email"}
                            id={"email"}
                            onChange={formik.handleChange}
                            values={formik.values.email}
                            error={formik.errors.email && Boolean(formik.errors.email)}
                            errorMsg={formik.errors.email}
                            placeholder="allthebest@neokred.com"
                            type='email'
                        />
                        <div className='  text-gray-600'>
                            <label for="Email Address">Password</label>
                        </div>
                        <InputFeilds
                            name={"password"}
                            id={"password"}
                            onChange={formik.handleChange}
                            values={formik.values.password}
                            error={formik.errors.password && Boolean(formik.errors.password)}
                            errorMsg={formik.errors.password}
                            placeholder="*********"
                            type={"password"}
                        />
                        <div className=' text-gray-600'>
                            <label for="Email Address">Confirm password</label>
                        </div>
                        <InputFeilds
                            name={"confirmpassword"}
                            id={"confirmpassword"}
                            onChange={formik.handleChange}
                            values={formik.values.confirmpassword}
                            error={formik.errors.confirmpassword && Boolean(formik.errors.confirmpassword)}
                            errorMsg={formik.errors.confirmpassword}
                            placeholder="*********"
                            type={"password"}
                        />
                    </div>
                </div>
                <div className=' text-gray-600'>
                    <label for="Address">Address</label>
                </div>
                <div className='mt-1 mb-5'>
                    <div>
                        <input type="text"
                            name="address"
                            id="address"
                            onChange={formik.handleChange}
                            values={formik.values.address}
                            error={formik.errors.address && Boolean(formik.errors.address)}
                            errorMsg={formik.errors.address}
                            class="border border-gray-200 rounded-md mt-1 pl-5 pr-96 py-2 "
                            placeholder="Enter your Address" />
                    </div>
                </div>

                {/* Four Boxes */}
                <div className='flex  flex-col md:flex-row'>
                    <div className='flex gap-5 flex-col md:flex-row'>
                        <div>
                            <div className=' text-gray-600'>
                                <label for="Email Address">City</label>
                            </div>
                            <Dropbox />
                        </div>
                        <div>
                            <div className=' text-gray-600'>
                                <label for="Email Address">State</label>
                            </div>
                            <Dropbox />
                        </div>
                    </div>
                    <div className='flex gap-5 flex-col md:flex-row'>
                        <div>
                            <div className=' text-gray-600'>
                                <label for="Email Address">ZIP code</label>
                            </div>
                            <Dropbox />
                        </div>
                        <div>
                            <div className=' text-gray-600'>
                                <label for="Email Address">Country</label>
                            </div>
                            <Dropbox />
                        </div>
                    </div>
                </div>

                <Button
                    type='submit'
                    buttonName={"SignUp"}
                />
                <p className='font-normal text-xs leading-5 text-gray-400'>Already have an account ? <Link to='/' className='font-normal text-blue-600 hover:underline'>login</Link></p>
            </form>
        </div>
    )
}

export default SignUpScreen
