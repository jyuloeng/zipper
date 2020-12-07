import React from "react";
import styled from "styled-components/native";
import BottomModal from "../BottomModal";

import ResultSuccessIcon from "../Icons/ResultSuccessIcon";
import ResultFailedIcon from "../Icons/ResultFailedIcon";

export enum ResultType {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

interface ResultModalProps {
  visible: boolean;
  type: ResultType;
  title: string;
  subtitle: string;
  btnText: string;
  onDismiss: () => void;
}

const ResultModal = (props: ResultModalProps) => {
  const { visible, type, title, subtitle, btnText, onDismiss } = props;

  const ResultIcon = () => {
    switch (type) {
      case ResultType.SUCCESS:
        return <ResultSuccessIcon />;
      case ResultType.FAILED:
        return <ResultFailedIcon />;
      default:
        return null;
    }
  };

  return (
    <BottomModal
      visible={visible}
      children={
        <Container>
          <Icon>
            <ResultIcon />
          </Icon>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <BtnContainer>
            <BtnText>{btnText}</BtnText>
          </BtnContainer>
        </Container>
      }
      onDismiss={() => onDismiss()}
    />
  );
};

export default ResultModal;

const Container = styled.View`
  padding: 41px 25px 74px;
`;

const Icon = styled.View`
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  margin-top: 45px;
  font-size: 24px;
  font-weight: bold;
  color: #383838;
  line-height: 33px;
  text-align: center;
`;

const Subtitle = styled.Text`
  margin: 20px 0 58px;
  font-size: 16px;
  color: rgba(56, 56, 56, 0.8);
  line-height: 26px;
  text-align: center;
`;

const BtnContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 60px;
  background: #327feb;
  border-radius: 28.5px;
`;

const BtnText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
