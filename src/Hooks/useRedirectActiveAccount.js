import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useRedirectIfActiveAccount(activeAccount, page) {

  const navigate = useNavigate();
  useEffect(() => {
    if (activeAccount) {
      navigate(page);
    }
  }, [activeAccount, navigate]);
}