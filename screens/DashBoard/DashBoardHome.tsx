import { View, Button, Text } from 'react-native'
import React from 'react'
import DashBoardHeader from '../../components/DashBoardHeader'
import DashBoardTracker from '../../components/DashBoardTracker'


const DashBoardHome = (props) => {
  return (
    <View className='p-5 space-y-5'>
      <DashBoardHeader/>
      <View>
        <Button
          title="Add Crops"
          onPress={() => props.navigation.navigate('DashBoard - Add Crops')}
        />
      </View>
      <DashBoardTracker/>
    </View>
  )
}

export default DashBoardHome
