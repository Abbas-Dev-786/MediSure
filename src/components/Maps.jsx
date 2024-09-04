import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

const Maps = ({ sourcePort, destinationPort }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map && sourcePort && destinationPort) {
      map.data.forEach((feature) => map.data.remove(feature));

      const path = [
        { lat: sourcePort.coordinates[1], lng: sourcePort.coordinates[0] },
        { lat: destinationPort.coordinates[1], lng: destinationPort.coordinates[0] },
      ];

      const polyline = new window.google.maps.Polyline({
        path,
        map,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      polyline.setMap(map);
    }
  }, [map, sourcePort, destinationPort]);

  const handleMapLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
      <Map
        onLoad={handleMapLoad}
        style={{ width: "100%", height: "70vh" }}
        defaultCenter={{ lat: 25.25, lng: 55.27 }}
        defaultZoom={8}
      />
    </APIProvider>
  );
};

export default Maps;
