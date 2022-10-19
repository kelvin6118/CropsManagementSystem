import { View, Text } from 'react-native'
import React from 'react'
import FeedMarker from '../Marker/FeedMarker'
import FeedWarning from '../Marker/FeedWarning'
import WaterMarker from '../Marker/WaterMarker'
import WaterWarning from '../Marker/WaterWarning'
import HarvestMarker from '../Marker/HarvestMarker'
import PlantMarker from '../Marker/PlantMarker'

const MarkerList = () => {
  return (
    <View className='h-auto w-full border-black border-2'>
      <Text className='text-2xl text-center p-5'>Key</Text>
        <View className='flex flex-row flex-wrap w-full justify-evenly space-y-1'>
          <View className='flex flex-row w-fit space-x-2'>
          <PlantMarker/>
          <Text className='text-xl text-center'>Planted</Text>
          </View>
          <View className='flex flex-row w-fit space-x-2'>
          <WaterMarker/>
          <Text className='text-xl text-center'>Watered</Text>
          </View>
          <View className='flex flex-row w-fit space-x-2'>
          <FeedMarker/>
          <Text className='text-xl text-center'>Feed</Text>
          </View>
          <View className='flex flex-row w-fit space-x-2'>
          <HarvestMarker/>
          <Text className='text-xl text-center'>Harvested</Text>
          </View>
          <View className='flex flex-row w-fit space-x-2'>
          <WaterWarning/>
          <Text className='text-xl text-center'>Need Water</Text>
          </View>
          <View className='flex flex-row w-fit space-x-2'>
          <FeedWarning/>
          <Text className='text-xl text-center'>Need Feed</Text>
          </View>
      </View>
    </View>
  )
}

export default MarkerList
