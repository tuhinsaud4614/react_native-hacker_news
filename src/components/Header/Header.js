import React, {Component, Fragment} from 'react';
import {StyleSheet, View} from 'react-native';

import IconButton from '../UI/IconButton/IconButton';
import Logo from '../Logo/Logo';
import SearchBox from '../SearchBox/SearchBox';

const Header = props => {
  return (
    <View style={styles.header}>
      <IconButton iconName="menu" iconButtonPressed={props.iconButtonPress} />
      <Logo />
      <SearchBox val={props.val} changed={props.changeValue} />
      <IconButton iconName="equalizer" />
    </View>
  );
};

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
});

export default Header;
