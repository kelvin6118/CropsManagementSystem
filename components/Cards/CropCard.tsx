import { Image, Text, View } from 'react-native';

export default function CropCard(props) {
    return (
      <View>
            <Image source={{props.cropImage}}></Image>
            <Text>{{props.cropName}}</Text>
        
      </View>
    )
  }
