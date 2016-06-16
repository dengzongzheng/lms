import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight
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

    render(){
        return(
            <View>
                <View>
                    <View><Text>新增账号二维码</Text></View>
                </View>
                <View></View>
            </View>
        );
    }

}

const styles = StyleSheet.create({

});