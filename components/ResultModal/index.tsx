import React, { useRef, useMemo, useEffect } from "react";
import { Modal, View, StyleSheet, Animated, PanResponder } from "react-native";
import { ScreenHeight } from "../../constants/dimensions";

interface ResultModalProps {
  visible: boolean;
  children: React.ReactNode;
  onDismiss: () => void;
}

const useNativeDriver = false;

//  todo 这个应该算一个 BottomModal 抽离去另一个组件，然后再封装一个 ResultModals
const ResultModal = (props: ResultModalProps) => {
  const { visible, children, onDismiss } = props;

  const panY = useRef(new Animated.Value(ScreenHeight)).current;

  // ! 整了个插值给他
  const top = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
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

  useEffect(() => {
    resetPositionAnim.start();
  }, [visible]);

  const resetPositionAnim = Animated.timing(panY, {
    toValue: 0,
    useNativeDriver,
  });

  const closeAnim = Animated.timing(panY, {
    toValue: ScreenHeight,
    useNativeDriver,
  });

  const handleDismiss = () => {};

  return (
    <Modal
      animated
      animationType="fade"
      visible={visible}
      transparent
      onRequestClose={() => handleDismiss()}
    >
      <View style={styles.overlay}>
        <Animated.View
          style={[styles.container, { top }]}
          {...panResponder.panHandlers}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ResultModal;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.2)",
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "white",
    paddingTop: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
});
