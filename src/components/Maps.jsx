import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Polyline, InfoWindow } from '@react-google-maps/api';

const Maps = ({ sourcePort, destinationPort, shouldFetchRoute, onRouteFetched }) => {
  const [route, setRoute] = useState(null);
  const [distance, setDistance] = useState(null);
  const mapRef = useRef(null);
  const polylineRef = useRef(null);

  useEffect(() => {
    if (shouldFetchRoute && sourcePort && destinationPort) {
      fetchRoute();
    }
  }, [shouldFetchRoute, sourcePort, destinationPort]);

  const fetchRoute = async () => {
    try {
      const response = await fetch("https://navi-server-naav.onrender.com/api/searoute", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          origin: {
            type: 'Feature',
            properties: {},
            geometry: { type: 'Point', coordinates: sourcePort },
          },
          destination: {
            type: 'Feature',
            properties: {},
            geometry: { type: 'Point', coordinates: destinationPort },
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Error fetching route from server');
      }

      const data = await response.json();
      setRoute(data);
      setDistance(data.properties.length);
      onRouteFetched(true);
    } catch (error) {
      console.error('Error fetching route:', error.message);
      onRouteFetched(false);
    }
  };

  useEffect(() => {
    if (mapRef.current && route) {
      if (polylineRef.current) {
        polylineRef.current.setMap(null);
      }

      const path = route.geometry.coordinates.map(([lng, lat]) => ({ lat, lng }));
      const polyline = new google.maps.Polyline({
        path,
        strokeColor: '#0000FF',
        strokeOpacity: 0.8,
        map: mapRef.current,
      });

      polylineRef.current = polyline;
    }
  }, [route]);

  const containerStyle = { width: '100%', height: '600px' };

  return (
    <>
      {distance && (
        <div>
          <h3>Route Distance</h3>
          <p>{distance.toFixed(2)} nautical miles</p>
        </div>
      )}
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={route ? { lat: route.geometry.coordinates[0][1], lng: route.geometry.coordinates[0][0] } : { lat: 0, lng: 0 }}
          zoom={3}
          onLoad={map => mapRef.current = map}
        >
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Maps;
