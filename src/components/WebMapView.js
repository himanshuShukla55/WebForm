import React, { useState } from "react";

import Map from "./Map";
import Search from "./Search";

const WebMapView = ({location, handleChange}) => {
  const [mapCenter, setMapCenter] = useState([]);

  function handleSearch(evt) {
    setMapCenter(evt);
  }



  return (
    <div className="webMap">
      <div className = 'Title'>
        <Search
          onSearch={evt => {
            handleSearch(evt);
          }}
        />
      </div>
      <Map center={mapCenter} />
    </div>
  );
}

export default WebMapView;


