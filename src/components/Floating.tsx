import React from 'react';

export function Floating() {
  return (
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
  );
}
