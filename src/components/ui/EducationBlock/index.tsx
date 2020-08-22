import React from 'react';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
}

const EducationBlock: React.FC<Props> = ({ title, subtitle, startDate, endDate }) => (
  <Styled.EducationBlock>
    <Styled.Point />
    <Styled.Details>
      <Styled.Date>
        {startDate} - {endDate}
      </Styled.Date>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
    </Styled.Details>
  </Styled.EducationBlock>
);

export default EducationBlock;
