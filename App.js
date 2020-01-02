import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
} from 'react-navigation';

import React, {Component} from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import Home from './src/screens/Home/Home';
import About from './src/screens/About/About';
import NewsView from './src/screens/NewsView/NewsView';

import reducers from './src/store/reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const MainStack = createStackNavigator(
  {
    Home: Home,
    NewsView: NewsView,
  },
  {
    initialRouteName: 'Home',
  },
);

const DrawerNavigator = createDrawerNavigator(
  {Home: MainStack, About: About},
  {
    // initialRouteName: 'Home',
    drawerBackgroundColor: 'white',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#ff742b',
    },
  },
);

const Navigation = createAppContainer(DrawerNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
