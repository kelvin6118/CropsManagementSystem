import { View, Text } from 'react-native'
import React from 'react'
import CropsCard from './CropsCard'
import {Track} from '../../type/track'

type Props = {
  tracks: Track[]
}

const DashBoardTracker: React.FC<Props> = ({tracks}) => {
  return (
    <View className='flex flex-row flex-wrap justify-evenly w-screen'>
      {tracks?.map(t => <CropsCard crop_id={t.crop_id}/>)}
    </View>
  )
}

export default DashBoardTracker
