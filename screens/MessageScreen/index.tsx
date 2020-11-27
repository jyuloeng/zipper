import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { backgroundColor, defaultBlackColor } from "../../constants/colors";
import Header from "../../components/Header";
import Avatar from "../../components/Avatar";

interface MessageProps {
  id: string | number;
  author: string;
  avatar: string;
  latest_message: string;
  num: number;
  date: string;
}

const messages = [
  {
    id: 213,
    author: "Liu Yi",
    avatar: "https://randomuser.me/api/portraits/thumb/men/31.jpg",
    latest_message:
      "Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China. Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China. ",
    num: 23,
    date: "19-11-23",
  },
  {
    id: 234,
    author: "Nikhil D'Souza",
    avatar: "https://randomuser.me/api/portraits/thumb/women/31.jpg",
    latest_message:
      "Design+Code was the first resource I used when breaking into software. I went from knowing nothing about design or code to building a production ready app from scratch. ",
    num: 100,
    date: "18:07",
  },
  {
    id: 231,
    author: "Chad Goodman",
    avatar: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
    latest_message:
      "Recently finished the React course by @Mengto, and I 10/10 would recommend. I already rewrote my personal website in @reactjs and I'm very excited with it. ",
    num: 3,
    date: "11-16",
  },
];

const MessageScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }: { item: MessageProps }) => {
    const { author, avatar, latest_message, num, date } = item;

    return (
      <TouchableOpacity>
        <Message>
          <Avatar width={44} height={44} borderRadius={16} image={avatar} />

          <Content>
            <Author>{author}</Author>
            <LatestMessage numberOfLines={1}>{latest_message}</LatestMessage>
          </Content>

          <Meta>
            <Date>{date}</Date>
            {num > 0 ? (
              num > 99 ? (
                <BarBadge>
                  <BadgeText>99+</BadgeText>
                </BarBadge>
              ) : (
                <BarBadge>
                  <BadgeText>{num}</BadgeText>
                </BarBadge>
              )
            ) : null}
          </Meta>
        </Message>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <SafeAreaView>
        <Header
          title="私信"
          renderBtnLeft={
            <Feather name="chevron-left" size={26} color={defaultBlackColor} />
          }
          btnLeftOnPress={handleGoBack}
        />

        <FlatList
          data={messages}
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

export default MessageScreen;

const Container = styled.View`
  background: white;
`;

const Message = styled.View`
  flex-direction: row;
  padding: 12px;
  /* margin: 0 18px 12px; */
  background: white;
  /* border-radius: 28px; */
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Content = styled.View`
  flex: 1;
  margin-left: 12px;
`;

const Author = styled.Text`
  margin-bottom: 6px;
  font-size: 15px;
  font-weight: 600;
  color: #22262f;
`;

const Date = styled.Text`
  align-items: flex-end;
  margin-bottom: 5px;
  font-size: 13px;
  color: #a9a9a9;
`;

const Meta = styled.View`
  width: 56px;
  align-items: flex-end;
`;

const LatestMessage = styled.Text`
  color: #999;
`;

const BarBadge = styled.View`
  justify-content: center;
  align-items: center;
  /* margin-right: 2px; */
  padding: 2px 6px;
  background: #0c8eff;
  border-radius: 50px;
`;

const BadgeText = styled.Text`
  font-size: 13px;
  color: white;
`;
