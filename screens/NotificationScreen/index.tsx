import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { backgroundColor, defaultBlackColor } from "../../constants/colors";
import Header from "../../components/Header";
import Avatar from "../../components/Avatar";

enum Notificationtype {
  Activity = 0,
  Comment = 1,
}

interface NotificationProps {
  id: string | number;
  userId?: string | number;
  author: string;
  avatar: string;
  cover: string;
  type: Notificationtype;
  date: string;
}

const notifications = [
  {
    id: 213,
    author: "Liu Yi",
    avatar: "https://randomuser.me/api/portraits/thumb/men/31.jpg",
    cover: "https://picsum.photos/1440/720",
    type: 0,
    date: "19-11-23",
  },
  {
    id: 234,
    author: "Nikhil D'Souza",
    avatar: "https://randomuser.me/api/portraits/thumb/women/31.jpg",
    cover: "https://picsum.photos/1440/720",
    type: 1,
    date: "18:07",
  },
  {
    id: 231,
    author: "Chad Goodman",
    avatar: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
    cover: "https://picsum.photos/1440/720",
    type: 0,
    date: "11-16",
  },
];
const NotificationScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }: { item: NotificationProps }) => {
    const { userId, author, avatar, cover, type, date } = item;

    return (
      <Notification>
        <TouchableOpacity>
          <Avatar width={44} height={44} borderRadius={16} image={avatar} />
        </TouchableOpacity>

        <Content>
          <TouchableOpacity>
            <Author>{author}</Author>
          </TouchableOpacity>

          <Caption>
            在{type === Notificationtype.Activity ? "动态" : "评论"}@了你
          </Caption>
          <Date>{date}</Date>
        </Content>

        <Cover>
          <CoverImage source={{ uri: cover }} />
        </Cover>
      </Notification>
    );
  };

  return (
    <Container>
      <SafeAreaView>
        <Header
          title="你被@了"
          renderBtnLeft={
            <Feather name="chevron-left" size={26} color={defaultBlackColor} />
          }
          btnLeftOnPress={handleGoBack}
        />

        <FlatList
          data={notifications}
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

export default NotificationScreen;

const Container = styled.View`
  background: white;
`;

const Notification = styled.View`
  flex-direction: row;
  padding: 12px;
  /* margin: 0 18px 12px; */
  background: white;
  /* border-radius: 28px; */
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Content = styled.View`
  flex: 1;
  padding: 0 12px;
`;

const Author = styled.Text`
  margin-bottom: 6px;
  font-size: 15px;
  font-weight: 600;
  color: #22262f;
`;

const Caption = styled.Text`
  font-size: 14px;
  color: #22262f;
`;

const Date = styled.Text`
  position: absolute;
  left: 12px;
  bottom: 0;
  font-size: 13px;
  color: #a9a9a9;
`;

const Cover = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  overflow: hidden;
`;

const CoverImage = styled.Image`
  width: 80px;
  height: 80px;
`;
