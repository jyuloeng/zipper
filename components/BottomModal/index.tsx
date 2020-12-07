import React, { useEffect, useMemo, useRef } from "react";
import styled from "styled-components/native";
import { Modal, Animated, PanResponder } from "react-native";
import { ScreenHeight } from "../../constants/dimensions";

interface BottomModalProps {
  visible: boolean;
  children: React.ReactNode;
  onDismiss: () => void;
}

const useNativeDriver = false;

const BottomModal = (props: BottomModalProps) => {
  const { visible, children, onDismiss } = props;

  const panY = useRef(new Animated.Value(ScreenHeight)).current;

  // ! top 整了个动画插值给他
  const top = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const resetPositionAnim = Animated.timing(panY, {
    toValue: 0,
    useNativeDriver,
  });

  const closeAnim = Animated.timing(panY, {
    toValue: ScreenHeight,
    useNativeDriver,
  });

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
          [
            null,
            {
              dy: panY,
            },
          ],
          {
            useNativeDriver,
          }
        ),
        onPanResponderRelease: (e, gs) => {
          if (gs.dy > 0 && gs.vy > 1.2) {
            return closeAnim.start(() => onDismiss());
          }
          return resetPositionAnim.start();
        },
      }),
    []
  );

  const handleDismiss = () => {};

  useEffect(() => {
    resetPositionAnim.start();
  }, [visible]);

  return (
    <Modal
      animated
      animationType="fade"
      visible={visible}
      transparent
      onRequestClose={() => handleDismiss()}
    >
      <Container>
        <AnimatedContent style={{ top }}>
          <TipLineContainer {...panResponder.panHandlers}>
            <TipLine />
          </TipLineContainer>
          {children}
        </AnimatedContent>
      </Container>
    </Modal>
  );
};

export default BottomModal;

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Content = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: white;
`;

const AnimatedContent = Animated.createAnimatedComponent(Content);

const TipLineContainer = styled.View`
  align-items: center;
  padding: 12px 0;
`;

const TipLine = styled.View`
  width: 114px;
  height: 5px;
  background-color: rgba(169, 169, 169, 0.2);
  border-radius: 3px;
`;
