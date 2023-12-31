import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import useAuthContext from '../Hooks/useAuthContext';
import SnappLogo from '../assets/SnappLogo';
import { IoMdClose } from "react-icons/io";
import UserLogIn from './UserLogIn';


export default function AuthModel(){


  const {setModel} = useAuthContext();


  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);



  return ReactDOM.createPortal(
    <div className="z-40 relative">
      <div
        onClick={() => setModel(null)}
        className="fixed inset-0 bg-gray-300 opacity-50"
      ></div>
      <div dir='rtl' className="fixed inset-x-1/3 top-44 max-h-fit px-8 py-4 rounded-lg shadow-md bg-gray-50 flex flex-col">
        <div className='flex justify-between items-center'>
          <IoMdClose className = "cursor-pointer" onClick={() => setModel(false)}/>
          <SnappLogo className="w-14"/>
        </div>
        <div className='mb-8'>
          <span className ="text-lg font-bold">ورود</span>
          یا     
          <span className="text-lg font-bold"> عضوییت</span>
        </div>
        <UserLogIn/>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
};

