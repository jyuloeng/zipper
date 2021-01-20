import React from "react";
import styled from "styled-components/native";
import {
  SafeAreaView,
  GestureResponderEvent,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather, Entypo } from "@expo/vector-icons";

import Header from "../../components/Header";
import QuickAttention from "./components/QuickAttention";
import { defaultBlackColor, defaultBlueColor } from "../../constants/colors";
import { generateUUID } from "../../utils";

const users = [
  {
    id: generateUUID(),
    nickname: "Liu Yi",
    avatar: "https://randomuser.me/api/portraits/thumb/men/31.jpg",
    activities: ~~(Math.random() * 9999),
    description: "这个人很懒，什么都没留下",
  },
  {
    id: generateUUID(),
    nickname: "Liu Yi",
    avatar: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
    activities: ~~(Math.random() * 9999),
    description: "这个人很懒，什么都没留下",
  },
  {
    id: generateUUID(),
    nickname: "Liu Yi",
    avatar: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
    activities: ~~(Math.random() * 9999),
    description: "这个人很懒，什么都没留下",
  },
];

const RecommendedUserScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const RecommendedUserTitle = ({
    title,
    subTitle,
    onPress,
  }: {
    title: string;
    subTitle: string;
    onPress?: (e: GestureResponderEvent) => void;
  }) => (
    <RecommendedUserTitleWrapper>
      <RecommendedUserTitleContainer>
        <RecommendedUserTitleText>{title}</RecommendedUserTitleText>
        <RecommendedUserSubTitleText>{subTitle}</RecommendedUserSubTitleText>
      </RecommendedUserTitleContainer>

      <TouchableWithoutFeedback onPress={onPress}>
        <BtnRecommendedUserTitleAll>
          <BtnRecommendedUserTitleAllText>更多</BtnRecommendedUserTitleAllText>
          <Entypo
            name="chevron-small-right"
            size={20}
            color={defaultBlueColor}
          />
        </BtnRecommendedUserTitleAll>
      </TouchableWithoutFeedback>
    </RecommendedUserTitleWrapper>
  );

  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          title="发现优质博主"
          renderBtnLeft={
            <Feather name="chevron-left" size={26} color={defaultBlackColor} />
          }
          btnLeftOnPress={handleGoBack}
        />

        <RecommendedUserTitle
          title="热门人物"
          subTitle="最具人气的zipper明星和大V"
        />

        {users.map((item) => (
          <QuickAttention {...item} key={item.id} />
        ))}

        <RecommendedUserTitle
          title="最新入驻"
          subTitle="最新入住zipper的优质博主"
        />

        {users.map((item) => (
          <QuickAttention {...item} key={item.id} />
        ))}

        <RecommendedUserTitle title="随便看看" subTitle="遇见你喜欢的博主" />

      </SafeAreaView>
    </Container>
  );
};

export default RecommendedUserScreen;

const Container = styled.View`
  flex: 1;
`;

const RecommendedUserTitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 15px 20px;
`;

const RecommendedUserTitleContainer = styled.View``;

const RecommendedUserTitleText = styled.Text`
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: 500;
  color: ${defaultBlueColor};
`;

const RecommendedUserSubTitleText = styled.Text`
  font-size: 12px;
  color: ${defaultBlueColor};
`;

const BtnRecommendedUserTitleAll = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BtnRecommendedUserTitleAllText = styled.Text`
  color: ${defaultBlueColor};
`;
