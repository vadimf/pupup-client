import React from 'react';
import styled from 'styled-components/native';
import {Typography} from '../styles';
import BackArrow from './BackArrow';
import {useNavigation} from 'react-navigation-hooks';
import {images} from '../assets/images/index';
import {TouchableOpacity} from 'react-native';
import NavigationService from '../services/NavigationService';

interface IProps {
    text: string;
    withBackIcon?: boolean;
    withPuppAppIcon?: boolean;
    withSettingsIcon?: boolean;
    withPetIcon?: boolean;
}

const Header: React.FC<IProps> = ({text, withBackIcon, withPuppAppIcon, withSettingsIcon, withPetIcon}) => {
    const {goBack} = useNavigation();

    return (
        <Container>
            {withBackIcon && <BackArrow onPress={() => goBack()} />}
            {withPuppAppIcon && (
                <TopLeftLink>
                    <Icon source={images.logo} />
                </TopLeftLink>
            )}
            {withSettingsIcon && (
                <TopLeftLink onPress={() => NavigationService.navigate('SettingsScreen')}>
                    <Icon source={images.settingsIcon} />
                </TopLeftLink>
            )}
            {withPetIcon && (
                <TopRightLink>
                    <Icon source={images.petSettingsIcon} />
                </TopRightLink>
            )}
            <HeaderText>{text}</HeaderText>
        </Container>
    );
};

const Container = styled.View`
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
`;

const HeaderText = styled.Text`
    font-size: ${Typography.FONT_SIZE_16};
`;

const Icon = styled.Image`
    width: 26px;
    height: 26px;
    resize-mode: contain;
`;

const TopLeftLink = styled.TouchableOpacity`
    position: absolute;
    left: 15px;
`;

const TopRightLink = styled.TouchableOpacity`
    position: absolute;
    right: 15px;
`;

export default Header;
