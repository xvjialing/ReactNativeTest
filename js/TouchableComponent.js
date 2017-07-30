import React,{Component} from 'react'
import {View, StyleSheet,Image,TextInput,Text,TouchableOpacity,AlertIOS} from 'react-native'

//ES5写法
var TouchableComponent=React.createClass({
    getInitialState(){
        return{
            title:'不透明触摸'
        }
    },

    render(){
        return(
            <View ref="topView" style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=>{this.activeEvent('点击')}}
                    onPressIn={()=>{this.activeEvent('按下')}}
                    onPressOut={()=>{this.activeEvent('抬起')}}
                    onLongPress={()=>{this.activeEvent('长按')}}
                >
                    <Text style={styles.innerViewStyle}>点击事件</Text>
                </TouchableOpacity>

                <View>
                    <Text>{this.state.title}</Text>
                </View>
            </View>
        );
    },

    activeEvent(event){
        this.setState({
            title:event

        })
        console.log(event)
    }

});

//ES6写法
// export default class TouchableComponent extends Component{
//
// }

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#dddddd',
        // flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    innerViewStyle:{
        backgroundColor:'red'
    }


})

module.exports=TouchableComponent;