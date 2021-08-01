import React, {useState, useRef, useCallback} from 'react';
import { Form, Button  } from "react-bootstrap";
import  { MAPBOX_TOKEN }  from "../../constants/apiConstants.js";
import MapGL from 'react-map-gl';
import { Editor, DrawPolygonMode, EditingMode } from 'react-map-gl-draw';
import {render} from 'react-dom';
import ControlPanel from './control-panel';
import {getFeatureStyle, getEditHandleStyle} from './style';
import Map from '../Map/Map.js';



export default function InputForm() {
    
    const [open, setOpen] = useState(false);

    const [position, setPosition] = useState('top-left');
    const [mode, setMode] = useState(null);
    const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(null);
    const editorRef = useRef(null);
  
    const onSelect = useCallback(options => {
      setSelectedFeatureIndex(options && options.selectedFeatureIndex);
    }, []);
  
    const onDelete = useCallback(() => {
      if (selectedFeatureIndex !== null && selectedFeatureIndex >= 0) {
        editorRef.current.deleteFeatures(selectedFeatureIndex);
      }
    }, [selectedFeatureIndex]);
  
    const onUpdate = useCallback(({editType}) => {
      if (editType === 'addFeature') {
        setMode(new EditingMode());
      }
    }, []);

    const drawTools = (
      <div className="mapboxgl-ctrl-top-left">
        <div className="mapboxgl-ctrl-group mapboxgl-ctrl">
          <button
            className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon"
            title="Polygon tool (p)"
            onClick={() => setMode(new DrawPolygonMode())}
          />
          <button
            className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash"
            title="Delete"
            onClick={onDelete}
          />
        </div>
      </div>
    );
  
    const features = editorRef.current && editorRef.current.getFeatures();
    const selectedFeature =
      features && (features[selectedFeatureIndex] || features[features.length - 1]);
    

      const [viewport, setViewport] = React.useState({
        width: '100vw',
        height: '50vh',
        type: 'FeatureCollection',
        latitude: -45.7577, 
        longitude:  170.4376,
        zoom: 9   
    });

    return (
      <>
      <MapGL
        {...viewport}

        mapStyle="mapbox://styles/mapbox/satellite-v9"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={setViewport}
      >
        <Editor
          ref={editorRef}
          style={{width: '100%', height: '100%'}}
          clickRadius={12}
          mode={mode}
          onSelect={onSelect}
          onUpdate={onUpdate}
          editHandleShape={'circle'}
          featureStyle={getFeatureStyle}
          editHandleStyle={getEditHandleStyle}
        />
        {drawTools}
      </MapGL> 
      <ControlPanel polygon={selectedFeature} />

      {/* <Map/> */}
<Form>
  <Form.Group controlId="fieldwork-datetime">
    <Form.Label>Observation Date</Form.Label>
    <Form.Control type="date" placeholder="Select Date" />
  </Form.Group>
 
  <Form.Group controlId="fieldwork-sample_type">
    <Form.Label>Type of Sample</Form.Label>
    <Form.Control type="text" placeholder="Sample Type" />
  </Form.Group>



  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

      </>
    );
  };
 