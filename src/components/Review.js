import React , {useState,useEffect} from 'react'
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
const Review = ({data}) => {

  const [notificationNumber, setNotificationNumber] = useState({
    no : ''
  });
 
  const {plek, description,email,contact} = data;

  const image = data.image? data.image : {empty : true};

  let e = email? email : 'anonymous';
  let text = description;
  
  
  let {coordinates} = plek.geometrie;
  const address = plek.address;

  console.log()
  useEffect(()=>{
    axios.post(`http://ec2-52-200-189-81.compute-1.amazonaws.com:8001/private/signals/
    `,{
      "text": text,
      "address": JSON.stringify(address),
      "coordinates": JSON.stringify(coordinates),
      "email": e,
      "phone": 'not provided'
    }).then(res => {
      console.log(data);
      console.log(res.data);
      setNotificationNumber({...notificationNumber, no : res.data.id});
    })
  },[]);

  console.log(data);

  return (
    <React.Fragment>
    <Typography variant="h5" gutterBottom>
      Your Report has been successfully submitted.
    </Typography>
    <Typography variant="subtitle1">
      Notification number is {JSON.stringify(notificationNumber.no)}.
    </Typography>
  </React.Fragment>
  )
}

export default Review;