import  React from 'react';
import {  StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'



import scanscreen from "./screens/ScanScreen";


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Scan: { screen: scanscreen },
 
});

const AppContainer = createAppContainer(TabNavigator)