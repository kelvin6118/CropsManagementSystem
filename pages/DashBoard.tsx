import { View, Text } from 'react-native'
import React from 'react'
import DashBoardHome from './DashBoardHome'
import { createStackNavigator } from '@react-navigation/stack';
import CropsForm from './CropsForm';

const Stack = createStackNavigator();

const DashBoard = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DashBoard - Home">
        {props => <DashBoardHome navigation={props.navigation}/>}
      </Stack.Screen>
      <Stack.Screen name="DashBoard - Add Crops">
        {props => <CropsForm navigation={props.navigation}/>}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default DashBoard
