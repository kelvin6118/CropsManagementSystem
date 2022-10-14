import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import SelectList from 'react-native-dropdown-select-list'
import Checkbox from 'expo-checkbox';
import {createTrack} from '../../utlis/Track'
import {Track} from '../../type/track'

type Props ={
  
}

const CropsForm: React.FC<Props> = () => {
  const [crop, setCrop] = useState<string>(null);
  const [sown, setSown] = useState<Date>(null);
  const [water, setWater] = useState<Date>(null);
  const [feed, setFeed] = useState<Date>(null);
  const [fed, setFed] = useState<Date[]>([]);
  const [harvest, setHarvest] = useState<Date[]>([]);

  const today = Date.now();
  const date = new Date(today);

  const crops = [
    {key:"1", value:"Apple"},
    {key:"2", value:"Banana"},
    {key:"3", value:"Orange"}
  ];
  
  const styles = StyleSheet.create({
    checkbox: {
      margin: 8,
      alignItems: 'center',
    },
  });

  const data: Track = {
    user_id: 1,
    crop_id: crop,
    sown: sown,
    watered: water,
    fed: [...fed, feed]
  }

  const handleSubmit = () => {
    if(crop === null){
      alert("please select a crop")
    }else{
      createTrack(data).then(
        (r) => {
          console.log(r);
        }
      )
    }
  }
  

  return (
    <View className='flex justify-center p-5 space-y-5'>
      <Text className='text-2xl w-auto pb-5'>Add New Crop</Text>
      <SelectList 
      setSelected={setCrop}
      data={crops}
      placeholder={"Add a new Crop"}
      searchPlaceholder={"Search Crops"}
      />

      <View className='flex flex-row space-x-3 justify-center'>
        <Text className='text-xl align-middle'>Sown</Text>
        <Checkbox
          style={styles.checkbox}
          onValueChange={(value)=>{
            if(value === true){
              setSown(date);
            }
            else{
              setSown(null);
            }
          }}
          color={sown ? '#4630EB' : undefined}
        />
      </View>

      <View className='flex flex-row space-x-3 justify-center'>
        <Text className='text-xl'>Water</Text>
        <Checkbox
          style={styles.checkbox}
          onValueChange={(value)=>{
            if(value === true){
              setWater(date);
            }
            else{
              setWater(null);
            }
          }}
          color={water ? '#4630EB' : undefined}
        />
      </View>
      <View className='flex flex-row space-x-3 justify-center'>
        <Text className='text-xl'>Fed</Text>
        <Checkbox
          style={styles.checkbox}
          onValueChange={(value)=>{
            if(value === true){
              setFeed(date);
            }
            else{
              setFeed(null);
            }
          }}
          color={feed ? '#4630EB' : undefined}
        />
      </View>
      <Button title="Create" onPress={handleSubmit}/>
    </View>
  )

}

export default CropsForm
