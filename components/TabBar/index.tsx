import React from "react";
import styled from "styled-components/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { activeTintColor, inactiveTintColor } from "../../constants/colors";

import {
  HomeIcon,
  ExploreIcon,
  ActivityIcon,
  ProfileIcon,
} from "../Icons/index";

const TabBarIcons = (route: any, isFocused: boolean) => {
  const strokeColor = isFocused ? activeTintColor : inactiveTintColor;

  switch (route.name) {
    case "Home":
      return <HomeIcon stroke={strokeColor} />;
    case "Explore":
      return <ExploreIcon stroke={strokeColor} />;
    case "Activity":
      return <ActivityIcon stroke={strokeColor} />;
    case "Profile":
      return <ProfileIcon stroke={strokeColor} />;
  }
};

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Container
      style={{
        paddingBottom: bottom,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        {
          if (route.name === "Post") {
            return (
              <RoundBarTouchableContainer
                key={route.name}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
              >
                <RoundBar>
                  <Ionicons name="md-add" size={30} color="#ffffff" />
                </RoundBar>
              </RoundBarTouchableContainer>
            );
          } else {
            return (
              <TouchableContainer
                key={route.name}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
              >
                <Bar>{TabBarIcons(route, isFocused)}</Bar>
                {isFocused ? <Indicator /> : null}
              </TouchableContainer>
            );
          }
        }
      })}
    </Container>
  );
};

export default TabBar;

const Container = styled.View`
  flex-direction: row;
  /* border-top-left-radius: 22px; */
  /* border-top-right-radius: 22px; */
  background-color: white;
  /* border: 1px solid; */
`;

const Bar = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Indicator = styled.View`
  position: absolute;
  top: 58px;
  width: 6px;
  height: 6px;
  background: #327feb;
  border-radius: 3px;
`;

const TouchableContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const RoundBar = styled.View`
  position: relative;
  top: -14px;
  width: 70px;
  height: 70px;
  background: #327feb;
  align-items: center;
  justify-content: center;
  border: 7px solid white;
  border-radius: 35px;
`;

const RoundBarTouchableContainer = styled.TouchableWithoutFeedback`
  justify-content: center;
  align-items: center;
`;
