import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import "./styles"
import DashBoard from './pages/DashBoard';




const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Home!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Settings!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
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
  );
}
