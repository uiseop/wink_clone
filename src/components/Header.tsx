import React from 'react';
import { Utils } from './Header/Utils';
import { Navigation } from './Header/Navigation';
import styled from 'styled-components';

export function Header() {
  return (
    <Wrapper>
      <Utils />
      <Navigation />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 1200px;
`;
