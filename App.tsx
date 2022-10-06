import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import DashBoard from './pages/DashBoard';

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is miss a type definition
    <TailwindProvider utilities={utilities}>
      <Provider store={store}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="DashBoard">
                {props => <DashBoard/>}
              </Tab.Screen>
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
      </Provider>
    </TailwindProvider>
  );
}
