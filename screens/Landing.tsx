import { StyleSheet, View, Image, Text, Dimensions, SafeAreaView, Button } from "react-native";
import React, { useEffect, useCallback } from "react";
import { Link } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import MainContainer from "../components/Container/MainContainer";
import CustomButton from "../components/Buttons/CustomButton";


function Landing() {
    const [fontsLoaded] = useFonts({
        'Cormorant Garamond': require("../assets/fonts/CormorantGaramond-Regular.ttf")
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }

return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <MainContainer>
                <View className="flex items-center" style={styles.logoContainer}>

                <Image
                    style={styles.logo} 
                    source={require("../assets/images/Grow your own.png")}
                    />
                </View>
                <View style={styles.welcomeContainer}>
                <View style={styles.container} onLayout={onLayoutRootView}>
                    <Text style={{ fontFamily: "Cormorant Garamond", fontSize: 26}}>
                        Do you want to grow your own fruit and vegetables but don't have any outside space or garden? Have a go at windowsill crop-growing!
                    </Text>
                </View>
                </View>    
                <View style={styles.buttonContainer}>
                    <Link to={{ screen: "Login" }} style={[styles.button, styles.text]}>
                            Login
                    </Link>
                    
                    <Link to={{ screen: "Register" }} style={[styles.button, styles.text]}>
                            Create an Account
                    </Link> 

                    <Link to={{ screen: "Info" }} style={[styles.button, styles.text]}>
                            Info
                    </Link>

                </View>
            </MainContainer>
        </View>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",      
    },
    logoContainer: {
        display: "flex",
        flexDirection: "column",
        height: 200,
        width: 200,
        borderRadius: 100,
        backgroundColor: "#fff",
    },
    logo: {
        height: 200,
        width: 200,
        margin: "auto",
        borderRadius: 100,
        resizeMode: "contain",
        padding: 5,
        borderColor: "green",
        borderWidth: 5,
    },
    welcomeContainer: {
        display: "flex",
        flexDirection: "column",
        padding: 30,
        backgroundColor: "#fff",
        opacity: 0.9,
    },
    buttonContainer: {
        width: "100%",
        padding: 20,
    },
    button: {
        backgroundColor: "#6CC4A1",
        width: "100%",
        height: 50,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: "space-between",
        shadowColor: "green",
        shadowOffset: {width: 2, height: 2},
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6
    },
    text: {
        fontFamily: "Cormorant Garamond",
        fontSize: 26,
        letterSpacing: 1.4,
        textShadowColor: "#000",
        textShadowOffset: {width: 2, height: 2},
        color: "white",
        fontWeight: "bold"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})
export default Landing;
