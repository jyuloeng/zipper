import * as React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Animated,
  RefreshControl,
} from 'react-native';
import { CollapsibleScenePropsAndRef } from 'react-native-collapsible-tab-view';
import useRefresh from './useRefresh';

const ArticleContent = () => {
  return (
    <>
      <View style={styles.author}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/avatar-default.jpg')}
        />
        <View style={styles.meta}>
          <Text style={styles.name}>Knowledge Bot</Text>
          <Text style={styles.timestamp}>1st Jan 2025</Text>
        </View>
      </View>
      <Text style={styles.title}>Lorem Ipsum</Text>
      <Text style={styles.paragraph}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </Text>
      <Image style={styles.image} source={require('../../../assets/avatar-default.jpg')} />
      <Text style={styles.paragraph}>
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage, and going through the cites of the word in
        classical literature, discovered the undoubtable source.
      </Text>
      <Text style={styles.paragraph}>
        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus
        Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32.
      </Text>
    </>
  );
};

export default class Article extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <ArticleContent />
      </ScrollView>
    );
  }
}

// used in Collapsible TabView examples
export const AnimatedArticle = React.forwardRef<
  any,
  React.PropsWithoutRef<CollapsibleScenePropsAndRef>
>(({ contentContainerStyle, progressViewOffset, ...rest }, ref) => {
  const [isRefreshing, startRefreshing] = useRefresh();

  return (
    <Animated.ScrollView
      ref={ref}
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={startRefreshing}
          progressViewOffset={progressViewOffset}
        />
      }
      contentContainerStyle={[styles.content, contentContainerStyle]}
      {...rest}
    >
      <ArticleContent />
    </Animated.ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  content: {
    paddingVertical: 16,
  },
  author: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  meta: {
    marginHorizontal: 8,
    justifyContent: 'center',
  },
  name: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  timestamp: {
    color: '#999',
    fontSize: 14,
    lineHeight: 21,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 36,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  paragraph: {
    color: '#000',
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 8,
  },
});
