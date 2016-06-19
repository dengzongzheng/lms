import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    TextInput
} from 'react-native'

'use strict';

import Util from './util/Util'

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
            <View style={{flex:1}}>
                <View style={[styles.headerContainer]}>
                    <View style={[styles.flex_row,styles.title]}><Text
                        style={[styles.title_text]}>修改密码</Text></View>
                    <TouchableHighlight style={[styles.back]} underlayColor="transparent" onPress={()=>this.goBack()}>
                        <Image source={require('./images/back.imageset/back_button.png')} />
                    </TouchableHighlight>
                </View>
                <View style={[styles.flex_column]}>
                    <View>
                        <View style={[styles.row_common,styles.flex_row]}>
                            <Text>当前密码:</Text>
                            <TextInput style={[styles.passWord_text,styles.flex_row]} placeholder="请输入当前密码"/>
                        </View>
                        <View style={[styles.row_common,styles.flex_row]}>
                            <Text>新密码:</Text>
                            <TextInput style={[styles.passWord_text,styles.flex_row]} placeholder="请输入新密码"/>
                        </View>
                        <View style={[styles.row_common,styles.flex_row]}>
                            <Text>新密码:</Text>
                            <TextInput style={[styles.passWord_text,styles.flex_row]} placeholder="确认新密码"/>
                        </View>
                    </View>
                    <View style={[styles.flex_column,styles.bottom_content,{flex:1}]}>
                        <View style={[styles.tip]}><Text style={[styles.tip_text]}>只支持数字和字母
                            (区分大小写),6-26位字符</Text></View>
                        <View style={[styles.flex_row,styles.button_container]}>
                            <View style={[styles.flex_row,styles.button]}><Text style={styles.button_text}>确认</Text></View>
                            <View style={[]}/>
                        </View>
                    </View>
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
        height:30,
        marginTop:30,
        borderBottomWidth:Util.pixel,
        borderBottomColor:"#d8bfd8",
        paddingBottom:10
    },
    back:{
        position:'absolute',
        top:5,
        left:13,
        width:40
    },
    title:{
        justifyContent:'center',
        alignItems:'center'
    },
    title_text:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center'
    },
    row_common:{
        height:40,
        borderBottomColor:'#d8bfd8',
        borderBottomWidth:Util.pixel,
        marginLeft:10,
        paddingTop:10,
        paddingBottom:10,
        marginRight:10
    },
    passWord_text:{
        fontSize:13,
        marginLeft:5
    },
    bottom_content:{
        backgroundColor:'#eee',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    tip:{
        height:20,
        marginLeft:10,
        marginRight:10,
        marginTop:10
    },
    tip_text:{
        fontSize:12
    },
    button_container:{
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        borderWidth:Util.pixel,
        borderColor:'orangered',
        height:40,
        backgroundColor:'orangered',
        width:Util.size.width-20,
        borderRadius:5
    },
    button_text:{
        flex:1,
        flexDirection:'row',
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        color:'white'
    }

});