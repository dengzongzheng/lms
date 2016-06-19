import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native'

'use strict';

import Util from './util/Util'
import QRCode from './QRCode'

export default class extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    goBack(){
        this.props.navigator.pop();
    }

    render(){
        return (
            <View>
                <View style={[styles.headerContainer,styles.flex_row]}>
                    <View style={[styles.flex_row,styles.title_container]}>
                        <Text style={[styles.title_text]}>推广专属二维码</Text>
                    </View>
                    <TouchableHighlight style={[styles.back]} onPress={()=>this.goBack()} underlayColor="transparent">
                        <Image source={require('./images/back.imageset/back_button.png')} />
                    </TouchableHighlight>
                </View>
                <View style={[styles.flex_row,styles.code_content]}>
                    <QRCode/>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    flex_column:{
        flex:1,
        flexDirection:'column'
    },
    flex_row:{
        flex:1,
        flexDirection:'row'
    },
    headerContainer:{
        marginTop:20,
        borderBottomWidth:Util.pixel,
        borderBottomColor:'black',
        paddingBottom:10,
        justifyContent:'center',
        alignItems:'center',
        height:40
    },
    title_text:{
        fontSize:15,
        fontWeight:'bold'
    },
    title_container:{
        justifyContent:'center',
        alignItems:'center'
    },
    back:{
        position:'absolute',
        top:8,
        left:15,
        width:40
    },
    code_content:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:30
    }

});