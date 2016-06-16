import React, {Component} from 'react'
import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    NavigatorIOS
} from 'react-native'

'use district';

import Util from '../view/util/Util'
import ChangePassword from '../view/ChangePassword'
import MyCode from '../view/MyCode'

import ChildNumber from '../view/ChildNumber'

export default class extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    childNumber(){
        this.props.navigator.push({
            component:ChildNumber,
            title:'',
            navigationBarHidden:true
        });
    }

    myCode(){
        this.props.navigator.push({
            component:MyCode,
            title:'',
            navigationBarHidden:true
        });
    }

    changePassword(){
        this.props.navigator.push({
            component:ChangePassword,
            title:'',
            navigationBarHidden:true
        });
    }

    checkVersion(){

    }

    goBack(){
        this.props.navigator.pop();
    }

    render(){
        return(
                <View style={[styles.flex_colum]}>
                    <View style={[styles.flex_colum,styles.headerContianer]}>
                            <Image source={require('../view/images/defualt_head.imageset/defualt_head.png')}/>
                            <Text style={[styles.user_text,styles.fontWhite]}>XXX联盟商</Text>
                            <Text style={styles.fontWhite}>18511898011</Text>
                            <TouchableHighlight onPress={()=>this.goBack()} underlayColor="#eee" style={[styles.back]}>
                                <Image source={require('../view/images/back.imageset/back_button.png')} style={[]}/>
                            </TouchableHighlight>
                    </View>
                    <View style={[styles.flex_colum,styles.contentContianer]}>
                        <TouchableHighlight underlayColor="#eee" style={styles.flex_row} onPress={()=>this.childNumber()}>
                            <View style={[styles.flex_row,styles.row_box]}>
                                <View style={[styles.flex_row,{alignItems:'center'}]}>
                                    <Image source={require('../view/images/account.imageset/c_account.png')}
                                           style={styles.image_box}/>
                                    <Text style={[styles.row_box_text]}>我的子账号</Text>
                                </View>
                                <Image source={require('../view/images/rightbutton.imageset/rightbutton.png')} style={styles.image_box}/>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor="#eee" style={styles.flex_row} onPress={()=>this.myCode()}>
                            <View style={[styles.flex_row,styles.row_box]}>
                                <View style={[styles.flex_row,{alignItems:'center'}]}>
                                    <Image source={require('../view/images/QRCode.imageset/QR_code.png')}
                                           style={styles.image_box}/>
                                    <Text style={[styles.row_box_text]}>我的推广专属二维码</Text>
                                </View>
                                <Image source={require('../view/images/rightbutton.imageset/rightbutton.png')} style={styles.image_box}/>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor="#eee" style={styles.flex_row} onPress={()=>this.changePassword()}>
                            <View style={[styles.flex_row,styles.row_box]}>
                                <View style={[styles.flex_row,{alignItems:'center'}]}>
                                    <Image source={require('../view/images/lock.imageset/lock.png')}
                                           style={styles.image_box}/>
                                    <Text style={[styles.row_box_text]}>修改密码</Text>
                                </View>
                                <Image source={require('../view/images/rightbutton.imageset/rightbutton.png')} style={styles.image_box}/>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor="#eee" style={styles.flex_row} onPress={()=>this.checkVersion()}>
                            <View style={[styles.flex_row,styles.row_box]}>
                                <View style={[styles.flex_row,{alignItems:'center'}]}>
                                    <Image source={require('../view/images/version.imageset/flush.png')}
                                           style={styles.image_box}/>
                                    <Text style={[styles.row_box_text]}>检测新版本</Text>
                                </View>
                                <Image source={require('../view/images/rightbutton.imageset/rightbutton.png')} style={styles.image_box}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={[styles.flex_row,{backgroundColor:'white'}]}>
                        <View style={[styles.logout,styles.flex_row]}>
                                <Text style={[styles.logout_text]}>退出登录</Text>
                        </View>
                        <View style={styles.row}></View>
                    </View>
                </View>

        )
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
    headerContianer:{
        marginTop:20,
        backgroundColor:'orangered',
        borderWidth:Util.pixel,
        borderColor:'orangered',
        height:150,
        justifyContent:'center',
        alignItems:'center'
    },
    contentContianer:{
        marginTop:20
    },
    row_box:{
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:Util.pixel,
        borderBottomColor:'#eee',
        paddingBottom:10,
        paddingTop:10
    },
    image_box:{
        marginLeft:10,
        marginRight:10
    },
    row_box_text:{

        fontSize:12,
        textAlign:'center',
        alignItems:'flex-start'
    },
    logout:{
        height:30,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',

    },
    logout_text:{
        fontSize:13,
        textAlign:'center',
        backgroundColor:'white'
    },
    back:{
        position:'absolute',
        top:20,
        left:30
    },
    user_text:{
        marginTop:10
    },
    fontWhite:{
        color:'white'
    }

});