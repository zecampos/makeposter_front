import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableHightLight, Alert } from 'react-native';

import { Container, Content, Header, Item, Icon, Input, Button, List, ListItem, Right, Left } from 'native-base'
import { Actions } from 'react-native-router-flux'
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import SearchBar from 'react-native-searchbar'


import Back from '../../assets/back.jpeg'

const rowHeight = 40;

const items = [
  1337,
  'janeway',
  {
    lots: 'of',
    different: {
      types: 0,
      data: false,
      that: {
        can: {
          be: {
            quite: {
              complex: {
                hidden: ['gold!'],
              },
            },
          },
        },
      },
    },
  },
  [4, 2, 'tree'],
]

const estoque = [
  {
    id: 1,
    nome: 'Salcinha',
    preco: '8',
    unidade: ' kg',
    marca: ' Sadia'
  },
  {
    id: 2,
    nome: 'Cerveja',
    preco: '4',
    unidade: ' 600ml',
    marca: ' Skol'
  },
  {
    id: 3,
    nome: 'Alface',
    preco: '2,20',
    unidade: ' un',
    marca: ' Horta'
  }
]

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      results: []
    }
  }

  _handleResults = (results) => {
    this.setState({ results });
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
            <SearchBar
              ref={(ref) => this.searchBar = ref}
              data={estoque}
              handleResults={this._handleResults}
              showOnLoad
            />

          </Header>
          <Content style={{ margin: 10 }}>
            {/*<SwipeableParallaxCarousel
              onPress={item => console.log(item)}
              navigation
              navigationType="bars"
              data={datacarousel}
              titleColor="#ffffff"
              align="center"
              height={580}
            />
            */}
            <List>
              {
                this.state.results.map((result, i) => {
                  return (
                    <ListItem key={result.id} style={{ backgroundColor: 'white', marginHorizontal: 15 }}>
                    <Left style={{marginLeft: 20}}>
                      <Text style={{fontSize: 15}} key={result.id}>
                        {typeof result === 'object' && !(result instanceof Array) ? result.nome : result.toString()}
                      </Text>
                      </Left>
                      <Right>
                        <Button onPress={() => Actions.push('template',{dados: result})} style={{ backgroundColor: "#CCCCCC" }}>
                          <Icon active android="md-checkmark" style={{fontSize: 20}} name="plane" />
                        </Button>
                      </Right>
                    </ListItem>
                  );
                })
              }
            </List>



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