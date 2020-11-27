import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, View, Dimensions } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Feather, AntDesign } from "@expo/vector-icons";

import { StackParamList } from "../../types";
import { defaultBlackColor } from "../../constants/colors";
import Avatar from "../../components/Avatar";
import CollapseText from "../../components/CollapseText";
import TabView from "../../components/TabView";
import Header from "../../components/Header";

type StudioProp = StackScreenProps<StackParamList, "Studio">;

const StudioScreen = ({ route, navigation }: StudioProp) => {
  const { userId } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <SafeAreaView>
        <Header
          title="cabezapatata"
          renderBtnLeft={
            <Feather name="chevron-left" size={26} color={defaultBlackColor} />
          }
          renderBtnRight={
            <Feather
              name="more-horizontal"
              size={26}
              color={defaultBlackColor}
            />
          }
          btnLeftOnPress={handleGoBack}
        />

        <ScrollView>
          <Intro>
            <Meta>
              <Avatar
                width={96}
                height={96}
                image={"https://picsum.photos/100/100"}
              />
              <Data>
                <DataItem>
                  <DataNumber>23</DataNumber>
                  <DataTitle>动态</DataTitle>
                </DataItem>

                <DataItem>
                  <DataNumber>24.6k</DataNumber>
                  <DataTitle>粉丝</DataTitle>
                </DataItem>

                <DataItem>
                  <DataNumber>62</DataNumber>
                  <DataTitle>已关注</DataTitle>
                </DataItem>
              </Data>
            </Meta>

            <Content>
              <Author>
                <Name>Cabeza Patata</Name>
                <Vertical>|</Vertical>
                <Profession>Programmer</Profession>
              </Author>
              <CollapseText
                text={
                  "Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China. Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China."
                }
              />
            </Content>
          </Intro>

          <BtnContainer>
            <BtnChat>
              <AntDesign name="message1" size={24} color={defaultBlackColor} />
            </BtnChat>
            <BtnFollow>
              <BtnFollowText>关注</BtnFollowText>
            </BtnFollow>

            {/* <BtnFollowing>
              <BtnFollowingText>关注中</BtnFollowingText>
            </BtnFollowing> */}
          </BtnContainer>

          <TabView />
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default StudioScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;

const Intro = styled.View`
  padding: 15px 25px 0;
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

const BtnFollowing = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 56px;
  padding: 0 88px;
  border: 2px solid #327feb;
  border-radius: 30px;
`;

const BtnFollowingText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #22262f;
`;

const BtnFollowText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #f9f9f9;
`;
