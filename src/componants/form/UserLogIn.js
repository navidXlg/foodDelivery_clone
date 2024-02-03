import { useForm } from "react-hook-form";
import Button from "../utils/Button";
import useAuthContext from "../../Hooks/useAuthContext";
import { BeatLoader } from "react-spinners";
import { FaRegFaceFrown } from "react-icons/fa6";
import CustomInput from "../utils/CustomInput";


export default function UserLogIn (){

    // useForm hook for handling form state and submission
    const { register, handleSubmit } = useForm();

    // useAuthContext hook for accessing authentication context
    const {logIn, setAuthState, isLoading, error} = useAuthContext();

    // Function to handle form submission
    const formLogIn = (credentials) => {
      logIn(credentials)
    };

            
    return (
      <>
          <div className='mb-8'>
              <span className="text-sm md:text-lg font-bold hover:text-purpleSnapp-300 duration-200 cursor-pointer border-b-2 border-purpleSnapp-300" onClick={() => setAuthState("submit")} > عضویت</span>
          </div>
          <form className='flex gap-2 flex-col' onSubmit={handleSubmit(formLogIn)}>
              <CustomInput label="ایمیل" register={{ ...register('email') }} type="email" />
              <CustomInput label="رمزعبور" register={{ ...register('password') }} type="password" />
              {error && (
                  <div className="text-red-900 font-bold flex gap-2 items-center justify-center mb-3">
                      <FaRegFaceFrown />
                         {error.message}
                  </div>
              )}
              <Button snapp rounded btnHover className="text-white relative w-full">
                  {isLoading ? (
                      <BeatLoader color="rgba(232, 232, 232, 1)" margin={1} size={12} speedMultiplier={1} />
                  ) : (
                      "ادامه"
                  )}
              </Button>
          </form>
      </>
  );
    };