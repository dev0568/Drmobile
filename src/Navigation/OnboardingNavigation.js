import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './RootNavigation';
import Login from '../Components/Authentication/Login/Login';
const Stack = createNativeStackNavigator();

export default () => {
  return (
    <>
      {/* <NavigationContainer ref={navigationRef}> */}
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        headerMode="none"
        initialRouteName={'Welcome'}>
        <>
          <Stack.Screen name="Login" component={Login} />
        </>
      </Stack.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
};
