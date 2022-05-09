import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import {useSelector} from 'react-redux';
import OnboardingNavigation from './OnboardingNavigation';
import Dashboardnavigation from './DashboardNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Components/Splash';
const Stack = createStackNavigator();

import SplashScreen from 'react-native-splash-screen';
export default () => {
  const NavigationStack = () => {
    let onboardCompleted = false;
    const {user} = useSelector((state) => ({
      ...state.auth.user,
    }));
    console.log('suer>>>', user);
    if (user !== undefined) {
      onboardCompleted = true;
    }
    return (
      <>
        {onboardCompleted ? (
          <Dashboardnavigation />
        ) : (
          <SafeAreaProvider>
            <OnboardingNavigation />
          </SafeAreaProvider>
        )}
      </>
    );
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NavigationStack"
          component={NavigationStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
