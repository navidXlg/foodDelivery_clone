import useMapContext from "../Hooks/useMapContext";
import {useRef, useMemo, useCallback } from "react";
import { Marker, Popup} from "react-leaflet";





export default function DraggableMarker() {

    const {draggable, setDraggable, position, setPosition} = useMapContext();
    const markerRef = useRef(null);
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng());
          }
        },
      }),
      [],
    );


    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])
  
   
    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? 'مارکر قابل حرکت'
              : 'کلیک کنید تا مارکر قابل حرکت باشد .'}
          </span>
        </Popup>
      </Marker>
    )
  };