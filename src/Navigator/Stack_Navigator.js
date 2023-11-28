import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Otp from '../Screens/Otp';
import Signup from '../Screens/Signup';
//import Launch from '../Screens/Launch';
import BottomTab_Navigator from './BottomTab_Navigator';
import Description from '../Screens/Description';
import Search from '../Screens/Search';
import Welcome from '../Screens/Welcome';
import Notification from '../Screens/Notification';
import Drawer_Navigator from './Drawer_Navigator';
import Qualification from '../Screens/Qualification';
import Gender from '../Screens/Gender';
import Designation from '../Screens/Designation';

const Stack = createNativeStackNavigator();

function Stack_Navigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Launch" component={Launch} /> */}
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="Dashboard" component={Drawer_Navigator} />
      <Stack.Screen name="Description" component={Description} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Qualification" component={Qualification} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Gender" component={Gender} />
      <Stack.Screen name="Designation" component={Designation} />
    </Stack.Navigator>
  );
}

export default Stack_Navigator;
