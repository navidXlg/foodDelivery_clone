import ResturantInfo from "./ResturantInfo";



export default function ProductPagination({ title, products}){

    const items = new Array(10).fill(0);


    return <div className="my-20">
             <p className="text-2xl font-bold">{title}</p>
             <div className=" overflow-x-scroll scroll-smooth over flex items-center gap-3 mt-7">
                {
                items.map(item =><ResturantInfo/>)
                }
             </div>
           </div>
   };