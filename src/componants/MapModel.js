import { IoMdClose } from 'react-icons/io';
import 'leaflet/dist/leaflet.css';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import useAuthContext from '../Hooks/useAuthContext';
import Button from './Button';
import Map from './Map';
import useMapContext from '../Hooks/useMapContext';


export default function MapModel(){
      

     const {setModel} = useAuthContext();
     const {setClientLocation} = useMapContext();

      useEffect(() => {
        document.body.classList.add('overflow-hidden');
    
        return () => {
          document.body.classList.remove('overflow-hidden');
        };
      }, []);

      return ReactDOM.createPortal(
        <div>
          <div
            onClick={() => setModel(false)}
            className="fixed inset-0 z-40 bg-gray-300 opacity-65"
          ></div>
          <div dir="rtl" className="rounded-lg shadow-md fixed inset-x-1/4 top-24 max-h-fit p-10 bg-white z-40">
          <IoMdClose className = "cursor-pointer" onClick={() => setModel(null)}/>
          <p className = "text-2xl font-semibold mt-8">انتخاب آدرس</p>
          <div className="flex items-center justify-between">
            <p className = "my-4  text-sm text-gray-700">برای مشاهده مناسب‌ترین پیشنهادها به شما، وموقعیت خود را مشخص کنید<br/>روی مارکر کلیک کنید وآن را فعال کنید</p>
          </div>
          <Map className = "w-full h-72"/>
          <Button onClick = {setClientLocation} snapp className = "w-full rounded-md mt-2 text-lg font-semibold text-white">تایید</Button>
          </div>
        </div>,

        document.querySelector('.modal-container')
        );
  };
    
    

