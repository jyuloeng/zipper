import React, { useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

interface CollapseTextProps {
  text: string;
  showAllText?: string;
  numberOfLines?: number;
}

const CollapseText = (props: CollapseTextProps) => {
  const { text, showAllText } = props;

  const [numLines, setNumLines] = useState<number | undefined>(undefined);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [subtitleMaxHeight, setSubtitleMaxHeight] = useState<number>(0);

  return (
    <Container>
      <Text
        numberOfLines={numLines}
        onLayout={(event) => {
          const subtitleHeight = Math.floor(
            event.nativeEvent.layout.height || 0
          );

          if (subtitleMaxHeight === 0) {
            setNumLines(() => 2);
            setSubtitleMaxHeight(() => subtitleHeight);
          } else if (subtitleMaxHeight > subtitleHeight) {
            setShowAll(() => true);
          }
        }}
      >
        {text}
      </Text>
      {showAll ? (
        <TouchableOpacity
          onPress={() => {
            setShowAll(() => false);
            setNumLines(() => undefined);
          }}
        >
          <ShowAll>{showAllText ? showAllText : "全部"}</ShowAll>
        </TouchableOpacity>
      ) : null}
    </Container>
  );
};

export default CollapseText;

const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

const Text = styled.Text`
  flex: 1;
  font-size: 14px;
  color: #22262f;
`;

const ShowAll = styled.Text`
  margin-left: 10px;
  font-size: 15px;
  color: #a9a9a9;
`;
