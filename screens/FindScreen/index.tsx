import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Platform,
  GestureResponderEvent,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel, {
  ParallaxImage,
  AdditionalParallaxProps,
} from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Entypo } from "@expo/vector-icons";

import RecommendedUser from "../../components/RecommendedUser";
import { ExploreIcon } from "../../components/Icons/index";
import { ScreenWidth } from "../../constants/dimensions";
import {
  activeTintColor,
  defaultBlueColor,
  backgroundColor,
  defaultBlackColor,
  inactiveTintColor,
} from "../../constants/colors";
import { generateUUID } from "../../utils";
import QuickAttention from "../../components/QuickAttention";

const exploreIconStyle = {
  position: "absolute",
  left: 12,
  top: 12,
};

const ENTRIES1 = [
  {
    title: "Beautiful and dramatic Antelope Canyon",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/UYiroysl.jpg",
  },
  {
    title: "Earlier this morning, NYC",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/UPrs1EWl.jpg",
  },
  {
    title: "White Pocket Sunset",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration: "https://i.imgur.com/MABUbpDl.jpg",
  },
  {
    title: "Acrocorinth, Greece",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/KZsmUi2l.jpg",
  },
  {
    title: "The lone tree, majestic landscape of New Zealand",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/2nCt3Sbl.jpg",
  },
];

interface TalkingTopicProps {
  id: string;
  name: string;
  cover: string;
  talks: number;
}

const talkingTopics: Array<TalkingTopicProps> = [];

for (let i = 0; i < 6; i++) {
  talkingTopics.push({
    id: generateUUID(),
    name: `第${i}话题`,
    cover: "https://picsum.photos/200/150",
    talks: ~~(Math.random() * 999),
  });
}

interface RecommendedUserProps {
  id: string;
  nickname: string;
  avatar: string;
  activities: number;
  description: string;
  covers: Array<{
    id: string;
    cover: string;
  }>;
}

const recomendedUsers: Array<RecommendedUserProps> = [];

for (let i = 0; i < 20; i++) {
  recomendedUsers.push({
    id: generateUUID(),
    nickname: `第${i + 1}位PO主`,
    avatar: `https://randomuser.me/api/portraits/thumb/women/${50 + i}.jpg`,
    activities: ~~(Math.random() * 999),
    description: "这是一条重复的描述".repeat(i + 1),
    covers: new Array(3).fill({
      id: generateUUID(),
      cover: "https://picsum.photos/200/150",
    }),
  });
}

const FindScreen = () => {
  const navigation = useNavigation();

  const [searchValue, setSearchValue] = useState("");
  const [carouselCurrentIndex, setCarouselCurrentIndex] = useState(0);
  const [carouselData, setCarouselData] = useState<any>([]);

  useEffect(() => {
    setCarouselData(ENTRIES1);
  }, []);

  const ParallaxImageItem = (
    { item, index }: { item: any; index: number },
    parallaxProps?: AdditionalParallaxProps
  ) => {
    return (
      <ParallaxImageItemContainer>
        <ParallaxImage
          {...parallaxProps}
          source={{ uri: item.illustration }}
          containerStyle={styles.parallaxImageContainer}
          style={styles.parallaxImage}
          parallaxFactor={0.4}
        />
      </ParallaxImageItemContainer>
    );
  };

  const TalkingTopicItem = ({ item }: { item: TalkingTopicProps }) => {
    const { name, cover, talks } = item;

    return (
      <TalkingTopicItemContainer>
        <TalkingTopicCover source={{ uri: cover }} />
        <TalkingTopicCoverMask />
        <TalkingTopicName>
          <TalkingTopicNameText># {name}</TalkingTopicNameText>
        </TalkingTopicName>
        <TalkingTopicTalks>{talks} 条动态</TalkingTopicTalks>
      </TalkingTopicItemContainer>
    );
  };

  const RecommendedUserItem = ({ item }: { item: RecommendedUserProps }) => {
    const { nickname, avatar, activities, description, covers } = item;
    return (
      <TouchableWithoutFeedback>
        <RecommendedUser
          {...item}
          avatarStyle={{
            width: 44,
            height: 44,
          }}
        />
      </TouchableWithoutFeedback>
    );
  };

  const RegionHeader = ({
    title,
    onPress,
  }: {
    title: string;
    onPress?: (e: GestureResponderEvent) => void;
  }) => {
    return (
      <RegionHeaderContainer>
        <RegionTitle>
          <LinearGradient
            colors={[
              defaultBlueColor,
              "rgba(12,142,255,0.8)",
              "rgba(12,142,255,0.5)",
            ]}
            style={{
              width: 6,
              height: 16,
              alignItems: "center",
              borderRadius: 4,
            }}
          />
          <RegionTitleText>{title}</RegionTitleText>
        </RegionTitle>

        <TouchableWithoutFeedback onPress={onPress}>
          <BtnRegionAll>
            <BtnRegionAllText>查看全部</BtnRegionAllText>
            <Entypo
              name="chevron-small-right"
              size={20}
              color={inactiveTintColor}
            />
          </BtnRegionAll>
        </TouchableWithoutFeedback>
      </RegionHeaderContainer>
    );
  };

  const handleGoTopic = () => {
    navigation.navigate("Topic");
  };

  const handleGoRecommendedUser = () => {
    navigation.navigate("RecommendedUser");
  };

  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <SearchContainer>
          <SearchInput
            style={{
              width: ScreenWidth - 40,
            }}
            onChangeText={(text) => setSearchValue(text)}
          />
          <ExploreIcon
            stroke={activeTintColor}
            width={16}
            height={16}
            style={exploreIconStyle}
          />
        </SearchContainer>

        <FlatList
          data={recomendedUsers}
          renderItem={RecommendedUserItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <>
              <CarouselContainer>
                <Carousel
                  sliderWidth={ScreenWidth}
                  itemWidth={ScreenWidth - 60}
                  data={carouselData}
                  renderItem={ParallaxImageItem}
                  hasParallaxImages={true}
                  loop={true}
                  autoplay={true}
                  autoplayDelay={3000}
                  autoplayInterval={5000}
                  onSnapToItem={(index) => setCarouselCurrentIndex(() => index)}
                />

                <IndicatorContainer>
                  {carouselData.map((item: any, index: number) => (
                    <Indicator
                      key={item.illustration}
                      style={{
                        width: index === carouselCurrentIndex ? 16 : 8,
                        backgroundColor:
                          index === carouselCurrentIndex
                            ? defaultBlueColor
                            : backgroundColor,
                      }}
                    />
                  ))}
                </IndicatorContainer>
              </CarouselContainer>

              <HotRank></HotRank>

              <RegionContainer>
                <RegionHeader
                  title="正在讨论"
                  onPress={() => handleGoTopic()}
                />
                <FlatList
                  data={talkingTopics}
                  renderItem={TalkingTopicItem}
                  keyExtractor={(item) => item.id}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />

                <RegionHeader
                  title="热门PO主"
                  onPress={() => handleGoRecommendedUser()}
                />

                <QuickAttentionWrapper>
                  <QuickAttentionContainer>
                    <QuickAttention {...recomendedUsers[7]} />
                  </QuickAttentionContainer>
                  <QuickAttentionContainer>
                    <QuickAttention {...recomendedUsers[8]} />
                  </QuickAttentionContainer>
                  <QuickAttentionContainer>
                    <QuickAttention {...recomendedUsers[9]} />
                  </QuickAttentionContainer>
                </QuickAttentionWrapper>

                <RegionHeader
                  title="最新入驻"
                  onPress={() => handleGoRecommendedUser()}
                />

                <QuickAttentionContainer>
                  <QuickAttention {...recomendedUsers[5]} />
                </QuickAttentionContainer>
                <QuickAttentionContainer>
                  <QuickAttention {...recomendedUsers[4]} />
                </QuickAttentionContainer>
                <QuickAttentionContainer>
                  <QuickAttention {...recomendedUsers[3]} />
                </QuickAttentionContainer>

                <RegionHeader
                  title="发现PO主"
                  onPress={() => handleGoRecommendedUser()}
                />
              </RegionContainer>
            </>
          )}
        />
      </SafeAreaView>
    </Container>
  );
};

