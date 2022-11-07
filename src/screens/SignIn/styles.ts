
import {StyleSheet} from 'react-native';

import  {theme} from '../../../global/theme';

export const styles = StyleSheet.create(
    {
    container: {
            flex: 1,
            justifyContent:'center',
            alingItems:'center',
     },
    
    image:{
            width: 257,
            height:271,
            left:59,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: 'center'

    },
    content:{
        marginTop:-40,
        paddingHorizontal: 50
    },
    
    title: {
        color:theme.colors.heading,
        textAlign: 'center',
        fontSize: 22,
        marginBottom:23,
        fontFamily: theme.fonts.title1
    },
    subtitle:{
        color:theme.colors.heading1,
        textAlign: 'center',
        fontSize: 16,
        marginBottom:34,
        fontFamily: theme.fonts.text400,
        lineHeight: 24
    }
    }
);