import { createContext, useState} from "react";


export const OrderContext = createContext();


export default function OrderProvider({children}){
    const [filterProducts, setFilterProducts] = useState(null);

    const orderData = {
        filterProducts,
        setFilterProducts
    };
    
    return <OrderContext.Provider value={orderData}>
                {children}
           </OrderContext.Provider>
    };


