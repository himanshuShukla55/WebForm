import React ,{Fragment} from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const PersonalInformation = ({info , handleChange}) => {

  const {name , email} = info;
  
  return (

      <Fragment>
        <Grid container spacing = {3}>
          <Grid item xs={12} md={7}>
              <TextField
                name='name'
                required
                id="name"
                label="Uw Naam"
                variant = 'outlined'
                helperText="eg : John Smith"
                autoComplete = 'off'
                defaultValue = {name}
                onChange = {handleChange}
              />
            </Grid>
          
            {/* email */}
          
            <Grid item xs={12} md={7}>
              <TextField
                required
                name = 'email'
                id="email"
                label="Uw Email-Adres"
                helperText="eg : abc@gmail.com"
                variant = 'outlined'
                autoComplete = 'off'
                defaultValue = {email}
                onChange = {handleChange}
              />
            </Grid>
          </Grid>
        </Fragment>
  )
}

export default PersonalInformation
