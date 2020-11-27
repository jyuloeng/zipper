import React, { useState } from "react";
import styled from "styled-components/native";
import { SafeAreaView, Platform, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AnimatedIconText from "../../components/AnimatedIconText";
import { UserIcon, CodeIcon, PasswordIcon } from "../../components/Icons";
import { inactiveTintColor } from "../../constants/colors";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const [loginname, setLoginname] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const handleGoRegister = () => {
    navigation.navigate("Login");
  };

  const handleFetchCode = () => {};

  return (
    <Container
      behavior={Platform.OS === "android" ? undefined : "padding"}
      onResponderRelease={() => Keyboard.dismiss()}
    >
      <SafeAreaView>
        <TitleContainer>
          <Title>Forgot Password</Title>
          <Subtitle>输入你的信息</Subtitle>
        </TitleContainer>

        <InputContainer>
          <AnimatedIconText
            value={loginname}
            caption="Email or Phone"
            placeholder="Email or Phone"
            btnOperationText=""
            btnOperationOnPress={() => {}}
            onChangeText={(loginname) => setLoginname(loginname)}
            activeIcon={<UserIcon />}
            unactiveIcon={<UserIcon fill={inactiveTintColor} />}
            activeIconLeft={13}
            unactiveIconLeft={13}
            activeIconTop={100}
            unactiveIconTop={35}
          />

          <AnimatedIconText
            value={code}
            caption="Code"
            placeholder="Code"
            btnOperationText="发送验证码！"
            btnOperationOnPress={handleFetchCode}
            onChangeText={(code) => setCode(code)}
            activeIcon={<CodeIcon />}
            unactiveIcon={<CodeIcon fill={inactiveTintColor} />}
            activeIconLeft={13}
            unactiveIconLeft={13}
            activeIconTop={100}
            unactiveIconTop={37}
          />

          <AnimatedIconText
            value={password}
            caption="Password"
            placeholder="Password"
            btnOperationText=""
            btnOperationOnPress={() => {}}
            onChangeText={(password) => setPassword(password)}
            activeIcon={<PasswordIcon />}
            unactiveIcon={<PasswordIcon fill={inactiveTintColor} />}
            activeIconLeft={14}
            unactiveIconLeft={14}
            activeIconTop={100}
            unactiveIconTop={37}
          />

          <BtnLogin>
            <LoginText>确认</LoginText>
          </BtnLogin>

          <BtnRegister onPress={handleGoRegister}>
            <BtnText>想起密码？立即登陆</BtnText>
          </BtnRegister>
        </InputContainer>
      </SafeAreaView>
    </Container>
  );
};

export default ForgotPasswordScreen;

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  /* align-items: center; */
  background: white;
`;

const TitleContainer = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  width: 200px;
  font-size: 42px;
  font-weight: 700;
  color: #383838;
  text-align: center;
`;

const Subtitle = styled.Text`
  margin-top: 16px;
  font-size: 15px;
  color: #a9a9a9;
  /* text-align: center; */
`;

const InputContainer = styled.View`
  padding: 0 46px;
`;

const Caption = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #3c4560;
`;

const CaptionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const TextInput = styled.TextInput`
  height: 60px;
  margin-top: 20px;
  padding-left: 44px;
  font-size: 17px;
  color: #3c4560;
  border-radius: 12px;
  border: 1px solid #dbdfea;
`;

const BtnLogin = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-top: 46px;
  background: #327feb;
  border-radius: 17px;
`;

const LoginText = styled.Text`
  font-size: 18px;
  color: white;
`;

const BtnRegister = styled.TouchableOpacity`
  align-items: center;
  margin-top: 40px;
`;

const BtnText = styled.Text`
  font-size: 14px;
  color: #0c8eff;
`;

const IconEmail = styled.Image`
  position: absolute;
  top: 179px;
  left: 31px;
  width: 24px;
  height: 16px;
`;

const IconPassword = styled.Image`
  position: absolute;
  top: 239px;
  left: 35px;
  width: 18px;
  height: 24px;
`;
