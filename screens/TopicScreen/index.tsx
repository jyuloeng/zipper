import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { SafeAreaView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather, Entypo, FontAwesome5 } from "@expo/vector-icons";

import Header from "../../components/Header";
import TopicCoverItem from "./components/TopicCoverItem";
import {
  backgroundColor,
  defaultBlackColor,
  defaultBlueColor,
  inactiveTintColor,
} from "../../constants/colors";
import { generateUUID } from "../../utils";

interface TopicItemProps {
  id: string;
  name: string;
  nums: number;
  covers: Array<TopicCoverItemProps>;
}

interface TopicCoverItemProps {
  id: string;
  cover: string;
}

const topics: Array<TopicItemProps> = [];

for (let i = 0; i < 20; i++) {
  topics.push({
    id: generateUUID(),
    name: `这是第${i}个话题`,
    nums: ~~(Math.random() * 9999),
    covers: new Array(6).fill({
      id: generateUUID(),
      cover: "https://picsum.photos/200/150",
    }),
  });
}

const TopicScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const TopicItem = ({ item }: { item: TopicItemProps }) => {
    const { id, name, nums, covers } = item;

    const renderTopicCoverItem = ({
      item,
      index,
    }: {
      item: TopicCoverItemProps;
      index: number;
    }) => {
      return <TopicCoverItem {...item} index={index} />;
    };

    return (
      <TopicItemContainer>
        <TopicHeader>
          <TopicName># {name}</TopicName>

          <TopicNums>
            <TopicNumsText>{nums} 条动态</TopicNumsText>
            <Entypo
              name="chevron-small-right"
              size={20}
              color={inactiveTintColor}
            />
          </TopicNums>
        </TopicHeader>

        <TopicCoverContainer>
          <FlatList
            data={covers}
            renderItem={renderTopicCoverItem}
            ListFooterComponent={() => (
              <ParticipatingTopic>
                <ParticipatingTopicText>参与主题</ParticipatingTopicText>
              </ParticipatingTopic>
            )}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </TopicCoverContainer>
      </TopicItemContainer>
    );
  };

  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          title="主题墙"
          renderBtnLeft={
            <Feather name="chevron-left" size={26} color={defaultBlackColor} />
          }
          btnLeftOnPress={handleGoBack}
        />

        <FlatList
          data={topics}
          renderItem={TopicItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </Container>
  );
};

export default TopicScreen;

const Container = styled.View`
  flex: 1;
`;

const TopicItemContainer = styled.View`
  margin: 22px 0;
`;

const TopicHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 15px 0 20px;
`;

const TopicName = styled.Text`
  color: ${defaultBlackColor};
  font-size: 16px;
  font-weight: 500;
`;

const TopicNums = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TopicNumsText = styled.Text`
  color: ${inactiveTintColor};
  font-size: 13px;
`;

const TopicCoverContainer = styled.View``;

const ParticipatingTopic = styled.View`
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-right: 15px;
  background-color: #ededed;
`;

const ParticipatingTopicText = styled.Text`
  color: ${defaultBlueColor};
`;
