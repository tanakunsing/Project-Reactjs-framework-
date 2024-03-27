import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import Stytled from './Layout.module.css';

const Tests = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBatfpeVtkR6lsgtJ_3SFKyClzKb1OtbaU"
  });
  const center = useMemo(() => ({ lat: 13.9047, lng: 100.6572 }), []);

  return (
    <div className={Stytled.App} >
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName={Stytled.map_container}
          center={center}
          zoom={10}

        ><Marker position={{ lat: 13.8242, lng: 73.856743 }} />
        </GoogleMap>

      )}
    </div>
  );
};

export default Tests;