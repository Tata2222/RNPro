import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS, STACK} from '../../utils/constants/screen';
import {MapScreen} from '../../screens/map';
import {MenuScreen} from '../../screens/menu';
import {FeedScreen} from '../../screens/feed';
import {HabbitsScreen} from '../../screens/habbits/Habbits';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const MenuStack = createStackNavigator();

const Menu = () => {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name={SCREENS.MENU} component={MenuScreen} />
      <MenuStack.Screen name={SCREENS.HABBITS} component={HabbitsScreen} />
    </MenuStack.Navigator>
  );
};

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size = 32}) => {
          let iconName;

          if (route.name === SCREENS.FEED) {
            iconName = focused ? 'flame' : 'flame';
          }
          if (route.name === STACK.MENU) {
            iconName = focused ? 'people' : 'people';
          }
          if (route.name === SCREENS.MAP) {
            iconName = focused ? 'person' : 'person';
          }

          return <Ionicons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen
        name={SCREENS.FEED}
        component={FeedScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name={STACK.MENU} component={Menu} />
      <Tab.Screen
        name={SCREENS.MAP}
        component={MapScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  )
};
