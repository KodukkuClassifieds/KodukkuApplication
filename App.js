import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack_Navigator from './src/Navigator/Stack_Navigator';
import FlashMessage from 'react-native-flash-message';
import {MyContextProvider} from './src/Context/MyContext';

const App = () => {
  return (
    <MyContextProvider>
      <NavigationContainer>
        <Stack_Navigator />
        <FlashMessage position="top" />
      </NavigationContainer>
    </MyContextProvider>
  );
};

export default App;
