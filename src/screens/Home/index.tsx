import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Lesson} from '../../@types/Lesson';
import {RootStackParamList} from '../../@types/RootStackParamList';
import lessonJson from '../../assets/lessons.json';
import Bible from '../../components/Bible';

// interface ItemProps extends HymnProps {
//   navigate?: (number: string, name: string) => void;
// }

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const [lessons, setLessons] = useState<Array<Lesson>>([]);

  useEffect(() => {
    setLessons(lessonJson);
  }, [setLessons]);

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
            28 Crenças Adventistas
          </Text>
          <TouchableOpacity
            style={{padding: 10}}
            onPress={() => {
              navigation.navigate('About');
            }}>
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
            Entenda nossas crenças fundamentais
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
            data={lessons}
            style={{marginTop: 50, marginBottom: 30}}
            keyExtractor={item => String(item.id)}
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
                }}
                onPress={() => navigation.navigate('Lesson', {id: item.id})}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                  }}>
                  <Bible />
                  <Text style={{marginLeft: 10, fontSize: 16}}>
                    {item.title}
                  </Text>
                </View>
                <Icon name="keyboard-arrow-right" color="#4755C9" size={25} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
