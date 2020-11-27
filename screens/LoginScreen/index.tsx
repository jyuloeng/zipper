import React, { useState } from "react";
import styled from "styled-components/native";
import {
  SafeAreaView,
  Platform,
  StatusBar,
  Keyboard,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { UserIcon, PasswordIcon } from "../../components/Icons";
import AnimatedIconText from "../../components/AnimatedIconText";
import { inactiveTintColor } from "../../constants/colors";
import { phonePattern, emailPattern } from "../../constants/regex";
import Success from "../../components/Success";
import Loading from "../../components/Loading";
import ResultModal from "../../components/ResultModal";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [loginname, setLoginname] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [visible, setVisible] = useState(true);

  const handleGoQuickLogin = () => {
    navigation.navigate("QuickLogin");
  };

  const handleGoRegister = () => {
    navigation.navigate("Register");
  };

  const handleGoForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleLogin = () => {
    // navigation.navigate("Tab");
    if (!phonePattern.test(loginname) && !emailPattern.test(loginname)) {
      console.log("no match");
      return;
    }

    console.log("match");

    // setIsLoading(() => true);
    // setTimeout(() => {
    //   setIsLoading(() => false);
    //   setIsSuccess(() => true);

    //   setTimeout(() => {
    //     setIsSuccess(() => false);
    //   }, 2000);
    // }, 2000);
  };

  return (
    <Container
      behavior={Platform.OS === "android" ? undefined : "padding"}
      onResponderRelease={() => Keyboard.dismiss()}
    >
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
        <TitleContainer>
          <Title>Sign in to</Title>
          <Logo>Zipper</Logo>
          <Subtitle>输入你的信息</Subtitle>
        </TitleContainer>

        <InputContainer>
          <AnimatedIconText
            value={loginname}
            caption="Email or Phone"
            placeholder="Email or Phone"
            btnOperationText="快速登录！"
            btnOperationOnPress={handleGoQuickLogin}
            onChangeText={(loginname) => setLoginname(loginname)}
            activeIcon={<UserIcon />}
            unactiveIcon={<UserIcon fill={inactiveTintColor} />}
            activeIconLeft={13}
            unactiveIconLeft={13}
            activeIconTop={100}
            unactiveIconTop={35}
          />

          <AnimatedIconText
            value={password}
            caption="Password"
            placeholder="Password"
            secureTextEntry={true}
            btnOperationText="忘记密码？"
            btnOperationOnPress={handleGoForgotPassword}
            onChangeText={(password) => setPassword(password)}
            activeIcon={<PasswordIcon />}
            unactiveIcon={<PasswordIcon fill={inactiveTintColor} />}
            activeIconLeft={14}
            unactiveIconLeft={14}
            activeIconTop={100}
            unactiveIconTop={37}
          />

          <BtnLogin onPress={handleLogin}>
            <LoginText>登陆</LoginText>
          </BtnLogin>

          <BtnRegister onPress={handleGoRegister}>
            <BtnText>没有账号？立即注册</BtnText>
          </BtnRegister>
        </InputContainer>
      </SafeAreaView>

      <Success isActive={isSuccess} />
      <Loading isActive={isLoading} />

      <ResultModal
        visible={visible}
        onDismiss={() => setVisible(false)}
        children={<ModalView></ModalView>}
      />
    </Container>
  );
};

export default LoginScreen;

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
  font-size: 42px;
  font-weight: 700;
  color: #383838;
`;

const Logo = styled.Text`
  font-size: 42px;
  font-weight: 700;
  color: #327feb;
`;

const Subtitle = styled.Text`
  margin-top: 16px;
  font-size: 15px;
  color: #a9a9a9;
  /* text-align: center; */
`;

const InputContainer = styled.View`
  padding: 46px;
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

const ModalView = styled.View`
  height: 500px;
  width: 200px;
  background: black;
`;
