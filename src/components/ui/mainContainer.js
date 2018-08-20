import React, { Component } from 'react';
import { ImageBackground } from 'react-native';

import { Container } from 'native-base'
import Back from '../../assets/back.jpeg'


export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <ImageBackground style={{ width: '100%', height: '100%' }} source={Back} >
                </ImageBackground>
            </Container>
        );
    }
}
