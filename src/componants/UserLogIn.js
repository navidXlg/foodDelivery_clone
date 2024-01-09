import { useForm } from "react-hook-form";
import Button from "./Button";
import useAuthContext from "../Hooks/useAuthContext";
import { BeatLoader } from "react-spinners";


export default function UserLogIn (){


    const { register, handleSubmit } = useForm();
    const {logIn, setAuthState, isLoading} = useAuthContext();
    const formLogIn = (creadintial) => {
      logIn(creadintial)
    };
            
    return <>      
            <div className='mb-8'>
             <span className="text-lg font-bold cursor-pointer border-b-2 border-purpleSnapp-300" onClick={() => setAuthState("submit")} > عضوییت</span>
            </div>
            <form className='flex gap-2 flex-col' onSubmit={handleSubmit(formLogIn)}>
              <label className='text-sm font-semibold text-gray-500'>ایمیل</label>
              <input className='shadow-sm rounded-lg border-gray-400 px-2 border-2 py-2' {...register('email')} type="email"/>
              <label className='text-sm font-semibold text-gray-500' >رمز عبور</label>
              <input className='shadow-sm rounded-lg border-gray-400 px-2 border-2 py-2 mb-4'{...register('password')} type='password'/>
              <Button 
                  snapp 
                  rounded 
                  btnHover  
                  className ="text-white relative w-full">
                  {
                    isLoading ?
                    <BeatLoader  color="rgba(232, 232, 232, 1)" margin={1} size={12} speedMultiplier={1} />
                    :"ادامه"
                  }
              </Button>
            </form>
          </> 
    };