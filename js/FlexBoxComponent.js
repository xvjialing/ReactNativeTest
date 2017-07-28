import React,{Component} from 'react'
import {View, Text,StyleSheet} from 'react-native'


// 引入Dimensions
var Dimensions=require('Dimensions')

export default class DimensionsComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>当前屏幕宽度：{Dimensions.get('window').width}</Text>
                <Text>当前屏幕高度：{Dimensions.get('window').height}</Text>
                <Text>当前屏幕分辨率：{Dimensions.get('window').scale}</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',

    }
})