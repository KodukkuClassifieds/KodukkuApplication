import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {PrimaryColor} from '../Configurations/ColorConfigs';
import {PrimaryFontFamily} from '../Configurations/StyleConfigs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {showMessage} from 'react-native-flash-message';
const Gender = ({navigation}) => {
  const [gender, setGender] = useState(0);

  const validation = () => {
    if (gender === 0) {
      //Alert.alert('please select your gender');
      showMessage({
        message: 'Please Select your Gender!',
        type: 'danger',
      });
    } else {
      navigation.navigate('Designation');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          width: '100%',
          marginTop: 30,
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="less-than"
            size={20}
            color={PrimaryColor}
          />
          <Text
            style={{
              fontSize: 18,
              color: PrimaryColor,
              fontFamily: PrimaryFontFamily,
            }}>
            BACK
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={validation}>
          <Text
            style={{
              fontSize: 18,
              color: PrimaryColor,
              fontFamily: PrimaryFontFamily,
            }}>
            NEXT
          </Text>
          <MaterialCommunityIcons
            name="greater-than"
            size={20}
            color={PrimaryColor}
          />
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20, paddingHorizontal: 14}}>
        <Text
          style={{
            fontFamily: PrimaryFontFamily,
            fontSize: 20,
            marginLeft:20,
            color: PrimaryColor,
          }}>
          Select Your Gender
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          //height: '20%',
          marginTop:20,
          //backgroundColor:'pink',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          onPress={() => setGender(1)}
          style={{
            borderWidth: 1,
            width: '35%',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            borderColor: PrimaryColor,
            backgroundColor: gender == 1 ? PrimaryColor : 'white',
          }}>
          <Text
            style={{
              fontFamily: PrimaryFontFamily,
              color: gender == 1 ? 'white' : 'black',
            }}>
            Male
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setGender(2)}
          style={{
            padding: 10,
            borderWidth: 1,
            width: '35%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            borderColor: PrimaryColor,
            backgroundColor: gender == 2 ? PrimaryColor : 'white',
          }}>
          <Text
            style={{
              fontFamily: PrimaryFontFamily,
              color: gender == 2 ? 'white' : 'black',
            }}>
            Female
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Gender;

const styles = StyleSheet.create({});
