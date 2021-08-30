import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import MealsNavigation from './navigation/Navigation';


export default function App() {

  let [fontsLoaded] = useFonts({
    'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSansRegular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <MealsNavigation />
    </Provider>
  )

}

