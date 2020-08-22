import React from 'react';

import Icon, { IconProps } from 'components/ui/Icon';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
  icon: IconProps;
}

const DisplayBlock: React.FC<Props> = ({ icon, title, center }) => (
  <Styled.DisplayBlock center={center}>
    <Styled.Icon>
      <Icon icon={icon} />
    </Styled.Icon>
    <Styled.Wrapper center={center}>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Wrapper>
  </Styled.DisplayBlock>
);

export default DisplayBlock;
