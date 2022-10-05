import { StyleSheet, View, Image, Text, Alert, Dimensions, SafeAreaView } from "react-native";
import React from "react";
import MainContainer from "../components/Container/MainContainer";

import CustomButton from "../components/Buttons/CustomButton";

const Landing = () => {
return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <MainContainer>
                <div className="flex items-center" style={styles.logoContainer}>

                <Image
                    style={styles.logo} 
                    source={require("../assets/Grow your own.png")}
                    />
                </div>
                <div>
                <Text>
                    <h1>A brief introduction and app purpose.</h1>
                </Text>
                </div>
                
                    <View>
                        <CustomButton buttonText="Login"/>
                        <Text>
                            <h2>or</h2>
                        </Text>
                        <CustomButton buttonText="Sign Up"/>
                    </View>
               
            </MainContainer>
        </View>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
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
    }
})
export default Landing;