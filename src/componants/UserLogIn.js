import { useForm } from "react-hook-form";
import Button from "./Button";
import useAuthContext from "../Hooks/useAuthContext";
import { BeatLoader } from "react-spinners";
import { FaRegFaceFrown } from "react-icons/fa6";
import CustomInput from "./CustomInput";


export default function UserLogIn (){


    const { register, handleSubmit } = useForm();
    const {logIn, setAuthState, isLoading, error} = useAuthContext();
    const formLogIn = (creadintial) => {
      logIn(creadintial)
    };

            
    return <>      
            <div className='mb-8'>
             <span className="text-lg font-bold cursor-pointer border-b-2 border-purpleSnapp-300" onClick={() => setAuthState("submit")} > عضوییت</span>
            </div>
            <form className='flex gap-2 flex-col' onSubmit={handleSubmit(formLogIn)}>
            <CustomInput label = "ایمیل" register={{...register('email')}} type="email"/>
            <CustomInput label = "رمزعبور" register={{...register('password')}} type="password"/>
              {
                // Showing Error that my occour while fetching
                error && <div className="text-red-900 font-bold flex gap-2 items-center justify-center mb-3">
                <FaRegFaceFrown/>
                مشکلی رخ داده است
              </div>
              }
                <Button 
                   snapp 
                   rounded 
                   btnHover  
                   className ="text-white relative w-full">
                    {
                      // Showing spinner for loading prosess
                      isLoading ?
                      <BeatLoader  color="rgba(232, 232, 232, 1)" margin={1} size={12} speedMultiplier={1} />
                      :"ادامه"
                    }
                </Button>
            </form>
          </> 
    };