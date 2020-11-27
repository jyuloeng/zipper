import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { backgroundColor, defaultBlackColor } from "../../constants/colors";
import Header from "../../components/Header";
import Avatar from "../../components/Avatar";

interface AttentionProps {
  id: string | number;
  userId: string | number;
  author: string;
  avatar: string;
  date: string;
}

const attentions = [
  {
    id: 213,
    userId: 213,
    author: "Liu Yi",
    avatar: "https://randomuser.me/api/portraits/thumb/men/31.jpg",
    date: "19-11-23",
  },
  {
    id: 234,
    userId: 234,
    author: "Nikhil D'Souza",
    avatar: "https://randomuser.me/api/portraits/thumb/women/31.jpg",
    date: "18:07",
  },
  {
    id: 231,
    userId: 231,
    author: "Chad Goodman",
    avatar: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
    date: "11-16",
  },
];
const AttentionScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }: { item: AttentionProps }) => {
    const { author, avatar, userId, date } = item;

    return (
      <TouchableOpacity>
        <Attention>
          <Avatar width={44} height={44} borderRadius={16} image={avatar} />

          <Content>
            <Author>{author}</Author>
            <Subtitle>开始关注你了</Subtitle>
            <Date>{date}</Date>
          </Content>

          <BtnAttention
            style={{
              transform: [{ translateY: -12 }],
            }}
          >
            <BtnAttentionText>关注</BtnAttentionText>
          </BtnAttention>
        </Attention>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <SafeAreaView>
        <Header
          title="新关注"
          renderBtnLeft={
            <Feather name="chevron-left" size={26} color={defaultBlackColor} />
          }
          btnLeftOnPress={handleGoBack}
        />

        <FlatList
          data={attentions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          style={{
            // marginBottom: 100,
            backgroundColor: backgroundColor,
          }}
        />
      </SafeAreaView>
    </Container>
  );
};

export default AttentionScreen;

const Container = styled.View`
  background: white;
`;

const Attention = styled.View`
  flex-direction: row;
  padding: 12px 12px 6px;
  /* align-items: center; */
  /* margin: 0 18px 12px; */
  background: white;
  /* border-radius: 28px; */
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Content = styled.View`
  flex: 1;
  margin: 0 12px;
`;

const Caption = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Author = styled.Text`
  margin-bottom: 3px;
  font-size: 15px;
  font-weight: 600;
  color: #22262f;
`;

const Subtitle = styled.Text`
  margin-bottom: 8px;
  color: #999;
`;

const Date = styled.Text`
  align-items: flex-end;
  margin-bottom: 5px;
  font-size: 13px;
  color: #a9a9a9;
`;

const BtnAttention = styled.TouchableOpacity`
  position: absolute;
  right: 12px;
  top: 50%;
  padding: 6px 12px;
  border: 1px solid #327feb;
  border-radius: 15px;
`;

const BtnAttentionText = styled.Text`
  color: #327feb;
  font-size: 13px;
  /* font-weight: 600; */
`;
