import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {PrimaryFontFamily} from '../Configurations/StyleConfigs';
import {PrimaryColor} from '../Configurations/ColorConfigs';

const Description = ({route ,navigation}) => {

  const {jobDetail}=route.params;  
  
  const Requirements = [
    {
      key: 1,
      point: 'Lorem ipsum dolor sit amet',
    },
    {
      key: 2,
      point: 'Anean non orci id felis cursus semper',
    },
    {
      key: 3,
      point: 'Nunc enim ante congue a porttitor',
    },
    {
      key: 4,
      point: 'Curabitur eu posuere nunc',
    },
    {
      key: 5,
      point: 'Duis commodo vestibulus augue',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: PrimaryColor}}>
      <View
        style={{
          backgroundColor: PrimaryColor,
          height: '25%',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 20,
            backgroundColor: PrimaryColor,
            width: 30,
            borderRadius: 20,
            marginLeft: '5%',
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', borderRadius: 20}}>
          <Image
            source={require('../Branding/Photos/Kodukku_logo.jpeg')}
            style={{
              width: '50%',
              borderRadius: 30,
              shadowColor: 'black',
            }}
          />
        </View>
      </View>
      <View
        style={{
          height: '100%',
          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <View
          style={{
            //backgroundColor:'pink',
            marginLeft: '5%',
            marginRight: '5%',
            height: '15%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '70%',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 17,
                color: PrimaryColor,
                fontFamily: PrimaryFontFamily,
              }}>
              Regular UX/UI
            </Text>
            <Text
              style={{
                fontFamily: PrimaryFontFamily,
                fontSize: 17,
                color: PrimaryColor,
              }}>
              designer
            </Text>
          </View>
          <View
            style={{
              width: '30%',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: PrimaryFontFamily,
                fontSize: 17,
                color: PrimaryColor,
              }}>
              $80,000
            </Text>
            <Text style={{color: PrimaryColor, fontFamily: PrimaryFontFamily}}>
              per annum
            </Text>
          </View>
        </View>
        <View style={{}}>
          <Text
            style={{
              fontFamily: PrimaryFontFamily,
              color: PrimaryColor,
              marginLeft: 20,
            }}>
            Requirements
          </Text>
        </View>

        <View
          style={{
            height: '20%',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 10,
          }}>
          <FlatList
            data={jobDetail.Requirements}
            keyExtractor={item => item.key}
            numColumns={1}
            renderItem={({item}) => (
              <View style={{}}>
                <Text style={{fontFamily: PrimaryFontFamily, color: 'dimgray'}}>
                  {item.description}
                </Text>
              </View>
            )}
          />
        </View>
        <View style={{height: '20%', marginLeft: 20, marginRight: 20}}>
          <Text style={{fontFamily: PrimaryFontFamily, color: PrimaryColor}}>
            Responsibities
          </Text>
          <View
          style={{
         //   height: '20%',
            marginRight: 20,
            marginTop: 10,
          }}>
          <FlatList
            data={jobDetail.Responsibilites}
            keyExtractor={item => item.key}
            numColumns={1}
            renderItem={({item}) => (
              <View style={{}}>
                <Text style={{fontFamily: PrimaryFontFamily, color: 'dimgray'}}>
                  {item.description}
                </Text>
              </View>
            )}
          />
        </View>
        </View>
        <TouchableOpacity>
          <View
            style={{
              height: 50,
              marginLeft: '10%',
              marginRight: '10%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              borderRadius: 25,
              backgroundColor: PrimaryColor,
            }}>
            <Text style={{color: 'white', fontFamily: PrimaryFontFamily}}>
              Apply Now
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({});
