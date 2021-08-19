import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import Logo from '../../components/Logo';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';

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
        <Text
          style={{
            color: '#333',
            fontSize: 18,
            marginTop: 20,
            marginHorizontal: 10,
          }}>
          Esse app foi criado com todo carinho e pensando em você! Use-o para
          consultar sempre quiser.
        </Text>
        <Text
          style={{
            color: '#333',
            fontSize: 18,
            marginTop: 20,
            marginHorizontal: 10,
            marginBottom: 30,
          }}>
          Nós da RS Tecnologia estamos trabalhando continuamente para melhorá-lo
          e deixar do jeitinho que você gosta.
        </Text>
        <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.MEDIUM_RECTANGLE}
        />
      </View>
    </ScrollView>
  );
};

export default About;
