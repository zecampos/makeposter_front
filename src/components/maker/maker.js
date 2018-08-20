import React, { Component } from 'react';

import { ImageBackground, Text, Dimensions, StyleSheet, View } from 'react-native';

import { Container, Header, Content, Left, Right, Body, Button, Icon, Title, Fab, Input } from 'native-base'
import { Col, Row, Grid } from "react-native-easy-grid";
import Gestures from 'react-native-easy-gestures';
import ViewShot from "react-native-view-shot";


const imagem = '../../assets/modelos/'
const win = Dimensions.get("window")
const altura = win.height * 0.90
const largura = win.width


export default class Maker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      nome: '',
      preco: '',
      unidade: '',
      marca: '',
      modelo: '',
      edit: false,
      active: 'true',
      text: false
    };
  }
  const = { caminho } = this.props
  getShoot = async () => {
    await this.refs.viewShot.capture().then(uri => {

      console.log(uri)

    });
  }
  componentDidMount() {
    this.setState({
      modelo: imagem + caminho,
      nome: this.props.text.nome,
      preco: this.props.text.preco,
      unidade: this.props.text.unidade,
      marca: this.props.text.marca
    })
    console.log(this.state)
  }

  habilitarText() {
    this.setState({ text: !this.state.text, edit: !this.state.edit })
    console.log(this.state.text)

  }

  render() {
    const { id, nome, preco, unidade, marca } = this.props.text
    return (
      <Container>
        <Header
          iosBarStyle={"light-content"}
          androidStatusBarColor="rgba(0,0,0,0.5)"
          style={{ marginTop: 24, backgroundColor: 'rgba(0,0,0,0.5)' }}


          noShadow>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button onPress={() => this.habilitarText()} transparent>
              <Icon type="FontAwesome" name='font' />
            </Button>
            <Button transparent onPress={() => this.getShoot()}>
              <Icon name='print' />
            </Button>
          </Right>
        </Header>
        <Content style={{ marginHorizontal: 1 }}>

          <ViewShot ref="viewShot" options={{ format: "png", quality: 1.0, result: 'data-uri' }}>
            <ImageBackground style={{ width: largura }} source={require('../../assets/modelos/canvas.png')} >
              <Grid style={{ flex: 1, height: altura, alignContent: 'center', alignItems: 'center' }}>
                <Row size={40} >

                  <Gestures
                    draggable={{
                      y: this.state.edit,
                      x: this.state.edit
                    }} >
                    <Input value={this.state.nome} style={styles.textTitulo} editable={this.state.text} onChange={(item) => this.setState({nome: item}) } />
                  </Gestures>
                </Row>
                <Row size={10}>
                  <Gestures
                    draggable={{
                      y: this.state.edit,
                      x: this.state.edit
                    }}
                  >
                  <Input value={this.state.marca} style={styles.textMarca} editable={this.state.text} onChangeText={(item) => this.setState({marca: item}) } />
                  </Gestures>
                </Row>
                <Row size={40}>
                  <Gestures
                    draggable={{
                      y: this.state.edit,
                      x: this.state.edit
                    }}
                  >
                  <Input value={this.state.preco} style={styles.textPreco} editable={this.state.text} onChangeText={(item) => this.setState({preco: item}) } />
                  </Gestures>
                </Row>
                <Row size={10}>
                  <Gestures
                    draggable={{
                      y: this.state.edit,
                      x: this.state.edit
                    }}
                  >
                  <Input value={this.state.unidade} style={styles.textUnidade} editable={this.state.text} onChangeText={(item) => this.setState({unidade: item}) } />
                  </Gestures>
                </Row>
              </Grid>
            </ImageBackground>
          </ViewShot>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({

  textTitulo: {
    fontSize: 100,
    fontFamily: 'VTCSuperMarketSale',
    color: 'black',
    marginTop: 115,
    marginBottom: 0,
    textAlign: 'center',
    zIndex: 0
  },
  textMarca: {
    fontSize: 35,
    fontFamily: 'VTCSuperMarketSale',
    color: 'black',
    marginTop: 0,
    paddingLeft: 250,
    marginHorizontal: 10

  },
  textPreco: {
    fontSize: 200,
    fontFamily: 'VTCSuperMarketSale',
    color: '#FE0000',
    marginTop: 0,
    marginBottom: 0,
    zIndex: 1,
    textAlign: 'center'
  },
  textUnidade: {
    fontSize: 35,
    fontFamily: 'VTCSuperMarketSale',
    color: 'black',
    marginTop: 0,
    paddingLeft: 250

  }
});