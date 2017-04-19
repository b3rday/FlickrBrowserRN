import React from 'react';

import {
  AppRegistry,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

const Main = require('../scenes/Main');
const Picture = require('../scenes/Picture');

const Navigator = StackNavigator({
  Main: { screen: Main },
  Picture: { screen: Picture },
});

AppRegistry.registerComponent('FlickrBrowserRN', () => Navigator);