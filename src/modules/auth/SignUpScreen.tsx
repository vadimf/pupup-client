import React from 'react';
import styled from 'styled-components/native';
import {images} from '../../assets/images/index';
import {AppText, SafeAreaContainer} from '../../styles/common';
import Header from '../../components/Header';
import {Colors, Typography} from '../../styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import {signIn, signUp} from './redux/userSessionSlice';
import {AppDispatch} from '../../services/store';
import {RootState} from '../../services/rootReducer';
import * as Yup from 'yup';
import {NavigationStackProp} from 'react-navigation-stack';
import {useTranslation} from 'react-i18next';
import {WINDOW_WIDTH} from '../../styles/mixins';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface IProps {
    navigation: NavigationStackProp<null>;
}

interface SignUpForm {
    email: string;
    password: string;
}

const SignUpScreen: React.FC<IProps> = ({
    navigation: {
        navigate,
        state: {routeName}
    }
}) => {
    const dispatch: AppDispatch = useDispatch();
    const isSigningUp = useSelector((state: RootState) => state.userSession.isSigningUp);
    // const validations = useSelector((state: RootState) => state.appConfig.config!.validations);
    const {t} = useTranslation();

    const SignUpSchema = Yup.object().shape({
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .min(8)
            .max(20)
            .required()
    });

    const isSignUpScreen = routeName === 'SignUpScreen';
    const initialValues: SignUpForm = {email: '', password: ''};

    return (
        <SafeAreaContainer>
            <Header text={isSignUpScreen ? t('signUp') : t('signIn')} withBackIcon />
            <KeyboardAwareScrollView>
                <SignUpBackground source={images.signUpBackground} />
                <Content>
                    <HeaderText>{isSignUpScreen ? t('register') : t('logIn')}</HeaderText>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={SignUpSchema}
                        onSubmit={({email, password}) =>
                            dispatch(isSignUpScreen ? signUp(email, password) : signIn(email, password))
                        }>
                        {({values, handleChange, handleSubmit, errors, touched, submitCount}) => (
                            <>
                                {Object.keys(errors).length > 0 && submitCount > 0 && (
                                    <ErrorContainer>
                                        <AppText color={Colors.WHITE}>{t('emailOrPasswordIncorrect')}</AppText>
                                        <ErrorIcon source={images.whiteInputError} />
                                    </ErrorContainer>
                                )}
                                <Input
                                    label={t('email')}
                                    placeholder={t('enterEmail')}
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    error={!!(errors.email && touched.email)}
                                    margin="0 0 20px 0"
                                />
                                <Input
                                    label={t('password')}
                                    placeholder={t('enterPassword')}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    error={!!(errors.password && touched.password)}
                                    margin="0 0 10px 0"
                                    secureTextEntry
                                />
                                <SignInLink
                                    onPress={() => navigate(isSignUpScreen ? 'SignInScreen' : 'ForgotPasswordScreen')}>
                                    <AppText color={Colors.LINK_BLUE}>
                                        {isSignUpScreen ? t('alreadyRegistered') : t('forgotPassword')}
                                    </AppText>
                                </SignInLink>
                                <Button
                                    text={isSignUpScreen ? t('SIGN UP') : t('SIGN IN')}
                                    backgroundColor={Colors.PURPLE}
                                    onPress={handleSubmit}
                                    isLoading={isSigningUp}
                                />
                            </>
                        )}
                    </Formik>
                    <AppText margin="30px 0 0 0">{`By signing ${
                        isSignUpScreen ? 'up' : 'in'
                    }, you agree to our`}</AppText>
                    <LinksContainer>
                        <Link onPress={() => navigate('TermsPage')}>
                            <AppText bold>{t('terms')}</AppText>
                        </Link>
                        <AppText> & </AppText>
                        <Link onPress={() => navigate('PrivacyPolicyPage')}>
                            <AppText bold>{t('privacyPolicy')}</AppText>
                        </Link>
                    </LinksContainer>
                </Content>
            </KeyboardAwareScrollView>
        </SafeAreaContainer>
    );
};

const SignUpBackground = styled.ImageBackground`
    height: 300px;
    width: 100%;
    position: absolute;
`;

const Content = styled.View`
    flex: 1;
    width: 100%;
    padding: 0 30px;
    align-items: center;
`;

const HeaderText = styled.Text`
    font-size: ${Typography.FONT_SIZE_24};
    margin-top: 30px;
`;

const LinksContainer = styled.View`
    flex-direction: row;
    margin: 5px 0;
`;

const Link = styled.TouchableOpacity``;

const SignInLink = styled.TouchableOpacity`
    margin-bottom: 60px;
    align-self: flex-start;
`;

const ErrorContainer = styled.View`
    background-color: ${Colors.CYAN};
    height: 50px;
    width: ${WINDOW_WIDTH};
    align-items: center;
    justify-content: center;
    margin: 10px 0;
`;

const ErrorIcon = styled.Image`
    position: absolute;
    width: 16px;
    height: 16px;
    resize-mode: contain;
    left: 20px;
`;

export default SignUpScreen;
