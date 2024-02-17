import { Suspense } from "react";
import LoadignPage from "../Pages/LoadingPage";

/**
 * SuspenseLoading is a React component used to wrap content that may require
 * asynchronous loading. It uses React's Suspense component to handle loading states
 * and provides a fallback UI while the content is being loaded.
 * 
 * @param {ReactNode} page - The content to be displayed. This could be any React component or JSX.
 * @returns {JSX.Element} - Returns a JSX element representing the SuspenseLoading component.
 */

export default function SuspenseLoading({page}){

    return <Suspense fallback = {<LoadignPage/>}>
                {page}
            </Suspense>
};