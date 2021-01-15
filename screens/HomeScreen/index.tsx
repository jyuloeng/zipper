import React, { useEffect } from "react";
import styled from "styled-components/native";
import {
  GestureResponderEvent,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import Card from "../../components/Card";
import RecentUpdate from "../../components/RecentUpdate/index";
import { activeTintColor, backgroundColor } from "../../constants/colors";
import { ShareIcon } from "../../components/Icons";
import { HomeCardProps } from "../../types";

const cards = [
  {
    id: 1,
    caption: "Price Tag",
    image: "https://picsum.photos/720/1440",
    author: "Liu Yi",
    avatar: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    content:
      "Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China. Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China. ",
    like_count: 34,
    like_authors: [
      {
        id: 235,
        nickname: "123",
        image: "https://randomuser.me/api/portraits/thumb/men/41.jpg",
      },
      {
        id: 235,
        nickname: "123",
        image: "https://randomuser.me/api/portraits/thumb/women/41.jpg",
      },
      {
        id: 235,
        nickname: "123",
        image: "https://randomuser.me/api/portraits/thumb/men/42.jpg",
      },
    ],
    comment_count: 12,
    comments: [
      {
        id: 23,
        author: "Yu Liang",
        content: "I like it",
      },
      {
        id: 24,
        author: "Nikhiljay",
        content: "Wow!!!So crazy!!",
      },
    ],
    tag: {
      id: 1235,
      name: "与世界不见不散",
    },
    location: {
      id: 645,
      name: "上海",
    },
    gmt_create: 3,
  },
  {
    id: 2,
    caption: "The DM App - Ananoumous Chat",
    image: "https://picsum.photos/1440/720",
    author: "Chad Goodman",
    avatar: "https://randomuser.me/api/portraits/thumb/men/70.jpg",
    content:
      "Design+Code was the first resource I used when breaking into software. I went from knowing nothing about design or code to building a production ready app from scratch. ",
    like_count: 29023,
    like_authors: [
      {
        id: 235,
        nickname: "123",
        image: "https://randomuser.me/api/portraits/thumb/men/32.jpg",
      },
      {
        id: 235,
        nickname: "123",
        image: "https://randomuser.me/api/portraits/thumb/women/2.jpg",
      },
    ],
    comment_count: 70,
    comments: [
      {
        id: 12,
        author: "odd",
        content: "这是什么来的，我评论一下看看",
      },
      {
        id: 1323,
        author: "Liu Yi",
        content: "我也不懂，跟着评论一下",
      },
    ],
    tag: {
      id: 23,
      name: "大片进行时",
    },
    location: {
      id: 35,
      name: "佛山·迎海国际城",
    },
    gmt_create: 5,
  },
  {
    id: 3,
    caption: "Nikhiljay",
    image: "https://picsum.photos/1920/1080",
    author: "Nikhil D'Souza",
    avatar: "https://randomuser.me/api/portraits/thumb/men/60.jpg",
    content:
      "Recently finished the React course by @Mengto, and I 10/10 would recommend. I already rewrote my personal website in @reactjs and I'm very excited with it.",
    like_count: 1,
    like_authors: [
      {
        id: 235,
        nickname: "123",
        image: "https://randomuser.me/api/portraits/thumb/women/32.jpg",
      },
    ],
    comment_count: 2,
    comments: [
      {
        id: 64,
        author: "Chad Goodman",
        content: "😈 看看 emoji",
      },
      {
        id: 75,
        author: "Liu Yi",
        content: "🐸 😁 👌",
      },
    ],
    tag: {
      id: 24,
      name: "每日穿搭挑战",
    },
    location: {
      id: 15,
      name: "佛山",
    },
    gmt_create: 2,
  },
];

const recentUpdateUsers = [
  {
    avatar: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    username: "Liu Yi",
  },
  {
    avatar: "https://randomuser.me/api/portraits/thumb/men/63.jpg",
    username: "Yu Liang",
  },
  {
    avatar: "https://randomuser.me/api/portraits/thumb/women/65.jpg",
    username: "odd",
  },
  {
    avatar: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
    username: "zqa",
  },
  {
    avatar: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
    username: "laydy",
  },
  {
    avatar: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
    username: "qing",
  },
  {
    avatar: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
    username: "ding",
  },
  {
    avatar: "https://randomuser.me/api/portraits/thumb/women/7.jpg",
    username: "Jia Wei",
  },
];

interface ActionBarProps {
  name: string;
  onPress: (event: GestureResponderEvent) => void;
}

const ActionBar = (props: ActionBarProps) => {
  const { name, onPress } = props;

  switch (name) {
    case "camera":
      return (
        <TouchableOpacity onPress={onPress}>
          <SimpleLineIcons name="camera" size={24} color={activeTintColor} />
        </TouchableOpacity>
      );
    case "direct":
      return (
        <TouchableOpacity onPress={onPress}>
          <ShareIcon />
        </TouchableOpacity>
      );
    default:
      return null;
  }
};

const HomeScreen = () => {
  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
  }, []);

  const handleCamera = () => {};

  const handleDirect = () => {};

  const renderItem = ({ item }: { item: HomeCardProps }) => {
    return <Card {...item} />;
  };

  return (
    <Container>
      <StatusBar backgroundColor="#fff" />

      <SafeAreaView style={{ flex: 1 }}>
        <Header>
          <ActionBar name="camera" onPress={handleCamera} />
          <Logo>Zipper</Logo>
          <ActionBar name="direct" onPress={handleDirect} />
        </Header>

        <RecentUpdate list={recentUpdateUsers} />

        <FlatList
          data={cards}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: backgroundColor,
          }}
          ListHeaderComponent={<PlaceholderView />}
        />
      </SafeAreaView>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
  /* border: 1px solid red; */
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  padding: 4px 16px 16px;
  background: #fff;
`;

const Logo = styled.Text`
  /* margin-left: 10px; */
  font-size: 26px;
  font-weight: 600;
  color: #327feb;
  /* color: #3c4560; */
`;

// 占位
const PlaceholderView = styled.View`
  height: 10px;
  background: #f2f2f2;
`;
