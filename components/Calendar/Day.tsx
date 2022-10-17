import { View, Text } from 'react-native'
import React from 'react'

type Props = {
    day?: number,
}

const Day: React.FC<Props> = ({day}) => {
  return (
    <View className='w-[14%] h-[50px]'>
      <Text>{day}</Text>
    </View>
  )
}

export default Day
