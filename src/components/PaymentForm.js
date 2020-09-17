import React, {useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonalInformation from './PersonalInformation';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  locationDiv : {
    backgroundColor : '#F1F1F1',
    padding : '2%',
    borderRadius : '5%'
  },
  button : {
    backgroundColor : '#50A15A',
    '&:hover': {
      backgroundColor: '#155429',
    }
  },
  radio: {
    '&$checked': {
      color: '#50A15A'
    }
  },
  checked: {}
}));

function PaymentForm(props) {

  const classes = useStyles();

  const {data, handleChange, onImageChange} = props;
  const{plek , name, description, email, image, notification} = data;

  const address = plek.address ? plek.address : {empty : true};

  const huisnummer = address.huisnummer ? address.huisnummer : '';
  const openbare_ruimte = address.openbare_ruimte ? address.openbare_ruimte : '';
  const postcode = address.postcode ? address.postcode : '';
  const woonplaats = address.woonplaats ? address.woonplaats : '';


  const add = address.empty ? `address not added` : `${huisnummer} ${openbare_ruimte} ${postcode} ${woonplaats}`;


  return (
    <React.Fragment>
      <Grid container spacing={3}>
       
        {/* address */}
        <Grid item xs={12} md={12}>
          <Typography variant="subtitle1">
            GEKOZEN PLEK
            <div className = {classes.locationDiv}>
              <LocationOnIcon />
              {add}
            </div>
          </Typography>  
        </Grid>

        {/* description */}

        <Grid item xs={12} md={12}>
          <Typography variant="subtitle1">
            Wat wilt u melden?
          </Typography> 
        </Grid>

        <Grid item xs={12} md={12}> 
          <TextField
            name = 'description'
            id="description"
            label="Beschrifz uw melding zo duidelijk mogelijk?"
            multiline
            rows = {7}
            rowsMax = {12}
            variant="outlined"
            defaultValue = {description}
            onChange = {handleChange}
          />
        </Grid>

        {/* photo upload */}

        <Grid item xs={12} md={12}>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="raised-button-file"
            multiple
            type="file"
            defaultValue = {image}
            onChange = {onImageChange}
          />
          <label htmlFor="raised-button-file">
          <Button 
            variant="contained" 
            color = 'primary' 
            component="span"
            className = {classes.button}
            startIcon={<CloudUploadIcon />}
          >
            FOTO TOEVEOGEN
          </Button>
          </label> 
        </Grid>

        {/* identity radio button */}
        
        <Grid item xs={12} md={12}>
          <Typography variant="subtitle1">
            wil je je gegevens delen?
          </Typography>
          <RadioGroup row aria-label="abc" name="notification" value = {notification} onChange = {handleChange}>
            <FormControlLabel
              value="Yes"
              control={<Radio classes={{root: classes.radio, checked: classes.checked}} />}
              label="JAA"
              labelPlacement="End"
            />
            <FormControlLabel
              value="No"
              control={<Radio classes={{root: classes.radio, checked: classes.checked}} />}
              label="NEE"
              labelPlacement="End"
            />
          </RadioGroup>
        </Grid>

        {/* Personal Information */}

        {notification === "Yes" && (
            <Grid item xs={12} md={12}>
             <PersonalInformation  info = {name , email} handleChange = {handleChange}/>  
            </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;