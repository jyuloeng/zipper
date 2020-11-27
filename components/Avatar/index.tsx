import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";

interface AvatarProps {
  image?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: number;
  style?: object;
}

const Avatar = (props: AvatarProps) => {
  const { image, width, height, borderRadius, style } = props;

  const styles = {
    width: width ? width : 44,
    height: height ? height : 44,
    borderRadius: borderRadius ? borderRadius : 22,
  };

  const source = image
    ? { uri: image }
    : require("../../assets/avatar-default.jpg");

  return <Image style={Object.assign(styles, style)} source={source} />;
};

export default Avatar;
