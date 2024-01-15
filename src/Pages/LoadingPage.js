import { PuffLoader } from "react-spinners"



export default function LoadignPage(){

    return<div className="h-screen m-auto flex flex-col items-center justify-center gap-16">
          <PuffLoader color="rgba(255, 0, 197, 0.95)"
            size={250}
            speedMultiplier={1}
            />
            <p className="text-3xl text-gray-500 font-bold">در حال بارگذاری</p>
        </div>
}