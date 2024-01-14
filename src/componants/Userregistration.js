import { useForm } from "react-hook-form";
import Button from "./Button";
import useAuthContext from "../Hooks/useAuthContext";
import { FaRegFaceFrown } from "react-icons/fa6";
import { BeatLoader } from "react-spinners";
import CustomInput from "./CustomInput";


export default function UserRegisteration (){

    const { register, handleSubmit} = useForm();
    const {registration, isLoading, setAuthState, error} = useAuthContext();
    const formSubmit = (creadintial) => {
        registration(creadintial);
    };

            
    return <>      
            <div className='mb-8'>
             <span className ="text-lg font-bold cursor-pointer border-b-2 border-purpleSnapp-300" onClick={() => setAuthState("logIn")} >ورود</span>
            </div>
            <form className='flex gap-2 flex-col' onSubmit={handleSubmit(formSubmit)}>
              <CustomInput label = "نام کاربری" register={{...register('name')}} type="text"/>
              <CustomInput label = "ایمیل" register={{...register('email')}} type="email"/>
              <CustomInput label = "رمز عبور" register={{...register('password')}} type="password"/>
              <CustomInput label = "تکرار رمز عبور" register={{...register('passwordRepeat')}} type="password"/>
              {
                error && <div className="text-red-900 flex items-center justify-center gap-3 font-bold">
                <FaRegFaceFrown/>
                {error}
              </div>
              }
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