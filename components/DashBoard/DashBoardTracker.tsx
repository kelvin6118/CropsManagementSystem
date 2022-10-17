import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import CropsCard from './CropsCard'
import {Track} from '../../type/track'
import Calendar from '../Calendar/Calendar'

type Props = {
  tracks: Track[]
}

const DashBoardTracker: React.FC<Props> = ({tracks}) => {
  const [trackID, setTrackID] = useState<number>();
  const [sown, setSown] = useState<string>();
  const [watered, setWater] = useState<string>();
  const [fed, setFed] = useState<string[]>();
  const [selected, setSelected] = useState<Boolean>(false);



  useEffect(()=>{
    const selectedTrack = tracks?.find(t => t.track_id===trackID);
    if(selectedTrack !== undefined){
      setSown(selectedTrack.sown);
      setWater(selectedTrack.watered);
      setFed(selectedTrack.fed);
      if(selected === false){
        setSelected(true);
      }
  }
  },[trackID])


  return (
    <View>
    <View className='flex flex-row flex-wrap justify-evenly w-full'>
      {tracks?.map(t => <CropsCard track={t} setTrack={setTrackID}/>)}
    </View>
    <View className='w-full'>
      <Calendar sown={sown} watered={watered} fed={fed} selected={selected}/>
    </View>
    </View>
  )
}

export default DashBoardTracker
