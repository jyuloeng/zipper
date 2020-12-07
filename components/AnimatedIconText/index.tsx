import React, { useRef } from "react";
import styled from "styled-components/native";
import { Animated, TouchableOpacity } from "react-native";

interface AnimatedIconTextProps {
  secureTextEntry?: boolean;
  value: string;
  caption: string;
  placeholder: string;
  btnOperationText: string;
  btnOperationOnPress: () => void;
  onChangeText: (value: string) => void;
  activeIcon: React.ReactNode;
  unactiveIcon: React.ReactNode;
  activeIconLeft: number;
  unactiveIconLeft: number;
  activeIconTop: number;
  unactiveIconTop: number;
  duration?: number;
}

const useNativeDriver = false;

const AnimatedIconText = (props: AnimatedIconTextProps) => {
  const {
    secureTextEntry,
    value,
    caption,
    placeholder,
    btnOperationText,
    btnOperationOnPress,
    onChangeText,
    activeIcon,
    unactiveIcon,
    activeIconLeft,
    unactiveIconLeft,
    activeIconTop,
    unactiveIconTop,
    duration,
  } = props;

  const unactiveTop = useRef(new Animated.Value(unactiveIconTop)).current;
  const activeTop = useRef(new Animated.Value(activeIconTop)).current;

  const handleFocus = () => {
    Animated.timing(unactiveTop, {
      toValue: -28,
      duration: duration || 500,
      useNativeDriver,
    }).start();

    Animated.timing(activeTop, {
      toValue: unactiveIconTop,
      duration: duration || 500,
      useNativeDriver,
    }).start();
  };

  const handleBlur = () => {
    Animated.timing(unactiveTop, {
      toValue: unactiveIconTop,
      duration: 0,
      useNativeDriver,
    }).start();

    Animated.timing(activeTop, {
      toValue: 100,
      duration: 0,
      useNativeDriver,
    }).start();
  };

  return (
    <Container>
      <CaptionWrapper>
        <Caption>{caption}</Caption>

        <TouchableOpacity onPress={btnOperationOnPress}>
          <BtnText>{btnOperationText}</BtnText>
        </TouchableOpacity>
      </CaptionWrapper>

      <InputWrapper>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={secureTextEntry}
        />
        <AnimatedIcon
          style={{
            left: unactiveIconLeft,
            top: unactiveTop,
          }}
        >
          {unactiveIcon}
        </AnimatedIcon>
        <AnimatedIcon
          style={{
            left: activeIconLeft,
            top: activeTop,
          }}
        >
          {activeIcon}
        </AnimatedIcon>
      </InputWrapper>
    </Container>
  );
};

export default AnimatedIconText;

const Container = styled.View``;

const Caption = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #3c4560;
`;

const CaptionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const InputWrapper = styled.View`
  position: relative;
  overflow: hidden;
`;

const Icon = styled.View`
  position: absolute;
`;

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const TextInput = styled.TextInput`
  height: 60px;
  margin-top: 20px;
  padding: 0 44px;
  font-size: 17px;
  color: #3c4560;
  border-radius: 27.5px;
  border: 1px solid #dbdfea;
`;

const BtnText = styled.Text`
  font-size: 14px;
  color: #0c8eff;
`;
