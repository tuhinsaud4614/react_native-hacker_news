import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconButton = props => {
  return (
    <View style={styles.containers}>
      <Icon
        onPress={props.iconButtonPressed}
        name={props.iconName}
        size={30}
        color="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    width: 40,
    height: '100%',
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconButton;
