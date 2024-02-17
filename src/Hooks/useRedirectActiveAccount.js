import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * useRedirectIfActiveAccount is a custom hook that redirects users to a specified page
 * if their account is active.
 * 
 * @param {boolean} activeAccount - A boolean value indicating whether the user's account is active.
 * @param {string} page - The page to redirect users to if their account is active.
 */


export default function useRedirectIfActiveAccount(activeAccount, page) {

  const navigate = useNavigate();
  useEffect(() => {
    if (activeAccount) {
      navigate(page);
    }
  }, [activeAccount, navigate]);
}