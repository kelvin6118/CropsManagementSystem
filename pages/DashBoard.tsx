import { View, Text } from 'react-native'
import React from 'react'
import DashBoardHome from './DashBoardHome'
import { createStackNavigator } from '@react-navigation/stack';
import CropsForm from './CropsForm';

const Stack = createStackNavigator();

const DashBoard = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Calender">
        {props => <DashBoardHome navigation={props.navigation}/>}
      </Stack.Screen>
      <Stack.Screen name="Form" component={(props)=><CropsForm/>} />
    </Stack.Navigator>
  )
}

export default DashBoard
