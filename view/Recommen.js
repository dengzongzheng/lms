import React, {Component} from 'react'
import {
    View,
    NavigatorIOS,
    Text,
    Switch,
    StyleSheet,
    TouchableHighlight,
    Image,
    TextInput
} from 'react-native'

'use district';

import Util from '../view/util/Util'

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
        return(
            <View>
                <View style={styles.headerContainer}>
                    <View style={[styles.two_box,styles.back]}>
                        <TouchableHighlight onPress={()=>this.goBack()} underlayColor="#eee">
                            <Image source={require('./images/back.imageset/back_button.png')}/>
                        </TouchableHighlight>
                    </View>
                    <View style={[styles.flex_row,styles.titleContainer]}>
                        <Text style={[styles.titleFont]}>推荐客户资源</Text>
                    </View>
                    <View style={styles.two_box}></View>
                </View>
                <View style={[styles.flex_colum]}>
                    <View style={[styles.flex_colum]}>
                        <View style={[styles.common_row,styles.flex_row]}>
                            <View style={[styles.row_title]}>
                                <Text>客户姓名</Text>
                            </View>
                            <View style={[styles.flex_row]}>
                                <TextInput style={[styles.row_input]} placeholder="请输入姓名"/>
                            </View>
                            <View style={[styles.row_sex]}>
                                <Switch/>
                            </View>
                        </View>
                        <View style={[styles.common_row,styles.flex_row]}>
                            <View style={[styles.row_title]}>
                                <Text>客户电话</Text>
                            </View>
                            <View style={[styles.flex_row]}>
                                <TextInput style={[styles.row_input]} placeholder="请输入电话"/>
                            </View>
                            <View style={[styles.row_sex]}>
                                <Switch/>
                            </View>
                        </View>
                        <View style={[styles.common_row_bz,styles.flex_colum]}>
                            <View style={[styles.row_title_bz]}>
                                <Text>备注</Text>
                            </View>
                            <View style={[styles.flex_row]}>
                                <TextInput multiline={true} style={[styles.row_input_bz]} placeholder="请输入电话"/>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.flex_row]}>
                        <View style={[styles.flex_row,styles.submit_Buttom]}>
                            <Text style={[styles.fontWhite,styles.font15]}>提交</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    headerContainer:{
        height:50,
        marginTop:20,
        borderBottomWidth:Util.pixel,
        borderBottomColor:'black',
        flex:1,
        flexDirection:'row',
    },
    flex_row:{
        flex:1,
        flexDirection:'row'
    },
    flex_column:{
        flex:1,
        flexDirection:'column'
    },
    two_box:{
        width:30
    },
    titleContainer:{
         justifyContent:'center',
         alignItems:'center'
    },
    titleFont:{
        fontSize:15,
        fontWeight:'bold'
    },
    back:{
        justifyContent:'center',
        alignItems:'center'
    },
    common_row:{
        height:50,
        borderBottomWidth:Util.pixel,
        borderBottomColor:'#eee',
        paddingTop:10,
        paddingBottom:10
    },
    common_row_bz:{
        height:150
    },
    row_title:{
        width:100,
        marginLeft:10,
        justifyContent:'center',
        alignItems:'center'
    },
    row_title_bz:{
        width:80,
        marginLeft:10,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10
    },
    row_sex:{
        width:50,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center'
    },
    row_input:{
        height:30,
        flex:1
    },
    row_input_bz:{
        height:60,
        flex:1,
        borderWidth:Util.pixel,
        borderColor:'#eee',
        marginLeft:20,
        marginRight:10
    },
    submit_Buttom:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'darkorange',
        borderWidth:Util.pixel,
        borderColor:'darkorange',
        height:40,
        marginLeft:10,
        marginRight:10,
        borderRadius:5
    },
    fontWhite:{
        color:'white'
    },
    font15:{
        fontSize:15
    }

});