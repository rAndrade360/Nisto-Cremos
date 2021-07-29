import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import Logo from '../../components/Logo';
// import { Container } from './styles';

const About: React.FC = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
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
    </ScrollView>
  );
};

export default About;
