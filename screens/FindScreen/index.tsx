import React, { useState } from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
import { ScreenWidth } from "../../constants/dimensions";

import { ExploreIcon } from "../../components/Icons/index";
import { activeTintColor } from "../../constants/colors";

const FindScreen = () => {
  const [value, setValue] = useState("");

  return (
    <Container>
      <SafeAreaView>
        <SearchContainer>
          <SearchInput
            style={{
              width: ScreenWidth - 40,
            }}
            onChangeText={(text) => setValue(text)}
          />
          <ExploreIcon
            stroke={activeTintColor}
            width={16}
            height={16}
            style={{
              position: "absolute",
              left: 12,
              top: 12
            }}
          />
        </SearchContainer>
      </SafeAreaView>
    </Container>
  );
};

export default FindScreen;

const Container = styled.View`
  flex: 1;
  /* justify-content: center; */
  /* align-items: center; */
  background: #fff;
`;

const SearchContainer = styled.View`
  position: relative;
  margin: 10px 20px;
`;

const SearchInput = styled.TextInput`
  width: 100px;
  padding: 10px 0 10px 36px;
  background: #eee;
  font-size: 16px;
  color: #383838;
  border-radius: 16px;
`;

const Text = styled.Text``;
