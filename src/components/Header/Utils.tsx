import React from 'react';

export function Utils() {
  return (
    <div className="util-wrapper">
      <div className="util-container">
        <ul className="util">
          <li>
            <a href="#">
              <img src="https://us.wink.co.kr/pc/renewalV3/common/login.png" alt="" />
              <span>로그인</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://us.wink.co.kr/pc/renewalV3/common/signup.png" alt="" />
              <span>회원가입</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
