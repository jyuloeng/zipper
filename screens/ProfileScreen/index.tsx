import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Header from "../../components/Header";
import Avatar from "../../components/Avatar";
import CollapseText from "../../components/CollapseText";
import { defaultBlackColor } from "../../constants/colors";
import { SettingIcon } from "../../components/Icons";

const ProfileScreen = () => {
  return (
    <Container>
      <SafeAreaView>
        <Header title="cabezapatata" renderBtnRight={<SettingIcon />} />
        {/* <TopBar>
          <TopBarPlaceHolderView />

          <Username>cabezapatata</Username>

          <More>
            <AntDesign name="setting" size={24} color={defaultBlackColor} />
          </More>
        </TopBar> */}

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

          {/* <TabView /> */}
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default ProfileScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;

const TopBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 15px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 1px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
`;

const TopBarPlaceHolderView = styled.View`
  width: 26px;
  height: 24px;
`;

const Username = styled.Text`
  font-size: 17px;
  font-weight: 600;
`;

const More = styled.TouchableOpacity``;

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
