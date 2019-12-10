import React from 'react';
import styled from 'styled-components/native';
import {AppText, AppViewProps} from '../styles/common';
import {Colors} from '../styles';
import {TextInputProps} from 'react-native';
import {images} from '../assets/images/index';

interface IProps extends TextInputProps {
    label: string;
    placeholder: string;
    error?: boolean;
    margin?: string;
}

const Input: React.FC<IProps> = ({label, placeholder, error, margin, ...props}) => {
    return (
        <Container containerMargin={margin}>
            <AppText margin="5px 0">{label}</AppText>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={error ? Colors.PURPLE : Colors.PLACEHOLDER_COLOR}
                error={error}
                {...props}
            />
            {error && <ErrorIcon source={images.purpleInputError} />}
        </Container>
    );
};

// named containerMargin because View has 'margin' prop https://github.com/facebook/react-native/issues/12469
const Container = styled.View`
    width: 100%;

    ${(props: AppViewProps & {containerMargin?: string}) =>
        props.containerMargin &&
        `
    margin: ${props.containerMargin};
    `}
`;

const TextInput = styled.TextInput`
    border: 2px ${Colors.LIGHT_GRAY};
    border-radius: 25px;
    height: 45px;
    background-color: ${Colors.WHITE};
    text-align: center;

    ${(props: TextInputProps & {error?: boolean}) =>
        props.error &&
        `
    border-color: ${Colors.PURPLE};
    color: ${Colors.PURPLE}
    `}
`;

const ErrorIcon = styled.Image`
    position: absolute;
    right: 15px;
    top: 42px;
    width: 16px;
    height: 16px;
    resize-mode: contain;
`;

export default Input;
