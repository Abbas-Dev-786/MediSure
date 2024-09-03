import {
  APIProvider,
  Map,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

const DEFAULT_POSITION = { lat: 43.6532, lng: -79.3832 };

const Directions = () => {
  const map = useMap();
  const routesLib = useMapsLibrary("routes");
  const [directionsService, setDirectionService] = useState();
  const [directionsRenderer, setDirectionRenderer] = useState();
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    if (!map || !routesLib) return;

    setDirectionService(new routesLib.DirectionsService());
    setDirectionRenderer(new routesLib.DirectionsRenderer({ map }));
  }, [map, routesLib]);

  useEffect(() => {
    if (!directionsRenderer || !directionsService) return;

    directionsService
      .route({
        origin: "New York City, USA",
        destination: "London, UK",
        travelMode: window.google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });
  }, [directionsService, directionsRenderer]);

  return null;
};

const Maps = () => {
  // const position = { lat: 43.6532, lng: -79.3832 };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
      <Map
        style={{ width: "100%", height: "70vh" }}
        defaultCenter={DEFAULT_POSITION}
        defaultZoom={8}
      >
        <Directions />
      </Map>
    </APIProvider>
  );
};

export default Maps;
