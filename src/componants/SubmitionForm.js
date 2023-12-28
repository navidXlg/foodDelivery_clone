import { useState } from "react";
import useSalesContext from "../Hooks/useSalesContext";
import aks from "../assets/Artwork.png";
import Button from "./Button";
import Dropdown from "./DropDown";
import Input from "./Input";
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
     homeTown} = useSalesContext();

  const formSubmit = (creadential) => console.log(creadential);


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
                <Input value = "نام فروشگاه" {...register("storeName")} />
                <Input value = "نام مالک فروشگاه"{...register("name")}/>
                <Input value = "نام خانوادگی مالک فروشگاه"{...register("lastName")}/>
                <Input value = "شماره تلفن همراه"{...register("phoneNumber")}/>
                <Input value = "کد معرف"{...register("nearCode")}/>
                <Button >دریافت کد تایید</Button>
              </form>
              <div></div>
           </div>
 };