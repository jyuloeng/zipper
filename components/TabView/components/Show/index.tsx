import React from "react";
import styled from "styled-components/native";

const Show = () => {
  return (
    <Container>
      <Text>Show</Text>
    </Container>
  );
};

export default Show;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
