import React, { useState } from "react";
import styled from "styled-components/native";
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { NavigationState, SceneRendererProps } from "react-native-tab-view";
import { Ionicons } from "@expo/vector-icons";

type Route = {
  key: string;
  title: string;
  icon: string;
};

type State = NavigationState<Route>;

const TabBar = (props: SceneRendererProps & { navigationState: State }) => {
  const inputRange = props.navigationState.routes.map((x, i) => i);
  const [index, setIndex] = useState(0);

  const renderItem = ({
    navigationState,
    position,
  }: {
    navigationState: State;
    position: Animated.Node<number>;
  }) => ({ route, index }: { route: Route; index: number }) => {
    const inputRange = navigationState.routes.map((_, i) => i);

    const activeOpacity = Animated.interpolate(position, {
      inputRange,
      outputRange: inputRange.map((i: number) => (i === index ? 1 : 0)),
    });
    const inactiveOpacity = Animated.interpolate(position, {
      inputRange,
      outputRange: inputRange.map((i: number) => (i === index ? 0 : 1)),
    });

    return (
      <View style={styles.tab}>
        <Animated.View style={[styles.item, { opacity: inactiveOpacity }]}>
          <Ionicons
            name={route.icon}
            size={26}
            style={[styles.icon, styles.inactive]}
          />
          <Text style={[styles.label, styles.inactive]}>{route.title}</Text>
        </Animated.View>
        <Animated.View
          style={[styles.item, styles.activeItem, { opacity: activeOpacity }]}
        >
          <Ionicons
            name={route.icon}
            size={26}
            style={[styles.icon, styles.active]}
          />
          <Text style={[styles.label, styles.active]}>{route.title}</Text>
        </Animated.View>
      </View>
    );
  };

  return (
    <View style={styles.tabbar}>
      {props.navigationState.routes.map((route: Route, index: number) => {
        return (
          <TouchableWithoutFeedback
            key={route.key}
            onPress={() => props.jumpTo(route.key)}
          >
            {renderItem(props)({ route, index })}
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default TabBar;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fafafa",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "rgba(0, 0, 0, .2)",
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 4.5,
  },
  activeItem: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  active: {
    color: "#0084ff",
  },
  inactive: {
    color: "#939393",
  },
  icon: {
    height: 26,
    width: 26,
  },
  label: {
    fontSize: 10,
    marginTop: 3,
    marginBottom: 1.5,
    backgroundColor: "transparent",
  },
});
