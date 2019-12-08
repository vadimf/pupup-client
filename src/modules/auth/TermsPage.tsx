import React from 'react';
import {SafeAreaContainer} from '../../styles/common';
import Header from '../../components/Header';
import {useSelector} from 'react-redux';
import {RootState} from '../../services/rootReducer';
import {WebView} from 'react-native-webview';
import {useTranslation} from 'react-i18next';

const TermsPage = () => {
    const uri = useSelector((state: RootState) => state.appConfig.config!.pages!.terms!);
    const {t} = useTranslation();

    return (
        <SafeAreaContainer>
            <Header text={t('terms')} />
            <WebView source={{uri}} />
        </SafeAreaContainer>
    );
};

export default TermsPage;
