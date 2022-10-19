import { View, Button, Text } from 'react-native'
import React from 'react'
import DashBoardHeader from '../../components/DashBoard/DashBoardHeader'
import DashBoardTracker from '../../components/DashBoard/DashBoardTracker'
import {Track} from '../../type/track'

type Props = {
  tracks: Track[],
  navigation: any
}

const DashBoardHome: React.FC<Props>  = ({tracks, navigation}) => {
  return (
    <View className='p-5 space-y-5 bg-[#F6E3C5]'>
      <DashBoardHeader navigation={navigation}/>
      <DashBoardTracker tracks={tracks}/>
    </View>
  )
}

export default DashBoardHome
