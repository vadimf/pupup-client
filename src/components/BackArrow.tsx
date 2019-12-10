import React from 'react';
import styled from 'styled-components/native';
import {images} from '../assets/images/index';

interface IProps {
  onPress: () => void;
}

const BackArrow: React.FC<IProps> = ({onPress}) => {
  return (
    <ArrowContainer onPress={onPress}>
      <ArrowImage source={images.backArrow} />
    </ArrowContainer>
  );
};

const ArrowImage = styled.Image`
  width: 22px;
  height: 22px;
  resize-mode: contain;
`;

const ArrowContainer = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
`;

export default BackArrow;
