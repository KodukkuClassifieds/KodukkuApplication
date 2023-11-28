import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {PrimaryFontFamily} from '../Configurations/StyleConfigs';

const Welcome = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{alignItems: 'center', marginTop: '30%'}}>
        <Image
          source={require('../Branding/Photos/Kodukku_logo.jpeg')}
          style={{height: 200, width: 250}}
        />
      </View>
      <View
        style={{
          marginLeft: '10%',
          //backgroundColor:'pink',
          width: '70%',
          height: '20%',
          marginTop: '20%',
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#21618C',
            fontFamily: PrimaryFontFamily,
          }}>
          Take care
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 20,
              color: '#21618C',
              fontFamily: PrimaryFontFamily,
            }}>
            of your{' '}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#3498DB',
              fontFamily: PrimaryFontFamily,
            }}>
            career
          </Text>
        </View>
        <Text
          style={{
            fontSize: 15,
            color: 'gray',
            lineHeight: 20,
            textAlign: 'left',
            marginTop: 10,
            fontFamily: PrimaryFontFamily,
          }}>
          Explore countless opportunities and build a successful career with our
          app.
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View
          style={{
            height: 50,
            width: '80%',
            marginLeft: '10%',

            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 60,
            borderRadius: 25,
            backgroundColor: 'deepskyblue',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              fontFamily: PrimaryFontFamily,
            }}>
            Log in
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <View
          style={{
            height: 50,
            width: '80%',
            marginLeft: '10%',
            alignItems: 'center',
            borderWidth: 1,
            justifyContent: 'center',
            marginTop: 20,
            borderRadius: 25,
            borderColor: 'grey',
          }}>
          <Text
            style={{
              color: 'deepskyblue',
              fontSize: 17,
              fontFamily: PrimaryFontFamily,
            }}>
            Register
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
