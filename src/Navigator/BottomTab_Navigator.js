import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../Screens/Dashboard';
import Profile from '../Screens/Profile';
import Applylist from '../Screens/Applylist';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

export default function BottomTab_Navigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: 'deepskyblue', // Change the active tab button color to blue
        style: {
          borderTopLeftRadius: 10, // Add border radius styles
          borderTopRightRadius: 10,
        },
        headerShown:false
      }}
      >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Applied"
        component={Applylist}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon1 name="paper-plane" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
