import { Text, Pressable, StyleSheet } from "react-native";
import { styled } from 'nativewind';
import "./CustomButton.css";

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
    
      <Pressable className="custom-button" onPress={() => {onPress; buttonClassNames}}>
        <StyledText className="{`${textClassNames}`} custom-button-text">
          {buttonText}
        </StyledText>
      </Pressable>
   
  );
};


export default CustomButton;