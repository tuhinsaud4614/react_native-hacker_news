import React from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';

import News from '../News/News';

const NewsFeed = props => {
  return (
    <View style={styles.newsFeed}>
      <FlatList
        data={props.news}
        renderItem={({item}) => (
          <News
            newsData={item}
            newsContentImgOverlayHandler={props.newsContentImgOverlayHandler}
            newsImpressionHandler={props.newsImpressionHandler}
            {...props}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  newsFeed: {
    backgroundColor: '#f6f6ef',
    width: '100%',
    height: Dimensions.get('window').height - 130,
  },
});

export default NewsFeed;
