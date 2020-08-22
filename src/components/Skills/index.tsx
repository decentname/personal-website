import React from 'react';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import * as Styled from './styles';

const Skills: React.FC = () => (
    <Container section>
      <TitleSection title={'Skills'} subtitle={'Technologies & Tools'} center />
        <Styled.Skills>
          <Styled.Skill>
            Javascript
          </Styled.Skill>
          <Styled.Skill>
            Typescript
          </Styled.Skill>
          <Styled.Skill>
            ReactJS
          </Styled.Skill>
          <Styled.Skill>
            React Native
          </Styled.Skill>
          <Styled.Skill>
            Elixir
          </Styled.Skill>
          <Styled.Skill>
            Gatsby
          </Styled.Skill>
          <Styled.Skill>
            Postgresql
          </Styled.Skill>
          <Styled.Skill>
            Mysql
          </Styled.Skill>
          <Styled.Skill>
            Github
          </Styled.Skill>
        </Styled.Skills>
    </Container>
)

export default Skills;
