import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useRef} from 'react';

import MultiSelect from 'react-native-multiple-select';

import {PrimaryFontFamily} from '../Configurations/StyleConfigs';
import {PrimaryColor} from '../Configurations/ColorConfigs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {showMessage} from 'react-native-flash-message';
const items = [
  {id: '1', name: 'Software Developer/Engineer'},
  {id: '2', name: 'Systems Analyst'},
  {id: '3', name: 'Network Administrator/Engineer'},
  {id: '4', name: 'Database Administrator'},
  {id: '5', name: 'IT Project Manager'},
  {id: '6', name: 'Business Analyst'},
  {id: '7', name: 'Quality Assurance Engineer/Tester'},
  {id: '8', name: 'Security Analyst'},
  {id: '9', name: 'System Administrator'},
  {id: '10', name: 'Technical Support Specialist'},
];

const Designation = ({navigation}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const multiSelectRef = useRef();

  const onSelectedItemsChange = items => {
    setSelectedItems(items);
  };

  const validation = () => {
    if (selectedItems.length === 0) {
      // Alert.alert('Select your Designation');
      showMessage({
        message: 'Please Select your Designation',
        type: 'danger',
      });
    } else {
      navigation.navigate('Dashboard');
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
            color: PrimaryColor,
            marginLeft:10
          }}>
          Select Your Designation's
        </Text>
      </View>
      <View style={{margin: 20, padding: 10}}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={multiSelectRef}
          styleTextDropdown={{fontFamily: PrimaryFontFamily}}
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Select The Designation"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={text => console.log(text)}
          FontFamily={PrimaryFontFamily}
          selectedItemTextColor="dimgray"
          itemTextColor="black"
          displayKey="name"
          submitButtonColor={PrimaryColor}
          submitButtonText="Submit"
        />
      </View>
    </View>
  );
};

export default Designation;
