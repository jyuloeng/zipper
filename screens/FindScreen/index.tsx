import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import Carousel, {
  ParallaxImage,
  AdditionalParallaxProps,
} from "react-native-snap-carousel";

import { ExploreIcon } from "../../components/Icons/index";
import { ScreenWidth } from "../../constants/dimensions";
import { activeTintColor } from "../../constants/colors";

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

const FindScreen = () => {
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

  return (
    <Container>
      <SafeAreaView>
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
                  backgroundColor:
                    index === carouselCurrentIndex ? "#000" : "#fff",
                }}
              />
            ))}
          </IndicatorContainer>
        </CarouselContainer>
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
  margin: 10px 20px 20px;
`;

const SearchInput = styled.TextInput`
  width: 100px;
  padding: 10px 0 10px 36px;
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
`;

const IndicatorContainer = styled.View`
  position: absolute;
  bottom: 16px;
  right: 40px;
  flex-direction: row;
`;

const Indicator = styled.View`
  width: 6px;
  height: 6px;
  margin-right: 4px;
  background-color: #ffffff;
  border-radius: 3px;
`;

const styles = StyleSheet.create({
  parallaxImageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  parallaxImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});
