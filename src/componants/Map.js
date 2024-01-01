import { MapContainer, TileLayer } from "react-leaflet";
import DraggableMarker from "./DragabelMarker";
import useMapContext from "../Hooks/useMapContext";




export default function Map({className}){
    
    const {position} = useMapContext();

      return<MapContainer className = {className}  center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <DraggableMarker />
            </MapContainer>

};



