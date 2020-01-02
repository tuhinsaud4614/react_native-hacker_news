import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const News = props => {
  return (
    <View style={styles.newsContainers}>
      <View style={styles.newsContent}>
        <View style={styles.newsContentImgContainer}>
          <Image
            resizeMode="cover"
            style={styles.newsContentImg}
            source={{
              uri: props.newsData.urlToImage,
            }}
          />
          <View
            onTouchEnd={() =>
              props.newsContentImgOverlayHandler(props.newsData.key)
            }
            style={{
              ...styles.newsContentImgOverlaysBtn,
              backgroundColor: props.newsData.newsOverlayColor,
            }}
          />
          {props.newsData.newsOverlayColor === 'transparent' ? null : (
            <View
              style={styles.newsContentImgOverlaysIconBtn}
              onTouchEnd={() =>
                props.newsImpressionHandler(props.newsData.key)
              }>
              {props.newsData.isFavorite ? (
                <Icon name="favorite" color="red" size={35} />
              ) : (
                <Icon name="favorite-border" color="white" size={35} />
              )}
            </View>
          )}
        </View>
        <View
          style={styles.newsContentInfoContainer}
          onTouchEnd={() =>
            props.navigation.navigate('NewsView', {
              individualData: props.newsData,
            })
          }>
          <Text>{props.newsData.source.name}</Text>
          <Text style={{fontSize: 16}}>
            {`${props.newsData.title} `}
            <Text style={{color: '#477dca'}}>{props.newsData.author}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  newsContainers: {
    height: 300,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsContent: {
    height: '100%',
    width: '90%',
    borderRadius: 10,
    elevation: 4,
    overflow: 'hidden',
  },
  newsContentImgContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  newsContentImg: {
    height: '100%',
    width: '100%',
  },
  newsContentImgOverlaysBtn: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // backgroundColor: '#e4e4e473',
  },
  newsContentImgOverlaysIconBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    height: 40,
    width: 45,
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsContentInfoContainer: {
    height: 100,
    width: '100%',
    padding: 10,
  },
});

export default News;
