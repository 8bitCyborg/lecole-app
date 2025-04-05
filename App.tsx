import React from 'react';
import NavigationIndex from './src/navigation';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import leApi from './src/store/api/leApi';

function App(): React.JSX.Element {
  const navigationRef = useNavigationContainerRef();

  return (
    <ApiProvider api={leApi}>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <NavigationIndex />
        </NavigationContainer>
      </Provider>
    </ApiProvider>

  );
};

export default App;
