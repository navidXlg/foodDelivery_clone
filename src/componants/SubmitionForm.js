import useSalesContext from "../Hooks/useSalesContext";
import HeroImg from "../assets/Artwork.png";
import Button from "./utils/Button";
import Dropdown from "./utils/DropDown";
import { BeatLoader } from "react-spinners";
import InputSalseSubmit from "./InputSalseSubmit";
import { job, cities } from "../data/data";



export default function SubmitionForm(){

  const {setJobTitle,
     jobTitle,
     isLoading,
     setHomeTown,
     isFormComplete,
     handelFormChange,
     errorMsg,
     homeTown,
     salesCredential,
     handelSalseFromSubmit} = useSalesContext();



  const handelSubmit = (event) => {
    event.preventDefault();
    handelSalseFromSubmit(salesCredential);
    };   


    return <div className="flex items-center mt-14 max-w-screen-2xl flex-col text-center lg:text-right gap-10 lg:flex-row 3xl:mx-auto">
              <div className="self-center flex flex-col gap-8">
                <p className="text-4xl font-bold">در کمتر از ۱۰ دقیقه ثبت‌نام کنید و<br/> به اسنپ‌فود بپیوندید!</p>
                <p className="text-xl">دون نیاز به مراجعهٔ حضوری، می‌توانید صفر تا صد قرارداد را در همین صفحه انجام دهید.</p>
                <img src={HeroImg} className="w-[826px] mt-10 hidden lg:block"/>
              </div>
              <form 
              className="flex flex-col gap-8 bg-white px-3 py-5 shadow-lg rounded-md min-w-[370px]"
              onSubmit={handelSubmit}>
                <p className="text-2xl font-bold mb-2">فرم ثبت‌ نام فروشندگان</p>
                <p>همین حالا ثبت‌نام کنید!</p>
                <Dropdown options={job} onChange={setJobTitle} value={jobTitle} title = "انتخاب نوع کسب وکار"/>
                <Dropdown options={cities} onChange={setHomeTown} value={homeTown} title = "انتخاب شهر"/>
                <InputSalseSubmit id="storeName" handelChange={handelFormChange} labelTitle={"نام فروشگاه"} value={salesCredential.storeName}/>
                <InputSalseSubmit id="name" handelChange={handelFormChange} labelTitle={"نام مالک فروشگاه"} value={salesCredential.name}/>
                <InputSalseSubmit id="lastName" handelChange={handelFormChange} labelTitle={"نام خانوادگی مالک فروشگاه"} value ={salesCredential.lastName}/>
                <InputSalseSubmit id="phoneNumber" handelChange={handelFormChange} labelTitle={"شماره تلفن همراه"} value={salesCredential.phoneNumber}/>
                <Button off rounded snapp = {isFormComplete} className ="text-white font-bold"  
                disabled = {!isFormComplete}>
                  {isLoading ? 
                    <BeatLoader
                    color="rgba(255, 255, 255, 1)"
                    margin={3}
                    size={9}/>
                    :"دریافت کد تایید"}
                </Button>
                <p className=" text-center w-[350px] text-red-600">
                  {
                  errorMsg ? errorMsg.message : ""
                  }
                  </p>
              </form>
           </div>
};