import { View, Text } from 'react-native'
import React from 'react'

type Props = {
    weekday: string,

}

const Weekday: React.FC<Props> = ({weekday}) => {
  return (
    <View className='w-[14%] bg-black'>
      <Text className='text-white text-center'>{weekday}</Text>
    </View>
  )
}

export default Weekday
