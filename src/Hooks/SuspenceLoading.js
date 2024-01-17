import { Suspense } from "react";
import LoadignPage from "../Pages/LoadingPage";

export default function SuspenseLoading({page}){

    return <Suspense fallback = {<LoadignPage/>}>
                {page}
            </Suspense>
};