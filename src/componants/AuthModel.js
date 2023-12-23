import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import useAuthContext from '../Hooks/useAuthContext';
import SnappLogo from '../assets/SnappLogo';
import { useForm } from "react-hook-form";

export default function AuthModel() {
  const {setModel, logIn} = useAuthContext();
  const { register, handleSubmit } = useForm();

  const formSubmit = (creadintial) => {
    logIn(creadintial)
  };

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);



  return ReactDOM.createPortal(
    <div className="z-40 relative">
      <div
        onClick={() => setModel(false)}
        className="fixed inset-0 bg-gray-300 opacity-50"
      ></div>
      <div dir='rtl' className="fixed inset-x-1/3 top-44 max-h-fit px-8 py-4 rounded-lg shadow-md bg-gray-50 flex flex-col">
        <div className='flex justify-between items-center'>
          <div onClick={() => setModel(false)}>x</div>
          <SnappLogo className="w-14"/>
        </div>
        <div className='mb-8'>
          <span className ="text-lg font-bold">ورود</span>
          یا     
          <span className="text-lg font-bold"> عضوییت</span>
        </div>
        <form className='flex gap-2 flex-col' onSubmit={handleSubmit(formSubmit)}>
          <label className='text-sm font-semibold text-gray-500'>ایمیل</label>
          <input className='shadow-sm rounded-lg border-gray-400 px-2 border-2 py-2' {...register('email')} type="email"/>
          <label className='text-sm font-semibold text-gray-500' >رمز عبور</label>
          <input className='shadow-sm rounded-lg border-gray-400 px-2 border-2 py-2 mb-4'{...register('password')} type='password'/>
          <button className =" bg-purpleSnapp-300 py-2 rounded-md text-white w-full">ادامه</button>
        </form>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

