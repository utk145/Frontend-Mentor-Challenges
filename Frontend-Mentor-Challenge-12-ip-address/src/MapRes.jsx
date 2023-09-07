import React from 'react';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import maker from '/icon-location.svg';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const MapRes = ({ coordinates }) => {
  if (!coordinates || typeof coordinates.lat !== 'number' || typeof coordinates.lng !== 'number') {
    return <div>Error: Invalid coordinates</div>;
  }
  const marker = new L.icon({ iconUrl: maker })
  let state = {
    keyMAP: Math.random(),
  };

  return (
    <MapContainer key={state.keyMAP} center={[coordinates.lat, coordinates.lng]} className='w-full h-3/5 z-0' zoom={18}>
      <TileLayer attribution='Google Maps' url='https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'>
        <Marker position={[coordinates.lat, coordinates.lng]} icon={marker}></Marker>
      </TileLayer>
    </MapContainer>
  )
}

export default MapRes