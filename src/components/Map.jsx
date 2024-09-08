import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useMemo, useState } from "react";

// Fix the default marker icon issue with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const ZoomToSourceDestination = ({ source, destination }) => {
  const map = useMap();

  if (source) {
    // If both source and destination are available, fit bounds
    if (destination) {
      const bounds = L.latLngBounds([source, destination]);
      map.fitBounds(bounds, { padding: [50, 50] });
    } else {
      // If only the source is available, set the view to the source
      map.setView(source, 10); // Zoom level 13 to zoom into the source
    }
  }

  return null;
};

const Map = ({
  sourcePort,
  destinationPort,
  shouldFetchRoute,
  onRouteFetched,
}) => {
  const [route, setRoute] = useState(null);
  const [distance, setDistance] = useState(null);

  const source = useMemo(
    () => (sourcePort ? [...sourcePort].reverse() : sourcePort),
    [sourcePort]
  );

  const destination = useMemo(
    () => (destinationPort ? [...destinationPort].reverse() : destinationPort),
    [destinationPort]
  );

  // const midpoint = useMemo(() => {
  //   const x = Math.floor(route?.length - 1 / 2);

  //   return x ? route[x] : [0, 0];
  // }, [route]);
  // console.log(midpoint);

  useEffect(() => {
    if (shouldFetchRoute && sourcePort && destinationPort) {
      fetchRoute();
    }
  }, [shouldFetchRoute, sourcePort, destinationPort]);

  const fetchRoute = async () => {
    try {
      const response = await fetch(
        "https://navi-server-naav.onrender.com/api/searoute",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            origin: {
              type: "Feature",
              properties: {},
              geometry: { type: "Point", coordinates: sourcePort },
            },
            destination: {
              type: "Feature",
              properties: {},
              geometry: { type: "Point", coordinates: destinationPort },
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error fetching route from server");
      }

      const data = await response.json();
      console.log(data);
      setRoute(data?.geometry?.coordinates?.map(([lng, lat]) => [lat, lng]));
      setDistance(data.properties.length);
      onRouteFetched(true);
    } catch (error) {
      console.error("Error fetching route:", error.message);
      onRouteFetched(false);
    }
  };

  return (
    <div>
      {distance && (
        <div>
          <h3>Route Distance</h3>
          <p>{distance.toFixed(2)} nautical miles</p>
        </div>
      )}

      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {source && (
          <Marker position={source}>
            <Popup autoPan={true}>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}

        {destination && (
          <Marker position={destination}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}

        {route?.length ? <Polyline positions={route} color="blue" /> : null}

        {/* {route?.length ? (
          <SVGOverlay bounds={L.latLngBounds([source, midpoint])}>
            <defs>
              <radialGradient
                id="blobGradient"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#ff6ec4", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#7873f5", stopOpacity: 1 }}
                />
              </radialGradient>
            </defs>

            <circle cx="50" cy="50" r="30" fill="url(#blobGradient)">
              <animate
                attributeName="r"
                values="20;40;20"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="cx"
                values="50;60;50"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values="50;40;50"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
          </SVGOverlay>
        ) : null} */}

        <ZoomToSourceDestination source={source} destination={destination} />
      </MapContainer>
    </div>
  );
};

export default Map;
