import classNames from "classnames"



export default function ProductsCatgory({classname}){

    const imges = [
       {
       src :  "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_1_603508bf202d8_img_st_food.png",
       title : "رستوران"
       },
       {
        src :  "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_4_603508a14ab73_img_st_supermarket.png",
        title : "سوپرمارکت"
        },
        {
       src :   "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_2_603508b330711_img_st_cafe.png",
       title : "کافه"
       }, 
       {
        src :  "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_3_603508a95b9be_img_st_sweet.png",
        title : "شیرینی"
       },
       {
        src :"https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_7_60350883d6e43_img_st_nut.png",
        title : "آجیل"
       },
       {
        src :"https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_8_6035087b463a3_img_st_icecream.png",
        title : "بستنی"
       },
       {
        src :"https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_11_603507afc9a32_img_st_meat.png",

        title : "گوشت"
       },
       {
        src :  "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_6_6035088cbcde4_img_st_fruit.png",
        title : "میوه"
       },
       {
        src :"https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_9_603b811b1d540_img_st_other2.png",
        title : "سایر"
       }
    ];
    const style = classNames("hidden py-5 md:flex items-center justify-around w-3/4 w-max-[76rem] rounded-lg backdrop-blur-md backdrop-contrast-125 shadow-sm rounded-lg ",classname);

    return <div className = {style} dir="rtl">
            {
             imges.map(item => 
             <div className="w-10 flex flex-col items-center">
                <img src = {item.src} className="hover:animate-pulse"/>
                <p>{item.title}</p>
             </div>
             )   
            }
           </div>
 };