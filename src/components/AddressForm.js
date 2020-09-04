import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import MapView from './MapView';
// import WebMapView from './WebMapView.js'

const AddressForm = ({onLocationChange}) => {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={20}>
          <MapView onChange = {onLocationChange} isShowPopup = {true}/>
         {/* <WebMapView location = {plek, coordinates} handleChange = {handleChange}/> */}
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;