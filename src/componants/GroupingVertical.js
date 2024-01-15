import { productTitle } from "../data/data"



export default function GroupingVertical (){


    return <div className=" shadow-md rounded-lg w-[280px] text-sm p-5 py-3">
                <p className="bg-gray-100 p-3 rounded-md mb-5">همه دسته بندی ها</p>
                {
                productTitle.map(item => 
                  <div className="flex gap-3 items-center mb-5">
                    <img src={item.src} className="size-10 rounded-full"/>
                    <p>{item.title}</p>
                   </div>
                )}
          </div>

}