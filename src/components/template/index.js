import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableHightLight, Alert } from 'react-native';

import { Container, Content, Header, Item, Icon, Input, Button, List, ListItem, Right, Left } from 'native-base'
import { Actions } from 'react-native-router-flux'
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';



import Back from '../../assets/back.jpeg'

const rowHeight = 40;
const datacarousel = [
    {
        "id": "canvas.png",
        "title": "Valerian and the City of a Thousand Planets",
        "imagePath": "http://www.ensaiogospel.com/makeposter/images/oferta2.png",
    },
    {
        "id": 315635,
        "imagePath": "https://image.tmdb.org/t/p/w780/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg",
    },
  
    ...
  
    {
        "id": 339403,
        "title": "Baby Driver",
        "subtitle": "More than just a trend",
        "imagePath": "https://image.tmdb.org/t/p/w780/xWPXlLKSLGUNYzPqxDyhfij7bBi.jpg",
    },
  ];
  

export default class Template extends Component {
  constructor(props) {
    super(props)

    this.state = {
      results: []
    }
  }

sendDados = (path) =>{
const {dados } = this.props
Actions.push('maker',{caminho: path, text: dados})
}

  render() {
    return (
      <Container>
        <ImageBackground style={{ width: '100%', height: '100%' }} source={Back} >
          <Header style={{ backgroundColor: "transparent" }}
            iosBarStyle={"light-content"}
            searchBar
            androidStatusBarColor="rgba(0,0,0,0)"
            transparent
            noShadow>

          </Header>
          <Content style={{ margin: 10 }}>
            {<SwipeableParallaxCarousel
              onPress={item => this.sendDados(item)}
              navigation
              navigationType="bars"
              data={datacarousel}
              titleColor="#ffffff"
              align="center"
              height={580}
            />
            }
          </Content>

        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    textAlign: 'center',
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItem: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 18,
    backgroundColor: '#fff',
  },
})