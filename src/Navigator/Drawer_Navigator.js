import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import Profile from '../Screens/Profile';
import BottomTab_Navigator from './BottomTab_Navigator';
import Notification from '../Screens/Notification';
import Feedback from '../Screens/Feedback';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {PrimaryColor} from '../Configurations/ColorConfigs';
import {PrimaryFontFamily} from '../Configurations/StyleConfigs';

const Drawer = createDrawerNavigator();
const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Custom Header */}
      <View style={{}}>
        <View
          style={{
            alignItems: 'center',
            borderBottomWidth: 0.5,
            margin: 5,
            borderBottomColor: 'silver',
          }}>
          <Feather name="user" color={PrimaryColor} size={60} />
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              color: 'gray',
              fontFamily: PrimaryFontFamily,
              padding: 5,
            }}>
            Vasanth
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'gray',
              padding: 5,
              fontFamily: PrimaryFontFamily,
            }}>
            rvasant.r@gmail.com
          </Text>
        </View>

        {/* Default Drawer Items */}
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default function Drawer_Navigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        activeTintColor: 'red',
        headerShown: false,
        Style: {},
      }}>
      <Drawer.Screen
        name="Explore"
        component={BottomTab_Navigator}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon2 name="user" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="notifications-sharp" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Feedback"
        component={Feedback}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon3 name="feedback" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
