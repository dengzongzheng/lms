import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    AlertIOS,
    AsyncStorage,
    Linking
} from 'react-native'

'use district';

import Util from '../view/util/Util'
import Recomment from '../view/Recommen'
import UserCenter from '../view/UserCenter'


var getGolderURl='jyhouse-union/v1/provider/1.0/getGoldenByUnionId/';
var getCustomerByUnionId ='jyhouse-union/v1/provider/1.0/getCustomerByUnionId/';

export default class extends Component{

    static propTypes = {

    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isLogin:false,
            customers:[]
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('unionBusinessId').then((value)=>{
            if(value!=null){
                const url = Util.api+getCustomerByUnionId+value;
                console.log(url);
                var customers = [];
                fetch(url).then((response)=>{
                    if(response.status==200){
                        response.json().then((responseData)=>{

                            for(var i in responseData){
                                console.log(responseData[i].customerName);
                              var customer = (
                                  <View key={responseData[i].customerName} style={[styles.contentContainer,styles.flex_colum]}>
                                      <View style={[styles.flex_row,styles.row]}><Text>{responseData[i].customerName}{(responseData[i].sex==1?'(男)':'(女)')}[{responseData[i].pushTel}]</Text></View>
                                      <View style={[styles.flex_row,styles.row]}><Text>{responseData[i].customerTel}</Text></View>
                                      <View style={[styles.flex_row,styles.row]}><Text>备注:{responseData[i].remark}</Text></View>
                                      <View style={[styles.flex_row,styles.row]}><Text>{responseData[i].createTime}</Text></View>
                                  </View>
                              );
                                customers.push(customer);
                            }
                        });
                    }
                });
                this.setState({
                    isLogin:true,
                    customers:customers
                });

            }else{
                this.setState({
                    isLogin:false
                });
            }
        });
    }

    callGolden(){
        return Linking.openURL('tel:18610530276');
    }

    getGoden(){


        AsyncStorage.getItem("unionBusinessId").then((value)=>{
           if(value!=null){
               const url = Util.api+getGolderURl+value;
               console.log(url);
               fetch(url).then((response)=>{
                   if(response.status==200){
                       response.json().then((responseData)=>{
                           console.log(responseData.tel);
                           if(responseData.goldenName){
                               AlertIOS.alert(
                                   "金管家"+responseData.goldenName+"为您服务",
                                   "电话:"+responseData.tel,
                                   [
                                       {text: '取消', onPress: () => console.log('Button Pressed!')},
                                       {text: '拨打电话', onPress: () => this.callGolden()}
                                   ]
                               )
                           }
                       })
                   }
               });
           }
        });
    }

    recomment(){

        this.props.navigator.push({
            component:Recomment,
            title:'',
            navigationBarHidden:true
        })
    }

    userCenter(){

        this.props.navigator.push({
            component: UserCenter,
            title: '',
            navigationBarHidden: true
        });

    }

    render(){

        let saoyisao = this.state.isLogin?null:<Image source={require('./images/saoyisao.imageset/saoyisao.png')}/>;

        return(
            <View>
                <View style={[styles.headerContainer,styles.flex_row]}>
                    <View style={styles.out}>
                        {saoyisao}
                    </View>
                    <View style={[styles.flex_row,styles.header_title]} accessible={false}>
                        <TouchableHighlight onPress={()=>this.getGoden()}  underlayColor="transparent">
                            <Text style={[styles.font15,styles.magin_right]}>金官家</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={()=>this.recomment()} underlayColor="transparent">
                            <Text style={styles.font15}>推荐客户</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.out}>
                        <TouchableHighlight onPress={()=>this.userCenter()} underlayColor="transparent">
                            <Image source={require('../view/images/account.imageset/c_account.png')}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <View>
                    {this.state.customers}
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    headerContainer:{
        marginTop:20,
        borderBottomWidth:Util.pixel,
        borderBottomColor:'black',
        paddingTop:10,
        paddingBottom:10,
        height:50
    },
    header_title:{
      justifyContent:'center',
      alignItems:'center'
    },
    flex_row:{
        flex:1,
        flexDirection:'row'
    },
    flex_colum:{
        flex:1,
        flexDirection:'column'
    },
    magin_right:{
        marginRight:20
    },
    font15:{
        fontSize:15
    },
    out:{
        width:40,
        alignItems:'stretch',
        justifyContent:'center',
        marginLeft:20
    },
    contentContainer:{
        marginTop:5,
        marginBottom:5,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:Util.pixel,
        borderBottomColor:"#d8bfd8"
    },
    row:{
        paddingBottom:8
    }
});