import Image from 'next/image';
import registerBanner from '../../../public/assets/registerBanner/register_banner.svg';
import facebook from '../../../public/assets/logo/facebook.png';
import google from '../../../public/assets/logo/google.png';
import { FaUser, FaLock, FaHandSparkles } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import Styles from '../../styles/Button.module.css'
import { useState } from 'react'
import Meta from '@/components/head/meta';
const Register = () => {

    const [check, setUnCheck] = useState(false)
    return (
        <>
            <Meta title="register"></Meta>
            <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-10 py-10'>
                <div className='p-5'>
                    <Image
                        src={registerBanner}
                        alt=''
                    ></Image>
                </div>
                <div className='p-5 shadow-md shadow-black'>
                    <h1 className='text-center text-gray-700 font-bold text-xl'>Sign up with</h1>
                    <div className='flex lg:w-1/2 mx-auto justify-evenly lg:justify-between my-5'>
                        <button className='flex items-center font-semibold bg-orange-200 px-2 py-1 rounded-sm text-gray-700 shadow-2xl hover:bg-blue-200 hover:shadow-xl hover:translate-x-100 hover:delay-200 hover:duration-300'>
                            <Image width={35} alt='' src={facebook}>
                            </Image>
                            facebook
                        </button>
                        <button className='flex items-center font-semibold bg-orange-200 px-2 py-1 rounded-sm text-gray-700 shadow-2xl hover:bg-blue-200 hover:shadow-xl hover:translate-x-100 hover:delay-200 hover:duration-300'>
                            <Image width={35} alt='' src={google}>
                            </Image>
                            Google
                        </button>
                    </div>
                    <h1 className='text-center text-gray-700 font-bold pt-5'>Or Sign up with your email</h1>
                    <form className='pt-5 space-y-5'>
                        <div className='flex space-x-3 items-center relative justify-around'>
                            <FaUser className='absolute left-5 lg:left-14 text-gray-700 w-4 h-4'></FaUser>
                            <input type="text" className='w-full lg:w-4/5 bg-orange-200 shadow-2xl px-8 py-2 rounded-sm focus:shadow-xl outline-none' placeholder='First Name' />
                        </div>
                        <div className='flex space-x-3 items-center relative justify-around'>
                            <FaUser className='absolute left-5 lg:left-14 text-gray-700 w-4 h-4'></FaUser>
                            <input type="text" className='w-full lg:w-4/5 bg-orange-200 shadow-2xl px-8 py-2 rounded-sm focus:shadow-xl outline-none' placeholder='Last Name' />
                        </div>
                        <div className='flex space-x-3 items-center relative justify-around'>
                            <HiMail className='absolute left-5 lg:left-14 text-gray-700 w-4 h-4'></HiMail>
                            <input type="email" className='w-full lg:w-4/5 bg-orange-200 shadow-2xl px-8 py-2 rounded-sm focus:shadow-xl outline-none' placeholder='Email' />
                        </div>
                        <div className='flex space-x-3 items-center relative justify-around'>
                            <FaLock className='absolute left-5 lg:left-14 text-gray-700 w-4 h-4'></FaLock>
                            <input type="password" className='w-full lg:w-4/5 bg-orange-200 shadow-2xl px-8 py-2 rounded-sm focus:shadow-xl outline-none' placeholder='Password' />
                        </div>
                        <div className='flex space-x-3 items-center relative justify-around'>
                            <FaLock className='absolute left-5 lg:left-14 text-gray-700 w-4 h-4'></FaLock>
                            <input type="password" className='w-full lg:w-4/5 bg-orange-200 shadow-2xl px-8 py-2 rounded-sm focus:shadow-xl outline-none' placeholder='Confirm Password' />
                        </div>
                        <div className='flex space-x-3 items-center relative justify-around'>
                            <HiPhone className='absolute left-5 lg:left-16 text-gray-700 w-4 h-4'></HiPhone>
                            <input type="text" className='w-full lg:w-4/5 bg-orange-200 shadow-2xl px-8 py-2 rounded-sm focus:shadow-xl outline-none' placeholder='Number' />
                        </div>
                        <div className='flex space-x-3 items-center relative justify-around '>
                            <FaHandSparkles className='absolute left-5 lg:left-16 text-gray-700 w-5 h-5'></FaHandSparkles>
                            <select name="" id="" className='w-full lg:w-4/5 bg-orange-200 shadow-2xl px-8 py-2 rounded-sm focus:shadow-xl outline-none'>
                                <option value="nationality">Nationality</option>
                                <option value="bangladesh">Bangladesh</option>
                                <option value="pakistan">Pakistan</option>
                                <option value="india">India</option>
                                <option value="afghanistan">Afghanistan</option>
                            </select>
                        </div>
                        <div className='text-center'>
                            <span className='text-gray-700'>
                                <input onChange={() => setUnCheck(!check)} checked={check} className='mr-4' type="checkbox" />
                                I have read and agree to the <a href="#" className='text-blue-600'>Terms and Conditions</a> <br />   and the <a href="#" className='text-blue-600'>Privacy and Cookies Policy*</a>.
                            </span>
                        </div>
                        <div className='text-center'>
                            <button type='submit' className={`${Styles.btnGroup}`} disabled={!check}>Create Account</button>
                        </div>
                        <div className='text-center'>
                            <span>Already have an account? <a href="" className='text-blue-400'>Login</a></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;