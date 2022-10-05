import { View, Text, Pressable } from "react-native";
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)
import React from "react";
import MainContainer from "../components/Container/MainContainer";
import KeyboardAvoidWrapper from "../components/Container/KeyboardAvoidWrapper";
import CustomTextInput from "../components/InputText/CustomTextInput";
import { AtSymbolIcon, LockClosedIcon } from "react-native-heroicons/solid";
import CustomButton from "../components/Buttons/CustomButton";

const Register = () => {
  const [username, setUsername] = React.useState<String | null>(null);
  const [password, setPassword] = React.useState<String | null>(null);
  const onUsernameChange = (username: String) => {
    setUsername(username);
  };
  const onPasswordChange = (password: String) => {
    setPassword(password);
  };
  return (
    <MainContainer>
      <KeyboardAvoidWrapper>
        <StyledView className="flex flex-row items-center justify-center gap-0 pt-[25%]">
          <StyledText className="text-3xl text-[#EFE3C8] font-mono">Secure</StyledText>
          <StyledText className="text-3xl text-[#EFE3C850] font-sans">App</StyledText>
        </StyledView>
        <StyledView className="flex flex-1 justify-center items-center pt-[7%] px-[25px]">
          <StyledText className="text-[#EFE3C8] text-md">
            Enter your account details to register
          </StyledText>
          <StyledView className="h-[30px] w-full"></StyledView>

          <CustomTextInput
            onChangeText={onUsernameChange}
            label="Full Name"
            placeholder="Enter your full name"
          />

          <CustomTextInput
            icon={<AtSymbolIcon color={"#EFE3C850"} width={35} height={35} />}
            onChangeText={onUsernameChange}
            label="Email"
            keyboardType={"email-address"}
            placeholder="Enter your email"
          />
          <CustomTextInput
            icon={<LockClosedIcon color={"#EFE3C850"} width={35} height={35} />}
            onChangeText={onPasswordChange}
            label="Password"
            IsSecureText={true}
            placeholder="* * * * * * * *"
          />

          <CustomTextInput
            icon={<LockClosedIcon color={"#EFE3C850"} width={35} height={35} />}
            onChangeText={onPasswordChange}
            label="Confirm Password"
            IsSecureText={true}
            placeholder="* * * * * * * *"
          />
          <CustomButton
            buttonText="Register"
            buttonClassNames="w-full rounded-md p-3 bg-[#EFE3C8] flex justify-center items-center mt-5"
            textClassNames="text-[#4A2B29] text-[18px] font-semibold"
            onPress={() => console.log(password)}
          />

          <StyledView className="flex w-full justify-end items-end pt-4">
            <Pressable onPress={() => {}}>
              <StyledText className="text-center text-gray-500 text-sm">
                Already have an account?
              </StyledText>
            </Pressable>
          </StyledView>
        </StyledView>
      </KeyboardAvoidWrapper>
    </MainContainer>
  );
};

export default Register;