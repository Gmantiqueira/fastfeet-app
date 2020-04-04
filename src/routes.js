import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import Finish from './pages/Finish';
import Report from './pages/Report';
import Profile from './pages/Profile';
import Problems from './pages/Problems';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: '#7d40e7',
        style: {
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => (
            <Icon color={color} name="reorder" size={36} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon color={color} name="account-circle" size={36} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator({isSigned = false}) {
  console.log((isSigned = false));
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#7D40E7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      initialRouteName={isSigned === true ? 'Dashboard' : 'SignIn'}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Report"
        component={Report}
        options={{
          title: 'Informar problema',
        }}
      />
      <Stack.Screen
        name="Finish"
        component={Finish}
        options={{
          title: 'Confirmar entrega',
        }}
      />
      <Stack.Screen
        name="Problems"
        component={Problems}
        options={{
          title: 'Visualizar problemas',
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Detalhes da encomenda',
        }}
      />
    </Stack.Navigator>
  );
}

export default ({isSigned = false}) => {
  return <StackNavigator isSigned={isSigned} />;
};
