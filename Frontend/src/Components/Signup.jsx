import React from 'react'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
import { useLocation, useNavigate} from 'react-router-dom'

function Signup() {
    const location=useLocation();
    const Navigate=useNavigate()
    const loc=location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo={
          fullname:data.fullname,
          email:data.email,
          password:data.password
        }
        await axios.post("http://localhost:4001/user/signup",userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success('Signup Succesful!');
                Navigate(loc,{replace:true})
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user));
        }).catch((err)=>{
            if(err.response){
                console.log(err);
                toast.error("Error :" + err.response.data.message);
            }
            
        })
    };

    return (
        <>
            <div className='flex h-screen  items-center justify-center'>
                <div className="w-[600px] border-[2px] rounded-md shadow-md p-5 ">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="font-bold text-lg">SignUp</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type="text" {...register("fullname", { required: true })} placeholder='Enter Your Full Name' className='w-80 px-3 border rounded-md outline-none py-1' />
                                <br />
                                {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email" {...register("email", { required: true })} placeholder='Enter Your Email' className='w-80 px-3 border rounded-md outline-none py-1' />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input type="text" {...register("password", { required: true })} placeholder='Enter Your Password' className='w-80 px-3 border rounded-md outline-none py-1' />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>SignUp</button>
                                <p>Already Registered? <button className='underline text-blue-500' onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button></p>
                                <Login />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup