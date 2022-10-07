import { ImageBackground, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { IProps } from "../../auth-app";

const MainContainer: React.FC<IProps> = ({ children }) => {
  return (
    <>
    <ScrollView style={styles.scrollView}>
      <ImageBackground source={require("../../assets/bg.png")} style={styles.image}>
        <SafeAreaView style={styles.container}>
          {children}
        </SafeAreaView>
      </ImageBackground>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    fontSize: 20,
  },
  image: {
      flex: 1,
      justifyContent: "center",
      Width: 300,
      height: "100%"
    },
  scrollView: {
    backgroundColor: "#f6e3c5"
  }
})


export default MainContainer;