import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {images} from '../../assets/images';
import {NavigationStackProp} from 'react-navigation-stack';
import {facebookLogin, tryRestoreSession} from './redux/userSessionSlice';
import {Colors} from '../../styles';
import {FONT_BOLD, FONT_SIZE_20} from '../../styles/typography';
import Button from '../../components/Button';
import {HeaderText} from '../../styles/common';
import {useTranslation} from 'react-i18next';

interface IProps {
    navigation: NavigationStackProp<null>;
}

const OnboardingScreen: React.FC<IProps> = ({navigation: {navigate}}) => {
    const dispatch = useDispatch();
    const {t} = useTranslation();

    useEffect(() => {
        dispatch(tryRestoreSession());
    }, []);

    return (
        <LoginBackground source={images.loginBackground}>
            <SafeContainer>
                <UpperSection>
                    <HeaderText>{t('welcomeText')}</HeaderText>
                    <Logo source={images.logo} />
                </UpperSection>
                <LowerSection>
                    <AppDescription>{t('letYourDog')}</AppDescription>
                    <Button
                        onPress={() => dispatch(facebookLogin())}
                        text={t('facebookLogin')}
                        backgroundColor={Colors.FACEBOOK_BLUE}
                        width={280}
                        margin="30px 0 0 0"
                        icon={<FacebookIcon source={images.facebook} />}
                    />
                    <Button
                        onPress={() => navigate('SignUpScreen')}
                        text={t('emailSignUp')}
                        width={280}
                        backgroundColor={Colors.CYAN}
                        margin="20px 0 0 0"
                    />
                </LowerSection>
            </SafeContainer>
        </LoginBackground>
    );
};

const LoginBackground = styled.ImageBackground`
    flex: 1;
`;

const SafeContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-between;
`;

const AppDescription = styled.Text`
    color: ${Colors.PURPLE};
    font-size: ${FONT_SIZE_20};
    ${FONT_BOLD};
    width: 150px;
    text-align: center;
`;

const Logo = styled.Image`
    height: 100px;
    resize-mode: contain;
    margin-top: 10px;
`;

const LowerSection = styled.View`
    align-items: center;
    padding-bottom: 20px;
`;

const UpperSection = styled.View`
    align-items: center;
    padding-top: 20px;
`;

const FacebookIcon = styled.Image`
    height: 36px;
    width: 36px;
`;

export default OnboardingScreen;
