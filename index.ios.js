import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    AsyncStorage
} from 'react-native';

'use district';

import Util from './view/util/Util'
import Main from './view/Main'
import Login from './view/Login'

class lms extends Component {

    static propTypes = {
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        };
    }

    render() {
        return (
            <View>
                {this.props.login ? <Main /> : <Login/>}
            </View>
        );
    }
}

class main extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isLogin:false
        };
    }

    componentWillMount() {
        AsyncStorage.getItem("tokenid").then((value)=>{
            if(value!=null){
                this.setState({
                    login:true
                })
            }else{
                this.setState({
                    login:false
                })
            }
        });
    }

    render() {
        const mains = this.state.isLogin ? Main : Login;
        return (
            <NavigatorIOS
                initialRoute={{
                   component:mains,
                   navigationBarHidden:true,
                   passProps:{
                     login:this.state.login
                   },
                   title:''
                }}
                style={{flex:1}}
                ref="nav"
            />
        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

AppRegistry.registerComponent('lms', () => main);
