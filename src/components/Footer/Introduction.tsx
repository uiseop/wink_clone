import React from 'react';
import styled from 'styled-components';

export function Introduction() {
  return (
    <Wrapper>
      <div>
        <a href="#" id="footer-introduce-company">
          회사소개
        </a>
        <a
          href="https://s.wink.co.kr/danbi_common/html/agreement.html"
          id="footer-agreement"
          target="_blank"
          rel="noreferrer"
        >
          이용약관
        </a>
        <a
          href="https://s.wink.co.kr/danbi_common/html/privacy_policy_202305.html"
          id="footer-privacy-policy"
          target="_blank"
          rel="noreferrer"
        >
          개인정보처리방침
        </a>
      </div>
      <img
        className="footer-teacher-recruit"
        src="https://us.wink.co.kr/pc/renewalV3/footer/teacher_recruit_button.png"
        id="footer-recruit-teacher"
        alt=""
      />
      <a className="footer-promotion-teacher-recruit">
        <span className="recruit-label">홍보 선생님 모집</span>
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 20px;
  padding-top: 35px;
  font-weight: bold;
  color: black;
  position: relative;

  & div a {
    padding: 0 40px;
    position: relative;

    &:first-child {
      padding-left: 0;
    }

    &:not(:last-child)::after {
      position: absolute;
      content: '';
      border-right: 2px solid black;
      height: 80%;
      right: 0;
      transform: translateY(6px);
    }
  }

  & .footer-teacher-recruit {
    position: absolute;
    top: 30px;
    right: 445px;
    cursor: pointer;
  }

  & .footer-promotion-teacher-recruit {
    position: absolute;
    top: 30px;
    right: 270px;
    cursor: pointer;
    background-color: #00a3e0;
    color: #fff;
    padding: 4px 15px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-size: 18px;
  }
`;
