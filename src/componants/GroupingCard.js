import { IoIosArrowBack } from "react-icons/io";
import { productTitle } from "../data/data";
import { useNavigate } from "react-router-dom";
import useSalesContext from "../Hooks/useSalesContext";


export default function GroupingCard({className, ...rest}){

   // Access router navigation
   const naviagate = useNavigate();

   // Access sales context for managing sales center filter
   const {setSalesCenterFilter } = useSalesContext();

   
   /**
   * Handles click event on product category card.
   * Sets the sales center filter and navigates to the corresponding product page.
   */
   const handelClick = (item) => {
      setSalesCenterFilter(item.titleId)
      naviagate(`/ProductPage/resturants`);
   };


   return (
      <div data-testid="Groupingcard" className={`mt-16 max-w-screen-2xl 3xl:mx-auto ${className}`} dir="ltr">
          <div className="text-right mb-9 mr-5 font-bold">دسته بندی</div>
          <div className="grid mx-auto grid-cols-2 xs:grid-cols-2 justify-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8">
              {/* Map through product titles and render category cards */}
              {productTitle.map((item) => (
                  <div
                      key={item.titleId}
                      onClick={() => handelClick(item)}
                      className="max-w-48 hover:shadow-lg cursor-pointer h-24 relative overflow-hidden border-4 shadow-md border-white rounded-lg"
                      {...rest}
                  >
                      <img className="w-full h-full" src={item.src} alt={item.title} />
                      <div className="absolute flex transition-all ease-in hover:gap-2 gap-1 items-center justify-center py-1 rounded-l-lg -right-0.5 w-fit bottom-0 bg-slate-50 text-gray-800">
                          <IoIosArrowBack className="text-purpleSnapp-300 mt-1" />
                          <p className="mr-2">{item.title}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};