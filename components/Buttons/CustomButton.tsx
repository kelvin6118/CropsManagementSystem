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
    <Pressable onPress={() => {onPress; buttonClassNames}}>
      <StyledText className={`${textClassNames}`}>
        {buttonText}
      </StyledText>
    </Pressable>
  );
};


export default CustomButton;