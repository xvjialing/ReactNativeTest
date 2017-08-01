import React,{Component} from 'react';
import {View,Button,Text} from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class NavigationComponent extends Component{
    static navigationOptions={
        title:'welcome'
    }

    render(){

        return(
            <View>

                <Text>Hello,Navigation!</Text>
            </View>
        );
    }
}

const App=StackNavigator({
    Home:{screen:NavigationComponent},
})