import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import {PrimaryFontFamily} from '../Configurations/StyleConfigs';
import {PrimaryColor} from '../Configurations/ColorConfigs';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Applylist = ({navigation}) => {
  const [list, setlist] = useState([
    {
      JobId: 1,
      JobRole: 'React native Developer',
      SalaryPerAnnum: 80000,
      Requirements: [
        {id: 0, description: 'Good in UI Designing'},
        {id: 1, description: 'Experience in figma'},
        {id: 2, description: 'Launching app in app in playstore & appstore'},
      ],
      Responsibilites: [
        {id: 0, description: 'Need to maintain the existing app'},
        {id: 1, description: 'improve the app performance'},
        {
          id: 2,
          description:
            'Based on client requirement need add new functionalites',
        },
      ],
      Company: 'Kaspon ',
      Place: 'Chennai',
      Announcement_Date: '4 days ago',
      CompanyRating: '4.5',
      AppliedOn: '2021-08-06',
    },
    {
      JobId: 2,
      JobRole: 'Mobile App Developer',
      SalaryPerAnnum: 50000,
      Requirements: [
        {id: 0, description: 'Good in UI Designing'},
        {id: 1, description: 'Experience in figma'},
        {id: 2, description: 'Launching app in app in playstore & appstore'},
      ],
      Responsibilites: [
        {id: 0, description: 'Need to maintain the existing app'},
        {id: 1, description: 'improve the app performance'},
        {
          id: 2,
          description:
            'Based on client requirement need add new functionalites',
        },
      ],
      Company: 'Kodukku',
      Place: 'Chennai',
      Announcement_Date: '3 days ago',
      CompanyRating: '4.8',
      AppliedOn: '2023-09-08',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={{marginTop: 15}}>
        <FlatList
          data={list}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                navigation.navigate('Description', {jobDetail: item})
              }>
              <Text
                style={{
                  fontSize: 20,
                  color: PrimaryColor,
                  //padding: 3,
                  fontFamily: PrimaryFontFamily,
                }}>
                {item.JobRole}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 5,
                }}>
                <MaterialIcons name="work" size={22} color={PrimaryColor} />
                <Text
                  style={{
                    fontSize: 14,
                    color: 'black',
                    padding: 5,
                    fontFamily: PrimaryFontFamily,
                  }}>
                  {item.Company} {item.CompanyRating}
                  <Icon3 name="star" size={14} color="gold" />
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 5}}>
                <EvilIcons name="location" size={25} color={PrimaryColor} />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    padding: 2,
                    fontFamily: PrimaryFontFamily,
                  }}>
                  {item.Place}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  
                  width:'100%',
                  justifyContent:'flex-end'
                  //paddingHorizontal: 8,
                }}>
                <Icon2
                  name="clock-time-twelve-outline"
                  size={20}
                  color={PrimaryColor}
                  style={{marginTop:4}}
                />
                <Text style={styles.status}>Applied on: {item.AppliedOn} </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

/*
    
                */

export default Applylist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listdata: {
    width: '95%',
    borderWidth: 1,
    //backgroundColor: 'mintcream',
    borderColor: 'lightgrey',
    borderRadius: 8,
    padding: 10,
  },
  title: {
    fontSize: 21,
    marginLeft: 10,
    color: 'black',
    margin: 4,
    fontFamily: PrimaryFontFamily,
  },
  company: {
    fontSize: 16,
    marginLeft: 8,
    color: 'black',
    fontFamily: PrimaryFontFamily,
  },
  rate: {
    fontSize: 16,
    //marginLeft: 10,
    //margin: 4,
    fontFamily: PrimaryFontFamily,
    color: 'dimgray',
  },
  status: {
    fontSize: 14,
    margin: 4,
  //  marginLeft: 8,
    fontFamily: PrimaryFontFamily,
    color: 'darkgray',
  },
  View: {
    fontSize: 18,
    marginLeft: 3,
    margin: 4,
    fontFamily: PrimaryFontFamily,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textinput: {
    width: '70%',
    borderRadius: 30,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    paddingLeft: 8,
    borderColor: 'silver',
    alignItems: 'center',
  },
  searchbar: {
    width: '100%',
    flexDirection: 'row',
    padding: 8,
    marginTop: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    borderWidth: 2,
    padding: 8,

    borderRadius: 10,
    borderColor: 'gainsboro',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  JobsApply: {
    marginTop: 14,
    width: '100%',
    paddingHorizontal: 8,
  },
});
