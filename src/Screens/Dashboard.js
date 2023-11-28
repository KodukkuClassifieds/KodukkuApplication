import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import {PrimaryFontFamily} from '../Configurations/StyleConfigs';
import {PrimaryColor} from '../Configurations/ColorConfigs';

const Dashboard = ({navigation}) => {
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
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{}}>
          <EvilIcons name="navicon" size={32} color="dimgrey" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}
          style={styles.textinput}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 5,
            }}>
            <EvilIcons name="search" size={30} color="dimgrey" />
          </View>
          <Text
            style={{
              fontSize: 17,
              color: 'dimgray',
              fontFamily: PrimaryFontFamily,
              padding: 8,
            }}>
            Search jobs here...
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <MaterialIcons name="notifications" size={30} color="dimgrey" />
        </TouchableOpacity>
      </View>

      <View style={styles.JobsApply}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            padding: 8,
            marginLeft:10,
            fontFamily: PrimaryFontFamily,
          }}>
          Jobs Based on your Profile - ({list.length})
        </Text>
        <View style={{paddingHorizontal: 10, paddingRight: 10}}>
          <FlatList
            data={list}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingLeft: 8}}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.list}
                onPress={() =>
                  navigation.navigate('Description', {jobDetail: item})
                }>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    padding: 3,
                    fontFamily: PrimaryFontFamily,
                  }}>
                  {item.JobRole}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialIcons name="work" size={22} color={PrimaryColor} />
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'black',
                      padding: 5,
                      fontFamily: PrimaryFontFamily,
                    }}>
                    {item.Company} {item.CompanyRating}
                    <Icon3 name="star" size={20} color="gold" />
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <EvilIcons name="location" size={25} color={PrimaryColor} />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      padding: 2,
                      fontFamily: PrimaryFontFamily,
                    }}>
                    {item.Place}
                  </Text>
                </View>

                <Text
                  style={{
                    textAlign: 'right',
                    fontSize: 15,
                    fontFamily: PrimaryFontFamily,
                    color: 'dimgray',
                  }}>
                  {item.Announcement_Date}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
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
    //width: '100%',
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
    margin: 4,
    borderRadius: 10,
    borderColor: 'gainsboro',
  },
  JobsApply: {
    marginTop: 14,
    width: '100%',
    paddingHorizontal: 8,
  },
});
