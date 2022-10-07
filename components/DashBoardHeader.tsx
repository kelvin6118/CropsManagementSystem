import { View, Image, Text } from 'react-native'
import React from 'react'

const DashBoardHeader = (props) => {
  return (
    <View>
      <View className='flex flex-row justify-between'>
        <Image
        className='h-20 w-20'
        source={{uri: 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'}}
        />
        <Text className='text-2xl'>
          Hello User!
        </Text>
      </View>
      
    </View>
  )
}

export default DashBoardHeader
