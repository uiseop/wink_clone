import React from 'react';
import styled from 'styled-components';
import { Util } from './Util';
import utilData from '@const/utils.json';

export function Utils() {
  const { data } = utilData;

  return (
    <Wrapper>
      <UtilLists className="util">
        {data.length
          ? data.map(({ link, imageSrc, desc }) => {
              return <Util key={desc} link={link} imageSrc={imageSrc} desc={desc} />;
            })
          : ''}
      </UtilLists>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1440px;
  height: 80px;
  display: flex;
  justify-content: end;
`;

const UtilLists = styled.ul`
  display: flex;
  position: relative;
  gap: 35px;
  align-items: center;
  margin-top: 27px;
  flex-wrap: wrap;
  right: 85px;

  & a {
    display: flex;
    align-items: center;
  }
`;
