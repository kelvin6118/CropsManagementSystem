import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import SelectList from 'react-native-dropdown-select-list'

type Props ={
  navigation: unknown;
  crops: object[];
}

const CropsForm: React.FC<Props> = (navigation) => {
  const [crop, setCrop] = useState<string>();
  const crops = [
    {key:"1", value:"Apple"},
    {key:"2", value:"Banana"},
    {key:"3", value:"Orange"}
  ];
  return (
    <View>
      <Text>Add New Crop</Text>
      <View>
      <SelectList setSelected={setCrop} data={crops} onSelect={() => alert(crop)} />
      </View>
    </View>
  )
}

export default CropsForm
