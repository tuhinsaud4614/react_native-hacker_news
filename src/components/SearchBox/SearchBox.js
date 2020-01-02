import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBox = props => {
  return (
    <View style={styles.searchBoxBody}>
      <View style={styles.searchIcon}>
        <Icon name="search" size={26} color="#ff742b" />
      </View>
      <TextInput
        onChange={props.changed}
        value={props.val}
        placeholder="Search stories by title, url or author"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBoxBody: {
    flexGrow: 1,
    backgroundColor: 'red',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  searchIcon: {
    width: 45,
    height: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    padding: 5,
    paddingLeft: 0,
    color: 'black',
  },
});

export default SearchBox;
