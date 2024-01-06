import useMapContext from "../Hooks/useMapContext";
import {useRef, useMemo, useCallback } from "react";
import { Marker, Popup} from "react-leaflet";
import { useMapEvents} from "react-leaflet";
import { IoLocationSharp } from "react-icons/io5";





export default function DraggableMarker() {

    const {draggable, setDraggable, position, setPosition, housingIcon } = useMapContext();
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

    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    });


    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])
  
   
    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
        icon={housingIcon}>  
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