import React, {useEffect, useState} from 'react';
import {AppText, Container, SafeAreaContainer} from '../../styles/common';
import Header from '../../components/Header';
import styled from 'styled-components/native';
import {Colors, Typography} from '../../styles';
import {useTranslation} from 'react-i18next';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {sendForgotPasswordEmail, resetForgotPasswordScreen} from './redux/userSessionSlice';
import {RootState} from '../../services/rootReducer';
import {images} from '../../assets/images';
import {NavigationStackProp} from 'react-navigation-stack';
import {Formik} from 'formik';
import {AppDispatch} from '../../services/store';
import * as Yup from 'yup';
import {useIsFocused} from 'react-navigation-hooks';

interface IProps {
    navigation: NavigationStackProp<null>;
}

const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required')
});

const ForgotPasswordScreen: React.FC<IProps> = ({navigation: {navigate}}) => {
    const {t} = useTranslation();
    const dispatch: AppDispatch = useDispatch();
    const isSendingForgotPasswordEmail = useSelector(
        (state: RootState) => state.userSession.isSendingForgotPasswordEmail
    );
    const forgotPasswordEmailSentTo = useSelector((state: RootState) => state.userSession.forgotPasswordEmailSentTo);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (!isFocused) {
            dispatch(resetForgotPasswordScreen());
        }
    }, [isFocused]);

    return (
        <SafeAreaContainer>
            <Header text={t('signIn')} />
            <Content>
                <HeaderText>{t('forgotPassword')}?</HeaderText>
                {forgotPasswordEmailSentTo ? (
                    <>
                        <AppText textAlignCenter width={250} margin="20px 0 0 0">
                            {t('passwordSent')} {forgotPasswordEmailSentTo}
                        </AppText>
                        <AppText textAlignCenter width={250} margin="20px 0">
                            {t('waitForEmail')}
                        </AppText>
                        <ForgotPasswordImage source={images.forgotPassword} />
                        <Button
                            text={t('LOGIN')}
                            backgroundColor={Colors.CYAN}
                            onPress={() => navigate('SignInScreen')}
                            isLoading={isSendingForgotPasswordEmail}
                            margin="30px 0"
                        />
                    </>
                ) : (
                    <>
                        <AppText margin="20px 0 0 0" textAlignCenter width={250}>
                            {t('restorePassword')}
                        </AppText>
                        <Formik
                            initialValues={{email: ''}}
                            validationSchema={ForgotPasswordSchema}
                            onSubmit={({email}) => dispatch(sendForgotPasswordEmail(email))}>
                            {({values: {email}, handleChange, handleSubmit, errors, touched}) => (
                                <>
                                    <Input
                                        label={t('email')}
                                        placeholder={t('enterEmail')}
                                        value={email}
                                        onChangeText={handleChange('email')}
                                        margin="20px 0 30px 0"
                                        error={!!(errors.email && touched.email)}
                                    />
                                    <Button
                                        text={t('confirm')}
                                        backgroundColor={Colors.CYAN}
                                        onPress={handleSubmit}
                                        isLoading={isSendingForgotPasswordEmail}
                                    />
                                </>
                            )}
                        </Formik>
                    </>
                )}
            </Content>
        </SafeAreaContainer>
    );
};

const HeaderText = styled.Text`
    font-size: ${Typography.FONT_SIZE_24};
    margin-top: 30px;
`;

const Content = styled.View`
    flex: 1;
    width: 100%;
    padding: 0 30px;
    align-items: center;
`;

const ForgotPasswordImage = styled.Image`
    width: 280px;
    height: 280px;
    resize-mode: contain;
`;

export default ForgotPasswordScreen;
