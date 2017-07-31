import React, { Component } from 'react';
import{ ScrollView, Image, Text, View } from 'react-native'

export default class ScrollViewTest extends Component {
    render() {
        return(
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                >
                <Text style={{fontSize:96}}>Scroll me plz</Text>

                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Text style={{fontSize:96}}>If you like</Text>
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Text style={{fontSize:96}}>What's the best</Text>
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Image source={require('../img/train.png')} />
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
        );
    }
}
