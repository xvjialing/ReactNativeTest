import React, { Component } from 'react';
import {View } from 'react-native';
import FlatListComponent from './js/FlatListComponent'
import SectionListComponent from './js/SectionListComponent'

export default class Setup extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <SectionListComponent/>
            </View>
        );
    }


}

