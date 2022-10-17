import { View, Text } from 'react-native'
import React, { useState } from 'react'
import CropsCard from './CropsCard'
import {Track} from '../../type/track'
import Calendar from '../Calendar/Calendar'

type Props = {
  tracks: Track[]
}

const DashBoardTracker: React.FC<Props> = ({tracks}) => {
  const [trackID, setTrackID] = useState<number>();

  console.log(trackID);

  return (
    <View>
    <View className='flex flex-row flex-wrap justify-evenly w-full'>
      {tracks?.map(t => <CropsCard track={t} setTrack={setTrackID}/>)}
    </View>
    <View className='w-full'>
      <Calendar/>
    </View>
    </View>
  )
}

export default DashBoardTracker
