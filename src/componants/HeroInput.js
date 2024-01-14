

export default function HeroInput () {


    return <>            
            <label htmlFor="default-search" className="mb-2 text-xs sm:text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <input type="search" id="default-search" className="block w-full p-4 ps-10   text-xs sm:text-sm text-gray-900 text-right outline-none shadow-2xl  rounded-3xl bg-gray-50 " placeholder="برای جست و جو وارد اکانت خود شوید" required/>
                  <div className="absolute bg-purpleSnapp-300 text-center rounded-full p-3 m-2 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                  </div>
                </div>
            </>     
 };