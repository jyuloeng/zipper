import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, ScrollView } from "react-native";

import Header from "../../components/Header";
import Intro from "../../components/Intro";
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
          <Intro
            username="Cabeza Patata"
            avatar="https://picsum.photos/100/100"
            activitiy={23}
            follower={24600}
            attention={62}
            profession="Programmer"
            description="Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China. Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China."
            isShowBtn={false}
          />
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
