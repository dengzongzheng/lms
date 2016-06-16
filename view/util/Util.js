import React, {Component} from 'react'
import {
    Dimensions,
    PixelRatio
} from 'react-native'

'use district';

const Util ={
    retio:PixelRatio.get(),
    pixel:1/PixelRatio.get(),
    size:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height
    },
    post(url,param,callback){
        const fetchOption ={
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(param)
        };
        fetch(url,fetchOption).then((response)=>{
            return response.json();
        }).then((responseData)=>{
            callback(responseData);
        });
    },
    tfsGetServer:'http://image2.jyall.com/v1/tfs/',
    api:'http://app.jyall.com/'
};

export default Util;
