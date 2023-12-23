


export default function ProductsCatgory(){

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
    ]

    return <div className="flex items-center justify-between  w-full py-5 rounded-lg  px-36 bg-gray-400 absolute top-3/4 z-40">
            {
             imges.map(item => 
             <div className="w-10 flex flex-col items-center">
                <img src = {item.src}/>
                <p>{item.title}</p>
             </div>
             )   
            }
           </div>
}