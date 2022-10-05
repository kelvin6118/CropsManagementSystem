import React from "react";
import { KeyboardAvoidingView, Keyboard, Pressable, Platform, ScrollView, StyleSheet} from "react-native";
import { IProps } from "../../auth-app";


const KeyboardAvoidWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={60}
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Pressable onPress={Keyboard.dismiss}>{children}</Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  }
});

export default KeyboardAvoidWrapper;