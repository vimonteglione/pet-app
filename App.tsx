import React from 'react';
import { StatusBar } from 'react-native';
import {useFonts} from 'expo-font';
import {ArchivoBlack_400Regular} from '@expo-google-fonts/archivo-black';
import {Lato_400Regular} from '@expo-google-fonts/lato';
import {Oswald_400Regular} from '@expo-google-fonts/oswald';
import AppLoading from 'expo-app-loading';

import {SignIn} from './src/screens/SignIn';

export default function App(){
  const [fontsLoaded] = useFonts({
    ArchivoBlack_400Regular,
    Lato_400Regular,
    Oswald_400Regular
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"  
        translucent 
      />
      <SignIn/>
    </>
  );
}