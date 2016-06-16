import React, {Component} from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TextInput,
    NavigatorIOS
} from 'react-native'

'use district';

import Util from './util/Util'

import Main from '../view/Main'

export default class extends Component{

    static propTypes = {

    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.login = this.login.bind(this);
    }

    login(){
         this.props.navigator.push({
             component:Main,
             title:'',
             navigationBarHidden:true,
             ref:'nav'
         });
    }

    render(){
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.header_text}>联盟商账号登录</Text>
                </View>
                <Image source={require('../view/images/bg.imageset/bg.png')} style={styles.image_Container}>
                    <View style={[styles.flex_colum,styles.logoContent]}>
                        <Image source={require('../view/images/logincon.appiconset/120x120.png')}></Image>
                        <Text style={styles.logo_text}>联盟商</Text>
                    </View>
                    <View style={styles.flex_colum}>
                        <View style={styles.flex_colum}>
                            <TextInput style={styles.user_input} placeholder='请输入您的电话' />
                        </View>
                        <View style={styles.flex_colum}>
                            <TextInput style={styles.password_input} placeholder="请输入密码"/>
                        </View>
                        <View style={[styles.flex_row,styles.password_forget]}>
                             <View style={styles.flex_colum}></View>
                             <View style={[styles.password_forget_text_view]}><Text style={styles.password_forget_text}>忘记密码</Text></View>
                        </View>
                    </View>
                    <View style={styles.flex_colum}>
                        <TouchableHighlight onPress={()=>{this.login()}} underlayColor="#eee">
                            <View style={styles.loginButton}>
                                <Text style={styles.button_text}>登录</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </Image>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    LoginContainer:{

    },
    header:{
        marginTop:20,
        borderBottomWidth:Util.pixel,
        borderBottomColor:'black',
        height:50,
        justifyContent:'center',
        alignItems:'center'

    },
    header_text:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:15
    },
    image_Container:{
        flex:1,
        flexDirection:'column',
        width:Util.size.width
    },
    logo_text:{
        fontSize:15,
        fontWeight:'bold',
        marginTop:20
    },
    logoContent:{

        justifyContent:'center',
        alignItems:'center'
    },
    loginButton:{
        marginLeft:20,
        marginRight:20,
        height:50,
        backgroundColor:'darkorange',
        borderWidth:Util.pixel,
        borderColor:'darkorange',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    button_text: {
      fontSize:16,
      fontWeight:'bold',
      color:'white'
    },
    flex_colum:{
        flex:1,
        flexDirection:'column'
    },
    flex_row:{
        flex:1,
        flexDirection:'row'
    },
    user_input:{
        height:50,
        marginLeft:20,
        marginRight:20,
        backgroundColor:'white'
    },
    password_input:{
        height:50,
        marginLeft:20,
        marginRight:20,
        backgroundColor:'white'
    },
    password_forget:{
        height:20,
    },
    password_forget_text_view:{
        marginLeft:10,
        width:100
    },
    password_forget_text:{
       width:100,
       backgroundColor:'transparent'
    }

});