import React, { useRef, useEffect } from "react";
import styled from "styled-components/native";
import Svg, { Path, SvgProps } from "react-native-svg";
import { TouchableOpacity, Animated } from "react-native";

const Star = (props: SvgProps) => {
  return (
    <Svg width={24} height={22} viewBox="0 0 33 30" fill="none" {...props}>
      <Path
        d="M16.5 0l4.849 9.826 10.843 1.575-7.846 7.648 1.852 10.8-9.698-5.1-9.698 5.1 1.852-10.8-7.846-7.648L11.65 9.826 16.5 0z"
        fill="#FFCC48"
      />
    </Svg>
  );
};

interface PercentageBarProps {
  starText: string;
  percentage: number;
}

const PercentageBar = (props: PercentageBarProps) => {
  const { starText, percentage } = props;

  const animation = useRef<Animated.Value>(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: percentage,
      useNativeDriver: false,
    }).start();
  }, [percentage]);
  return (
    <Progress>
      <ProgressText>{starText}</ProgressText>

      <ProgressMiddle>
        <ProgressWrapper>
          <AnimatedProgressBar
            style={{
              width: animation.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
              }),
            }}
          />
        </ProgressWrapper>
      </ProgressMiddle>

      <ProgressPercentText>{percentage}%</ProgressPercentText>
    </Progress>
  );
};

const TempScreen = () => {
  return (
    <Container>
      <ReviewContianer
        style={{
          elevation: 5,
        }}
      >
        <Title>Customer reviews</Title>
        <TotalWrapper>
          <TotalContainer>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </TotalContainer>
          <Total>4.7 out of 5</Total>
        </TotalWrapper>
        <Amount>40 customer ratings</Amount>

        <RateContainer>
          <PercentageBar starText="5 star" percentage={84} />
          <PercentageBar starText="4 star" percentage={9} />
          <PercentageBar starText="3 star" percentage={4} />
          <PercentageBar starText="2 star" percentage={2} />
          <PercentageBar starText="1 star" percentage={1} />
        </RateContainer>

        <TouchableOpacity>
          <HowWeCalculate>How do we calculate ratings?</HowWeCalculate>
        </TouchableOpacity>
      </ReviewContianer>
    </Container>
  );
};

export default TempScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f5f8ff;
`;

const ReviewContianer = styled.View`
  background: #ffffff;
  border-radius: 10px;
  padding: 40px 30px;
  min-width: 80%;
  box-shadow: 0 5px 2px rgba(193, 211, 251, 0.5);
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #323357;
  text-align: center;
`;

const TotalWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 5px;
  padding: 15px 10px;
  background: #f5f8ff;
  border-radius: 10px;
`;

const TotalContainer = styled.View`
  flex-direction: row;
`;

const Total = styled.Text``;

const Amount = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  color: #595b71;
  text-align: center;
`;

const Progress = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProgressText = styled.Text`
  width: 50px;
  font-size: 14px;
  color: #2a5bda;
`;

const ProgressMiddle = styled.View`
  flex: 1;
  height: 15px;
  margin: 10px;
`;

const ProgressWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2px;
  background: #f5f8ff;
  border-radius: 18px;
`;

const ProgressBar = styled.View`
  flex: 1;
  min-width: 5px;
  background: #ffcc48;
  border-radius: 18px;
  box-shadow: 0 0 4px #ffcc48;
  opacity: 1;
`;

const AnimatedProgressBar = Animated.createAnimatedComponent(ProgressBar);

const ProgressPercentText = styled.Text``;

const RateContainer = styled.View`
  margin-top: 26px;
`;

const HowWeCalculate = styled.Text`
  margin-top: 15px;
  font-size: 15px;
  color: #2a5bda;
  text-align: center;
`;
