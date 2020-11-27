import React, { useState, useEffect } from "react";
import { FlatList, View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { updateListResults } from "../../store/actions";
import { fetchResults } from "./data";

interface IStateProps {
  list: {
    items: Array<{ _id: number }>;
  };
}

export default function App() {
  const dispatch = useDispatch();
  const listItems = useSelector((state: IStateProps) => state.list.items);
  const totalItems = Array.isArray(listItems) ? listItems.length : 0;
  const [loadingMore, setLoadingMore] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    initialiseList();
  }, []);

  const initialiseList = async () => {
    let list = listItems.length === 0 ? fetchResults(0) : listItems;

    // dispatch({
    //   type: "UPDATE_LIST_RESULTS",
    //   items: list,
    // });

    dispatch(updateListResults(list));
  };

  const persistResults = async (newItems: any) => {
    let list = listItems;

    for (let item of newItems) {
      list.push(item);
    }

    dispatch({
      type: "UPDATE_LIST_RESULTS",
      items: list,
    });
  };

  const loadMoreResults = async () => {
    // if already loading more, or all loaded, return
    if (loadingMore || allLoaded) return;

    // set loading more (also updates footer text)
    setLoadingMore(true);

    // get next results
    const newItems = fetchResults(totalItems);

    // mimic server-side API request and delay execution for 1 second
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    if (newItems.length === 0) {
      // if no new items were fetched, set all loaded to true to prevent further requests
      setAllLoaded(true);
    } else {
      // process the newly fetched items
      await persistResults(newItems);
    }

    // load more complete, set loading more to false
    setLoadingMore(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Displaying {totalItems} Items</Text>
          </View>
        }
        ListFooterComponent={
          <View style={styles.footer}>
            {loadingMore && (
              <Text style={styles.footerText}>Loading More...</Text>
            )}
          </View>
        }
        scrollEventThrottle={250}
        onEndReached={() => {
          loadMoreResults();
        }}
        onEndReachedThreshold={0.01}
        data={listItems}
        keyExtractor={(item) => "item_" + item._id}
        renderItem={({ item, index }) => {
          return (
            <React.Fragment key={index}>
              <View style={styles.item}>
                <Text>Item {item._id}</Text>
              </View>
            </React.Fragment>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
  },
  list: {},
  item: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
  },
  footer: {
    padding: 15,
  },
  footerText: {
    fontWeight: "600",
  },
});
