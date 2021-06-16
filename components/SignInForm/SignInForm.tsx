import { useForm } from 'react-hook-form'

export default function SignInForm() {

    const {register, formState:{errors}, handleSubmit}=useForm()

    const onSubmit = (data:object) => {
        console.log(data);
        
    }

    return(
        <div className="w-full h-screen bg-black bg-opacity-70 flex justify-center items-center">
        <form className=" flex text-white items-center px-8 h-auto rounded-lg flex-col bg-BlueCamp border    border-white" onSubmit={handleSubmit(onSubmit)} >
            <div className="text-center my-2 mt-8">
            <h2 className="text-2xl mb-2">Inscription</h2>
            <div className="border w-32 mx-auto"></div>
            </div>
            <div className="flex flex-col justify-center w-full">
            <div className="flex flex-col my-2 text-sm">
            <input className="h-8 w-64 rounded-lg  text-black mx-auto px-2" placeholder="Email..." type="email" id="email" {...register('email', {required: true})} />
            <p className="text-white text-sm ">{errors.email?.type === 'required' && '*email is required'}</p>
            </div>
            <div className="flex flex-col my-2 text-sm" >
            <input className="h-8 w-64 rounded-lg text-black mx-auto px-2" placeholder="Mot de passe..." type="password" id="password" {...register('password', {required: true})} />
            <p className="text-white text-sm ">{errors.password?.type === 'required' && '*Password is required'}</p>
            </div>
            <div className="flex flex-col my-2 text-sm" >
            <input className="h-8 w-64 rounded-lg text-black mx-auto px-2" placeholder="Confirmation du mot de passe..." type="password" id="password" {...register('password', {required: true})} />
            <p className="text-white text-sm ">{errors.password?.type === 'required' && '*Password is required'}</p>
            </div>
         
            </div>
            <div className="flex flex-col text-center mt-2 mb-2">
            <p className="text-xs">Déjà un compte ? Connect toi <span className="text-red-400">ici</span></p>

            </div>
            <button className="border py-1 w-28 rounded-lg my-2 mb-8" type="submit">Se connecter</button>
        </form>
    </div>
    )
};
