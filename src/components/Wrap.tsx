import styled from 'styled-components';
import React from 'react';

type WrapProps = {
  children: React.ReactNode;
};
export function Wrap({ children }: WrapProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 1160px;
  display: inline-block;
`;
