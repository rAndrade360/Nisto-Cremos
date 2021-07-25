import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import AboutScreen from '../screens/About';
import LessonScreen from '../screens/Lesson';
import {RootStackParamList} from '../@types/RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: 'Sobre',
            headerTintColor: '#FFF',
            headerStyle: {backgroundColor: '#4755C9'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Lesson"
          component={LessonScreen}
          options={{
            title: 'Assunto',
            headerTintColor: '#FFF',
            headerStyle: {backgroundColor: '#4755C9'},
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
