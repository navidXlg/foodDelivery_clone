import ResturantInfo from "./ResturantInfo";


export default function NewProductsSnapp(){

    const items = new Array(10).fill(0);

    return <div className="my-20">
             <p className="text-2xl font-bold">تازترین ها در اسنپ فود</p>
             <div className=" overflow-x-scroll flex items-center gap-3 mt-7">
                {
                items.map(item =><ResturantInfo/>)
                }
             </div>
           </div>
 }