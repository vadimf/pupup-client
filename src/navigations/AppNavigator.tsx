import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../modules/home/HomeScreen';
import {images} from '../assets/images';
import React from 'react';
import styled from 'styled-components/native';
import HomeTabStack from '../modules/home/HomeTabStack';
import ChatsTabStack from '../modules/chats/ChatsTabStack';
import ProfileTabStack from '../modules/profile/ProfileTabStack';

const TabBarIcon = styled.Image`
    width: 30px;
    height: 30px;
    resize-mode: contain;
`;

const RouteConfigs = {
    HomeScreen: {
        screen: HomeTabStack,
        navigationOptions: {
            tabBarIcon: ({focused}: {focused: boolean}) => (
                <TabBarIcon source={focused ? images.homeIconActive : images.homeIconActive} />
            )
        }
    },
    ChatsScreen: {
        screen: ChatsTabStack,
        navigationOptions: {
            tabBarIcon: ({focused}: {focused: boolean}) => (
                <TabBarIcon source={focused ? images.chatsIconInactive : images.chatsIconInactive} />
            )
        }
    },
    ProfileScreen: {
        screen: ProfileTabStack,
        navigationOptions: {
            tabBarIcon: ({focused}: {focused: boolean}) => (
                <TabBarIcon source={focused ? images.profileIconInactive : images.profileIconInactive} />
            )
        }
    }
};

const TabNavigatorConfig = {
    initialRouteName: 'HomeScreen',
    header: null,
    headerMode: 'none',
    tabBarOptions: {
        showLabel: false
    }
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
