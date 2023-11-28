import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Login from './Login';
import {PrimaryFontFamily} from '../Configurations/StyleConfigs';
import {PrimaryColor} from '../Configurations/ColorConfigs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';
import {useMyContext} from '../Context/MyContext';
import {RegisterURL} from '../Network/Constants';

const Signup = ({navigation}) => {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [Phone, setPhone] = useState('');
  const [pin, setpin] = useState('');
  const [aadhar, setaadhar] = useState('');
  const {setUser} = useMyContext('');
  const [showpin, setshowpin] = useState(false);

  const ShowPassword = () => {
    setshowpin(!showpin);
  };

  const StoreMobileNo = async () => {
    try {
      // Store the mobile number in AsyncStorage
      await AsyncStorage.setItem('userMobileNumber', Phone);
      console.log('Mobile number stored successfully!');
    } catch (error) {
      console.error('Error storing mobile number: ', error);
    }
  };

  const CallSignUpAPi = () => {
    const apiUrl = RegisterURL;
    const requestData = {
      name: username,
      mobile: Phone,
      email: email,
      gender: 'Female',
      dob: '1999-08-17',
      qualification: 'B.E',
      job: 'software engineer',
      role: 'Mobile App Developer',
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
        if (data.code == '201') {
          console.log('user details updated in usecontext - signup');
          setUser({
            id: 1,
            name: username,
            email: email,
            mobile: Phone,
            gender: 'Male',
            dob: '1989-08-17',
            qualification: 'M.E',
            job: 'Senior software engineer',
            role: 'Mobile App Developer',
            pin: pin,
            email_verified_at: null,
            mobile_verified_at: null,
            created_at: '2023-11-14T18:29:59.000000Z',
            updated_at: '2023-11-14T18:29:59.000000Z',
          });
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

  const handleLogin = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^(?!.*(\d)\1{9})[6789]\d{9}$/;
    const Pinnumber = /^[0-9]{4}$/;
    if (!username) {
      showMessage({
        message: 'Please fill in all fields',
        type: 'danger',
      });
    } else if (username === '') {
      showMessage({
        message: 'Enter the user-name',
        type: 'danger',
      });
    } else if (email === '') {
      showMessage({
        message: ' Please enter Email address',

        type: 'danger',
      });
    } else if (!emailRegex.test(email)) {
      showMessage({
        message: "Invalid Email', 'Please enter a valid email address.",

        type: 'danger',
      });
    } else if (Phone === '') {
      showMessage({
        message: 'Please enter phone number',

        type: 'danger',
      });
    } else if (!phoneRegex.test(Phone)) {
      showMessage({
        message:
          "Invalid Phone Number', 'Please enter a valid Indian phone number.",

        type: 'danger',
      });
    } else if (aadhar === '') {
      showMessage({
        message: 'Please Enter The your Aadhar card Number .',

        type: 'danger',
      });
    } else if (aadhar.length < 12) {
      showMessage({
        message:
          "'Invalid aadhar Number', 'Please enter a valid aadhar number.",

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
    } else if (!Pinnumber.test(pin)) {
      showMessage({
        message: 'Please enter the pin only. Invalid pin !',
        // description: "My message description",
        type: 'danger',
        //backgroundColor: "purple", // background color
        //color: "#606060", // text color
      });
    } else {
      //console.log('Registration successful');
      StoreMobileNo();
      CallSignUpAPi();
      navigation.navigate('Qualification');
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 5,
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
            height: 40,
            width: 40,
            borderRadius: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.logo}>
        <Image source={require('../Branding/Photos/Kodukku_logo.jpeg')}></Image>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.user}>
          <Icon name="user" size={30} color={PrimaryColor} />

          <TextInput
            style={styles.input}
            placeholder="User Name"
            placeholderTextColor="dimgray"
            maxLength={10}
            onChangeText={text => setusername(text)}
          />
        </View>

        <View style={styles.user}>
          <Icon1 name="email-outline" size={30} color={PrimaryColor} />

          <TextInput
            style={styles.input}
            placeholder="Enter the E-mail"
            placeholderTextColor="dimgray"
            keyboardType="email-address"
            onChangeText={text => setemail(text)}
          />
        </View>

        <View style={styles.user}>
          <Icon1 name="phone" size={30} color={PrimaryColor} />

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            maxLength={10}
            placeholderTextColor="dimgray"
            keyboardType="numeric"
            onChangeText={text => setPhone(text)}
          />
        </View>
        <View style={styles.user}>
          <Feather name="users" size={30} color={PrimaryColor} />

          <TextInput
            style={styles.input}
            placeholder="Aadhar number"
            maxLength={12}
            placeholderTextColor="dimgray"
            keyboardType="numeric"
            onChangeText={text => setaadhar(text)}
          />
        </View>

        <View style={styles.login}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '80%',
              borderBottomWidth: 1,
              justifyContent: 'center',
              marginLeft: 40,
              borderColor: 'grey',
            }}>
            <Entypo name="key" size={28} color={PrimaryColor} />

            <TextInput
              style={{
                flex: 1,
                paddingHorizontal: 20,
                fontSize: 18,
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
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>

          <View style={styles.signupTextContainer}>
            <Text style={styles.text}>Do you have Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate(Login)}>
              <Text style={styles.Sign}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    marginTop: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logotext: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    fontFamily: PrimaryFontFamily,
  },
  user: {
    marginTop: 10,
    width: '80%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gainsboro',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    margin: 15,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 15,
    fontFamily: PrimaryFontFamily,
    color: 'black',
  },
  button: {
    width: '50%',
    backgroundColor: PrimaryColor,
    padding: 6,
    borderRadius: 5,
    borderRadius: 100,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: PrimaryFontFamily,
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontFamily: PrimaryFontFamily,
  },
  Sign: {
    fontSize: 25,
    textDecorationLine: 'underline',
    marginLeft: 15,
    color: PrimaryColor,
    fontFamily: PrimaryFontFamily,
  },
  signupTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 40,
  },
  login: {
    width: '100%',
    margin: 10,
  },
});

export default Signup;
