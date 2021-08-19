import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';
import {
  ScrollView,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native';
import * as LessonType from '../../@types/Lesson';
import {RootStackParamList} from '../../@types/RootStackParamList';
import lessonJson from '../../assets/lessons.json';
import Icon from 'react-native-vector-icons/MaterialIcons';
import YouTube from 'react-native-youtube';

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
  const [playVideo, setPlayVideo] = useState(false);

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
    return () => setPlayVideo(false);
  }, [setLesson, route, navigation]);
  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        {playVideo ? (
          <>
            <YouTube
              apiKey="AIzaSyAChfYupkvBIykFJF3z9bMBZ_7Vxau42jA"
              videoId={lesson?.videoId} // The YouTube video ID
              play={playVideo} // control playback of video with true/false
              fullscreen={false} // control whether the video should play in fullscreen or inline
              loop // control whether the video should loop when ended
              onReady={() => setPlayVideo(true)}
              onError={e => console.log(e)}
              style={{alignSelf: 'stretch', height: 300}}
            />
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                width: 350,
                borderColor: '#4755C9',
                backgroundColor: '#4755C9',
                borderWidth: 2,
                padding: 10,
                paddingVertical: 12,
                borderRadius: 7,
                marginVertical: 10,
                alignSelf: 'center',
              }}
              onPress={() => setPlayVideo(false)}>
              <Text style={{fontSize: 16, color: '#fff'}}>Fechar video</Text>
            </TouchableOpacity>
          </>
        ) : null}
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
        {playVideo ? null : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => setPlayVideo(!playVideo)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                width: 350,
                borderColor: '#4755C9',
                borderWidth: 2,
                padding: 10,
                marginBottom: 50,
                paddingVertical: 12,
                borderRadius: 7,
              }}>
              <Icon name="ondemand-video" color="#4755C9" size={40} />
              <Text style={{fontSize: 14, color: '#333'}}>
                Assista aqui o video e entenda mais!
              </Text>
            </TouchableOpacity>
            <BannerAd
              unitId={TestIds.BANNER}
              size={BannerAdSize.SMART_BANNER}
            />
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default Lesson;
