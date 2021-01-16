import React from "react";
import styled from "styled-components/native";
import {} from "react-native";

import Avatar from "../Avatar/index";

interface RecentUpdateProps {
  list: Array<{
    avatar: string;
    username: string;
  }>;
}

const RecentUpdate = (props: RecentUpdateProps) => {
  const { list } = props;

  return (
    <Container>
      <UserContainer horizontal={true} showsHorizontalScrollIndicator={false}>
        {list.map((user) => (
          <RecentUpdateUser key={user.username}>
            <AvatarContainer>
              <Avatar image={user.avatar} borderRadius={14} />
            </AvatarContainer>
            <Username numberOfLines={1}>{user.username}</Username>
          </RecentUpdateUser>
        ))}
      </UserContainer>
    </Container>
  );
};

export default RecentUpdate;

const Container = styled.View``;

const UserContainer = styled.ScrollView`
  padding-left: 5px;
`;

const RecentUpdateUser = styled.View`
  justify-content: center;
  align-items: center;
  padding: 4px 10px 10px;
`;

const AvatarContainer = styled.View`
  padding: 4px;
  border: 2px solid #327feb;
  border-radius: 20px;
`;

const Username = styled.Text`
  margin-top: 4px;
  width: 50px;
  font-size: 12px;
  font-weight: 500;
  color: #383838;
  text-align: center;
`;
