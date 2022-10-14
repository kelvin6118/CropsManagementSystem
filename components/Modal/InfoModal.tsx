import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Modal
} from "react-native";


const InfoModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [powderblue, setPowderblue] = useState({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
  });
  const [skyblue, setSkyblue] = useState({
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 100,
  });
  const [steelblue, setSteelblue] = useState({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 200,
  });
  return (
    <View style={styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
                <View style={styles.container}>
                    <View
                        style={[
                        styles.container,
                        {
                            flexDirection: "row",
                            alignContent: "space-between",
                        },
                        ]}
                    >
                        <BoxInfo
                        color="powderblue"
                        {...powderblue}
                        setStyle={setPowderblue}
                        />
                        <BoxInfo
                        color="skyblue"
                        {...skyblue}
                        setStyle={setSkyblue}
                        />
                        <BoxInfo
                        color="steelblue"
                        {...steelblue}
                        setStyle={setSteelblue}
                        />
                    </View>
                    <View style={styles.previewContainer}>
                        <View
                        style={[
                            styles.box,
                            {
                            flexBasis: powderblue.flexBasis,
                            flexGrow: powderblue.flexGrow,
                            flexShrink: powderblue.flexShrink,
                            backgroundColor: "powderblue",
                            },
                        ]}
                        />
                        <View
                        style={[
                            styles.box,
                            {
                            flexBasis: skyblue.flexBasis,
                            flexGrow: skyblue.flexGrow,
                            flexShrink: skyblue.flexShrink,
                            backgroundColor: "skyblue",
                            },
                        ]}
                        />
                        <View
                        style={[
                            styles.box,
                            {
                            flexBasis: steelblue.flexBasis,
                            flexGrow: steelblue.flexGrow,
                            flexShrink: steelblue.flexShrink,
                            backgroundColor: "steelblue",
                            },
                        ]}
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>Go Back</Text>
                            </Pressable>
                    </View>
                </View>
            </View>
        </View>
        </Modal>
    </View>
  );
};

const BoxInfo = ({
  color,
  flexBasis,
  flexShrink,
  setStyle,
  flexGrow,
}) => (
  <View style={[styles.row, { flexDirection: "column" }]}>
    <View
      style={[
        styles.boxLabel,
        {
          backgroundColor: color,
        },
      ]}
    >
      <Text
        style={{
          color: "#fff",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        Box
      </Text>
    </View>
    <Text style={styles.label}>flexBasis</Text>
    <TextInput
      value={flexBasis}
      style={styles.input}
      onChangeText={(fB) =>
        setStyle((value) => ({
          ...value,
          flexBasis: isNaN(parseInt(fB))
            ? "auto"
            : parseInt(fB),
        }))
      }
    />
    <Text style={styles.label}>flexShrink</Text>
    <TextInput
      value={flexShrink}
      style={styles.input}
      onChangeText={(fS) =>
        setStyle((value) => ({
          ...value,
          flexShrink: isNaN(parseInt(fS))
            ? ""
            : parseInt(fS),
        }))
      }
    />
    <Text style={styles.label}>flexGrow</Text>
    <TextInput
      value={flexGrow}
      style={styles.input}
      onChangeText={(fG) =>
        setStyle((value) => ({
          ...value,
          flexGrow: isNaN(parseInt(fG))
            ? ""
            : parseInt(fG),
        }))
      }
    />
  </View>
);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    box: {
      flex: 1,
      height: 50,
      width: 50,
    },
    boxLabel: {
      minWidth: 80,
      padding: 8,
      borderRadius: 4,
      marginTop: 8,
    },
    label: {
      marginTop: 6,
      fontSize: 16,
      fontWeight: "100",
    },
    previewContainer: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "aliceblue",
    },
    row: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      marginBottom: 10,
    },
    input: {
      borderBottomWidth: 1,
      paddingVertical: 3,
      width: 50,
      textAlign: "center",
    },
    infoContainer: {
      backgroundColor: "#A0D995",
      padding: 30,
      fontFamily: "Cormorant Garamond",
      fontSize: 26,
      marginBottom: 10,
  },
    text: {
      fontFamily: "Cormorant Garamond",
      fontSize: 24,
      letterSpacing: 1.4,
      textShadowColor: "#000",
      textShadowOffset: {width: 2, height: 2},
      color: "white",
      fontWeight: "bold"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
  });
  
  const CROPS = ["Blueberries", "Broccoli", "Carrots", "Cauliflower", "Celery", "Chard", "Chili Peppers", "Citrus Fruit", "Cucumber", "Garlic", "Grapes", "Herbs", "kale", "Lettuces", "Radishes", "Spinach", "Spring Onions", "Strawberries", "Sweet Peppers", "Tomatoes"]
  
  
  
  export default InfoModal;