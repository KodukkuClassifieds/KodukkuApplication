import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {PrimaryFontFamily} from '../Configurations/StyleConfigs';
import {PrimaryColor} from '../Configurations/ColorConfigs';
import {useMyContext} from '../Context/MyContext';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const {state} = useMyContext();
  console.log(state.user);
  const [name, setName] = useState();
  const [number, setMobileNumber] = useState();
  const [Email, setEmail] = useState(state.user.email);
  const [Qualification, setQualification] = useState(state.user.qualification);
  const [Gender, setGender] = useState(state.user.gender);
  const [Designation, setDesignation] = useState(state.user.role);

  useFocusEffect(() => {
    console.log('usecontext: ' + state.user.name);
    setName(state.user.name);
    setMobileNumber(state.user.mobile);
    setEmail(state.user.email);
    setQualification(state.user.qualification);
    setGender(state.user.gender);
    setDesignation(state.user.role);
  });

  // Remove item from AsyncStorage
  async function removeData() {
    try {
      await AsyncStorage.removeItem('userMobileNumber');
      console.log(`Data with key 'userMobileNumber' removed successfully.`);
    } catch (error) {
      console.error('Error removing data:', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{width: '100%', margin: 10, padding: 10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon3 name="arrow-back" size={30} color={PrimaryColor} />
        </TouchableOpacity>
      </View>

      <View style={styles.profile}>
        <View style={styles.logo}>
          <Icon2 name="account-circle-outline" size={120} color="gainsboro" />
        </View>
        {/*
        <TouchableOpacity style={styles.edit} onPress={console.log('hi')}>
          <Icon name="user-edit" size={30} color="deepskyblue" />
        </TouchableOpacity>
  */}
      </View>
      <ScrollView style={styles.details}>
        <View style={styles.design}>
          <View style={{justifyContent: 'center'}}>
            <Icon name="user" size={30} color={PrimaryColor} />
          </View>
          <View style={{flex: 1}}>
            <View style={{alignItems: 'flex-start', paddingHorizontal: 20}}>
              <Text style={styles.text}>Name</Text>
              <Text style={styles.text1}>{name}</Text>
            </View>
          </View>
        </View>
        <View style={styles.design}>
          <View style={{justifyContent: 'center'}}>
            <Icon name="phone-square-alt" size={30} color={PrimaryColor} />
          </View>
          <View style={{flex: 1}}>
            <View style={{alignItems: 'flex-start', paddingHorizontal: 20}}>
              <Text style={styles.text}>Phone number</Text>
              <Text style={styles.text1}>{number}</Text>
            </View>
          </View>
        </View>
        <View style={styles.design}>
          <View style={{justifyContent: 'center'}}>
            <Icon2 name="email-open-outline" size={30} color={PrimaryColor} />
          </View>
          <View style={{flex: 1}}>
            <View style={{alignItems: 'flex-start', paddingHorizontal: 16}}>
              <Text style={styles.text}>E-Mail</Text>
              <Text style={styles.text1}>{Email}</Text>
            </View>
          </View>
        </View>

        <View style={styles.design}>
          <View style={{justifyContent: 'center'}}>
            <Icon name="book" size={30} color={PrimaryColor} />
          </View>
          <View style={{flex: 1}}>
            <View style={{alignItems: 'flex-start', paddingHorizontal: 20}}>
              <Text style={styles.text}>Qualification</Text>
              <Text style={styles.text1}>{Qualification}</Text>
            </View>
          </View>
        </View>

        <View style={styles.design}>
          <View style={{justifyContent: 'center', paddingHorizontal: 8}}>
            <Icon name="male" size={30} color={PrimaryColor} />
          </View>
          <View style={{flex: 1}}>
            <View style={{alignItems: 'flex-start', paddingHorizontal: 18}}>
              <Text style={styles.text}>Gender</Text>
              <Text style={styles.text1}>{Gender}</Text>
            </View>
          </View>
        </View>
        <View style={styles.design}>
          <View style={{justifyContent: 'center'}}>
            <MaterialIcons name="work" size={28} color={PrimaryColor} />
          </View>
          <View style={{flex: 1}}>
            <View style={{alignItems: 'flex-start', paddingHorizontal: 20}}>
              <Text style={styles.text}>Designation</Text>
              <Text style={styles.text1}>{Designation}</Text>
            </View>
          </View>
        </View>

        <View style={styles.design}>
          <TouchableOpacity
            onPress={() => {
              removeData();
              navigation.navigate('Welcome');
            }}
            style={{
              flexDirection: 'row',

              flex: 1,
              paddingHorizontal: 3,
            }}>
            <Icon2 name="logout" size={30} color={PrimaryColor} />
            <View
              style={{
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingHorizontal: 16,
              }}>
              <Text style={styles.text}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  profile: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    width: '40%',
    //borderWidth: 2,
    //borderColor: 'lightskyblue',
    //borderRadius: 600,
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    width: '90%',
    marginTop: 20,
  },
  design: {
    width: '95%',
    margin: 12,
    backgroundColor: 'aliceblue',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: PrimaryColor,
    marginRight: 10,
    fontFamily: PrimaryFontFamily,
    //textDecorationLine: 'underline',
  },
  text1: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    fontFamily: PrimaryFontFamily,
    //margin: 30,
  },
});
