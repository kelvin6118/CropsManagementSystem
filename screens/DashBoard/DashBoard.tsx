import { View, Text } from 'react-native'
import React from 'react'
import DashBoardHome from './DashBoardHome'
import { createStackNavigator } from '@react-navigation/stack';
import CropsForm from './CropsForm';

const Stack = createStackNavigator();

const DashBoard = () => {

  let nav = 0;
  const weekdays:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dt = new Date();
    //navigate to next month by nav++
    if (nav !== 0){
      dt.setMonth(new Date().getMonth() + nav);
    }
  
    //navigate to next month by nav--
    if (nav === -1){
      dt.setMonth(new Date().getMonth() - 1);
    }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dateString = firstDayOfMonth.toLocaleDateString('en-GB', {
    weekday: "long",
    year: "numeric",
    month: 'numeric',
    day: 'numeric',
  });

  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
  let date:number = 9 - paddingDays;

  let mon = dt.toLocaleDateString('en-GB', { month: 'numeric'});

  let daySquareDate = `${date}/${mon}/${year}`;



  console.log(month)

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
