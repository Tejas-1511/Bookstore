import React from 'react'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

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
                                <input type="text" {...register("Name", { required: true })} placeholder='Enter Your Full Name' className='w-80 px-3 border rounded-md outline-none py-1' />
                                <br />
                                {errors.Name && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email" {...register("Email", { required: true })} placeholder='Enter Your Email' className='w-80 px-3 border rounded-md outline-none py-1' />
                                <br />
                                {errors.Email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input type="text" {...register("Password", { required: true })} placeholder='Enter Your Password' className='w-80 px-3 border rounded-md outline-none py-1' />
                                <br />
                                {errors.Password && <span className='text-sm text-red-500'>This field is required</span>}
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