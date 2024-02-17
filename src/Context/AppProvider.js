import SalesProvider from "./SalesContext";
import AuthProvider from "./AuthContext";
import MapProvider from "./MapContext";
import OrderProvider from "./OrderContext";


// Create a higher-order component to wrap multiple context providers
export function AppProvider ({ children })  {
    return (
      <SalesProvider>
        <AuthProvider>
          <MapProvider>
            <OrderProvider>
              {children} 
            </OrderProvider>
          </MapProvider> 
        </AuthProvider>  
      </SalesProvider>
    );
  };