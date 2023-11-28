import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import {PrimaryFontFamily} from '../Configurations/StyleConfigs';
import {PrimaryColor} from '../Configurations/ColorConfigs';

const Search = ({navigation}) => {
  const [list, setlist] = useState([
    {
      id: 1,
      name: 'React native Developer',
      company: 'Kaspon ',
      place: 'Chennai',
      day: '4d ago',
      rate: '4.5',
    },
    {
      id: 2,
      name: 'React native Developer',
      company: 'Kaspon ',
      place: 'Chennai',
      day: '4d ago',
      rate: '4.5',
    },
    {
      id: 3,
      name: 'React native Developer',
      company: 'Kaspon ',
      place: 'Chennai',
      day: '4d ago',
      rate: '4.5',
    },
  ]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 4,
          margin: 8,
        }}>
        <TouchableOpacity
          style={{
            width: '10%',
            margin: 5,
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <Icon3 name="arrow-back" size={28} color={PrimaryColor} />
        </TouchableOpacity>
        <View style={{width: '90%'}}>
          <View style={styles.searchBar}>
            <Icon name="search1" size={30} color={PrimaryColor} />
            <TextInput
              style={styles.textinput}
              placeholder="Search the Job..."
              placeholderTextColor="grey"></TextInput>
          </View>
        </View>
      </View>

      <View>
        <View style={{margin: 10}}>
          <FlatList
            data={list}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.list}
                onPress={() => navigation.navigate('Description')}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    padding: 3,
                    fontFamily: PrimaryFontFamily,
                  }}>
                  {item.name}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon4 name="work" size={22} color={PrimaryColor} />
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'black',
                      padding: 5,
                      margin: 2,
                      fontFamily: PrimaryFontFamily,
                    }}>
                    {item.company} {item.rate}
                    <Icon name="star" size={20} color="gold" />
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Icon2 name="location" size={22} color={PrimaryColor} />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      padding: 2,
                      paddingHorizontal: 7,
                      fontFamily: PrimaryFontFamily,
                    }}>
                    {item.place}
                  </Text>
                </View>

                <View style={{}}>
                  <Text
                    style={{
                      textAlign: 'right',
                      fontSize: 15,
                      fontFamily: PrimaryFontFamily,
                      color: 'dimgray',
                    }}>
                    {item.day}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBar: {
    width: '98%',
    backgroundColor: 'ghostwhite',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: 'darkgrey',
    alignItems: 'center',
  },
  textinput: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 10,
    fontFamily: PrimaryFontFamily,
  },
  list: {
    width: '100%',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    borderColor: 'gainsboro',
  },
});
