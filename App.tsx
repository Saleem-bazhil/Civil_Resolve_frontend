import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';

import './global.css';

export default function App() {
  return (
    <>
    <NavigationContainer>
     <RootNavigator/>
      <StatusBar style="auto" />
    </NavigationContainer>

    </>
  );
}
