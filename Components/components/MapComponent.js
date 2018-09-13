import React, { Component } from 'react';
import { Map, ImageOverlay, ZoomControl } from 'react-leaflet';
import {mapImage, mapMaxBounds, mapImageBounds, mapCenter} from '../common/constants';
import '../styles/MapComponent.css';

class MapComponent extends Component {
  render() {
    return (
      <Map
        zoom={4}
        minZoom={4}
        maxZoom={8}
        center={mapCenter}
        zoomControl={false}
        maxBounds={mapMaxBounds}
        className="Map"
      >
        <ZoomControl position="topright"/>
        <ImageOverlay url={mapImage} bounds={mapImageBounds}/>
      </Map>
    )
  }
}

export default MapComponent;
