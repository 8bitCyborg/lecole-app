import React from 'react';
import NavigationIndex from './src/navigation';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store, { persistor } from './src/store';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import leApi from './src/store/api/leApi';
import { PersistGate } from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  const navigationRef = useNavigationContainerRef();

  return (
    <ApiProvider api={leApi}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer ref={navigationRef}>
            <NavigationIndex />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ApiProvider>
  );
};

export default App;
