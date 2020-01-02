import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Linking,
  Image,
} from 'react-native';

import IconButton from '../../components/UI/IconButton/IconButton';
import Logo from '../../components/Logo/Logo';

export default class About extends Component {
  state = {
    hackerNewsURI: 'https://news.ycombinator.com',
    gitHubURI: 'https://github.com/tuhinsaud4614',
    HackerNewsApiURI: 'https://github.com/HackerNews/API',
    firebaseURI: 'https://firebase.google.com',
  };

  iconButtonPressHandler = () => {
    this.props.navigation.openDrawer();
  };

  linkOpeningHandler = url => {
    Linking.canOpenURL(url)
      .then(supported =>
        supported
          ? Linking.openURL(url)
          : alert("Don't know how to open this page."),
      )
      .catch(err => alert("Can't open this page right now."));
  };

  render() {
    return (
      <View>
        {/* Header */}
        <View style={styles.header}>
          <IconButton
            iconName="menu"
            iconButtonPressed={this.iconButtonPressHandler}
          />
          <View style={styles.headerLogoContainer}>
            <Logo />
          </View>
        </View>
        {/* Sub-header */}
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>About</Text>
        </View>
        {/* About information */}
        <View style={styles.aboutBody}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            automaticallyAdjustContentInsets={true}>
            {/* About information section */}
            <Text style={styles.aboutInfo}>
              HN Search provides real-time full-text search for the{' '}
              {/* Start About link information */}
              <Text
                style={{color: '#477dca'}}
                onPress={() =>
                  this.linkOpeningHandler(this.state.hackerNewsURI)
                }>
                HackerNews{' '}
              </Text>
              {/* End About link information */}
              community site. Source code is available on{' '}
              {/* Start About link information */}
              <Text
                style={{color: '#477dca'}}
                onPress={() => this.linkOpeningHandler(this.state.gitHubURI)}>
                GitHub
              </Text>
              {/* End About link information */}
              {'.'}
            </Text>
            <Text style={styles.aboutInfoTitle}>How it works</Text>
            <Text style={styles.aboutInfo}>
              Items are updated in real-time using official{' '}
              {/* Start About link information */}
              <Text
                style={{color: '#477dca'}}
                onPress={() =>
                  this.linkOpeningHandler(this.state.HackerNewsApiURI)
                }>
                HackerNews API
              </Text>
              {/* End About link information */}
              {
                '. Data is indexed on 3 different servers for high availability, hosted in Beauharnois, Canada.'
              }
            </Text>
            <Text style={styles.aboutInfoTitle}>Credits</Text>
            <Text style={styles.aboutInfo}>
              {'Special thanks to the '}
              {/* Start About link information */}
              <Text
                style={{color: '#477dca'}}
                onPress={() => this.linkOpeningHandler(this.state.firebaseURI)}>
                {'Firebase '}
              </Text>
              {/* End About link information */}
              {' and '}
              {/* Start About link information */}
              <Text
                style={{color: '#477dca'}}
                onPress={() =>
                  this.linkOpeningHandler(this.state.hackerNewsURI)
                }>
                {'YC '}
              </Text>
              {/* End About link information */}
              teams for providing us the data.
            </Text>
          </ScrollView>
        </View>
        {/* End About information */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 56,
    backgroundColor: '#ff742b',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 5,
    elevation: 8.0,
  },
  headerLogoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 56,
    backgroundColor: '#fdfdfd',
  },
  subHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5c5c5c',
  },
  aboutBody: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    padding: 15,
    backgroundColor: '#f6f6ef',
  },
  aboutInfoTitle: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  aboutInfo: {
    fontSize: 18,
    marginTop: 5,
    color: '#5c5c5c',
  },
});
