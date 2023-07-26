import React from 'react';
import styled from 'styled-components';

export function Navigation() {
  return (
    <Nav>
      <ul>
        <li className="main-logo">
          <a href="#">
            <img
              src="https://us.wink.co.kr/pc/renewalV3/common/logo.png"
              id="main-logo"
              alt="logo"
            />
          </a>
        </li>
        <li>
          <a href="#">홈</a>
        </li>
        <li className="">
          <a href="#">과목별 학습</a>
          <ul>
            <div>
              <li>
                <a href="#">수준별 한글 · 국어</a>
              </li>
              <li>
                <a href="#">수준별 수학 · 연산</a>
              </li>
              <li>
                <a href="#">수준별 영어&amp;파닉스</a>
              </li>
              <li>
                <a href="#">초등 교과 학습(학교 공부 대비)</a>
              </li>
              <li>
                <a href="#">선택활동(배경지식)</a>
              </li>
            </div>
          </ul>
        </li>
        <li className="">
          <a href="#">학습 신청</a>
          <ul>
            <div>
              <li>
                <a href="#">유료 학습 신청</a>
              </li>
              <li>
                <a href="#">무료 체험학습 신청</a>
              </li>
            </div>
          </ul>
        </li>
        <li className="">
          <a href="#">학습 자료실</a>
        </li>
        <li className="">
          <a href="#">고객센터</a>
          <ul>
            <div>
              <li>
                <a href="#">공지사항</a>
              </li>
              <li>
                <a href="#">이벤트</a>
              </li>
              <li>
                <a href="#">자주하는 질문</a>
              </li>
              <li>
                <a href="#">신고 · 건의 · 문의</a>
              </li>
              <li>
                <a href="#">학부모 앱 다운로드</a>
              </li>
              <li>
                <a href="#">윙크 선생님 모집</a>
              </li>
              <li>
                <a href="#">홍보 선생님 모집</a>
              </li>
            </div>
          </ul>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  min-width: 1920px;
  height: 75px;
  background-color: white;
  position: relative;
  z-index: 100;
  border-bottom: 1px solid #d7d7d7;
  display: flex;
  justify-content: center;

  & > ul {
    display: flex;
    width: 1440px;
    justify-content: center;
    align-items: center;

    & li {
      width: 240px;
      position: relative;
      text-align: center;

      & > ul {
        position: absolute;
        left: 0;
        top: 100%;
        max-height: 0;
        overflow: hidden;
        width: 100%;
        margin: 0;
        transition: max-height 0.5s;
      }

      //&.on > ul {
      //  max-height: 400px;
      //}
    }
  }
`;
