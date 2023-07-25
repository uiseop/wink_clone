import React from 'react';

export function Footer() {
  return (
    <div id="footer">
      <div className="footer-container">
        <div className="footer-cs-center">
          <p className="title">윙크 학부모님 공감센터</p>
          <img
            className="phone-number"
            src="https://us.wink.co.kr/pc/renewalV3/footer/cs_center_number.png"
            alt=""
          />
          <p className="time">평일 10 : 00 ~ 20 : 00</p>
        </div>
        <div className="footer-introduction">
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
        </div>
        <div className="footer-company-info">
          <div>
            <p>(주)단비교육</p>
            <p>
              대표이사 <span>/</span>권영금, 최형순&nbsp;&nbsp;&nbsp; 주소 <span>/</span>
              서울특별시 강남구 개포로 640 단비교육 &nbsp;&nbsp;&nbsp;이메일주소 <span>/</span>{' '}
              wink@danbiedu.co.kr&nbsp;&nbsp;&nbsp; 제휴, 마케팅 문의 이메일 <span>/</span>{' '}
              marketing@danbiedu.co.kr
            </p>
            <p>
              사업자 등록번호 <span>/</span>629-87-00476 &nbsp;&nbsp;&nbsp;통신판매업 신고번호{' '}
              <span>/</span>제 2017-서울강남-03262호 &nbsp;&nbsp;&nbsp;전자출판물 인증번호{' '}
              <span>/</span> I410-ECN-0199-2021-000-000017348
            </p>
          </div>
          <img
            className="footer-logo"
            src="https://us.wink.co.kr/pc/renewalV3/common/logo.png"
            alt=""
          />
        </div>
        <div className="footer-copyright">COPYRIGHT © 2021 DANBI EDU ALL RIGHT RESERVED.</div>
      </div>
    </div>
  );
}
