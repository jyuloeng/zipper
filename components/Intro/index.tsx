import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import Avatar from "../Avatar";
import CollapseText from "../CollapseText";
import { defaultBlackColor } from "../../constants/colors";
import { formatIntroNum } from "../../utils";

interface IntroProps {
  username: string;
  avatar: string;
  profession?: string;
  description?: string;
  activitiy: number;
  follower: number;
  attention: number;
  isShowBtn: boolean;
  onChat?: () => void;
  onFollow?: () => void;
}

const Intro: React.FC<IntroProps> = (props) => {
  const {
    username,
    avatar,
    profession,
    description,
    activitiy,
    follower,
    attention,
    isShowBtn,
    onChat,
    onFollow,
  } = props;

  return (
    <>
      <Container>
        <Meta>
          <Avatar width={96} height={96} image={avatar} />
          <Data>
            <DataItem>
              <DataNumber>{formatIntroNum(activitiy)}</DataNumber>
              <DataTitle>动态</DataTitle>
            </DataItem>

            <DataItem>
              <DataNumber>{formatIntroNum(follower)}</DataNumber>
              <DataTitle>粉丝</DataTitle>
            </DataItem>

            <DataItem>
              <DataNumber>{formatIntroNum(attention)}</DataNumber>
              <DataTitle>已关注</DataTitle>
            </DataItem>
          </Data>
        </Meta>

        <Content>
          <Author>
            <Name>{username}</Name>
            {profession ? (
              <>
                <Vertical>|</Vertical>
                <Profession>{profession}</Profession>
              </>
            ) : null}
          </Author>
          {description ? <CollapseText text={description} /> : null}
        </Content>
      </Container>

      {isShowBtn ? (
        <BtnContainer>
          <BtnChat onPress={onChat}>
            <AntDesign name="message1" size={24} color={defaultBlackColor} />
          </BtnChat>
          <BtnFollow onPress={onFollow}>
            <BtnFollowText>关注</BtnFollowText>
          </BtnFollow>
        </BtnContainer>
      ) : null}
    </>
  );
};

export default Intro;

const Container = styled.View`
  padding: 15px 25px 15px;
`;

const Meta = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Data = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 15px;
`;

const DataItem = styled.View`
  align-items: center;
`;

const DataNumber = styled.Text`
  margin-bottom: 4px;
  font-size: 22px;
  font-weight: 700;
  color: #22262f;
`;

const DataTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #a9a9a9;
`;

const Content = styled.View`
  margin-top: 25px;
`;

const Author = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

const Name = styled.Text`
  font-size: 19px;
  font-weight: 600;
  color: #22262f;
`;

const Profession = styled.Text`
  font-size: 19px;
  font-weight: 600;
  color: #22262f;
`;

const Vertical = styled.Text`
  margin: 0 10px;
  font-size: 15px;
  font-weight: 700;
  color: #999;
`;

const BtnContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const BtnChat = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 56px;
  border: 2px solid #327feb;
  border-radius: 30px;
`;

const BtnFollow = styled.TouchableOpacity`
  flex: 2;
  margin-left: 6%;
  justify-content: center;
  align-items: center;
  height: 56px;
  background: #327feb;
  border: 2px solid #0c8eff;
  border-radius: 30px;
`;

const BtnFollowText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #f9f9f9;
`;
