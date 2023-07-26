import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import React from 'react';
import styled from 'styled-components';

export function NotFound() {
  return (
    <>
      <Header />
      <Warn>NotFound</Warn>
      <Footer />
    </>
  );
}

const Warn = styled.h1`
  font-size: 100px;
  font-weight: bold;
  color: black;
  text-align: center;
`;
