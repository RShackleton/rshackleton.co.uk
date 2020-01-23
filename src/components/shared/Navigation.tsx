import React, { FC } from 'react';

import { Container, Link, LinkItem, Links } from './Navigation.styles';

const Navigation: FC<{}> = () => (
  <Container>
    <Links>
      <LinkItem>
        <Link to="/articles">Articles</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/about">About</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/contact">Contact</Link>
      </LinkItem>
    </Links>
  </Container>
);

export default Navigation;
