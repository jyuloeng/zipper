import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

interface TopicCoverProps {
  id: string;
  cover: string;
  index: number;
}

const TopicCoverItem = (props: TopicCoverProps) => {
  const { id, cover, index } = props;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    TopicCover.getSize(cover, (w, h) => {
      w = (100 * w) / h;
      setWidth(() => w);
    });
  }, []);

  return (
    <TopicCover
      source={{ uri: cover }}
      style={{
        width,
        marginLeft: index === 0 ? 20 : 0,
      }}
    />
  );
};

export default TopicCoverItem;

const TopicCover = styled.Image`
  height: 100px;
  margin-right: 4px;
`;
