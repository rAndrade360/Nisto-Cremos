import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function HomeScreen() {
  const beliefs = [
    {title: 'A Biblia'},
    {title: 'A Trindade'},
    {title: 'Deus Pai'},
    {title: 'Deus Filho'},
    {title: 'Deus Espirito Santo'},
    {title: 'A Trindade'},
    {title: 'A Biblia'},
    {title: 'A Trindade'},
  ];
  return (
    <>
      <StatusBar backgroundColor="#4755C9" barStyle="light-content" />
      <View
        style={{
          flex: 1,
          backgroundColor: '#4755C9',
        }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 25,
            marginTop: 30,
          }}>
          <Text style={{color: '#fff', fontSize: 22}}>
            28 Crencas Adventistas
          </Text>
          <TouchableOpacity>
            <Icon name="info" color="#fff" size={25} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            margin: 15,
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>
            Entenda nossas crencas fundamentais
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            flex: 1,
            borderTopLeftRadius: 50,
            shadowColor: '#000',
            shadowOffset: {
              width: 1,
              height: -5,
            },
            shadowOpacity: 1.0,
            elevation: 4,
            shadowRadius: 2,
          }}>
          <FlatList
            data={beliefs}
            style={{marginTop: 50}}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#F2F2F2',
                  padding: 30,
                  marginHorizontal: 15,
                  marginBottom: 10,
                  borderRadius: 12,
                }}>
                <Text>{item.title}</Text>
                <Icon name="keyboard-arrow-right" color="#4755C9" size={25} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </>
  );
}

export default HomeScreen;
