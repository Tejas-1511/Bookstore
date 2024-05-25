import React from 'react'
import { useForm } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={()=>document.getElementById('my_modal_3').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    
                    <h3 className="font-bold text-lg">Login</h3>
                    <div className='mt-4 space-y-2' >
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
                        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                        <p>Not Registered? <a className='underline text-blue-500' href={'/signup'}>Signup</a></p>
                    </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login