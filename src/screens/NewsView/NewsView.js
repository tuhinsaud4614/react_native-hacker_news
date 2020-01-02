import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class NewsView extends Component {
  //   static navigationOptions = ({navigation}) => ({
  //     headerLeft: (
  //       <TouchableOpacity onPress={() => navigation.goBack()}>
  //         <Icon name="arrow-back" size={32} color="black"></Icon>
  //       </TouchableOpacity>
  //     ),
  //   });
  //   static navigationOptions = {
  //     headerLeft: (
  //       <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
  //         <Icon name="arrow-back" size={32} color="black"></Icon>
  //       </TouchableOpacity>
  //     ),
  //   };
  render() {
    console.log(this.props.navigation.state.params.individualData);
    // console.log(this.props.navigation);
    let tempData = this.props.navigation.state.params.individualData;
    return (
      <View style={{width: "100%", height: "80%"}}>
        <WebView source={{uri: tempData.url}} />
      </View>
    );
  }
}
