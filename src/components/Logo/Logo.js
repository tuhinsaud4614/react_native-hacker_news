import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.logoBody}>
      <Image
        source={require('../../assets/logo.png')}
        style={{flex: 1, resizeMode: 'contain', aspectRatio: 1.5}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoBody: {
    width: 48,
    height: '100%',
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Logo;
