import React from "react";
import styled from "styled-components/native";
import { GestureResponderEvent } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import Avatar from "../../../components/Avatar";
import {
  defaultBlueColor,
  defaultBlackColor,
  inactiveTintColor,
} from "../../../constants/colors";

interface QuickAttentionProps {
  id: string;
  nickname: string;
  avatar: string;
  activities: number;
  description: string;
  onPress?: (e: GestureResponderEvent) => void;
}

const QuickAttention: React.FC<QuickAttentionProps> = (props) => {
  const { id, nickname, avatar, activities, description } = props;

  return (
    <TouchableWithoutFeedback>
      <RecommendedUserHeader>
        <Avatar width={36} height={36} borderRadius={6} image={avatar} />

        <RecommendedUserInfo>
          <RecommendedUserNickname>{nickname}</RecommendedUserNickname>
          <RecommendedUserText numberOfLines={1}>
            动态 {activities}｜{description}
          </RecommendedUserText>
        </RecommendedUserInfo>

        <BtnAttention>
          <BtnAttentionText>关注</BtnAttentionText>
        </BtnAttention>
      </RecommendedUserHeader>
    </TouchableWithoutFeedback>
  );
};

export default QuickAttention;

const RecommendedUserHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px 20px;
`;

const RecommendedUserInfo = styled.View`
  flex: 1;
  margin-left: 14px;
`;

const RecommendedUserNickname = styled.Text`
  margin-bottom: 4px;
  color: ${defaultBlackColor};
  font-size: 15px;
  font-weight: 500;
`;

const RecommendedUserText = styled.Text`
  margin-right: 6px;
  color: ${inactiveTintColor};
  font-size: 13px;
`;

const BtnAttention = styled.TouchableOpacity`
  padding: 6px 12px;
  border: 1px solid ${defaultBlueColor};
  border-radius: 15px;
`;

const BtnAttentionText = styled.Text`
  color: ${defaultBlueColor};
  font-size: 13px;
`;
