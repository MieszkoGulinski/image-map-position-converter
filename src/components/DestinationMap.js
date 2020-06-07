import React, { useState, useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, Marker } from 'react-leaflet'


const mapStateToProps = (state) => {
  return {
    lat: state.destination.lat,
    lon: state.destination.lon,
    zoom: state.destination.zoom,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //..
  };
};

const DestinationMap = (props) => {
  const {lat, lon, zoom} = props;

  const handleMove = useCallback((ev) => {
    console.log('move', ev.latlng);
  }, []);
  const handleZoom = useCallback((ev) => {
    console.log('zoom', ev);
  }, []);

  const destCenter = useMemo(() => [lat, lon], [lat, lon]);

  return (
    <div>
      <Map
        id="dest-map"
        center={destCenter}
        zoom={zoom}
        onMove={handleMove}
        onZoom={handleZoom}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DestinationMap);
