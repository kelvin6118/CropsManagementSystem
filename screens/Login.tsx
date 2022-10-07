import { Button, Modal, View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)
import React, { useState } from "react";

import CustomTextInput from "../components/InputText/CustomTextInput";

import { AtSymbolIcon, LockClosedIcon } from "react-native-heroicons/solid";
import CustomButton from "../components/Buttons/CustomButton";

const Login = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEMail] = React.useState<String | null>(null);
  const [password, setPassword] = React.useState<String | null>(null);

  const onUsernameChange = (email: String) => {
    setEMail(email);
  };
  const onPasswordChange = (password: String) => {
    setPassword(password);
  };

  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.modalView}>
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
          
            <Button onPress={() => navigation.goBack()} title="X" />
      </View>
    </View>
      
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Login;