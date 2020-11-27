import React from "react";
import styled from "styled-components/native";

const Mention = () => {
  return (
    <Container>
      <Text>Mention</Text>
    </Container>
  );
};

export default Mention;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
