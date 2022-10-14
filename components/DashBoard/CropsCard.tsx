import { View, Text, TouchableOpacity } from 'react-native'
import React, { SetStateAction } from 'react'
import {Track} from '../../type/track'
type Props ={
  track: Track,
  setTrack: React.Dispatch<SetStateAction<number>>
}
const CropsCard: React.FC<Props> = ({track, setTrack}) => {


  return (
    <TouchableOpacity
    className='w-[20%] border-solid border-black border-2 cursor-pointer hover:scale-125 transition duration-200'
    onPress={e=>setTrack(track.track_id)}>
    <View>
      <Text>CropsCard</Text>
      <Text>Track id {track.track_id}</Text>
      <Text>Track name {track.name}</Text>
      <Text>Track crop {track.crop_id}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default CropsCard
