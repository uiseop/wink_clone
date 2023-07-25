import React from 'react';

export function Navigation() {
  return (
    <nav id="gnb">
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
        <li className="current">
          <a href="#">홈</a>
        </li>
        <li className="">
          <a href="#">과목별 학습</a>
          <ul>
            <div>
              <li>
                <a className="" href="#">
                  수준별 한글 · 국어
                </a>
              </li>
              <li>
                <a className="" href="#">
                  수준별 수학 · 연산
                </a>
              </li>
              <li>
                <a className="" href="#">
                  수준별 영어&amp;파닉스
                </a>
              </li>
              <li>
                <a className="" href="#">
                  초등 교과 학습(학교 공부 대비)
                </a>
              </li>
              <li>
                <a className="" href="#">
                  선택활동(배경지식)
                </a>
              </li>
            </div>
          </ul>
        </li>
        <li className="">
          <a href="#">학습 신청</a>
          <ul>
            <div>
              <li>
                <a className="" href="#">
                  유료 학습 신청
                </a>
              </li>
              <li>
                <a className="" href="#">
                  무료 체험학습 신청
                </a>
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
                <a className="" href="#">
                  공지사항
                </a>
              </li>
              <li>
                <a className="" href="#">
                  이벤트
                </a>
              </li>
              <li>
                <a className="" href="#">
                  자주하는 질문
                </a>
              </li>
              <li>
                <a className="" href="#">
                  신고 · 건의 · 문의
                </a>
              </li>
              <li>
                <a className="" href="#">
                  학부모 앱 다운로드
                </a>
              </li>
              <li>
                <a className="" href="#">
                  윙크 선생님 모집
                </a>
              </li>
              <li>
                <a className="" href="#">
                  홍보 선생님 모집
                </a>
              </li>
            </div>
          </ul>
        </li>
      </ul>
      <div className="lay-floating-wrapper">
        <div className="lay-floating">
          <div className="lay-close-button" id="floating-close">
            <img
              src="https://s.wink.co.kr/pc/renewalV3/floating_right_banner/open_221019.png"
              alt=""
            />
          </div>
          <div className="lay-benefit-image">
            <img
              src="https://s.wink.co.kr/pc/renewalV3/floating_right_banner/benefit_230705.png"
              alt=""
            />
          </div>
          <div className="lay-free-study" id="floating-free-apply">
            <img
              src="https://s.wink.co.kr/pc/renewalV3/floating_right_banner/free_study_blink_230419_v2.png"
              alt=""
            />
          </div>
          <div className="lay-additional-info">
            <hr className="lay-floating-divider" />
            <div className="lay-reference-room">
              <img
                src="https://s.wink.co.kr/pc/renewalV3/floating_right_banner/reference_room_221019.png"
                alt=""
              />
            </div>
            <div className="lay-reference-room-button">
              <img
                src="https://s.wink.co.kr/pc/renewalV3/floating_right_banner/reference_room_button_b.png"
                alt=""
              />
            </div>
            <hr className="lay-floating-divider" />
            <div className="lay-download-parent-app" id="floating-download-parent-app">
              <img
                src="https://s.wink.co.kr/pc/renewalV3/floating_right_banner/app_download_221110.png"
                alt=""
              />
            </div>
            <div className="lay-recruit-teacher" id="floating-download-recruit-teacher">
              <img
                src="https://s.wink.co.kr/pc/renewalV3/floating_right_banner/recruit_221110.png"
                alt=""
              />
            </div>
            <div className="lay-recruit-promotion-teacher">
              <img
                src="https://s.wink.co.kr/pc/renewalV3/floating_right_banner/recruit_promotion_230419_v2.png"
                alt=""
              />
            </div>
            <div className="lay-happy-talk">
              <img
                src="https://s.wink.co.kr/pc/renewalV3/floating_right_banner/chatting_221110.png"
                alt=""
                id="floating-happy-talk"
              />
            </div>
            <hr className="lay-floating-divider" />
            <div className="lay-cs-center">
              <img
                src="https://s.wink.co.kr/pc/renewalV3/floating_right_banner/cs_center_221019.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
