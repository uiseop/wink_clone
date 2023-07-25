import React from 'react';
import styled from 'styled-components';
import { CustomServiceCenter } from './Footer/CustomServiceCenter';
import { Introduction } from './Footer/Introduction';
import { CompanyInfo } from './Footer/CompanyInfo';

export function Footer() {
  return (
    <Wrapper>
      <div className="footer-container">
        <CustomServiceCenter
          title="윙크 학부모님 공감센터"
          imageSrc="https://us.wink.co.kr/pc/renewalV3/footer/cs_center_number.png"
          desc="평일 10 : 00 ~ 20 : 00"
        />
        <Introduction />
        <CompanyInfo />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
  align-items: center;

  & .footer-container {
    width: 1100px;
  }
`;
