import React from 'react';
import styled from 'styled-components';

export function CompanyInfo() {
  return (
    <>
      <Wrapper>
        <div>
          <p>(주)단비교육</p>
          <p>
            대표이사 <span>/</span> 권영금, 최형순&nbsp;&nbsp;&nbsp;주소 <span>/</span>
            &nbsp; 서울특별시 강남구 개포로 640 단비교육 &nbsp;&nbsp;&nbsp;이메일주소 <span>
              /
            </span>{' '}
            wink@danbiedu.co.kr&nbsp;&nbsp;&nbsp; 제휴, 마케팅 문의 이메일 <span>/</span>{' '}
            marketing@danbiedu.co.kr
          </p>
          <p>
            사업자 등록번호 <span>/</span> 629-87-00476 &nbsp;&nbsp;&nbsp;통신판매업 신고번호{' '}
            <span>/</span> 제 2017-서울강남-03262호 &nbsp;&nbsp;&nbsp;전자출판물 인증번호{' '}
            <span>/</span> I410-ECN-0199-2021-000-000017348
          </p>
        </div>
        <img
          className="footer-logo"
          src="https://us.wink.co.kr/pc/renewalV3/common/logo.png"
          alt=""
        />
      </Wrapper>
      <div className="footer-copyright">COPYRIGHT © 2021 DANBI EDU ALL RIGHT RESERVED.</div>
    </>
  );
}

const Wrapper = styled.div`
  font-size: 12px;
  padding: 20px 0;
  position: relative;

  & span {
    color: #ef3a7a;
  }

  & img {
    position: absolute;
    right: 0;
    top: 8px;
    width: 100px;
  }

  & .footer-copyright {
    padding-top: 5px;
    font-size: 15px;
  }
`;
