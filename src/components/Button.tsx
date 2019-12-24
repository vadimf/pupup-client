import React, {ReactNode} from 'react';
import styled from 'styled-components/native';
import {FONT_SIZE_16} from '../styles/typography';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import {Colors} from '../styles';

interface IProps extends TouchableOpacityProps {
    text: string;
    width?: number;
    backgroundColor: string;
    height?: number;
    margin?: string;
    isLoading?: boolean;
    icon?: ReactNode;
}

const Button: React.FC<IProps> = ({text, width, backgroundColor, height, margin, isLoading, icon, ...props}) => {
    return (
        <ButtonWrapper
            width={width}
            backgroundColor={backgroundColor}
            height={height}
            margin={margin}
            disabled={isLoading || props.disabled}
            {...props}>
            {isLoading ? <ActivityIndicator color={Colors.WHITE} /> : <ButtonText>{text}</ButtonText>}
            <IconContainer>{icon}</IconContainer>
        </ButtonWrapper>
    );
};

interface WrapperProps extends TouchableOpacityProps {
    width?: number;
    backgroundColor: string;
    height?: number;
    margin?: string;
}

const ButtonWrapper = styled.TouchableOpacity`
    width: ${(props: WrapperProps) => props.width || '100%'};
    height: ${(props: WrapperProps) => props.height || '45px'};
    background-color: ${(props: WrapperProps) => props.backgroundColor};
    border-radius: 25px;
    border-color: black;
    align-items: center;
    justify-content: center;
    margin: ${(props: WrapperProps) => props.margin || 0};
    opacity: ${(props: WrapperProps) => props.disabled ? 0.7 : 1};
`;

const IconContainer = styled.View`
    position: absolute;
    right: 5px;
`;

const ButtonText = styled.Text`
    font-size: ${FONT_SIZE_16};
    color: white;
`;

export default Button;
