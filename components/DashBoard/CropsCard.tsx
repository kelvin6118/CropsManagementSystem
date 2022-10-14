import { View, Text } from 'react-native'
import React from 'react'
type Props ={
  crop_id: string
}
const CropsCard: React.FC<Props> = ({crop_id}) => {
  return (
    <View className='w-[20%]'>
      <Text>CropsCard</Text>
      <Text>id {crop_id}</Text>
    </View>
  )
}

export default CropsCard
