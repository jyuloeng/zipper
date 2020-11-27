import React, { useEffect, useRef } from "react";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";
import { Animated } from "react-native";

import { ScreenHeight } from "../../constants/dimensions";

interface LoadingProps {
  isActive: boolean;
}

const useNativeDriver = false;

const Loading = (props: LoadingProps) => {
  const { isActive } = props;

  const top = useRef<Animated.Value>(new Animated.Value(0)).current;
  const opacity = useRef<Animated.Value>(new Animated.Value(0)).current;
  const animation = useRef<LottieView>(null);

  useEffect(() => {
    if (isActive) {
      Animated.timing(top, {
        toValue: 0,
        duration: 0,
        useNativeDriver,
      }).start();

      Animated.timing(opacity, {
        toValue: 1,
        useNativeDriver,
      }).start();

      animation.current?.play();
    } else {
      Animated.timing(top, {
        toValue: ScreenHeight,
        duration: 0,
        useNativeDriver,
      }).start();

      Animated.timing(opacity, {
        toValue: 0,
        useNativeDriver,
      }).start();
    }
  });

  return (
    <AnimatedContainer style={{ top: top, opacity: opacity }}>
      <LottieView
        source={require("../../assets/lottie-loading.json")}
        autoPlay={false}
        loop={true}
        ref={animation}
      />
    </AnimatedContainer>
  );
};

export default Loading;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
