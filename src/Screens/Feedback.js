import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/Octicons';
import Icon5 from 'react-native-vector-icons/Fontisto';
import {PrimaryFontFamily} from '../Configurations/StyleConfigs';
import {PrimaryColor} from '../Configurations/ColorConfigs';
import {showMessage} from 'react-native-flash-message';

// import { Entypo } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { Octicons } from "@expo/vector-icons";
// import { Fontisto } from "@expo/vector-icons";

const Feedback = ({navigation}) => {
  const [activesmiley, setActivesmiley] = useState(0);
  const [feedback, setFeedback] = useState('');

  const feedback_validation = () => {
    if (feedback === '') {
      // setMsgcontent("Please Enter the feedback");
      // setMsgshow(true);
      showMessage({
        message: 'Please Enter The Feedback',
        type: 'danger',
      });
    } else if (activesmiley === 0) {
      // setMsgcontent("Please Enter the feedback");
      // setMsgshow(true);
      showMessage({
        message: 'Pick up any one emoji',
        type: 'danger',
      });
    } else {
      Alert.alert('Feed back send Successfully');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
        }}>
        <View
          style={{
            height: 100,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="circle-with-cross" size={27} color="red" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            margin: 20,
          }}>
          <Text style={{fontFamily: PrimaryFontFamily, color: 'dimgray'}}>
            Give feedback
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: PrimaryFontFamily,
              color: 'dimgray',
            }}>
            what do you think of the editing tool?
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: 20,
          }}>
          <TouchableOpacity onPress={() => setActivesmiley(1)}>
            <Icon3
              name="angry"
              size={30}
              color={activesmiley === 1 ? 'red' : 'black'}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActivesmiley(2)}>
            <Icon
              name="emoji-sad"
              size={30}
              color={activesmiley === 2 ? 'gold' : 'black'}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActivesmiley(3)}>
            <Icon2
              name="emoticon-sad-outline"
              size={35}
              color={activesmiley === 3 ? 'gold' : 'black'}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActivesmiley(4)}>
            <Icon4
              name="smiley"
              size={30}
              color={activesmiley === 4 ? 'gold' : 'black'}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActivesmiley(5)}>
            <Icon5
              name="smiley"
              size={30}
              color={activesmiley === 5 ? 'gold' : 'black'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 200,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: PrimaryFontFamily,
              color: 'dimgray',
            }}>
            Do you have any thoughts you'd like to share?
          </Text>

          <View
            style={{
              //backgroundColor: 'pink',

              marginTop: '10%',
              borderWidth: 1,
              marginRight: '5%',
              borderRadius: 10,
              borderColor: PrimaryColor,
            }}>
            <TextInput
              placeholder="Hi"
              placeholderTextColor="dimgray"
              onChangeText={value => setFeedback(value)}
              style={{marginLeft: 10, fontSize: 18, color: 'black', margin: 10}}
            />
          </View>
        </View>
        <View
          style={{
            height: '15%',
          }}>
          <Text style={{fontFamily: PrimaryFontFamily, color: 'dimgray'}}>
            May we follow you up on your feedback?
          </Text>
          <View
            style={{
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'lightgray',
                width: '30%',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
              }}>
              <Text style={{color: 'dimgray'}}>YES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '30%',
                padding: 10,
                backgroundColor: 'lightgray',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'dimgray'}}>NO</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* {msgshow ? (
          <View
            style={{
              alignItems: "center",
              height: "5%",
              //backgroundColor: "black",
              width: 300,
              //marginTop: 20,
            }}
          >
            <Text style={{ color: "red", marginTop: 7 }}>{msgcontent}</Text>
          </View>
        ) : (
          <View style={{ height: 40, marginTop: 20 }}></View>
        )} */}
        <View
          style={{
            height: 250,
            marginTop: 30,
            //backgroundColor: "violet",
          }}>
          <View
            style={{
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              marginTop: '2%',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={feedback_validation}
              style={{
                borderWidth: 1,
                padding: 10,
                width: '40%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                borderColor: PrimaryColor,
                backgroundColor: PrimaryColor,
              }}>
              <Text style={{color: 'white', fontFamily: PrimaryFontFamily}}>
                Submit
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 10,
                borderWidth: 1,
                width: '40%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                borderColor: PrimaryColor,
              }}>
              <Text style={{fontFamily: PrimaryFontFamily, color: 'dimgray'}}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({});
