import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMyContext} from '../Context/MyContext';
import {ProfileURL} from '../Network/Constants';

const Launch = ({navigation}) => {
  const [isAlreadyLoggedin, setisAlreadyLoggedin] = useState(false);
  const {setUser} = useMyContext();
  // Function to retrieve the stored mobile number
  const getStoredMobileNumber = async () => {
    try {
      // Retrieve the mobile number from AsyncStorage
      const mobileNumber = await AsyncStorage.getItem('userMobileNumber');
      return mobileNumber;
    } catch (error) {
      console.error('Error retrieving mobile number: ', error);
      return null;
    }
  };

  const getUsrData = storedMobileNumber => {
    console.log('user details updated in usecontext');

    const apiUrl = ProfileURL;
    const requestData = {
      mobile: storedMobileNumber,
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type
      },
      body: JSON.stringify(requestData), // Convert the data to JSON format
    };

    fetch(apiUrl, requestOptions)
      .then(response => {
        // Log the raw response for debugging
        //console.log('Raw Response:', response.text());
        return response.json();
      })
      .then(data => {
        // Process the data received from the server
        console.log('Response:', data);
        if (data.code == '200') {
          setUser(data.data);
          navigation.navigate('Dashboard');
        } else {
          showMessage({
            message: data.message,
            type: 'danger',
            autoHide: 1000,
          });
        }
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  };
  const loadStoredMobileNumber = async () => {
    const storedMobileNumber = await getStoredMobileNumber();

    if (storedMobileNumber) {
      setisAlreadyLoggedin(true);
      console.log('Mobile number retrieved:', storedMobileNumber);
      //navigation.navigate('Dashboard')
      //return true;
      getUsrData(storedMobileNumber);
      //navigation.navigate('Dashboard');
      // Now you can use the mobile number in your app as needed
    } else {
      console.log('No stored mobile number found.');
      navigation.navigate('Welcome');
      return false;
    }
  };

  useEffect(() => {
    // Call loadStoredMobileNumber when the app starts
    const loginstatus = loadStoredMobileNumber();
    // setTimeout(() => {
    console.log('navigation execute');

    if (loginstatus == true) {
      //navigation.navigate('Dashboard');
    } else if (loginstatus == false) {
      //      navigation.navigate('Welcome');
    }
    //   }, 2000);
    // }, []);
  }, []);
  return (
    <LinearGradient
      colors={['deepskyblue', 'white', 'white', 'deepskyblue']}
      style={styles.container}>
      <Image
        style={styles.Image}
        source={require('../Branding/Photos/Kodukku_logo.jpeg')}
      />
      {/*
      <Text style={styles.text}>GET YOUR DREAM JOB</Text>
  */}
    </LinearGradient>
  );
};

export default Launch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    height: '30%',
    width: '80%',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: 'deepskyblue',
  },
});
