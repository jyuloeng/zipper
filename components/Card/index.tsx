import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Avatar from "../Avatar";
import { ScreenWidth } from "../../constants/dimensions";
import { LikeIcon, CommentIcon, ShareIcon } from "../Icons";
import CollapseText from "../CollapseText";
import { HomeCardProps } from "../../types";

const avatarSize = 34;
const likeAvatarSize = 24;

const HomeCard = (props: HomeCardProps) => {
  const {
    avatar,
    author,
    image,
    caption,
    subtitle,
    likes,
    like_authors,
    comment_count,
    comments,
    tag,
    location,
    create_gmt,
  } = props;

  const navigation = useNavigation();

  const [width, setWidth] = useState<number>(ScreenWidth - 20);
  const [height, setHeight] = useState<number>();

  const handleLike = () => {};
  const handleComment = () => {};
  const handleShare = () => {};

  useEffect(() => {
    CoverImage.getSize(image, (w, h) => {
      h = (width * h) / w;
      setHeight(() => h);
    });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderTouchable
          onPress={() =>
            navigation.navigate("Studio", {
              userId: "86",
              otherParam: "anything you want here",
            })
          }
        >
          <Avatar
            image={avatar}
            height={avatarSize}
            width={avatarSize}
            borderRadius={avatarSize / 2}
          />
          <AuthorWrapper>
            <Author>{author}</Author>
            <CreateTime>{create_gmt} 天前</CreateTime>
          </AuthorWrapper>
        </HeaderTouchable>

        <More>
          <Feather name="more-vertical" size={21} color="black" />
        </More>
      </Header>

      <CoverContainer>
        <Cover>
          <CoverImage
            style={{
              width,
              height,
            }}
            source={{ uri: image }}
            resizeMode="contain"
          />
        </Cover>

        <Content>
          <Meta>
            <Action>
              <ActionBar onPress={handleLike}>
                <LikeIcon />
              </ActionBar>
              <ActionBar onPress={handleComment}>
                <CommentIcon />
              </ActionBar>
              <ActionBar onPress={handleShare}>
                <ShareIcon />
              </ActionBar>
            </Action>

            {likes && like_authors ? (
              <LikesContainer>
                <LikesAuthor>
                  <Avatar
                    image={like_authors[0].image}
                    height={likeAvatarSize}
                    width={likeAvatarSize}
                    borderRadius={likeAvatarSize / 2}
                    style={{
                      borderWidth: 2,
                      borderColor: "white",
                      transform: [
                        { translateX: 6 * (like_authors.length - 1) },
                      ],
                      zIndex: 1,
                    }}
                  />
                  {like_authors[1] ? (
                    <Avatar
                      image={like_authors[1].image}
                      height={likeAvatarSize}
                      width={likeAvatarSize}
                      borderRadius={likeAvatarSize / 2}
                      style={{
                        borderWidth: 2,
                        borderColor: "white",
                        transform: [
                          { translateX: 6 * (like_authors.length - 2) },
                        ],
                        zIndex: 2,
                      }}
                    />
                  ) : null}
                  {like_authors[2] ? (
                    <Avatar
                      image={like_authors[2].image}
                      height={likeAvatarSize}
                      width={likeAvatarSize}
                      borderRadius={likeAvatarSize / 2}
                      style={{
                        borderWidth: 2,
                        borderColor: "white",
                        zIndex: 3,
                      }}
                    />
                  ) : null}
                </LikesAuthor>
                <Likes>{likes} 次赞</Likes>
              </LikesContainer>
            ) : null}
          </Meta>

          <Caption>{caption}</Caption>

          {subtitle ? <CollapseText text={subtitle} /> : null}
        </Content>

        {tag || location ? (
          <TagContainer>
            {tag ? (
              <TouchableOpacity>
                <Tag>
                  <TagIcon>
                    <Ionicons name="ios-at" size={13} color="#327feb" />
                  </TagIcon>
                  <TagContent>{tag?.name}</TagContent>
                </Tag>
              </TouchableOpacity>
            ) : null}

            {location ? (
              <TouchableOpacity>
                <Tag>
                  <TagIcon>
                    <MaterialIcons name="pin-drop" size={13} color="#327feb" />
                  </TagIcon>
                  <TagContent>{location?.name}</TagContent>
                </Tag>
              </TouchableOpacity>
            ) : null}
          </TagContainer>
        ) : null}
      </CoverContainer>

      {comment_count && comment_count > 0 ? (
        <CommentContainer>
          <Count>共 {comment_count} 次评论</Count>

          {comments?.map((comment) => {
            return (
              <Comment key={comment.id}>
                <CommentAuthor>{comment.author}</CommentAuthor>
                <CommentContent>{comment.content}</CommentContent>
              </Comment>
            );
          })}
        </CommentContainer>
      ) : null}
    </Container>
  );
};

export default HomeCard;

const Container = styled.View`
  background: white;
  margin: 0px 10px 15px;
  border-radius: 14px;
  /* box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2); */
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.1);
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 13px 12px;
`;

const HeaderTouchable = styled.TouchableOpacity`
  flex-direction: row;
`;

const AuthorWrapper = styled.View`
  justify-content: center;
  margin-left: 10px;
`;

const Author = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;

const CreateTime = styled.Text`
  font-size: 12px;
  color: #a9a9a9;
`;

const More = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
`;

const CoverContainer = styled.View``;

const Cover = styled.View`
  width: 100%;
  border-radius: 14px;
`;

const CoverImage = styled.Image`
  width: 100%;
`;

const Content = styled.View`
  padding: 13px;
`;

const Meta = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Action = styled.View`
  flex-direction: row;
  align-content: center;
`;

const ActionBar = styled.TouchableOpacity`
  margin-right: 15px;
`;

const LikesContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const LikesAuthor = styled.View`
  flex-direction: row;
  margin-right: 5px;
`;

const Likes = styled.Text`
  font-size: 14px;
  color: #555;
`;

const Caption = styled.Text`
  margin: 14px 0 5px;
  font-size: 17px;
  font-weight: 600;
  color: #222;
`;

const TagContainer = styled.View`
  flex-direction: row;
  padding: 0 13px 8px;
`;

const Tag = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 2px 14px 2px 6px;
  margin-right: 10px;
  background: #0c8eff;
  font-size: 12px;
  color: #fff;
  border-radius: 13px;

  opacity: 0.75;
`;

const TagIcon = styled.View`
  position: relative;
  left: -4px;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 10px;
`;

const TagContent = styled.Text`
  font-size: 12px;
  color: #fff;
`;

const CommentContainer = styled.View`
  padding: 0 13px 13px;
`;

const Count = styled.Text`
  margin-bottom: 8px;
  font-size: 14px;
  color: #999;
`;

const Comment = styled.View`
  flex-direction: row;
`;

const CommentAuthor = styled.Text`
  margin-right: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
`;

const CommentContent = styled.Text`
  font-size: 14px;
  line-height: 22px;
`;
