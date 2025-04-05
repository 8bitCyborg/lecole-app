import React from 'react';

import NavigationIndex from './src/navigation';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

function App(): React.JSX.Element {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <NavigationIndex />
    </NavigationContainer>
  );
};

export default App;
