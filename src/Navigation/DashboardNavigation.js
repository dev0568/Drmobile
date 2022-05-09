import React from 'react';
import {Platform, BackHandler, useWindowDimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawerr from '../Components/Drawer/Drawer';
import {navigationRef} from './RootNavigation';
import Dashboard from '../Components/Dashboard/Dashboard';
import Tabs from '../Components/Tabs/Tabs';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function backButtonHandler() {
  return true;
}
BackHandler.addEventListener('hardwareBackPress', backButtonHandler);

function TabsStack() {
  const insets = useSafeAreaInsets();
  return (
    <Stack.Navigator
      initialRouteName="tab"
      headerMode={'none'}
      screenOptions={
        Platform.OS === 'ios'
          ? {headerShown: false, gestureEnabled: false}
          : {headerShown: false}
      }>
      <Stack.Screen
        name="tab"
        component={Tabs}
        options={{headerShown: false}}
        initialParams={{space: insets}}
      />
    </Stack.Navigator>
  );
}

export const DashboardStack = () => {
  const insets = useSafeAreaInsets();
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      headerMode={'none'}
      screenOptions={
        Platform.OS === 'ios'
          ? {headerShown: false, gestureEnabled: false}
          : {headerShown: false}
      }>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
        initialParams={{space: insets}}
      />
    </Stack.Navigator>
  );
};

export default () => {
  const dimensions = useWindowDimensions();
  return (
    <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={TabsStack}
          options={{headerShown: false}}
          initialParams={{space: insets}}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};
