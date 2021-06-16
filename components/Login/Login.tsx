import React from 'react';
import { useForm } from "react-hook-form";

export default function Login() {

    const {register, formState: {errors}, handleSubmit} = useForm()

    const onSubmit = (data:object) => {
        console.log(data)
    }

    return(
        <div className="w-full h-screen bg-black bg-opacity-70 flex justify-center items-center">
            <form className=" flex text-white items-center px-8 h-auto rounded-lg flex-col bg-BlueCamp border    border-white" onSubmit={handleSubmit(onSubmit)} >
                <div className="text-center my-2 mt-8">
                <h2 className="text-2xl mb-2">Connection</h2>
                <div className="border w-32 mx-auto"></div>
                </div>
                <div className="flex flex-col justify-center w-full">
                <div className="flex flex-col my-2">
                <input className="h-8 w-64 rounded-lg  text-black mx-auto px-2" type="email" id="email" {...register('email', {required: true})} />
                <p className="text-white text-sm ">{errors.email?.type === 'required' && '*email is required'}</p>
                </div>
                <div className="flex flex-col my-2" >
                <input className="h-8 w-64 rounded-lg text-black mx-auto px-2" type="password" id="password" {...register('password', {required: true})} />
                <p className="text-white text-sm ">{errors.password?.type === 'required' && '*Password is required'}</p>
                </div>
                <div className="flex justify-center">
                    <button className="border  w-28 py-1 rounded-lg my-2 mx-3 ">Google</button>
                    <button className="border  w-28 py-1 rounded-lg my-2 mx-3">Facebook</button>
                </div>
                </div>
                <button className="border py-1 w-28 rounded-lg my-2" type="submit">Se connecter</button>
                <div className="flex flex-col text-center mt-2 mb-8">
                <p className="text-xs">Je n'ai pas de compte, je m'en crée un <span className="text-red-400">ici</span></p>
                <p className="text-xs">Identifiants introuvables ? pas <span className="text-red-400">ici</span></p>
                </div>
            </form>
        </div>
    )
};
