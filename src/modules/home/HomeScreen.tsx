import React from 'react';
import {NavigationTabProp} from 'react-navigation-tabs';
import {Container} from '../../styles/common';

interface IProps {
  navigation: NavigationTabProp<null>;
}

const HomeScreen: React.FC<IProps> = () => {
  return <Container />;
};

export default HomeScreen;
