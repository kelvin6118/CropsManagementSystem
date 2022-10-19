import { View, Image, Text, TouchableOpacity} from 'react-native'
import React from 'react'

type Props = {
  navigation: any
}

const DashBoardHeader: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <View className='flex flex-row justify-between'>
        <Image
        className='h-20 w-20'
        source={{uri: 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'}}
        />
        <View>
        <Text className='text-2xl'>
          Hello User!
        </Text>
        <TouchableOpacity
          className='bg-slate-400 p-2 text-center cursor-pointer hover:scale-125 transition duration-200'
          onPress={() => navigation.navigate('DashBoard - Add Crops')}
        >
          <Text className='text-xl'>Add Crops +</Text>
        </TouchableOpacity>
      </View>
      </View>
      
    </View>
  )
}

export default DashBoardHeader
