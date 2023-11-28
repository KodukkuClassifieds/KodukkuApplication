import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {showMessage} from 'react-native-flash-message';
import {PrimaryFontFamily} from '../Configurations/StyleConfigs';
import {PrimaryColor} from '../Configurations/ColorConfigs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMyContext} from '../Context/MyContext';
import loginNetworkCall, {LoginCall} from '../Network/Auth';
import {LoginURL} from '../Network/Constants';

const Login = ({navigation}) => {
  const [mobileno, setMobileno] = useState('');
  const [pin, setpin] = useState('');
  const {setUser} = useMyContext();
  const [showpin, setshowpin] = useState(false);

  const ShowPassword = () => {
    setshowpin(!showpin);
  };

  const StoreMobileNo = async () => {
    try {
      // Store the mobile number in AsyncStorage
      await AsyncStorage.setItem('userMobileNumber', mobileno);
      console.log('Mobile number stored successfully!');
    } catch (error) {
      console.error('Error storing mobile number: ', error);
    }
  };

  const callLoginApiold = async () => {
    try {
      const logindata = await loginNetworkCall(mobileno, pin);
      setTimeout(() => {
        if (logindata) {
          StoreMobileNo();
          navigation.navigate('Dashboard');
          console.log('User details updated in usecontext - login', logindata);
        }
      }, 7000); // 5000 milliseconds (5 seconds) timeout
    } catch (error) {
      console.error('Error in callLoginApi:', error);
      // Handle the error appropriately (e.g., show an error message to the user)
    }
  };

  const callLoginApinew = async () => {
    try {
      const logindata = await loginNetworkCall(mobileno, pin);
      console.log('logindata after await:', logindata);

      // Rest of the code...
    } catch (error) {
      console.error('Error in callLoginApi:', error);
      // Handle the error appropriately
    }
  };

  const callLoginApi = () => {
    const apiUrl = LoginURL;
    const requestData = {
      mobile: mobileno,
      pin: pin,
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
        // Check if the request was successful (status code in the range 200-299)

        // Parse the JSON response
        return response.json();
      })
      .then(data => {
        // Process the data received from the server
        console.log('Response:', data);
        if (data.code == '200') {
          StoreMobileNo();
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

  const phoneRegex = /^(?!.*(\d)\1{9})[6789]\d{9}$/;

  const Pinnumber = /^[0-9]{4}$/;

  const handleNextButton = () => {
    if (mobileno === '') {
      //alert('error');
      showMessage({
        message: 'Please Enter Mobile Number',
        // description: "My message description",
        type: 'danger',
        //backgroundColor: "purple", // background color
        //color: "#606060", // text color
      });
    } else if (!phoneRegex.test(mobileno)) {
      showMessage({
        message: "Invalid Phone Number', 'Please enter a valid phone number.",

        type: 'danger',
      });
    } else if (pin === '') {
      showMessage({
        message: 'Please Enter Pin Number',
        // description: "My message description",
        type: 'danger',
        //backgroundColor: "purple", // background color
        //color: "#606060", // text color
      });
    }
    // else if(pin.length < 4){
    //   showMessage({
    //     message: 'Please Enter the 4 digit Pin',
    //     // description: "My message description",
    //     type: 'danger',
    //     //backgroundColor: "purple", // background color
    //     //color: "#606060", // text color
    //   });
    // }
    else if (!Pinnumber.test(pin)) {
      showMessage({
        message: 'Please enter the pin only. Invalid pin !',
        // description: "My message description",
        type: 'danger',
        //backgroundColor: "purple", // background color
        //color: "#606060", // text color
      });
    } else {
      //callLoginApi();.............
      // StoreMobileNo();
      navigation.navigate('Dashboard');
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 20,
          width: '100%',
          justifyContent: 'flex-end',
          paddingHorizontal: 5,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 20,
            backgroundColor: PrimaryColor,
            padding: 8,
            width: 40,
            borderRadius: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon2 name="arrow-left" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.logo}>
        <Image
          // style={{
          //   height: 200,
          //   width: '75%',
          //   margin: 10,
          //   borderColor: 'lightskyblue',
          //   borderRadius: 10,
          // }}
          source={require('../Branding/Photos/Kodukku_logo.jpeg')}></Image>
      </View>

      <Text
        style={{
          fontSize: 25,
          margin: 16,
          color: 'black',
          fontFamily: PrimaryFontFamily,
        }}>
        Get your Dream Job
      </Text>

      <View style={styles.login}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '65%',
            borderBottomWidth: 0.5,
            justifyContent: 'center',
            marginLeft: 80,
          }}>
          <Icon name="mobile1" size={28} color={PrimaryColor} />
          <Text style={styles.text}>+91</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the Phone No"
            placeholderTextColor="dimgray"
            maxLength={10}
            onChangeText={text => setMobileno(text)}
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <View style={styles.login}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '65%',
            borderBottomWidth: 0.5,
            justifyContent: 'center',
            marginLeft: 80,
          }}>
          <Entypo name="key" size={28} color={PrimaryColor} />

          <TextInput
            style={{
              flex: 1,
              paddingHorizontal: 8,
              fontSize: 16,
              fontFamily: PrimaryFontFamily,
              color: 'black',
            }}
            placeholder="Enter the 4 Digit Pin"
            placeholderTextColor="dimgray"
            maxLength={4}
            secureTextEntry={!showpin}
            value={pin}
            onChangeText={text => setpin(text)}
          />
          <TouchableOpacity onPress={ShowPassword}>
            <Entypo
              name={showpin ? 'eye' : 'eye-with-line'}
              size={28}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleNextButton()}>
        <View style={styles.btn}>
          <Text
            style={{
              color: 'ghostwhite',
              fontSize: 20,
              fontFamily: PrimaryFontFamily,
              textAlign: 'center',
            }}>
            Log In
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.signupTextContainer}>
        <Text style={styles.text}>Create Your Account !</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.Sign}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logo: {
    height: 260,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    width: '100%',
    margin: 10,
  },
  input: {
    flex: 1,
    marginLeft: 3,
    fontSize: 16,
    fontFamily: PrimaryFontFamily,
    color: 'black',
  },
  text: {
    fontSize: 16,
    fontFamily: PrimaryFontFamily,
    color: 'dimgray',
  },
  btn: {
    width: '40%',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,

    backgroundColor: PrimaryColor,
    marginTop: 25,
  },
  signupTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 40,
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontFamily: PrimaryFontFamily,
    paddingHorizontal: 4,
  },
  Sign: {
    fontSize: 25,
    textDecorationLine: 'underline',
    marginLeft: 15,
    color: PrimaryColor,
    fontFamily: PrimaryFontFamily,
  },
});
