import React from 'react';
import styled from 'styled-components';
import { Util } from './Util';

export function Utils() {
  return (
    <Wrapper>
      <UtilLists className="util">
        <Util
          link="#"
          imageSrc="https://us.wink.co.kr/pc/renewalV3/common/login.png"
          desc="로그인"
        />
        <Util
          link="#"
          imageSrc="https://us.wink.co.kr/pc/renewalV3/common/signup.png"
          desc="회원가입"
        />
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
