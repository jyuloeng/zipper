import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import Avatar from "../../components/Avatar";
import CollapseText from "../../components/CollapseText";
import {
  MessageColorIcon,
  LikeColorIcon,
  NotificationColorIcon,
  AttentionColorIcon,
  LikeIcon,
  CommentIcon,
} from "../../components/Icons";
import { backgroundColor } from "../../constants/colors";

const comments = [
  {
    id: 213,
    author: "Liu Yi",
    avatar: "https://randomuser.me/api/portraits/thumb/men/31.jpg",
    content:
      "Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China. Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China. ",
    cover: "https://picsum.photos/1440/720",
    date: "2020/11/16 下午8:07:31",
  },
  {
    id: 234,
    author: "Nikhil D'Souza",
    avatar: "https://randomuser.me/api/portraits/thumb/women/31.jpg",
    content:
      "Design+Code was the first resource I used when breaking into software. I went from knowing nothing about design or code to building a production ready app from scratch. ",
    cover: "https://picsum.photos/1440/720",
    date: "2020/11/16 下午8:07:31",
  },
  {
    id: 231,
    author: "Chad Goodman",
    avatar: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
    content:
      "Recently finished the React course by @Mengto, and I 10/10 would recommend. I already rewrote my personal website in @reactjs and I'm very excited with it. ",
    cover: "https://picsum.photos/1440/720",
    date: "2020/11/16 下午8:07:31",
  },
];

interface ActivityCommentProps {
  id: string | number;
  author: string;
  avatar: string;
  content: string;
  cover: string;
  date: string;
}

const ActivityScreen = () => {
  const navigation = useNavigation();

  const handleGoAttention = () => {
    navigation.navigate("Attention");
  };
  const handleGoLiked = () => {
    navigation.navigate("Liked");
  };
  const handleGoMessage = () => {
    navigation.navigate("Message");
  };
  const handleGoNotification = () => {
    navigation.navigate("Notification");
  };

  const actions: Array<{
    title: string;
    num: number;
    icon: React.ReactNode;
    onPress: () => void;
  }> = [
    {
      title: "新关注",
      num: 100,
      icon: <AttentionColorIcon />,
      onPress: handleGoAttention,
    },
    {
      title: "你被赞了",
      num: 1,
      icon: <LikeColorIcon />,
      onPress: handleGoLiked,
    },
    {
      title: "私信",
      num: 56,
      icon: <MessageColorIcon />,
      onPress: handleGoMessage,
    },
    {
      title: "你被@了",
      num: 0,
      icon: <NotificationColorIcon />,
      onPress: handleGoNotification,
    },
  ];

  const renderItem = ({ item }: { item: ActivityCommentProps }) => {
    const { author, avatar, content, cover, date } = item;

    return (
      <Comment>
        <TouchableOpacity>
          <Avatar width={48} height={48} borderRadius={16} image={avatar} />
        </TouchableOpacity>

        <Content>
          <TouchableOpacity>
            <Author>{author}</Author>
          </TouchableOpacity>

          <CollapseText text={content} numberOfLines={3} />

          <Date>{date}</Date>
          <CommentAction>
            <CommentActionBar>
              <LikeIcon />
            </CommentActionBar>
            <CommentActionBar>
              <CommentIcon />
            </CommentActionBar>
          </CommentAction>
        </Content>

        <Cover>
          <CoverImage source={{ uri: cover }} />
        </Cover>
      </Comment>
    );
  };

  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="动态" />

        <FlatList
          data={comments}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          style={{
            // marginBottom: 100,
            backgroundColor: backgroundColor,
          }}
          ListHeaderComponent={
            <>
              <Action>
                {actions.map((action, index) => (
                  <ActionBar key={index} onPress={action.onPress}>
                    <BarLeft>
                      {action.icon}
                      <BarTitle>{action.title}</BarTitle>
                      {action.num > 0 ? (
                        action.num > 99 ? (
                          <BarBadge>
                            <BadgeText>99+</BadgeText>
                          </BarBadge>
                        ) : (
                          <BarBadge>
                            <BadgeText>{action.num}</BadgeText>
                          </BarBadge>
                        )
                      ) : null}
                    </BarLeft>

                    <Ionicons
                      name="ios-arrow-forward"
                      size={18}
                      color="black"
                    />
                  </ActionBar>
                ))}
              </Action>

              <Title>评论</Title>
            </>
          }
        />
      </SafeAreaView>
    </Container>
  );
};

export default ActivityScreen;

const Container = styled.View`
  flex: 1;
  background: white;
`;

const Action = styled.View`
  background: white;
`;

const ActionBar = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
`;

const BarLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BarTitle = styled.Text`
  position: relative;
  margin-left: 12px;
  font-size: 15px;
  color: #22262f;
`;

const BarBadge = styled.View`
  position: relative;
  left: 2px;
  top: -5px;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  background: #0c8eff;
  border-radius: 50px;
`;

const BadgeText = styled.Text`
  font-size: 12px;
  color: white;
`;

const Title = styled.Text`
  margin: 20px;
  font-size: 16px;
  font-weight: 600;
  color: #22262f;
`;

const Comment = styled.View`
  flex-direction: row;
  padding: 12px;
  margin: 0 18px 12px;
  background: white;
  border-radius: 28px;
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.1);
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

const CommentAction = styled.View`
  flex-direction: row;
  /* margin-top: 12px; */
`;

const CommentActionBar = styled.TouchableOpacity`
  margin-right: 15px;
`;

const Cover = styled.TouchableOpacity`
  width: 90px;
  height: 90px;
  border-radius: 22px;
  overflow: hidden;
`;

const CoverImage = styled.Image`
  width: 90px;
  height: 90px;
`;

const Date = styled.Text`
  /* position: absolute; */
  /* left: 12px; */
  /* bottom: 0; */
  margin: 8px 0 10px;
  font-size: 13px;
  color: #a9a9a9;
`;
