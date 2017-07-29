import React,{Component} from 'react'
import {View, StyleSheet,Image,TextInput,Text} from 'react-native'

export default class QQIogin extends Component{
    render(){
        return(
            <View style={styles.container}>
                {/*头像*/}
                {/*<Image source={require('../img/icon.png')} style={styles.avater}/>*/}
                <Image  style={styles.avater} source={{uri:'icon'}}/>
                {/*账号与密码*/}
                <TextInput placeholder={'请输入用户名'} style={styles.textInputs}/>
                <TextInput placeholder={'请输入密码'}  style={styles.textInputs}
                    password={true}/>
                {/*登陆*/}
                <View style={styles.loginBtn}>
                    <Text>登陆</Text>
                </View>
                {/*设置*/}
                <View>
                    <Text>无法登陆</Text>
                    <Text>新用户</Text>
                </View>

                {/*其他登陆方式*/}
                <View>
                    <Text>其他登陆方式</Text>
                    <Image source={{uri:'icon3'}}/>
                    <Image source={{uri:'icon7'}}/>
                    <Image source={{uri:'icon8'}}/>
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
        backgroundColor:'white',
        paddingLeft:10,
        marginBottom:1,
        textAlign:'center'
    },
    loginBtn:{
        height:35,
        backgroundColor:'blue',

    }

})