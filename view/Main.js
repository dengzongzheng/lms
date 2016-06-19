import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    AlertIOS,
    AsyncStorage,
    Linking,
    ScrollView,
    ActivityIndicatorIOS
} from 'react-native'

'use district';

import Util from '../view/util/Util'
import Recomment from '../view/Recommen'
import UserCenter from '../view/UserCenter'
import Customer from '../view/Customer'
import QRCodeScreen from './QRCodeScreen'
import QRCode from './QRCode'


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
            customers:[],
            isLoading:true
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
            let value = this.props.unionBusinessId;
            if(value!=null){
                const url = Util.api+getCustomerByUnionId+value;
                fetch(url).then((response)=>{
                    if(response.status==200){
                        response.json().then((responseData)=>{
                            let value = responseData;
                            this.setState({
                                isLogin:true,
                                customers:value,
                                isLoading:true
                            });
                        });
                    }
                });

            }else{
                this.setState({
                    isLogin:false,
                    customers:[],
                    isLoading:true
                });
            }
    }

    callGolden(tel){
        return Linking.openURL('tel:'+'18511898011');
    }

    getGoden(){

        AsyncStorage.getItem("unionBusinessId").then((value)=>{
           const  unionBusinessId = value;
           if(value!=null){
               console.log(value);
               AsyncStorage.getItem("goldenData").then((value)=>{
                   console.log(value);
                   if(null!=value){
                       AlertIOS.alert(
                           "金管家"+value.goldenName+"为您服务",
                           "电话:"+value.tel,
                           [
                               {text: '取消', onPress: () => console.log('Button Pressed!')},
                               {text: '拨打电话', onPress: () => this.callGolden(tel)}
                           ]
                       )
                   }else{
                       const url = Util.api+getGolderURl+unionBusinessId;
                       console.log(url);
                       fetch(url).then((response)=>{
                           if(response.status==200){
                               response.json().then((responseData)=>{
                                   if(responseData.goldenName){
                                       //  let data = [["goldenData",responseData]];
                                       // AsyncStorage.multiSet(JSON.stringify(data));
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
            navigationBarHidden: true,
            passProps:{
                tokenid:this.props.tokenid,
                unionBusinessId:this.props.unionBusinessId,
                unionBusinessName:this.props.unionBusinessName,
                mobile:this.props.mobile
            }
        });

    }

    CodeScreen(){
        this.props.navigator.push({
            component: QRCodeScreen,
            title: '',
            navigationBarHidden: false,
            passProps:{
                text: 'http://www.baidu.com'
            }
        });
    }
    _onSucess(result) {
        console.log(result);
    }

    render(){
        console.log(this.props.tokenid);
        let saoyisao = this.props.tokenid!=''?null:<TouchableHighlight onPress={()=>this.CodeScreen()} underlayColor="transparent"><Image source={require('./images/saoyisao.imageset/saoyisao.png')}/></TouchableHighlight>;
        let jgj = this.props.tokenid!=''?<TouchableHighlight onPress={()=>this.getGoden()}  underlayColor="transparent">
            <Text style={[styles.font15,styles.magin_right]}>金官家</Text>
        </TouchableHighlight>:<Text style={[styles.font15,styles.magin_right,{color:'darkgrey'}]}>金官家</Text>;

        let tjkf = this.props.tokenid!=''?<TouchableHighlight onPress={()=>this.recomment()} underlayColor="transparent">
            <Text style={styles.font15}>推荐客户</Text>
        </TouchableHighlight>:<Text style={[styles.font15,{color:'darkgrey'}]}>推荐客户</Text>;


        return(
            <View style={styles.flex_colum}>
                <View>
                    <View style={[styles.headerContainer,styles.flex_row]}>
                        <View style={styles.out}>
                            {saoyisao}
                        </View>
                        <View style={[styles.flex_row,styles.header_title]} accessible={false}>
                            {jgj}
                            {tjkf}
                        </View>
                        <View style={styles.out}>
                            <TouchableHighlight onPress={()=>this.userCenter()} underlayColor="transparent">
                                <Image source={require('../view/images/account.imageset/c_account.png')}/>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.flex_column}>
                    <Customer responseData={this.state.customers}/>
                </ScrollView>
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