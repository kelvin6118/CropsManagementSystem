import { View, Text, ScrollView, Pressable } from "react-native";
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)
import React from "react";
import MainContainer from "../components/Container/MainContainer";
import KeyboardAvoidWrapper from "../components/Container/KeyboardAvoidWrapper";
import CustomTextInput from "../components/InputText/CustomTextInput";

import { AtSymbolIcon, LockClosedIcon } from "react-native-heroicons/solid";
import CustomButton from "../components/Buttons/CustomButton";

const Login = () => {
  const [email, setEMail] = React.useState<String | null>(null);
  const [password, setPassword] = React.useState<String | null>(null);

  const onUsernameChange = (email: String) => {
    setEMail(email);
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
        <StyledView className="flex flex-1 justify-center items-center pt-[20%] px-[25px]">
          <StyledText className="text-[#EFE3C8] text-md">
            Enter your account credentials
          </StyledText>
          <StyledView className="h-[50px] w-full"></StyledView>
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
            keyboardType="default"
            placeholder="* * * * * * * *"
          />
          <CustomButton
            buttonText="Login"
            buttonClassNames="w-full rounded-md p-3 bg-[#EFE3C8] flex justify-center items-center mt-5"
            textClassNames="text-[#4A2B29] text-[18px] font-semibold"
            onPress={() => console.log(password)}
          />
          <CustomButton
            buttonText="Register"
            buttonClassNames="w-full rounded-md p-3 bg-transparent flex justify-center items-center mt-3 border-[1px] border-[#EFE3C8] border-solid"
            textClassNames="text-[#EFE3C8] text-[18px] font-semibold"
            onPress={() => console.log(password)}
          />
          <StyledView className="flex w-full justify-end items-end pt-4">
            <Pressable onPress={() => {}}>
              <StyledText className="text-center text-gray-500 text-sm">
                Forgot your password?
              </StyledText>
            </Pressable>
          </StyledView>
        </StyledView>
      </KeyboardAvoidWrapper>
    </MainContainer>
  );
};

export default Login;