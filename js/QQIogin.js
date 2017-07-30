import React,{Component} from 'react'
import {View, StyleSheet,Image,TextInput,Text} from 'react-native'

var Dimensions=require('Dimensions')
var {width}=Dimensions.get('window')

export default class QQIogin extends Component{
    render(){
        return(
            <View style={styles.container}>
                {/*头像*/}
                {/*<Image source={require('../img/icon.png')} style={styles.avater}/>*/}
                <Image  style={styles.avater} source={{uri:'icon'}}/>
                {/*账号与密码*/}
                {/*设置下划线背景色透明 达到去掉下划线的效果*/}
                <TextInput placeholder={'请输入用户名'} style={styles.textInputs} underlineColorAndroid='transparent' />
                <TextInput placeholder={'请输入密码'}  style={styles.textInputs }  underlineColorAndroid='transparent'
                    secureTextEntry={true}/>
                {/*登陆*/}
                <View style={styles.loginBtn}>
                    <Text style={styles.logintv}>登陆</Text>
                </View>
                {/*设置*/}
                <View style={styles.setting}>
                    <Text style={styles.cannotLog}>无法登陆</Text>
                    <Text style={styles.newUser}>新用户</Text>
                </View>

                {/*其他登陆方式*/}
                <View style={styles.otherLogin}>
                    <Text style={styles.otherLoginTv}>其他登陆方式</Text>
                    <View style={styles.otherLoginImgs}>
                        <Image source={{uri:'icon3'}} style={styles.otherLoginImg}/>
                        <Image source={{uri:'icon7'}} style={styles.otherLoginImg}/>
                        <Image source={{uri:'icon8'}} style={styles.otherLoginImg}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#dddddd',
        // flexDirection:'column',
        // justifyContent:'center',
        alignItems:'center'
    },
    avater:{
        width:80,
        height:80,
        borderRadius:40,
        borderColor:'white',
        borderWidth:2,
        marginTop:50,
        marginBottom:40
    },
    textInputs:{
        height:38,
        width:width,
        backgroundColor:'white',
        paddingLeft:10,
        marginBottom:1,
        textAlign:'center',

    },
    loginBtn:{
        height:35,
        width:width*0.95,
        backgroundColor:'blue',
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        marginBottom:20
    },
    logintv:{
        color:'white',
    },
    setting:{
        width:width,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },
    cannotLog:{
        marginLeft:20,
        color:'blue'
    },
    newUser:{
        marginRight:20,
        color:'blue'
    },
    otherLogin:{
        width:width,
        alignItems:'center',
        // 绝对定位
        position:'absolute',
        bottom:10
    },
    otherLoginTv:{
        marginBottom:10,
        marginTop:10
    },
    otherLoginImgs:{
        width:width*0.7,
        justifyContent:'space-around',
        flexDirection:'row'
    },
    otherLoginImg:{
        width:50,
        height:50,
        borderRadius:10
    }

})