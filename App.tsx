import React, { createContext, useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { styled } from 'nativewind';
import * as SecureStore from 'expo-secure-store';
const StyledView = styled(View)
const StyledText = styled(Text)
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import "./styles"
import Landing from './screens/Landing';
import Login from "./screens/Login";
import Register from './screens/Register';
import Info from './screens/Info';

// import Dashboard from './screens/DashBoard/DashBoard';
// import Profile from "./screens/Profile";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
// const AuthContext = React.createContext();

const App = ({ navigation }) => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );
  return (
  <>
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="dark" />
      </View>
        <NavigationContainer>
            {state.userToken == null ? (
              <Stack.Navigator>
                <Stack.Screen name="Landing" component={Landing} />
                <Stack.Screen name="Info" component={Info} />
                  {//<RootStack.Group screenOptions={{ presentation: 'modal' }}>
                  }
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                  {//</RootStack.Navigator>
                  }
              </Stack.Navigator> 
            ) : (
              <Tab.Navigator>
                {/* <Tab.Screen name="Dashboard" component={DashBoard} />
                <Tab.Screen name="Profile" component={Profile} /> */}
              </Tab.Navigator>
            )}
      </NavigationContainer>
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
