import React from 'react';
import {AppText, SafeAreaContainer} from '../../styles/common';
import Header from '../../components/Header';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';
import {Colors} from '../../styles';
import {ImageRequireSource} from 'react-native';
import {images} from '../../assets/images/index';
import {AppDispatch} from '../../services/store';
import {useDispatch} from 'react-redux';
import {logout} from '../auth/redux/userSessionSlice';

interface ItemProps {
    text: string;
    onPress: () => void;
    icon: ImageRequireSource;
}

const SettingsItem = ({text, onPress, icon}: ItemProps) => {
    return (
        <ItemContainer onPress={onPress}>
            <ItemIcon source={icon} />
            <AppText>{text}</AppText>
        </ItemContainer>
    );
};

const SettingsScreen = () => {
    const {t} = useTranslation();
    const dispatch: AppDispatch = useDispatch();

    return (
        <SafeAreaContainer>
            <Header text={t('settings')} withBackIcon />
            <SettingsItem text={t('about')} onPress={() => null} icon={images.aboutIcon} />
            <SettingsItem text={t('helpCenter')} onPress={() => null} icon={images.helpIcon} />
            <SettingsItem text={t('termsOfService')} onPress={() => null} icon={images.termsIcon} />
            <SettingsItem text={t('privacy')} onPress={() => null} icon={images.privacyIcon} />
            <SettingsItem text={t('account')} onPress={() => null} icon={images.accountIcon} />
            <SettingsItem text={t('logout')} onPress={() => dispatch(logout())} icon={images.logoutIcon} />
        </SafeAreaContainer>
    );
};

const ItemContainer = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: ${Colors.LIGHT_GREY};
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 3px;
`;

const ItemIcon = styled.Image`
    width: 24px;
    height: 24px;
    resize-mode: contain;
    margin-right: 20px;
`;

export default SettingsScreen;
