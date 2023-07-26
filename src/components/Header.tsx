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
  display: inline-block;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
