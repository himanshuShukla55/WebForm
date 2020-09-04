import React from 'react';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function PaymentForm(props) {
  const {data, handleChange} = props;
  const{plek , name, description, contact , email} = data;
  const {openbare_ruimte} = plek ? plek.address : {};

  return (
    <React.Fragment>
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
          <TextField
            name='plek'
            required
            id="plek"
            label="plek"
            fullWidth
            autoComplete="cc-number"
            defaultValue = {openbare_ruimte || 'no Address selected'}
            onChange = {handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField
          name = 'description'
          id="description"
          label="What weit uw melden?"
          placeholder="Wat wiet uw melden?"
          multiline
          variant="outlined"
          defaultValue = {description}
          onChange = {handleChange}
        />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name='name'
            required
            id="name"
            label="uw naam"
            fullWidth
            autoComplete="cc-number"
            defaultValue = {name}
            onChange = {handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField name = 'contact' required id="contact" label="uw telefoon nummer" fullWidth autoComplete="cc-exp" defaultValue = {contact}
            onChange = {handleChange}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name = 'email'
            id="email"
            label="Uw Email-Adres"
            helperText="abc@gmail.com"
            fullWidth
            autoComplete="cc-csc"
            defaultValue = {email}
            onChange = {handleChange}
          />
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;