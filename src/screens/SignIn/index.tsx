import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';



import  IllustrationImg from '../../../assets/IllustrationIMG.png';
import { Buttonicon } from '../../components/Buttonicon';
import {styles} from './styles';

export function SignIn(){
  return(
    <View style={styles.container}>
        <Image 
          source = {IllustrationImg} 
          style={styles.image}
          resizeMode="stretch"
        />
  
    <View style={styles.content}>
      <Text style={styles.title}>
      {'\n\n'}Bem-vindo!
      </Text>
      <Text style={styles.subtitle}>
        Confira agora!{'\n'} Cursos desenvolvidos
        por alunos da Universidade Federal de 
        Itajubá.{'\n'}
      </Text>

      <Buttonicon title="Descobrir"
      activeOpacity={0.7}
      />
      </View>
    </View>

  );
}