import {LoginURL} from './Constants';
import axios from 'axios';
const headers = {
  'Content-Type': 'application/json',
};

export default function loginNetworkCall(mobileno,pin) {
  const apiUrl = LoginURL;
  const RequestBody = {
    mobile: 9751365154,
    pin: 4567,
  };

  axios
    .post(apiUrl, RequestBody, {headers})
    .then(response => {    
      console.log('Response:', response.data);
    })
    .catch(error => {
      // Handle the error
      console.error('Error:', error);
    });
}
