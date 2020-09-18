import React,{ useState }from 'react';
import PropTypes from "prop-types";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import clsx from "clsx";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AssessmentIcon from "@material-ui/icons/Assessment";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import StepConnector from "@material-ui/core/StepConnector";
import StepLabel from '@material-ui/core/StepLabel';

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import 'date-fns';
import Card from '@material-ui/core/Card';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor : '#50A15A',
    '&:hover': {
      backgroundColor: '#155429',
    }
  },
  media: {
    width : '100%',
    height : '100%'
  },

  card: {
     width: 110,
    height :110,
    margin: 'auto'
  }
}));

//stepper

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(255, 235, 133) 0%,rgb(248, 214, 45) 50%,rgb(204, 160, 0) 100%)"
    }
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(255, 235, 133) 0%,rgb(248, 214, 45) 50%,rgb(204, 160, 0) 100%)"
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "50A15A",
    borderRadius: 1
  }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#50A15A",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(21, 84, 41) 0%,rgb(34, 123, 60) 50%,rgb(80, 161, 90) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg,rgb(255, 235, 133) 0%,rgb(248, 214, 45) 50%,rgb(204, 160, 0) 100%)"
  }
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <LocationOnIcon />,
    2: <AssessmentIcon />,
    3: <DoneAllIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node
};



function Checkout() {

const steps = ['Plek', 'Melden', 'Overzicht'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm 
              data = {data}
              onLocationChange = {onLocationChange}
              />;
    case 1:
      return <PaymentForm 
              data = {data}
              handleChange = {handleChange}
              onImageChange = {onImageChange}
            />;
    case 2:
      return <Review data = {data}/>;
    default:
      throw new Error('Unknown step');
  }
}
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const [afvalData, setAfvalData] = useState({
    plek : {},
    image : null,
    description : "",
    name : "",
    email : "",
    date : new Date(),
    notification : "No"
  });

  const {plek, description, name, email, image, notification} = afvalData;
  const data = {plek, description, name, email, image, notification};

  //location
  const onLocationChange = location => {
    setAfvalData({...afvalData, plek : location});
  }

  //image
  const onImageChange = e => {
    setAfvalData({...afvalData, image : e.target.files[0]})
  }

 
  const handleChange = e => setAfvalData({...afvalData,[e.target.name] : e.target.value});
 
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Card className = {classes.card}>
            <CardMedia
              className={classes.media}
              image={require('../images/Hague-Compact.png')}
            />
          </Card>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && activeStep < 2 && (
                    <Button variant="contained"
                    color="primary" onClick={handleBack} className={classes.button}>
                     Back
                    </Button>
                  )}
                  {activeStep <2 && (
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 2 ? 'Submit' : 'Next'}
                  </Button>
                  )}
                </div>
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}

export default Checkout;