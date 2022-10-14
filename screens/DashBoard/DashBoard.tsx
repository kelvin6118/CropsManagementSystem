import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import DashBoardHome from './DashBoardHome'
import { createStackNavigator } from '@react-navigation/stack';
import CropsForm from './CropsForm';
import { getUserTracks } from '../../utlis/Track';
import {Track} from '../../type/track'

const Stack = createStackNavigator();

const DashBoard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [tracks, setTracks] = useState<Track[]>();


  useEffect(()=>{
    getUserTracks(1).then((t)=>{
      setTracks(t);
    })
    setLoading(false);
  },[])

  useEffect(()=>{

  },[loading])

  console.log(tracks);
  return (
    <Stack.Navigator>
      <Stack.Screen name="DashBoard - Home">
        {props => <DashBoardHome tracks={tracks} navigation={props.navigation}/>}
      </Stack.Screen>
      <Stack.Screen name="DashBoard - Add Crops">
        {()=><CropsForm/>}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default DashBoard
