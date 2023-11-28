import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {PrimaryFontFamily} from '../Configurations/StyleConfigs';
import {showMessage} from 'react-native-flash-message';
import {PrimaryColor} from '../Configurations/ColorConfigs';

const Otp = ({navigation}) => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const [resendTime, setResendTime] = useState(90); // Initialize an array to store OTP digits

  const handleOTPChange = (text, index) => {
    if (/^\d+$/.test(text) && text.length <= 1) {
      // Check if the input is a digit and has a length of 1
      const updatedOTP = [...otp];
      updatedOTP[index] = text;
      setOTP(updatedOTP);

      // Auto-focus next input if available
      if (index < otp.length - 1) {
        this[`otpInput${index + 1}`].focus();
      }
    }
  };

  const handleNextButton = () => {
    if (otp.length === 0) {
      showMessage({message: 'Enter the OTP pin', type: 'danger'});
    } else if (otp.length < 4) {
      showMessage({message: 'Enter a valid 4-digit OTP pin', type: 'danger'});
    } else {
      //clearInterval(timerRef.current); // Clear the timer when navigating to the Dashboard
      navigation.navigate('Qualification');
    }
  };
  const timer = () =>
    setInterval(() => {
      setResendTime(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        }
        //  else {
        //   clearInterval(timer); // Clear the timer when it reaches 0
        //   return 0;
        // }
      });
    }, 1000);

  useEffect(() => {
    // Start a countdown timer
    timer();

    // Cleanup the timer when the component unmounts
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  return (
    <View style={styles.container1}>
      <View
        style={{
          height: 65,
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
            <Icon name="arrow-left" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.logo}>
        <Image
          resizeMode="cover"
          source={require('../Branding/Photos/Kodukku_logo.jpeg')}></Image>
      </View>

      <View style={styles.text}>
        <Text style={styles.design}>Enter the 4 Digit verification</Text>
        <Text style={styles.design}> Code Sent To your number</Text>
      </View>

      <View style={styles.container}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => (this[`otpInput${index}`] = ref)} // Create a ref for each input
            style={styles.input}
            value={digit}
            onChangeText={text => {
              handleOTPChange(text, index);
            }}
            //  onChangeText={text=> setOTP(text)}

            maxLength={1}
            keyboardType="numeric"
            secureTextEntry={true}
          />
        ))}
      </View>

      <Text
        style={{
          margin: 20,
          fontSize: 18,

          color: 'dodgerblue',
          textAlign: 'center',
          fontFamily: PrimaryFontFamily,
        }}>
        {resendTime > 0
          ? `Resend Code In ${Math.floor(resendTime / 60)}:${
              resendTime % 60 < 10 ? '0' : ''
            }${resendTime % 60}`
          : 'OTP Pin Expired'}
      </Text>

      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={handleNextButton}>
        <View style={styles.btn}>
          <Text
            style={{
              color: 'ghostwhite',
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: PrimaryFontFamily,
            }}>
            Confirm Pin
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setResendTime(90);
          timer();
        }}>
        <Text
          style={{
            margin: 20,
            fontSize: 22,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
            fontFamily: PrimaryFontFamily,
          }}>
          Resend OTP
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    height: 250,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 40,

    fontSize: 20,
    borderWidth: 1,
    borderColor: 'gray',
    textAlign: 'center',
    marginBottom: 20,
    margin: 8,
    color: 'black',
  },
  design: {
    fontSize: 22,
    color: 'black',
    fontFamily: PrimaryFontFamily,
  },
  btn: {
    width: '40%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: PrimaryColor,
    marginTop: 20,
  },
});

export default Otp;
