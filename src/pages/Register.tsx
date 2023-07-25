import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Register() {
  return (
    <div id="wrap">
      <Header />
      <div>
        <div id="container">
          <div id="lnb-wrap"></div>
          <div id="contents" className="member-join-step-01">
            <div>
              <h4 className="line">회원가입</h4>
              <div className="message-box join">
                <p>
                  <strong>윙크에 회원가입하시면,</strong>우리 아이를 위한 다양한 교육정보, 혜택을
                  무료로 받아보실 수 있습니다.
                </p>
              </div>
            </div>
            <table className="form join-form">
              <tbody>
                <tr>
                  <th scope="row">
                    이름<em>필수</em>
                  </th>
                  <td>
                    <fieldset className="name">
                      <input type="text" title="이름 입력" placeholder="이름을 입력해 주세요." />
                    </fieldset>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="parent-select">
                    양육자 구분<em>필수</em>
                  </th>
                  <td>
                    <ul className="family-select">
                      <li>
                        <input type="radio" name="choice" id="choice1" value="on" />
                        <label htmlFor="choice1">엄마</label>
                      </li>
                      <li>
                        <input type="radio" name="choice" id="choice2" value="on" />
                        <label htmlFor="choice2">아빠</label>
                      </li>
                      <li>
                        <input type="radio" name="choice" id="choice3" value="on" />
                        <label htmlFor="choice3">할머니</label>
                      </li>
                      <li>
                        <input type="radio" name="choice" id="choice4" value="on" />
                        <label htmlFor="choice4">할아버지</label>
                      </li>
                      <li>
                        <input type="radio" name="choice" id="choice5" value="on" />
                        <label htmlFor="choice5">기타</label>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    아이디<em>필수</em>
                  </th>
                  <td>
                    <fieldset>
                      <div className="item">
                        <input
                          type="text"
                          title="아이디 입력"
                          placeholder="소문자+숫자 6자 이상 입력해주세요."
                        />
                        <a href="#" className="btn-type form">
                          중복확인
                        </a>
                      </div>
                    </fieldset>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    휴대폰 번호<em>필수</em>
                  </th>
                  <td>
                    <fieldset className="phone">
                      <div className="item">
                        <input
                          type="text"
                          title="휴대폰 번호 입력"
                          placeholder="휴대폰 번호를 입력해 주세요."
                        />
                        <a href="#" className="btn-type form" id="signup-check-duplicate-phone">
                          중복확인
                        </a>
                        <a
                          href="#"
                          className="btn-type2 confirm-num"
                          id="signup-send-certification"
                        >
                          인증번호 발송
                        </a>
                      </div>
                      <p className="validation-check">휴대폰번호를 입력해주세요.</p>
                      <div className="item">
                        <input
                          type="text"
                          className="confirm disabled"
                          placeholder="인증번호 입력"
                          value=""
                        />
                        <span className="text-valid">
                          유효시간<span>03:00</span>
                        </span>
                        <a
                          href="#"
                          className="btn-type2 confirm-num"
                          id="signup-confirm-certification"
                        >
                          인증번호 확인
                        </a>
                        <p className="notice">
                          회원가입 완료 후 휴대폰번호를 아이디처럼 사용 가능합니다.
                        </p>
                      </div>
                    </fieldset>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    비밀번호<em>필수</em>
                  </th>
                  <td>
                    <fieldset className="password">
                      <input
                        type="password"
                        title="비밀번호 입력"
                        placeholder="비밀번호를 입력해 주세요."
                      />
                    </fieldset>
                    <p className="notice">영문, 숫자, 특수문자 포함 8자리 이상 입력해주세요.</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    비밀번호 확인<em>필수</em>
                  </th>
                  <td>
                    <fieldset className="password">
                      <input
                        type="password"
                        title="비밀번호 재입력"
                        placeholder="비밀번호 확인을 입력해 주세요."
                      />
                    </fieldset>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="agree-wrap">
              <p>
                <span className="font-color-black font-weight-bold">
                  우리 아이를 위한 교재 3권이 포함된 윙크 무료학습 혜택을 받아보시겠습니까?
                </span>
              </p>
              <p>
                (지금 신청 시,{' '}
                <span className="font-color-black font-weight-bold">
                  이번 달 한정 특별 추가 혜택
                </span>
                까지 받아보실 수 있습니다.)
              </p>
              <div className="form-area free-benefit-agreement">
                <input
                  type="radio"
                  name="freeBenefitAgreement"
                  id="freeBenefitAgreement_freeBenefitAgree"
                  value="freeBenefitAgree"
                />
                <label htmlFor="freeBenefitAgreement_freeBenefitAgree">
                  무료 혜택을 받아보겠습니다.
                </label>
                <input
                  type="radio"
                  name="freeBenefitAgreement"
                  id="freeBenefitAgreement_freeBenefitNotAgree"
                  value="freeBenefitNotAgree"
                />
                <label htmlFor="freeBenefitAgreement_freeBenefitNotAgree">
                  무료 혜택을 받지 않겠습니다.
                </label>
              </div>
            </div>
            <div>
              <div className="agree-wrap terms">
                <div className="all-check">
                  <input type="checkbox" id="multi-check01" name="multi-check01" value="false" />
                  <label htmlFor="multi-check01">서비스 이용 약관에 모두 동의합니다.</label>
                  <small>
                    (선택 항목은 동의를 하지 않으셔도 서비스의 이용은 가능하나 가입 우대 혜택 안내
                    등을 받지 못할 수 있습니다.)
                  </small>
                </div>
                <ul className="agree-box">
                  <li className="">
                    <div className="accordion">
                      <div className="accordion-header">
                        <div>
                          <input
                            type="checkbox"
                            id="agree-check01"
                            name="agree-check01"
                            value="false"
                          />
                          <label htmlFor="agree-check01">윙크(wink) 이용약관 동의 (필수)</label>
                        </div>
                        <div className="accordion-icon"></div>
                      </div>
                      <div className="accordion-body">
                        <iframe src="https://s.wink.co.kr/danbi_common/html/agreement.html"></iframe>
                      </div>
                    </div>
                  </li>
                  <li className="">
                    <div className="accordion">
                      <div className="accordion-header">
                        <div>
                          <input
                            type="checkbox"
                            id="agree-check02"
                            name="agree-check02"
                            value="false"
                          />
                          <label htmlFor="agree-check02">개인정보수집 및 활용 동의 (필수)</label>
                        </div>
                        <div className="accordion-icon"></div>
                      </div>
                      <div className="accordion-body">
                        <iframe src="https://s.wink.co.kr/danbi_common/html/privacy_policy_202305.html"></iframe>
                      </div>
                    </div>
                  </li>
                  <li className="">
                    <div className="accordion">
                      <div className="accordion-header">
                        <div>
                          <input
                            type="checkbox"
                            id="agree-check03"
                            name="agree-check03"
                            value="false"
                          />
                          <label htmlFor="agree-check03">마케팅 목적 활용 동의 (선택)</label>
                        </div>
                        <div className="accordion-icon"></div>
                      </div>
                      <div className="accordion-body">
                        <iframe src="https://s.wink.co.kr/danbi_common/html/marketing_policy.html"></iframe>
                      </div>
                    </div>
                  </li>
                  <li className="">
                    <div className="accordion">
                      <div className="accordion-header">
                        <div>
                          <input
                            type="checkbox"
                            id="agree-check04"
                            name="agree-check04"
                            value="false"
                          />
                          <label htmlFor="agree-check04">광고성 정보 수신 동의 안내 (선택)</label>
                        </div>
                        <div className="accordion-icon"></div>
                      </div>
                      <div className="accordion-body">
                        <iframe src="https://s.wink.co.kr/danbi_common/html/advertising_policy.html"></iframe>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="agree-wrap">
                <p className="title">개인정보 유효기간 (필수)</p>
                <div className="agree-box">
                  <p>
                    개인정보를 파기 또는 분리 저장·관리하여야 하는 서비스 미이용 기간을 아래
                    기간으로 요청합니다.
                  </p>
                  <div className="form-area">
                    <input type="radio" name="validityDate" id="validityDate_year" value="year" />
                    <label htmlFor="validityDate_year">1년</label>
                    <input
                      type="radio"
                      name="validityDate"
                      id="validityDate_aliveUntil"
                      value="aliveUntil"
                    />
                    <label htmlFor="validityDate_aliveUntil">회원 탈퇴 시까지</label>
                  </div>
                  <p className="text-type-small">
                    ※ &quot;회원 탈퇴 시까지&quot;로 기간 설정시 유익한 교육 정보 등을 계속 제공
                    받기 위해 휴면 해지 절차 등의 번거로움을 줄일 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="btn-area">
              <a href="#" className="btn-type2" id="signup-cancel">
                취소
              </a>
              <a href="#" className="btn-type2 on" id="signup-signup">
                회원가입
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
