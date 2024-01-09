import { useForm } from "react-hook-form";
import Button from "./Button";
import useAuthContext from "../Hooks/useAuthContext";
import { BeatLoader } from "react-spinners";


export default function UserRegisteration (){

    const { register, handleSubmit} = useForm();
    const {registration, isLoading, setAuthState} = useAuthContext();
    const formSubmit = (creadintial) => {
        registration(creadintial);
    };

            
    return <>      
            <div className='mb-8'>
             <span className ="text-lg font-bold cursor-pointer border-b-2 border-purpleSnapp-300" onClick={() => setAuthState("logIn")} >ورود</span>
            </div>
            <form className='flex gap-2 flex-col' onSubmit={handleSubmit(formSubmit)}>
              <label className='text-sm font-semibold text-gray-500'>نام کاربری</label>
              <input className='shadow-sm rounded-lg border-gray-400 px-2 border-2 py-2' {...register('name')} type="text"/>
              <label className='text-sm font-semibold text-gray-500'>ایمیل</label>
              <input className='shadow-sm rounded-lg border-gray-400 px-2 border-2 py-2' {...register('email')} type="email"/>
              <label className='text-sm font-semibold text-gray-500'>رمز عبور</label>
              <input className='shadow-sm rounded-lg border-gray-400 px-2 border-2 py-2' {...register('password')} type="password"/>
              <label className='text-sm font-semibold text-gray-500' >تکرار رمز عبور</label>
              <input className='shadow-sm rounded-lg border-gray-400 px-2 border-2 py-2 mb-4'{...register('passwordRepeat')} type='password'/>
              <Button 
                snapp 
                rounded 
                btnHover  
                className ="text-white w-full">
                {
                  isLoading ?
                  <BeatLoader  color="rgba(232, 232, 232, 1)" margin={1} size={12} speedMultiplier={1} />
                  :"ادامه"
                }
              </Button>
            </form>
          </> 
    };