import React ,{Component} from 'react'
import {View,Text,FlatList,StyleSheet} from 'react-native'

export default class FlatListComponent extends Component{

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key:'devied'},
                        {key:'jack'},
                        {key:'rose'},
                        {key:'james'},
                        {key:'julie'},
                        {key:'jimmy'},
                        {key:'john'},
                        {key:'kackson'},
                    ]}
                    renderItem={({item})=><Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:10
    },
    item:{
        padding:10,
        fontSize:18,
        height:44,
    },
})