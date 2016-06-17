import React, {Component} from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TextInput,
    NavigatorIOS,
    AlertIOS,
    AsyncStorage
} from 'react-native'

'use district';

import Util from './util/Util'

import Main from '../view/Main'

var loginUrl = "/user-api/v1/unionUseLogin";

export default class extends Component{

    static propTypes = {

    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            userName:'',
            passWord:''
        };
        this.login = this.login.bind(this);
    }

    login(){

         if(!this.state.userName){
             AlertIOS.alert('请输入正确的手机号');
             return;
         }
         if(!this.state.passWord){
             AlertIOS.alert('请输入密码');
             return;
         }

         var url = Util.api+loginUrl+"/"+this.state.userName+"/"+this.state.passWord;
         console.log(url);
         fetch(url).then((response)=>{

             if(response.status==200){
                 response.json().then((responseData)=>{
                     AsyncStorage.setItem("tokenid",responseData.tokenid);
                     AsyncStorage.setItem("unionBusinessId",responseData.authUser.unionBusinessId);
                     AsyncStorage.setItem("unionBusinessName",responseData.authUser.unionBusinessName);
                     AsyncStorage.setItem("mobile",responseData.authUser.mobile);
                     this.props.navigator.push({
                         component:Main,
                         title:'',
                         navigationBarHidden:true,
                         ref:'nav'
                     });

                 });

             }else{
                 response.json().then((responseData)=>{
                     AlertIOS.alert(responseData.message);
                 });
             }

         }).catch((error)=>{

         });
    }

    setUserName(userName){
        this.setState({
            userName:userName
        });
    }
    setPassWord(passWord){
        this.setState({
           passWord:passWord
        });
    }

    render(){
        return (
            <View>
                <View style={styles.header}>
                    <Image source={require('./images/back.imageset/back_button.png')} style={[styles.back]}/>
                    <Text style={styles.header_text}>联盟商账号登录</Text>
                </View>
                <Image source={require('../view/images/bg.imageset/bg.png')} style={styles.image_Container}>
                    <View style={[styles.flex_colum,styles.logoContent,{flex:0.8}]}>
                        <Image source={require('../view/images/logincon.appiconset/120x120.png')}></Image>
                        <Text style={styles.logo_text}>联盟商</Text>
                    </View>
                    <View style={styles.flex_colum}>
                        <View style={[styles.flex_row,{justifyContent:'center',alignItems:'center'}]}>
                            <View style={[styles.flex_row,styles.user_input_container]}>
                                <Image source={require('./images/phone.imageset/phone.png')} style={[styles.image_common]}/>
                                <TextInput style={[styles.user_input,styles.flex_row]} maxLength={11} onChange={(event)=>this.setUserName(event.nativeEvent.text)} keyboardType="numeric" placeholder='请输入您的电话'/>
                            </View>
                        </View>
                        <View style={[styles.flex_row,{justifyContent:'center',alignItems:'center'}]}>
                            <View style={[styles.flex_row,styles.user_input_container]}>
                                <Image source={require('./images/lock-b.imageset/lock_b.png')} style={[styles.image_common]}/>
                                <TextInput style={[styles.user_input,styles.flex_row]} onChange={(event)=>this.setPassWord(event.nativeEvent.text)} secureTextEntry={true} placeholder='请输入您的密码'/>
                                <Image source={require('./images/eye_close.imageset/eye_close.png')} style={[styles.image_right]}/>
                            </View>
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
        marginTop:10,
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
        marginLeft:20,
        marginRight:20,
        backgroundColor:'white',
        fontSize:14,
    },
    user_input_container:{
        borderColor:'#eee',
        borderWidth:Util.pixel,
        marginLeft:20,
        marginRight:20,
        backgroundColor:'white',
        borderRadius:5,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    password_input:{
        height:50,
        marginLeft:20,
        marginRight:20,
        backgroundColor:'white',
        fontSize:14,
        borderRadius:5
    },
    password_forget:{
        height:20
    },
    password_forget_text_view:{
        marginLeft:10,
        width:100
    },
    password_forget_text:{
       width:100,
       backgroundColor:'transparent'
    },
    image_common:{
        marginLeft:10
    },
    image_right:{
        marginRight:10
    },
    back:{
        position:'absolute',
        left:13,
        top:18
    }

});