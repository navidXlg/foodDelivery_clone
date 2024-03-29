import useSalesContext from "../Hooks/useSalesContext";
import { orderPropertiesconfig } from "../data/data";



export default function OrderProperties(){

    // State to manage the selected order properties
    const {setProductProperties} =  useSalesContext();


    return (
        <div className = "shadow-lg px-4 py-8 w-[280px] text-sm rounded-md">
            {/* Map through order properties and render each */}
            {orderPropertiesconfig.map(item => (
                <div key={item.label} className = "flex items-center justify-between mt-8">
                    <p>{item.label}</p>
                    <label className = "relative inline-flex items-center cursor-pointer">
                        <input
                            type = "checkbox"
                            className = "sr-only peer"
                            onClick={() => setProductProperties(item.value)}
                        />
                        <div className = "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-purpleSnapp-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purpleSnapp-300"></div>
                    </label>
                </div>
            ))}
        </div>
    );

}