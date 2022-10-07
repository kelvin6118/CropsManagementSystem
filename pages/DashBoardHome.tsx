import { View, Button } from 'react-native'
import React from 'react'


const DashBoardHome = (props) => {
  return (
    <View>
      <Button
        title="Add Crops"
        onPress={() => props.navigation.navigate('Form')}
      />
    </View>
  )
}

export default DashBoardHome
