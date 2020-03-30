import React from 'react';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

import './config/ReactotronConfig';

import {store, persistor} from './store';
import App from './App';

import {navigationRef} from '@/services/navigation.js';

export default function() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
