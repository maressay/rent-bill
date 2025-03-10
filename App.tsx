import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import RootNavigator from './src/navigation/RootNavigator'

export default function App() {
  return (
    <NavigationContainer>
        <RootNavigator />
    </NavigationContainer>
  )
}