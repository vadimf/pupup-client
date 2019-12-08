import React from 'react';
import styled from 'styled-components/native';
import {Typography} from '../styles';
import BackArrow from './BackArrow';
import {useNavigation} from 'react-navigation-hooks';

interface IProps {
  text: string;
}

const Header: React.FC<IProps> = ({text}) => {
  const {goBack} = useNavigation();

  return (
    <Container>
      <BackArrow onPress={() => goBack()} />
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

export default Header;
