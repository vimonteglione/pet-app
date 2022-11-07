import React from "react";

import{
    Text, 
    Image,
    View,
    TouchableOpacity,
    TouchableHighlightProps,
}from 'react-native';

import {styles } from './styles';

type Props= TouchableHighlightProps & {
    title: string;
}

export function Buttonicon({title,...rest}:Props){
    return( 
    <TouchableOpacity style={styles.container}
    {...rest}>
    <Text style = {styles.title}>
        {title}
    </Text>
    </TouchableOpacity>
    );
}