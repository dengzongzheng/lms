// import React, {Component} from 'react'
// import {
//     StyleSheet,
//     View,
//     Text,
//     TouchableOpacity,
//     VibrationIOS
// } from 'react-native'
//
// 'use strict';
//
// import Util from './util/Util'
// import Camera from 'react-native-camera';
//
// export default class extends Component{
//
//     static propTypes = {
//         cancelButtonVisible: React.PropTypes.bool,
//         cancelButtonTitle: React.PropTypes.string,
//         onSucess: React.PropTypes.func,
//         onCancel: React.PropTypes.func
//     };
//
//     // 构造
//     constructor(props) {
//         super(props);
//         // 初始状态
//         this.state = {
//             cancelButtonVisible: false,
//             cancelButtonTitle: 'Cancel'
//         };
//         this._onPressCancel = this._onPressCancel.bind(this);
//         this._onBarCodeRead = this._onBarCodeRead.bind(this);
//         this.render = this.render.bind(this);
//     }
//
//     _onPressCancel() {
//         var $this = this;
//         requestAnimationFrame(function() {
//             $this.props.navigator.pop();
//             if ($this.props.onCancel) {
//                 $this.props.onCancel();
//             }
//         });
//     }
//
//     _onBarCodeRead(result) {
//         var $this = this;
//
//         if (this.barCodeFlag) {
//             this.barCodeFlag = false;
//
//             setTimeout(function() {
//                 VibrationIOS.vibrate();
//                 $this.props.navigator.pop();
//                 $this.props.onSucess(result.data);
//             }, 1000);
//         }
//     }
//
//     render(){
//         var cancelButton = null;
//         this.barCodeFlag = true;
//
//         if (this.props.cancelButtonVisible) {
//             cancelButton = <CancelButton onPress={this._onPressCancel} title={this.props.cancelButtonTitle} />;
//         }
//
//         return (
//             <Camera onBarCodeRead={this._onBarCodeRead} style={styles.camera}>
//                 <View style={styles.rectangleContainer}>
//                     <View style={styles.rectangle}/>
//                 </View>
//                 {cancelButton}
//             </Camera>
//         );
//     }
//
// }
//
// export class CancelButton extends Component{
//
//     // 构造
//     constructor(props) {
//         super(props);
//         // 初始状态
//         this.state = {};
//     }
//
//     render(){
//         return (
//             <View style={styles.cancelButton}>
//                 <TouchableOpacity onPress={this.props.onPress}>
//                     <Text style={styles.cancelButtonText}>{this.props.title}</Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     }
//
// }
//
// const styles = StyleSheet.create({
//     camera: {
//         height: 568,
//         alignItems: 'center',
//     },
//
//     rectangleContainer: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'transparent',
//     },
//
//     rectangle: {
//         height: 250,
//         width: 250,
//         borderWidth: 2,
//         borderColor: '#00FF00',
//         backgroundColor: 'transparent',
//     },
//
//     cancelButton: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         backgroundColor: 'white',
//         borderRadius: 3,
//         padding: 15,
//         width: 100,
//         bottom: 10,
//     },
//     cancelButtonText: {
//         fontSize: 17,
//         fontWeight: '500',
//         color: '#0097CE',
//     }
// });