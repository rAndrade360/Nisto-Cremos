import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, StatusBar, View} from 'react-native';
import * as LessonType from '../../@types/Lesson';
import {RootStackParamList} from '../../@types/RootStackParamList';
import lessonJson from '../../assets/lessons.json';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';
type LessonScreenRouteProp = RouteProp<RootStackParamList, 'Lesson'>;

type LessonScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Lesson'
>;

interface LessonsProps {
  route: LessonScreenRouteProp;
  navigation: LessonScreenNavigationProp;
}
const Lesson: React.FC<LessonsProps> = ({route, navigation}) => {
  const [lesson, setLesson] = useState<LessonType.Lesson>();

  useEffect(() => {
    const less = lessonJson.filter(item => item.id === route.params.id)[0];
    setLesson(less);
    navigation.setOptions({
      headerTitle: less.title,
      headerTintColor: '#333',
      headerStyle: {
        backgroundColor: '#FFF',
      },
    });
  }, [setLesson, route, navigation]);
  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <Text
          style={{
            fontSize: 18,
            color: '#444',
            textAlign: 'justify',
            lineHeight: 25,
            marginHorizontal: 12,
            marginVertical: 5,
            marginTop: 15,
          }}>
          {lesson?.description}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: '#4755C9',
            textAlign: 'justify',
            marginHorizontal: 12,
          }}>
          {lesson?.verses}
        </Text>
        <View>
          <View>
            <Icon name="ondemand-video" color="#4755C9" size={50} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Lesson;
