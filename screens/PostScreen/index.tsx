import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { SafeAreaView, TouchableWithoutFeedback } from "react-native";
import * as ImagePicker from "expo-image-picker";

const PostScreen = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = () => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //   allowsEditing: true,
    //   aspect: [4, 3],
      quality: 1,
    })
      .then((res) => {
        console.log(res);
        if (!res.cancelled) {
          setImage(res.uri);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={() => pickImage()}>
          <BtnPickImage>选择照片</BtnPickImage>
        </TouchableWithoutFeedback>

        {image && <Image source={{ uri: image }}></Image>}
      </SafeAreaView>
    </Container>
  );
};

export default PostScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BtnPickImage = styled.Text``;

const Image = styled.Image`
  width: 400px;
  height: 500px;
`;
