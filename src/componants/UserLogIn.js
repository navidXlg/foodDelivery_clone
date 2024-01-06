import { useForm } from "react-hook-form";
import Button from "./Button";
import useAuthContext from "../Hooks/useAuthContext";




export default function UserLogIn (){



    const { register, handleSubmit } = useForm();
    const {logIn} = useAuthContext();
    const formSubmit = (creadintial) => {
      logIn(creadintial)
    };
            

    return <>      
            <div className='mb-8'>
             <span className ="text-lg font-bold" >ورود</span>
              یا     
             <span className="text-lg font-bold" > عضوییت</span>
            </div>
            <form className='flex gap-2 flex-col' onSubmit={handleSubmit(formSubmit)}>
              <label className='text-sm font-semibold text-gray-500'>ایمیل</label>
              <input className='shadow-sm rounded-lg border-gray-400 px-2 border-2 py-2' {...register('email')} type="email"/>
              <label className='text-sm font-semibold text-gray-500' >رمز عبور</label>
              <input className='shadow-sm rounded-lg border-gray-400 px-2 border-2 py-2 mb-4'{...register('password')} type='password'/>
              <Button 
              snapp 
              rounded 
              btnHover  
              className ="text-white w-full">ادامه</Button>
            </form>
          </> 
    }