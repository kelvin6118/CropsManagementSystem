import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import SelectList from 'react-native-dropdown-select-list'
import Checkbox from 'expo-checkbox';

type Props ={
  navigation: unknown;
}

const CropsForm: React.FC<Props> = (navigation) => {
  const [crop, setCrop] = useState<string>();
  const [sown, setSown] = useState<boolean>(false);
  const [water, setWater] = useState<boolean>(false);
  const [fed, setFed] = useState<boolean>(false);

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

  return (
    <View className='flex justify-center p-5 space-y-5'>
      <Text className='text-2xl w-auto pb-5'>Add New Crop</Text>
      <SelectList setSelected={setCrop} data={crops} onSelect={() => alert(crop)} />

      <View className='flex flex-row space-x-3 justify-center'>
        <Text className='text-xl align-middle'>Sown</Text>
        <Checkbox
          style={styles.checkbox}
          value={sown}
          onValueChange={setSown}
          color={sown ? '#4630EB' : undefined}
        />
      </View>

      <View className='flex flex-row space-x-3 justify-center'>
        <Text className='text-xl'>Water</Text>
        <Checkbox
          style={styles.checkbox}
          value={water}
          onValueChange={setWater}
          color={water ? '#4630EB' : undefined}
        />
      </View>
      <View className='flex flex-row space-x-3 justify-center'>
        <Text className='text-xl'>Fed</Text>
        <Checkbox
          style={styles.checkbox}
          value={fed}
          onValueChange={setFed}
          color={fed ? '#4630EB' : undefined}
        />
      </View>
    </View>
  )

}

export default CropsForm
