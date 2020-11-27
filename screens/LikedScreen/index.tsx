import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import Header from "../../components/Header";
import Avatar from "../../components/Avatar";
import { defaultBlackColor, backgroundColor } from "../../constants/colors";

enum LikedType {
  Activity = 0,
  Comment = 1,
}

interface LikedProps {
  id: string | number;
  author: string;
  avatar: string;
  cover: string;
  type: LikedType;
  date: string;
}

const likes = [
  {
    id: 213,
    author: "Liu Yi",
    avatar: "https://randomuser.me/api/portraits/thumb/men/31.jpg",
    cover: "https://picsum.photos/1440/720",
    type: 0,
    date: "2020/11/16 下午8:07:31",
  },
  {
    id: 234,
    author: "Nikhil D'Souza",
    avatar: "https://randomuser.me/api/portraits/thumb/women/31.jpg",
    cover: "https://picsum.photos/1440/720",
    type: 1,
    date: "2020/11/16 下午8:07:31",
  },
  {
    id: 231,
    author: "Chad Goodman",
    avatar: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
    cover: "https://picsum.photos/1440/720",
    type: 0,
    date: "2020/11/16 下午8:07:31",
  },
];

const LikedScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }: { item: LikedProps }) => {
    const { author, avatar, type, date, cover } = item;

    return (
      <Liked>
        <TouchableOpacity>
          <Avatar width={44} height={44} borderRadius={16} image={avatar} />
        </TouchableOpacity>

        <Content>
          <TouchableOpacity>
            <Author>{author}</Author>
          </TouchableOpacity>

          <Caption>
            赞了你的{type === LikedType.Activity ? "动态" : "评论"}
          </Caption>
          <Date>{date}</Date>
        </Content>

        <Cover>
          <CoverImage source={{ uri: cover }} />
        </Cover>
      </Liked>
    );
  };

  return (
    <Container>
      <SafeAreaView>
        <Header
          title="你被赞了"
          renderBtnLeft={
            <Feather name="chevron-left" size={26} color={defaultBlackColor} />
          }
          btnLeftOnPress={handleGoBack}
        />

        <FlatList
          data={likes}
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
export default LikedScreen;

const Container = styled.View`
  flex: 1;
  background: white;
`;

const Liked = styled.View`
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
