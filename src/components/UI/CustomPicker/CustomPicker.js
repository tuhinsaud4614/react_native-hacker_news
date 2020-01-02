import React from 'react';
import {View, StyleSheet, Picker} from 'react-native';

const CustomPicker = props => {
  return (
    <View style={styles.container}>
      <Picker
        style={{width: '100%', height: '100%'}}
        selectedValue={props.selectedVal}
        onValueChange={props.valueChanged}>
        {props.allItem.map((item, index) => {
          return (
            <Picker.Item
              color="#5c5c5c"
              key={index}
              label={Object.keys(item)[0]}
              value={Object.values(item)[0]}
            />
          );
        })}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: 115,
    borderColor: '#c3c3c3',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
});

export default CustomPicker;
