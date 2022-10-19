import { View, Text } from 'react-native'
import React from 'react'

type Props = {
    day?: number,
    sown?: Boolean,
    watered?: Boolean,
    fed?: Boolean,
}

const Day: React.FC<Props> = ({day, sown, watered, fed}) => {
  return (
    <View className='w-[14%] h-[100px] border-black border-2 bg-white'>
      <Text className='text-lg'>{day}</Text>
      <Text>{sown? "sowned": false}</Text>
      <Text>{watered? "watered": false}</Text>
      <Text>{fed? "fed": false}</Text>
    </View>
  )
}

export default Day
