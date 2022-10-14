import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
} from "react-native";
import MainContainer from "../components/Container/MainContainer";
import CropCard from "../components/Cards/CropCard";

const Info = () => {
  const [mintGreen, setMintGreen] = useState({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 200,
  });

  return (
    <MainContainer>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Welcome to The Edible Windowsill.</Text>
        <Text style={styles.text}>To get started, here are the best fruit and vegetables to grow on your windowsill!</Text>
      </View>
    <View style={styles.container}>
      <View
        style={[
          styles.container,
          {
            flexDirection: "row",
            alignContent: "space-around",
          },
        ]}
      >
        <CropCard  />
        <CropCard  />
        
      </View>
      <View style={styles.previewContainer}>
        <View
          style={[
            styles.box,
            {
              flexBasis: mintGreen.flexBasis,
              flexGrow: mintGreen.flexGrow,
              flexShrink: mintGreen.flexShrink,
              backgroundColor: "#A0D995",
            },
          ]}
        />
        {/* <View
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
        /> */}
      </View>
    </View>
    </MainContainer>
  );
};

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
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
});

const CROPS = ["Blueberries", "Broccoli", "Carrots", "Cauliflower", "Celery", "Chard", "Chili Peppers", "Citrus Fruit", "Cucumber", "Garlic", "Grapes", "Herbs", "kale", "Lettuces", "Radishes", "Spinach", "Spring Onions", "Strawberries", "Sweet Peppers", "Tomatoes"]



export default Info;