import React from 'react';
import styled from 'styled-components/native';
import {Typography} from '../styles';
import BackArrow from './BackArrow';
import {useNavigation} from 'react-navigation-hooks';
import {images} from '../assets/images';

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
            {withPuppAppIcon && <TopLeftIcon source={images.logo} />}
            {withSettingsIcon && <TopLeftIcon source={images.settingsIcon} />}
            {withPetIcon && <TopRightIcon source={images.petSettingsIcon} />}
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

const TopLeftIcon = styled.Image`
    width: 26px;
    height: 26px;
    resize-mode: contain;
    position: absolute;
    left: 15px;
`;

const TopRightIcon = styled.Image`
    width: 40px;
    height: 40px;
    resize-mode: contain;
    position: absolute;
    right: 15px;
`;

export default Header;
