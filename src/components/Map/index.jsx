import React from "react";
import {
  Map, TileLayer, Marker,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {
  Background,
} from "./styles";
import mapMarkerImg from "../../assets/images/pin.png";

const mapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [32, 40],

});

function MapPedido() {
  return (
    <>
      <Background>
        <Map
          center={[-1.4378121, -48.4668829]}
          zoom={15}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          <Marker icon={mapIcon} position={[-1.4378121, -48.4668829]} />
        </Map>
      </Background>
    </>
  );
}

export default MapPedido;
