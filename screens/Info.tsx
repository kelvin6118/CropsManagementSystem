import { StyleSheet, View, Image, Text, Dimensions, SafeAreaView, Button, Pressable } from "react-native";
import MainContainer from "../components/Container/MainContainer";
import SquareGrid from "react-native-square-grid";
import { setMaxListeners } from "events";

const CROPS = ["Blueberries", "Broccoli", "Carrots", "Cauliflower", "Celery", "Chard", "Chili Peppers", "Citrus Fruit", "Cucumber", "Garlic", "Grapes", "Herbs", "kale", "Lettuces", "Radishes", "Spinach", "Spring Onions", "Strawberries", "Sweet Peppers", "Tomatoes"]

function Info() {
  
    return (
       <>
            <SafeAreaView style={styles.container}>
                <MainContainer>
                    <View style={styles.infoContainer}>
                        <Text style={styles.text}>Welcome to The Edible Windowsill.</Text>
                        <Text style={styles.text}>To get started, here are the best fruit and vegetables to grow on your windowsill!</Text>
                    </View>
                    <View style={styles.container}>
                        <SquareGrid columns={2} rows={10} items={CROPS} renderItem={renderItem}></SquareGrid>
                            
                        
                    </View>
                </MainContainer>
            </SafeAreaView>
       </>
    )
  }

  function renderItem(item) {
    return (
      <View style={styles.item}>
          <View style={styles.content}>
              <Text style={styles.cardText}>{item}</Text>
          </View>
      </View>
    )
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",      
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
      item: {
        flex: 1,
        alignSelf: "stretch",
        padding: 16
      },
      content: {
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center"
      },
      cardText: {
        color: "white",
        fontSize: 32
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})

export default Info;