import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PrimaryFontFamily} from '../Configurations/StyleConfigs';
import {PrimaryColor} from '../Configurations/ColorConfigs';

const Notification = ({navigation}) => {
  var Notifications = [
    {
      key: 1,
      propose: 'UX Researching Workshop proposes to reschedule an appointment',
      Date: '15/09/22',
    },
    {
      key: 2,
      propose: 'UX Researching Workshop proposes to reschedule an appointment',
      Date: '15/09/22',
    },
  ];
  const [acceptdeny, setAcceptdeny] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <TouchableOpacity
          style={{
            //backgroundColor: "pink",
            alignItems: 'center',
            justifyContent: 'flex-start',
            margin: 20,
            flexDirection: 'row',
          }}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-small-left" size={35} color="deepskyblue" />
          <Text
            style={{
              fontSize: 18,
              fontFamily: PrimaryFontFamily,
              color: PrimaryColor,
            }}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          //backgroundColor: "yellow",
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: PrimaryFontFamily,
            color: PrimaryColor,
          }}>
          Notifications
        </Text>
      </View>
      <FlatList
        data={Notifications}
        keyExtractor={item => item.key}
        numColumns={1}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,

              // marginLeft: '2%',
              // marginRight: '5%',
              // marginTop: 30,
              flexDirection: 'row',
              margin: 8,
            }}>
            <View
              style={{
                width: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons
                name="notifications-circle-outline"
                size={60}
                color="deepskyblue"
              />
            </View>
            <View
              style={{
                //backgroundColor:'green',
                width: '80%',
                padding: 10,
              }}>
              <View style={{padding: 8, margin: 8}}>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'dimgray',
                    fontFamily: PrimaryFontFamily,
                  }}>
                  {item.propose}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'gray',
                    fontFamily: PrimaryFontFamily,
                    padding: 4,
                    marginLeft: 12,
                    margin: 8,
                  }}>
                  {item.Date}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  //backgroundColor:'pink',

                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity
                  onPress={() => setAcceptdeny(1)}
                  style={{
                    width: '40%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 8,
                    borderRadius: 20,
                    backgroundColor:
                      acceptdeny == 1 ? PrimaryColor : 'lightgray',
                  }}>
                  <Text
                    style={{
                      color: acceptdeny == 1 ? 'white' : 'black',
                      fontFamily: PrimaryFontFamily,
                    }}>
                    Accept
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setAcceptdeny(2)}
                  style={{
                    width: '40%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    padding: 8,
                    backgroundColor:
                      acceptdeny == 2 ? PrimaryColor : 'lightgray',
                  }}>
                  <Text
                    style={{
                      color: acceptdeny == 2 ? 'white' : 'black',
                      fontFamily: PrimaryFontFamily,
                    }}>
                    Deny
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
