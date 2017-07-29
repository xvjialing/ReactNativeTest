import React,{Component} from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

export default class TextInputComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.textInputs}
                           // value={'default text'}
                           // keyboardType={'email-address'}
                           password={true}
                           placeholder={'vbsdbi'}
                           clearButtonMode={'always'}></TextInput>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center'
    },
    textInputs:{
        marginTop:30,
        width:300,
        height:60,
        borderWidth:1,
        borderColor:'#e8e8e8'
    }
})