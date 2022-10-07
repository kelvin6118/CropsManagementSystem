import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { styled } from 'nativewind';
import Landing from './screens/Landing';

const StyledView = styled(View)
const StyledText = styled(Text)
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Login from "./screens/Login";
import Register from './screens/Register';
// import Dashboard from './screens/Dashboard';
import Profile from "./screens/Profile";

const Tab = createMaterialTopTabNavigator();

const App: React.FC = () => {

 
  return (
    <>
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <Landing />
      {/* <NavigationContainer> */}
        {/* <Tab.Navigator> */}
          {/* <Tab.Screen name="Landing" component={Landing} /> */}
          {/* <Tab.Screen name="SignIn" component={Login} />
          <Tab.Screen name="SignUp" component={Register} />
        </Tab.Navigator> */}
      <StatusBar style="dark" />
      
      
      
      {/* 
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer> */}
      {/* </NavigationContainer> */}
    </SafeAreaView>
    </Provider>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
})

export default App;