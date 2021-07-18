import * as React from 'react';
import ReactMapGL, {Source, Layer, SVGOverlay, FullscreenControl} from 'react-map-gl';



function redraw({project}) {
  const [cx, cy] = project([-122, 37]);
  return <circle cx={cx} cy={cy} r={4} fill="blue" />;
}


const TOKEN = 'pk.eyJ1IjoibnVtYmFjcnVuY2hhIiwiYSI6ImNrcW0ycmIwaDA3cHozMHFxM2E5d2M4bzkifQ.iQzb_0DICNmofqQZrs4wvQ'; // Set your mapbox token here


const fullscreenControlStyle= {
  right: 10,
  top: 10
};

const geojson = {
  type: 'FeatureCollection',
  features: [
    {type: 'Feature', geometry: {type: 'Point', coordinates: [ 170.4376, -45.7577]}}
  ]
};

const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 5,
    'circle-color': '#007cbf'
  }
};

export default function App() {
  const [viewport, setViewport] = React.useState({
      width: '100vw',
      height: '50vh',
      type: 'FeatureCollection',
      latitude: -45.7577, 
      longitude:  170.4376,
      zoom: 9   
  });
  return (
    <ReactMapGL 
    {...viewport}  
    mapStyle="mapbox://styles/mapbox/satellite-v9"
    mapboxApiAccessToken={TOKEN} 
    
    onViewportChange={setViewport}>
      
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
      <SVGOverlay redraw={redraw} />
      <FullscreenControl style={fullscreenControlStyle} />
    </ReactMapGL>
  );
}