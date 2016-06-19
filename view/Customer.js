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

export default class extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isLoading:false
        };
        this.render = this.render.bind(this);
    }

    render(){
        var customers = [null];
        for(var i in this.props.responseData){
            console.log(this.props.responseData[i].customerName);
            var customer = (
                <View key={this.props.responseData[i].customerName} style={[styles.contentContainer,styles.flex_colum]}>
                    <View style={[styles.flex_row,styles.row]}><Text>{this.props.responseData[i].customerName}{(this.props.responseData[i].sex==1?'(男)':'(女)')}[{this.props.responseData[i].pushTel}]</Text></View>
                    <View style={[styles.flex_row,styles.row]}><Text>{this.props.responseData[i].customerTel}</Text></View>
                    <View style={[styles.flex_row,styles.row]}><Text>备注:{this.props.responseData[i].remark}</Text></View>
                    <View style={[styles.flex_row,styles.row]}><Text>{this.props.responseData[i].createTime}</Text></View>
                </View>
            );
            customers.push(customer);
        }
        return (
            <View>
                {customers}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex_row:{
        flex:1,
        flexDirection:'row'
    },
    flex_colum:{
        flex:1,
        flexDirection:'column'
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
    },
    activity:{
        position: 'absolute',
        top: (Util.size.height/2)-40,
        left:Util.size.width/2-40,
        height: 80,
        width:80,
        borderRadius: 5,
        backgroundColor: 333,
        justifyContent: 'center',
        alignItems: 'center'
    }

});