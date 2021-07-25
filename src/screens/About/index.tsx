import React from 'react';
import {Text, View} from 'react-native';
import Logo from '../../components/Logo';
// import { Container } from './styles';

const About: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 50,
      }}>
      <Logo />
      <Text
        style={{
          color: '#333',
          fontSize: 25,
          marginTop: 20,
          fontWeight: 'bold',
        }}>
        {' '}
        28 Crenças Adventistas
      </Text>
    </View>
  );
};

export default About;
