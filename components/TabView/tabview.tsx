import * as React from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import {
  CollapsibleTabView,
  useCollapsibleScene,
} from "react-native-collapsible-tab-view";
import { SceneMap } from "react-native-tab-view";

import { AnimatedAlbums } from "./Shared/Albums";
import { AnimatedArticle } from "./Shared/Article";
import { AnimatedContacts } from "./Shared/Contacts";

import Intro from "../Intro";

type Route = {
  key: string;
  title: string;
};

const SomeRoute: React.FC<{ routeKey: string; color: string }> = ({
  routeKey,
  color,
}) => {
  const scrollPropsAndRef = useCollapsibleScene(routeKey);

  return (
    <Animated.ScrollView
      style={{ backgroundColor: color }}
      {...scrollPropsAndRef}
    >
      <View style={styles.content} />
    </Animated.ScrollView>
  );
};

const FirstScene = () => <SomeRoute routeKey="first" color="white" />;
const SecondScene = () => <SomeRoute routeKey="second" color="black" />;

export const ContactsScene = () => {
  const scenePropsAndRef = useCollapsibleScene("contacts");
  return <AnimatedContacts {...scenePropsAndRef} />;
};

export const ArticleScene = () => {
  const scenePropsAndRef = useCollapsibleScene("article");
  return <AnimatedArticle {...scenePropsAndRef} />;
};

export const AlbumsScene = () => {
  const scenePropsAndRef = useCollapsibleScene("albums");
  return <AnimatedAlbums {...scenePropsAndRef} />;
};

const HEADER_HEIGHT = 250;

const renderHeader = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>COLLAPSIBLE</Text>
  </View>
);

const renderScene = SceneMap({
  albums: AlbumsScene,
  contacts: ContactsScene,
  article: ArticleScene,
});

const App: React.FC<object> = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<Route[]>([
    { key: "article", title: "Article" },
    { key: "contacts", title: "Contacts" },
    { key: "albums", title: "Albums" },
  ]);

  const handleIndexChange = (index: number) => {
    setIndex(index);
  };

  return (
    <CollapsibleTabView<Route>
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={handleIndexChange}
      renderHeader={() => (
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
      )} // optional
      // headerHeight={HEADER_HEIGHT} // optional, will be computed.
    />
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    backgroundColor: "#2196f3",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  headerText: {
    color: "white",
    fontSize: 24,
  },
  content: {
    height: 1500,
  },
});
