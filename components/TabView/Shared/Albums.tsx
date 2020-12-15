/* eslint-disable import/no-commonjs */

import * as React from 'react';
import {
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  ViewStyle,
  Animated,
  View,
} from 'react-native';

const COVERS = [
  require('../../../assets/avatar-default.jpg'),
  require('../../../assets/avatar-default.jpg'),
  require('../../../assets/avatar-default.jpg'),
  require('../../../assets/avatar-default.jpg'),
  require('../../../assets/avatar-default.jpg'),
  require('../../../assets/avatar-default.jpg'),
  require('../../../assets/avatar-default.jpg'),
  require('../../../assets/avatar-default.jpg'),
];

const albumsContent = (n = 8) =>
  [...COVERS.filter((_e, i) => i < n)].map((source, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <Image key={i} source={source} style={styles.cover} />
  ));

export default class Albums extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        {albumsContent()}
      </ScrollView>
    );
  }
}

// used in Collapsible TabView examples
export const AnimatedAlbums = React.forwardRef<
  any,
  {
    contentContainerStyle?: ViewStyle;
    nCovers?: number;
  }
>(({ nCovers = 8, contentContainerStyle, ...rest }, ref) => {
  return (
    <Animated.ScrollView
      ref={ref}
      style={styles.container}
      contentContainerStyle={contentContainerStyle}
      {...rest}
    >
      <View style={styles.content}>{albumsContent(nCovers)}</View>
    </Animated.ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cover: {
    width: '50%',
    height: Dimensions.get('window').width / 2,
  },
});
