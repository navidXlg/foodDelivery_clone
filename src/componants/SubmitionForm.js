import { useEffect, useState } from "react";
import useSalesContext from "../Hooks/useSalesContext";
import aks from "../assets/Artwork.png";
import Button from "./Button";
import Dropdown from "./DropDown";
import { useForm } from "react-hook-form";

export default function SubmitionForm(){
  const job = [
    {
      value:1,
      label:"رستوران"
    },
    {
      value:2,
      label:"کافه"
    },
    {
      value:3,
      label:"شیرینی‌"
    },
    {
      value:4,
      label:"آجیل"
    },    
    {
      value:5,
      label:"نانوایی"
    },
    {
      value:6,
      label:"آبمیوه بستنی"
    },
    {
      value:7,
      label:"میوه"
    },
    {
      value:8,
      label:"پروتئین"
    },
    {
      value:9,
      label:"سلامت"
    }
  ];
  const cities = [
    {
      value:1,
      label:"استان گيلان"
    },
    {
      value:2,
      label:"استان يزد"
    },
    {
      value:3,
      label:"استان اصفهان"
    },
    {
      value:4,
      label:"استان آذربایجان شرقی"
    },    
    {
      value:5,
      label:"استان تهران"
    },
    {
      value:6,
      label:"استان فارس"
    },
    {
      value:7,
      label:"استان خراسان رضوی"
    },
    {
      value:8,
      label:"استان آذربایجان غربی"
    },
    {
      value:9,
      label:"استان مازندران"
    }
  ]

  const[isFormComplete, setIsFormComplete] = useState(false);
  const {register, handleSubmit} = useForm();
  
  const {setJobTitle,
     jobTitle,
     setHomeTown,
     homeTown,
     handelSalseFromSubmit} = useSalesContext();
     

  const formSubmit = (creadential) => {
    setIsFormComplete(true);
    for(let item in creadential){
       if(creadential[item].trim() === "" ) setIsFormComplete(false);
    };
  
    if(isFormComplete)handelSalseFromSubmit(creadential);
  }
  const inputClass = "peer  w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-6 rounded-[7px] border-blue-gray-200 focus:border-gray-900";
  const labelClass = "flex w-full h-full select-none pointer-events-none absolute right-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:ml-1 peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-2 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:mr-1 peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-2 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"



    return <div className="flex items-center mt-14">
              <div className="self-center flex flex-col gap-8">
                <p className="text-4xl font-bold">در کمتر از ۱۰ دقیقه ثبت‌نام کنید و<br/> به اسنپ‌فود بپیوندید!</p>
                <p className="text-xl">دون نیاز به مراجعهٔ حضوری، می‌توانید صفر تا صد قرارداد را در همین صفحه انجام دهید.</p>
                <img src={aks} className="w-[826px] mt-10"/>
              </div>
              <form 
              onSubmit={handleSubmit(formSubmit)}
              className="self-start flex flex-col gap-8 bg-white px-3 py-5 shadow-lg rounded-md w-[32rem]">
                <p className="text-2xl font-bold mb-2">فرم ثبت‌نام فروشندگان</p>
                <p>همین حالا ثبت‌نام کنید!</p>
                <Dropdown  options={job} onChange={setJobTitle} value={jobTitle} title = "انتخاب نوع کسب وکار"/>
                <Dropdown options={cities} onChange={setHomeTown} value={homeTown} title = "انتخاب شهر"/>
                <div className = "relative w-full min-w-[200px] h-10">
                  <input type = "text" {...register("storeName")} className={inputClass} placeholder=" "/>
                  <label className={labelClass}>نام فروشگاه</label>
                </div>
                <div className = "relative w-full min-w-[200px] h-10">
                  <input type = "text" {...register("name")} className={inputClass} placeholder=" "/>
                  <label className={labelClass}>نام مالک فروشگاه</label>
                </div>
                <div className = "relative w-full min-w-[200px] h-10">
                  <input type = "text" {...register("lastName")} className={inputClass} placeholder=" "/>
                  <label className={labelClass}>نام خانوادگی مالک فروشگاه </label>
                </div>
                <div className = "relative w-full min-w-[200px] h-10">
                  <input type = "text" {...register("phoneNumber")} className={inputClass} placeholder=" "/>
                  <label className={labelClass}> شماره تلفن همراه</label>
                </div>
                <Button snapp rounded className = "text-white  font-bold" off = {isFormComplete} >دریافت کد تایید</Button>
              </form>
              <div></div>
           </div>
 };