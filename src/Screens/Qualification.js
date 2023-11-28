import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import MultiSelect from 'react-native-multiple-select';
import {PrimaryFontFamily} from '../Configurations/StyleConfigs';
import {PrimaryColor} from '../Configurations/ColorConfigs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {showMessage} from 'react-native-flash-message';

const items = [
  {key: '1', value: 'MCA'},
  {key: '2', value: 'BCA'},
  {key: '3', value: 'Bsc CS'},
  {key: '4', value: 'Data science'},
  {key: '5', value: 'Msc CS'},
];

const Qualification = ({navigation}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const multiSelectRef = useRef();

  const onSelectedItemsChange = items => {
    setSelectedItems(items);
  };

  const validation = () => {
    if (selectedItems.length === 0) {
      // alert('Select the qualification');
      showMessage({
        message: 'Please Select your the Qualification',
        type: 'danger',
      });
    } else {
      navigation.navigate('Gender');
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

      <View
        style={{
          //backgroundColor: "yellow",
          //alignItems: "center",
          justifyContent: 'center',
          margin: 15,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: PrimaryFontFamily,
            color: PrimaryColor,
            marginLeft:10
          }}>
          Select Your Qualification
        </Text>
        <View style={{marginTop: 20,marginLeft:10}}>
          <MultiSelect
            hideTags
            items={items}
            uniqueKey="key"
            ref={multiSelectRef}
            styleTextDropdown={{fontFamily: PrimaryFontFamily}}
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Select The Qualification"
            searchInputPlaceholderText="Search Items..."
            onChangeInput={text => console.log(text)}
            FontFamily={PrimaryFontFamily}
            selectedItemTextColor={PrimaryColor}
            itemTextColor="black"
            displayKey="value"
            submitButtonColor={PrimaryColor}
            submitButtonText="Submit"
          />
        </View>
      </View>
    </View>
  );
};

export default Qualification;

const styles = StyleSheet.create({
  customSelectList: {
    color: 'blue' /* Set the desired text color here */,
  },
});
