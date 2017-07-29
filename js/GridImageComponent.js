import React,{Component} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

//导入json数据
var BadgeData=require('../BadgeData.json');

var Dimensions=require('Dimensions');
var {width}=Dimensions.get('window');

//定义列数
var clos=3;
var boxWidth=100;
var vMargin=(width-clos*boxWidth)/(clos+1)
var hMargin=20

export default class GridImageComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                {/*返回6个包*/}
                {this.renderAllBadge()}
            </View>
        );
    }

    // 返回所有的包
    renderAllBadge(){
        //定义数组装所有的组件
        var  allBadge=[];
         //遍历json数据
        var length=BadgeData.data.length;
        for(var i=0;i<length;i++){
            //取出单独的数据对象
            var badge=BadgeData.data[i];
            //直接装入数据
            allBadge.push(
                <View key={i} style={styles.outViewStyle}>
                    <Image style={styles.ImageStyle} source={{uri:badge.icon}}></Image>
                    <Text style={styles.titlesStyle}>{badge.title}</Text>
                </View>
            );
        }
        //
        //
        //
        return allBadge;
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
    },
    outViewStyle:{
        backgroundColor:'grey',
        alignItems:'center',
        width:boxWidth,
        height:boxWidth,
        marginLeft:vMargin,
        marginTop:hMargin
    },
    ImageStyle:{
        width:80,
        height:80
    },
    titlesStyle:{

    }
})
