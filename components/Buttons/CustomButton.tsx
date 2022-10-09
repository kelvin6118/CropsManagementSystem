import { Text, Pressable, StyleSheet } from "react-native";
import { styled } from 'nativewind';
const StyledText = styled(Text)
import React from "react";
import { CustomButtonProps } from "../../auth-app";

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  buttonClassNames,
  textClassNames,
  buttonText,
}) => {
  return (
    <>
    <Pressable onPress={() => {onPress; buttonClassNames}} style={[styles.button]}>
      <StyledText className={`${textClassNames}`} style={{ fontFamily: "Cormorant Garamond", fontSize: 24}}>
        {buttonText}
      </StyledText>
    </Pressable>
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6CC4A1",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
});

export default CustomButton;
