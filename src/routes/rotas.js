import React, { Component } from 'react';
import { StyleSheet } from 'react-native'

import { Router, Scene } from 'react-native-router-flux'

import Home from '../components/home/home'
import Login from '../components/login/login'
import Maker from '../components/maker/maker'
import Template from '../components/template/index'
export default class Rotas extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <Scene  activeBackgroundColor="red" key="root">
          <Scene hideNavBar initial key="login" component={Login} title="Login" />
          <Scene hideNavBar key="maker" component={Maker} title="Maker" />
          <Scene hideNavBar key="template" component={Template} title="Template" />
          <Scene hideNavBar key="home" component={Home} />
        </Scene>
      </Router>
    );
  }
}
