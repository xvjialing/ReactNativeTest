import React, { Component } from 'react';
import {View } from 'react-native';
import FlatListComponent from './js/FlatListComponent'
import SectionListComponent from './js/SectionListComponent'
import DimensionsComponent from './js/FlexBoxComponent'
import GridImageComponent from './js/GridImageComponent'
import TextInputComponent from './js/TextInputComponent'
import QQIogin from './js/QQIogin'

export default class Setup extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <QQIogin/>
            </View>
        );
    }

}


