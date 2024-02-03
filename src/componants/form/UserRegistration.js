import { useForm } from "react-hook-form";
import Button from "../utils/Button";
import useAuthContext from "../../Hooks/useAuthContext";
import { FaRegFaceFrown } from "react-icons/fa6";
import { BeatLoader } from "react-spinners";
import CustomInput from "../utils/CustomInput";


export default function UserRegisteration (){

    // useForm hook for managing form state and submission
    const { register, handleSubmit} = useForm();

    // useAuthContext hook for accessing authentication context
    const {registration, isLoading, setAuthState, error} = useAuthContext();

      /**
     * Handles form submission.
     * Calls the registration function from the authentication context.
     * @param {Object} credentials - User registration credentials (name, email, password, passwordRepeat)
     */
    const formSubmit = (credentials) => {
        registration(credentials);
    };

    return (
      <>
          <div className='mb-8'>
              <span className="text-sm md:text-lg font-bold hover:text-purpleSnapp-300 duration-200 cursor-pointer border-b-2 border-purpleSnapp-300" onClick={() => setAuthState("logIn")}>ورود</span>
          </div>
          {/* Registration form */}
          <form className='flex gap-2 flex-col' onSubmit={handleSubmit(formSubmit)}>
              <CustomInput label="نام کاربری" register={{ ...register('name') }} type="text" />
              <CustomInput label="ایمیل" register={{ ...register('email') }} type="email" />
              <CustomInput label="رمز عبور" register={{ ...register('password') }} type="password" />
              <CustomInput label="تکرار رمز عبور" register={{ ...register('passwordRepeat') }} type="password" />

              {/* Display error message if registration fails */}
              {error && (
                  <div className="text-red-900 flex items-center justify-center gap-3 font-bold">
                      <FaRegFaceFrown />
                      {error}
                  </div>
              )}
              <Button snapp rounded btnHover className="text-white w-full">
                  {/* Display loading spinner during form submission */}
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