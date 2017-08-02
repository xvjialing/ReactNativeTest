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
//
import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    WebView,
    Image,
    StyleSheet,
} from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
//
// class ChatScreen extends Component {
//     static navigationOptions = ({navigation}) => ({
//         title: `Chat with ${navigation.state.params.user}`,
//     });
//
//     render() {
//         const { params } = this.props.navigation.state;
//         return (
//             <View>
//                 <WebView
//                     source={{uri: 'https://github.com/facebook/react-native'}}
//                     style={{marginTop: 20,flex:1}}
//                 />
//             </View>
//         );
//     }
// }
//
// class HomeScreen extends Component {
//     static navigationOptions = {
//         title: 'Welcome',
//     };
//
//     render() {
//         const {navigate} = this.props.navigation;
//         return (
//             <View>
//                 <Text>Hello, chatApp!</Text>
//                 <Button onPress={() => navigate('Chat', {user: 'https://github.com/facebook/react-native'})} title="chat with lucy"></Button>
//
//             </View>
//         );
//
//     }
// }
//
// const SimpleApp = StackNavigator({
//     Home: {screen: HomeScreen},
//     Chat: {screen: ChatScreen},
// });


class MyHomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./img/home.png')}
                style={[styles.icon, {tintColor:tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./img/notifications.png')}
                style={[styles.icon,{tintColor:tintColor} ]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

const MyApp = TabNavigator(
    {
        Home: {
            screen: MyHomeScreen,
        },
        Notifications: {
            screen: MyNotificationsScreen,
        },
    },
    {
        tabBarOptions: {
            activeTintColor: '#e91e63',
            inactiveTintColor:'#979797',
            showIcon: true,
            style: {
                backgroundColor: '#F3F3F3',
            },
        },
        tabBarPosition:'bottom',
        swipeEnabled:true
    },

);


AppRegistry.registerComponent('ReactNativeTest', () => MyApp);


