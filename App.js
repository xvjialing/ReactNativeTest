// import React, { Component } from 'react';
// import {View } from 'react-native';
// import FlatListComponent from './js/FlatListComponent'
// import SectionListComponent from './js/SectionListComponent'
// import ScrollViewTest from './js/scroviewTest'
// import DimensionsComponent from './js/FlexBoxComponent'
// import GridImageComponent from './js/GridImageComponent'
// import TextInputComponent from './js/TextInputComponent'
// import QQIogin from './js/QQIogin'
// import TouchableComponent from './js/TouchableComponent'
// import Touchables from './js/Touchables'
// import FetchData from './js/FetchData'
// import MyWeb from './js/WebView'
//
// export default class Setup extends Component {
//     render() {
//         return (
//             <View style={{flex:1}}>
//                 {/*<MyWeb/>*/}
//             </View>
//         );
//     }
//
// }

import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    WebView
} from 'react-native';
import {StackNavigator} from 'react-navigation';

class ChatScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <WebView
                    source={{uri: 'https://github.com/facebook/react-native'}}
                    style={{marginTop: 20,flex:1}}
                />
            </View>
        );
    }
}

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Hello, chatApp!</Text>
                <Button onPress={() => navigate('Chat', {user: 'https://github.com/facebook/react-native'})} title="chat with lucy"></Button>

            </View>
        );

    }
}

const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
});


AppRegistry.registerComponent('ReactNativeTest', () => SimpleApp);


