import React from 'react';
import styled from 'styled-components';

export function Utils() {
  return (
    <Wrapper>
      <UtilLists className="util">
        <li>
          <a href="#">
            <UtilImage src="https://us.wink.co.kr/pc/renewalV3/common/login.png" alt="" />
            <span>로그인</span>
          </a>
        </li>
        <li>
          <a href="#">
            <UtilImage src="https://us.wink.co.kr/pc/renewalV3/common/signup.png" alt="" />
            <span>회원가입</span>
          </a>
        </li>
      </UtilLists>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1440px;
  display: flex;
  justify-content: end;
`;

const UtilLists = styled.ul`
  display: flex;
  gap: 35px;
  align-items: center;
  margin-top: 27px;
  flex-wrap: wrap;

  & a {
    display: flex;
    align-items: center;
  }
`;

const UtilImage = styled.img`
  width: 20px;
  height: 22px;

  & + span {
    font-size: 15px;
    padding-left: 8px;
  }
`;
