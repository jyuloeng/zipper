import React from "react";
import styled from "styled-components/native";
import {
  SafeAreaView,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Feather, AntDesign } from "@expo/vector-icons";

import { StackParamList } from "../../types";
import { defaultBlackColor } from "../../constants/colors";
import TabView from "../../components/TabView";
import TabView2 from "../../components/TabView/tabview";
import Header from "../../components/Header";
import Intro from "../../components/Intro";

type StudioProp = StackScreenProps<StackParamList, "Studio">;

const StudioScreen = ({ route, navigation }: StudioProp) => {
  const { userId } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <SafeAreaView>
        <Header
          title="cabezapatata"
          renderBtnLeft={
            <Feather name="chevron-left" size={26} color={defaultBlackColor} />
          }
          renderBtnRight={
            <Feather
              name="more-horizontal"
              size={26}
              color={defaultBlackColor}
            />
          }
          btnLeftOnPress={handleGoBack}
        />
      </SafeAreaView>
      
      <TabView2 />
    </Container>
  );
};

export default StudioScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;