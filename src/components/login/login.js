import React, { Component } from 'react';
import { View, ImageBackground, Image, StyleSheet } from 'react-native';

import { Container, Content, Header, Form, Item, Label, Input, Button, Text } from 'native-base'
import { Actions} from 'react-native-router-flux'
import Back from '../../assets/back.jpeg'
import Logo from '../../assets/logo.png'


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container style={styles.divImage}>
                <ImageBackground style={{ width: '100%', height: '100%' }} source={Back} >
                    <Header style={{ backgroundColor: "transparent" }}
                        iosBarStyle={"light-content"}
                        androidStatusBarColor="rgba(0,0,0,0)"
                        transparent
                        noShadow>
                    </Header>
                    <Content>
                        <View style={{ alignItems: 'center', paddingBottom: 10 }}>
                            <Image source={Logo} />
                        </View>

                        <Form style={{ backgroundColor: 'rgba(0,0,0, 0.5)', marginHorizontal: 15 }}>
                            <Item  floatingLabel last>
                                <Label style={{ color: '#FFF', fontSize: 18 }} >Usuário</Label>
                                <Input style={{ color: '#FFF', fontSize: 20 }} />
                            </Item>
                            <Item floatingLabel last>
                                <Label style={{ color: '#FFF', fontSize: 18 }}>Senha</Label>
                                <Input style={{ color: '#FFF', fontSize: 20 }} />
                            </Item>

                        </Form>
                        <View style={{marginHorizontal: 15, paddingTop: 20}}>
                            <Button onPress={()=> Actions.push('home')} style={{backgroundColor: 'rgba(255,255,255, 0.9)', height: 70}} full>
                                <Text style={{color: '#000'}}>Logar</Text>
                            </Button>
                        </View>

                    </Content>
                </ImageBackground>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    divImage: {

    },
    formLogin: {
        padding: 10,
    }
});
