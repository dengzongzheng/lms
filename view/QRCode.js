import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native'

'use strict';

import Util from './util/Util'
import QRCode from 'react-native-qrcode'

export default class extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        };
    }

    render(){
        return (
            <View>
                <QRCode
                    value={this.props.text}
                    size={200}
                    bgColor='black'
                    fgColor='white'/>
            </View>
        )
    }

}

const styles = StyleSheet.create({

});