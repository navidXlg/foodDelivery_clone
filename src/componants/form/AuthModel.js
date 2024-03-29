import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import useAuthContext from '../../Hooks/useAuthContext';
import SnappLogo from '../../assets/SnappLogo';
import { IoMdClose } from "react-icons/io";
import UserLogIn from './UserLogIn';
import UserRegisteration from './UserRegistration';
import AuthSucces from './AuthSucces';

export default function AuthModel(){

  // Destructure necessary state and functions from the authentication context
  const {
    setModel,
    authState} = useAuthContext();


  // Effect hook to manage modal close behavior and prevent page scrolling
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);


  // Return the authentication modal using ReactDOM.createPortal()
  return ReactDOM.createPortal(
    <div className="z-40 relative">
      <div
        onClick={() => setModel(null)}
        className="fixed inset-0 bg-gray-300 opacity-50">
      </div>
      <div dir='rtl' className="fixed animate-drop-slow inset-x-14 sm:inset-x-1/4 lg:inset-x-1/3 top-24 max-h-fit px-8 py-4 rounded-lg shadow-md bg-gray-50 flex flex-col">
        <div className='flex justify-between items-center'>
          <IoMdClose className = "cursor-pointer hover:animate-bounce" 
          onClick={() => setModel(false)}/>
          <SnappLogo className="size-14"/>
        </div>
        
         {/* Render different authentication components based on authState */}
        {
          authState === "logIn"?
          <UserLogIn/>
          :authState === "submit"?
          <UserRegisteration/>
          :authState === "succes"?
          <AuthSucces/>: ""
        }
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
};