export default FindScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;

const SearchContainer = styled.View`
  position: relative;
  margin: 10px 20px;
`;

const SearchInput = styled.TextInput`
  padding: 10px 20px 10px 36px;
  background: #eee;
  font-size: 16px;
  color: #383838;
  border-radius: 16px;
`;

const ParallaxImageItemContainer = styled.View`
  width: ${ScreenWidth - 60}px;
  height: 200px;
`;

const CarouselContainer = styled.View`
  position: relative;
  margin-top: 10px;
`;

const IndicatorContainer = styled.View`
  position: absolute;
  bottom: 16px;
  right: 44px;
  flex-direction: row;
`;

const Indicator = styled.View`
  width: 6px;
  height: 4px;
  margin-right: 4px;
  background-color: #ffffff;
  border-radius: 4px;
`;

const HotRank = styled.View`
  height: 66px;
  margin: 20px 20px 0;
  background-color: ${defaultBlueColor};
  border-radius: 6px;
`;

const RegionContainer = styled.View`
  margin: 16px 20px 0;
`;

const RegionHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const RegionTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RegionTitleText = styled.Text`
  margin-left: 5px;
  color: ${defaultBlackColor};
  font-size: 17px;
  font-weight: 600;
`;

const BtnRegionAll = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BtnRegionAllText = styled.Text`
  color: ${inactiveTintColor};
  font-size: 13px;
`;

const TalkingTopicItemContainer = styled.View`
  position: relative;
  margin: 20px 10px 20px 0;
`;

const TalkingTopicCover = styled.Image`
  width: 160px;
  height: 90px;
  border-radius: 6px;
`;

const TalkingTopicCoverMask = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${defaultBlackColor};
  border-radius: 8px;
  opacity: 0.34;
`;

const TalkingTopicName = styled.View`
  position: absolute;
  left: 12px;
  bottom: 30px;
  flex-direction: row;
  align-items: center;
`;

const TalkingTopicIcon = styled.View`
  margin-right: 6px;
`;

const QuickAttentionWrapper = styled.View`
  margin-top: 16px;
`;

const QuickAttentionContainer = styled.View`
  margin: 7px 0;
`;

const TalkingTopicNameText = styled.Text`
  color: #ffffff;
`;

const TalkingTopicTalks = styled.Text`
  position: absolute;
  left: 12px;
  bottom: 8px;
  font-size: 12px;
  color: #ffffff;
`;

const styles = StyleSheet.create({
  parallaxImageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 6,
  },
  parallaxImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});
