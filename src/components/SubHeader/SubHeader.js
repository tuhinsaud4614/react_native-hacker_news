import React from 'react';
import {StyleSheet, View} from 'react-native';

import CustomPicker from '../UI/CustomPicker/CustomPicker';

const SubHeader = props => {
  return (
    <View style={styles.subHeader}>
      {Object.keys(props.objValue.categories).map((item, index) => {
        return (
          <CustomPicker
            key={index}
            allItem={props.objValue.categories[item]}
            selectedVal={props.objValue[item]}
            valueChanged={val => {
              props.changed(val, item);
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: 56,
    padding: 10,
    backgroundColor: "#fdfdfd",
  },
});

export default SubHeader;
