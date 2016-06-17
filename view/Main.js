import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    AlertIOS,
    AsyncStorage
} from 'react-native'

'use district';

import Util from '../view/util/Util'
import Recomment from '../view/Recommen'
import UserCenter from '../view/UserCenter'

export default class extends Component{

    static propTypes = {

    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isLogin:false
        };
    }

    componentDidMount() {
        let tokenid = AsyncStorage.getItem('tokenid');
        if(tokenid){
            this.setState({
                isLogin:true
            })
        }
    }

    getGoden(){
        AlertIOS.alert(
            "金管家XXX为您服务",
            "电话:18511898011",
            [
                {text: '取消', onPress: () => console.log('Button Pressed!')},
                {text: '拨打电话', onPress: () => console.log('Button Pressed!')}
            ]
        )
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
                    <View style={[styles.flex_row,styles.header_title]}>
                        <TouchableHighlight onPress={()=>this.getGoden()} underlayColor="#eee">
                            <Text style={[styles.font15,styles.magin_right]}>金官家</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={()=>this.recomment()} underlayColor="#eee">
                            <Text style={styles.font15}>推荐客户</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.out}>
                        <TouchableHighlight onPress={()=>this.userCenter()} underlayColor="#eee">
                            <Image source={require('../view/images/account.imageset/c_account.png')}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <View>

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
    }
});