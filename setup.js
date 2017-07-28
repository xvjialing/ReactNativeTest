import React, { Component } from 'react';
import {View } from 'react-native';
import FlatListComponent from './js/FlatListComponent'
import SectionListComponent from './js/SectionListComponent'
import DimensionsComponent from './js/FlexBoxComponent'

export default class Setup extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <DimensionsComponent/>
            </View>
        );
    }

}


