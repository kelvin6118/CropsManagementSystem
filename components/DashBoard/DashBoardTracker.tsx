import { View, Text } from 'react-native'
import React, { useState } from 'react'
import CropsCard from './CropsCard'
import {Track} from '../../type/track'

type Props = {
  tracks: Track[]
}

const DashBoardTracker: React.FC<Props> = ({tracks}) => {
  const [trackID, setTrackID] = useState<number>();

  console.log(trackID);

  return (
    <View className='flex flex-row flex-wrap justify-evenly w-screen'>
      {tracks?.map(t => <CropsCard track={t} setTrack={setTrackID}/>)}
    </View>
  )
}

export default DashBoardTracker
