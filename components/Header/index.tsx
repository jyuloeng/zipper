import React from "react";
import styled from "styled-components/native";
import {} from "react-native";

interface HeaderProps {
  title: string;
  renderBtnLeft?: React.ReactNode;
  renderBtnRight?: React.ReactNode;
  btnLeftOnPress?: () => void;
  btnRightOnPress?: () => void;
}

const Header = (props: HeaderProps) => {
  const {
    title,
    renderBtnLeft,
    renderBtnRight,
    btnLeftOnPress,
    btnRightOnPress,
  } = props;

  return (
    <Container>
      <BtnLeft onPress={btnLeftOnPress}>{renderBtnLeft}</BtnLeft>

      <Title>{title}</Title>

      <BtnRight onPress={btnRightOnPress}>{renderBtnRight}</BtnRight>
    </Container>
  );
};

export default Header;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 15px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 1px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
`;

const BtnLeft = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;

const Title = styled.Text`
  font-size: 17px;
  font-weight: 600;
  color: #22262f;
`;

const BtnRight = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;
