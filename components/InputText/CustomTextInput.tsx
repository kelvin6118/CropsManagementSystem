import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)
import { InputProps } from "../../auth-app";
const CustomTextInput: React.FC<InputProps> = ({label,onChangeText,icon,IsSecureText,keyboardType,placeholder,
}) => {
  return (
    <StyledView className="flex justify-start w-full mb-4">
      {label && (
        <StyledText className="text-[#EFE3C8] mb-2 text-[13px]">{label}</StyledText>
      )}
      <StyledView className="w-full bg-[#171017] border-[#EFE3C850] border-[1px] rounded-md h-[57px] p-1 flex justify-center items-center flex-row ">
        {icon && (
          <StyledView className="flex items-center justify-center h-[38px] w-[38px]">
            {icon}
          </StyledView>
        )}
        <TextInput style={styles.input}
          onChangeText={onChangeText} secureTextEntry={IsSecureText}  keyboardType={keyboardType}   placeholder={placeholder}
          placeholderTextColor={"#EFE3C825"}
        />
      </StyledView>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  input: {
    display: "flex",
    flex: 1,
    background: null,
    text: "larger",
    paddingLeft: 2,
    color: "#EFE3C895",
    height: "50px",
  }
})


export default CustomTextInput;