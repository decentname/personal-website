import React from 'react';

import Container from 'components/ui/Container';
import Icon from 'components/ui/Icon';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/himanshu0128" rel="noreferrer noopener" target="_blank">
          <Styled.Icon>
            <Icon icon={['fab', 'github']} />
          </Styled.Icon>
        </Styled.Link>
        <Styled.Link href="https://twitter.com/himanshu0128" rel="noreferrer noopener" target="_blank">
          <Styled.Icon>
            <Icon icon={['fab', 'twitter']} />
          </Styled.Icon>
        </Styled.Link>
        <Styled.Link href="https://linkedin.com/in/himanshu0128" rel="noreferrer noopener" target="_blank">
          <Styled.Icon>
            <Icon icon={['fab', 'linkedin']} />
          </Styled.Icon>
        </Styled.Link>
        <Styled.Link href="https://dev.to/himanshu0128" rel="noreferrer noopener" target="_blank">
          <Styled.Icon>
            <Icon icon={['fab', 'dev']} />
          </Styled.Icon>
        </Styled.Link>
        <Styled.Link
          href="https://www.codementor.io/@himanshu0128?refer=badge"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img src="https://www.codementor.io/m-badges/himanshu0128/contact-me.svg" alt="Codementor badge" />
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
