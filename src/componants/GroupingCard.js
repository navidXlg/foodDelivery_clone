


export default function GroupingCard(){

    const title = [
        {
            src:"https://cdn.snappfood.ir/uploads/images/tags/website_image_irani_1.jpg",
            title : "ایرانی"
        },
        {
            src:"https://cdn.snappfood.ir/uploads/images/tags/website_image_fastfood_1.jpg",
            title : "ایرانی"
        },
        {
            src:"https://cdn.snappfood.ir/uploads/images/tags/website_image_kebab_1.jpg",
            title : "ایرانی"
        },
        {
            src:"https://cdn.snappfood.ir/uploads/images/tags/website_image_pizza_1.jpg",
            title : "ایرانی"
        },
        {
            src:"https://cdn.snappfood.ir/uploads/images/tags/website_image_burger_1.jpg",
            title : "ایرانی"
        },
        {
            src:"https://cdn.snappfood.ir/uploads/images/tags/website_image_sandwich_1.jpg",
            title : "ایرانی"
        },
        {
            src:"https://cdn.snappfood.ir/uploads/images/tags/website_image_asian_1.jpg",
            title : "ایرانی"
        },
        {
            src:"https://cdn.snappfood.ir/uploads/images/tags/website_image_seafood_1.jpg",
            title : "ایرانی"
        },
        {
            src:"https://cdn.snappfood.ir/uploads/images/tags/website_image_salad_1.jpg",
            title : "ایرانی"
        },
        {
            src:"https://cdn.snappfood.ir/uploads/images/tags/website_image_italy_1.jpg",
            title : "ایرانی"
        },
        {
            src:"https://cdn.snappfood.ir/uploads/images/tags/website_image_sokhari_1.jpg",
            title : "ایرانی"
        },
        {
            src:"https://cdn.snappfood.ir/uploads/images/tags/website_image_gilani_1.jpg",
            title : "ایرانی"
        }
    ]

    return <div className="mt-16 mx-24">
             <div className="text-right mb-9 font-bold">دسته بندی</div>
             <div className="grid grid-cols-6 gap-x-4 gap-y-8">
             {
                title.map(item =>
                <div className="h-24 relative overflow-hidden border-4 shadow-md border-white rounded-lg">
                    <img className="w-full h-full" src={item.src}/>
                    <p className="absolute text-right py-1 rounded-l-lg pr-2 -right-1 w-20 bottom-0 bg-slate-50 text-gray-800">{item.title}</p>
                </div>
                )
             }
             </div>
           </div>
};