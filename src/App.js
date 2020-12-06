// import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardDetails from './components/CardsDetails'


const store = configureStore()
const Stack = createStackNavigator();

function App() {
  return (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{ title: 'Breaking Bad' }}
        />
        <Stack.Screen name="Details" component={CardDetails} 
        options={{

        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>

  );
}

export default App;