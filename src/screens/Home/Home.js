import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import {connect} from 'react-redux';

import * as actionTypes from '../../store/actions/actions';
import {fetchAllNews} from '../../store/actions/home/news';

import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import NewsFeed from '../../components/NewsFeed/NewsFeed';

class Home extends Component {
  state = {
    val: '',
  };

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.props.allNewsFetch();
  }

  changedHandler = event => {
    this.setState({
      val: event.target.value,
    });
  };

  iconButtonPressHandler = () => {
    this.props.navigation.openDrawer();
  };

  // newsContentImgOverlayHandler = () => {
  //   this.setState(prevState => ({
  //     newsContent: {
  //       ...prevState.newsContent,
  //       newsOverlayColor:
  //         prevState.newsContent.newsOverlayColor === 'transparent'
  //           ? '#e4e4e473'
  //           : 'transparent',
  //     },
  //   }));
  //   // console.log("newsContentImgOverlayHandler");
  // };

  // newsImpressionHandler = () => {
  //   this.setState(prevState => ({
  //     newsContent: {
  //       ...prevState.newsContent,
  //       isNewsFavorite: !prevState.newsContent.isNewsFavorite,
  //     },
  //   }));
  //   // console.log("newsImpressionHandler");
  // };

  render() {
    return (
      <View>
        <StatusBar backgroundColor="#ff742b" barStyle="dark-content" />
        <Header
          iconButtonPress={this.iconButtonPressHandler}
          val={this.state.val}
          changeValue={event => this.changedHandler(event)}
        />
        <SubHeader
          objValue={this.props.drpContent}
          changed={this.props.customPickerValueChangeHandler}
        />
        <NewsFeed
          news={this.props.allNews}
          newsContentImgOverlayHandler={this.props.newsContentImgOverlayHandler}
          newsImpressionHandler={this.props.newsImpressionHandler}
          {...this.props}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    drpContent: state.home,
    allNews: state.news.allNews,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    customPickerValueChangeHandler: (v, k) =>
      dispatch({
        type: actionTypes.CUSTOM_PICKER_VALUE_CHANGE,
        valueChange: [v, k],
      }),
    allNewsFetch: () => dispatch(fetchAllNews()),
    newsContentImgOverlayHandler: id =>
      dispatch({type: actionTypes.NEWS_OVERLAY_COLOR, id: id}),
    newsImpressionHandler: id =>
      dispatch({type: actionTypes.NEWS_IMPRESSION, id: id}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
