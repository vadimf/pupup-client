import React from 'react';
import {Container, SafeAreaContainer} from '../../styles/common';
import Header from '../../components/Header';

const ProfileScreen = () => {
    return (
        <SafeAreaContainer>
            <Header text="My Profile" withPetIcon withSettingsIcon />
        </SafeAreaContainer>
    );
};

export default ProfileScreen;
