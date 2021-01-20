import React from "react";
import styled from "styled-components/native";
import { TouchableWithoutFeedback, GestureResponderEvent } from "react-native";

import QuickAttention from "../QuickAttention/index";

interface RecommendedUserProps {
  id: string;
  nickname: string;
  avatar: string;
  avatarStyle?: {
    width: number;
    height: number;
  };
  activities: number;
  description: string;
  covers: Array<{
    id: string;
    cover: string;
  }>;
  onPress?: (e: GestureResponderEvent) => void;
}

const RecommendedUser: React.FC<RecommendedUserProps> = (props) => {
  const {
    id,
    nickname,
    avatar,
    avatarStyle,
    activities,
    description,
    covers,
  } = props;

  return (
    <Container>
      <QuickAttention
        id={id}
        nickname={nickname}
        avatar={avatar}
        avatarStyle={avatarStyle}
        activities={activities}
        description={description}
      />

      <RecommendedUserCoverContainer>
        {covers.map((item) => (
          <RecommendedUserCover key={item.id} source={{ uri: item.cover }} />
        ))}
      </RecommendedUserCoverContainer>
    </Container>
  );
};

export default RecommendedUser;

const Container = styled.View`
  margin: 30px 20px 0;
`;

const RecommendedUserCoverContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 12px;
`;

const RecommendedUserCover = styled.Image`
  width: 100px;
  height: 100px;
  margin-left: 10px;
  border-radius: 6px;
`;
