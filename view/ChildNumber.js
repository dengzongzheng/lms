import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image
} from 'react-native'

'use strict';

import Util from './util/Util'
import MyAddQRCode from './MyAddQRCode'

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

    goAddQRCode(){
        this.props.navigator.push({
            component:MyAddQRCode,
            title:'新增账号二维码',
            navigationBarHidden:false
        });
    }

    render(){
        return (
            <View>
                <View style={[styles.headerContainer,styles.flex_row]}>
                    <TouchableHighlight onPress={()=>this.goBack()} underlayColor="#eee">
                        <View style={[styles.backContainer]}>
                            <Image source={require('../view/images/back.imageset/back_button.png')}/>
                        </View>
                    </TouchableHighlight>
                    <View style={[styles.flex_row,styles.titleContainer]}>
                        <Text style={[styles.flex_row,styles.titleText]}>我的子账号</Text>
                    </View>
                    <TouchableHighlight onPress={()=>this.goAddQRCode()} underlayColor="#eee">
                        <View style={[styles.rightContainer]}>
                            <Image source={require('../view/images/QRBCode.imageset/QRCode_b.png')}/>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={[styles.flex_colum]}>
                    <View style={[styles.row_common,styles.flex_row]}>
                        <Text style={[styles.tel_text]} >18511898011</Text>
                        <Text style={[styles.name_text]}>哈哈这是我的测试</Text>
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    flex_row:{
        flex:1,
        flexDirection:'row'
    },
    flex_column:{
        flex:1,
        flexDirection:'column'
    },
    headerContainer:{
        height:30,
        marginTop:30,
        borderBottomWidth:Util.pixel,
        borderBottomColor:'#d8bfd8',
        paddingBottom:10
    },
    backContainer:{
        height:30,
        width:40,
        marginLeft:10
    },
    rightContainer:{
        height:30,
        width:40,
        marginRight:10
    },
    titleContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    titleText:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold'
    },
    row_common:{
        height:40,
        borderBottomColor:'#d8bfd8',
        borderBottomWidth:Util.pixel,
        paddingTop:10,
        paddingBottom:10
    },
    tel_text:{
        marginLeft:10,
    },
    name_text:{
        marginLeft:30
    }

});