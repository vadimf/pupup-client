import React from 'react';
import {NavigationTabProp} from 'react-navigation-tabs';
import {ScreenContainer} from '../../styles/common';
import Header from '../../components/Header';

interface IProps {
    navigation: NavigationTabProp<null>;
}

const HomeScreen: React.FC<IProps> = () => {
    return (
        <ScreenContainer>
            <Header text="Home" withPuppAppIcon />
        </ScreenContainer>
    );
};

export default HomeScreen;
