import React, { useState }  from "react";
import { Modal, Text ,View, StyleSheet, ImageBackground } from 'react-native';
import { Card, Button } from 'react-native-paper';

// const cropImage = require(this.cropId({cropImage}));

 const CropCard = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        ></Modal>
          <Card style={styles.container}>
            <ImageBackground source={props.cropImage} />
              <Button style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
              >
                <Text style={styles.text}></Text>
              </Button>
            
          </Card>
      </View>
    )
  }
  

  export default CropCard;

  const styles = StyleSheet.create({
    container :{
        display: "flex",
        alignContent: "space-around",
        margin: 5,
        width: 180,
        height: 120,
        backgroundColor: "#A0D995",
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 10
    },
    text: {
      color: "#000",
    },
    button: {
      display: "flex",
      flexDirection: "column",
      alignContent:'center',
      margin: "auto",
      width: 178,
      height: 30,
      paddingVertical: 10,
      backgroundColor: "#fff",
      opacity: 0.8
    },
    buttonOpen: {
      backgroundColor: "#fcfcfc",
    },
    buttonClose: {
      backgroundColor: "#000",
    },
})