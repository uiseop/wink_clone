import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function ReferenceRoom() {
  return (
    <div id="wrap">
      <Header />
      <div>
        <div id="container">
          <div id="lnb-wrap"></div>
          <div className="reference-room-container">
            <div className="reference-room-content">
              <h4>
                <span>학습자료실</span>
              </h4>
              <div>
                <div className="description">
                  <p>
                    윙크 학습자료실은 가정에서 인쇄하여 활용하면 유용할 각종 자료들을 제공하는
                    곳입니다.
                  </p>
                  <p>
                    윙크 정회원에게는 실물 자료들이 매월 정기배송을 통해 제공되지만, 일부 자료에
                    한해
                  </p>
                  <p>추가 인쇄를 할 수 있도록 제공하오니 가정에서 활용해 보시길 바랍니다.</p>
                  <p className="danger">
                    또한, 무료 회원가입만 해도 제공되는 자료들도 있으니, 꼭 활용해 보세요.
                  </p>
                  <img
                    className="description-bg"
                    src="https://us.wink.co.kr/pc/renewalV3/reference_room/bg.png"
                    alt=""
                  />
                </div>
                <div className="menu">
                  <ul className="tab-type2 cell-5">
                    <li className="">
                      <a href="/client/desktop?pagename=reference-room/total">전체</a>
                    </li>
                    <li className="on">
                      <a href="/client/desktop?pagename=reference-room/kor">한글(국어) 영역</a>
                    </li>
                    <li className="">
                      <a href="/client/desktop?pagename=reference-room/math">수학 영역</a>
                    </li>
                    <li className="">
                      <a href="/client/desktop?pagename=reference-room/eng">영어 영역</a>
                    </li>
                    <li className="">
                      <a href="/client/desktop?pagename=reference-room/play">놀이·창의 영역</a>
                    </li>
                  </ul>
                  <div className="select-box-container">
                    <div className="select-mode">
                      <button>
                        <i>전체</i>
                      </button>
                      <div>
                        <ul>
                          <li>
                            <button>
                              <i>전체</i>
                            </button>
                          </li>
                          <li>
                            <button>
                              <i>받아쓰기</i>
                            </button>
                          </li>
                          <li>
                            <button>
                              <i>쓰기노트</i>
                            </button>
                          </li>
                          <li>
                            <button>
                              <i>일일학습지</i>
                            </button>
                          </li>
                          <li>
                            <button>
                              <i>기타</i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-list-container">
                  <div className="content-item">
                    <div className="thumbnail-container">
                      <div className="thumbnail">
                        <img
                          className="thumbnail-img"
                          src="https://s.wink.co.kr/production/u/4/2021/11/16/bBBD85E42B2D383D9FE3201CE707CDD3C.%EB%B0%9B%EC%95%84%EC%93%B0%EA%B8%B0%EA%B8%89%EC%88%98%ED%91%9C_%EC%8D%B8%EB%84%A4%EC%9D%BC1-1.png"
                          alt="썸네일"
                        />
                      </div>
                      <img
                        className="recommend"
                        src="https://us.wink.co.kr/pc/1.1.0/reference_room/recommend.png"
                        alt="추천"
                      />
                    </div>
                    <div className="content-wrapper">
                      <div className="title-container">
                        <div className="title">윙크 받아쓰기 급수표(1학년 1학기)</div>
                        <img src="https://us.wink.co.kr/pc/1.1.0/reference_room/free.png" alt="" />
                      </div>
                      <div className="item-description">
                        1학년 1학기 교과 수준의 받아쓰기 급수표입니다. 교과서에 나오는 급수표 단어와
                        문장을 확인하여 쓰기 연습을 할 수 있으며, 해당 급수표를 활용해 받아쓰기
                        시험을 내실 수도 있습니다.
                      </div>
                      <div className="button-container">
                        <div className="preview-button" id="reference-room-preview">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/preview_button.png"
                            alt="미리보기"
                          />
                        </div>
                        <div className="download-button" id="reference-room-download">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/download_button.png"
                            alt="다운로드"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-item">
                    <div className="thumbnail-container">
                      <div className="thumbnail">
                        <img
                          className="thumbnail-img"
                          src="https://s.wink.co.kr/production/u/4/2022/05/18/b1C30DDC2379230498DB651D8E8CD09FB.01_%ED%95%99%EC%8A%B5%EC%9E%90%EB%A3%8C%EC%8B%A4%EB%8A%90%EB%82%8C%EA%B8%80%EC%9E%90.png"
                          alt="썸네일"
                        />
                      </div>
                      <img
                        className="recommend"
                        src="https://us.wink.co.kr/pc/1.1.0/reference_room/recommend.png"
                        alt="추천"
                      />
                    </div>
                    <div className="content-wrapper">
                      <div className="title-container">
                        <div className="title">느낌 글자 낱말 카드</div>
                        <img src="https://us.wink.co.kr/pc/1.1.0/reference_room/free.png" alt="" />
                      </div>
                      <div className="item-description">
                        통글자 학습에 도움을 주는 느낌 글자 낱말 카드입니다. 낱말을 그림으로
                        표현하여, 아이들의 관심을 유발하고 부담 없이 글자를 받아들일 수 있습니다.
                        카드 속 낱말을 익힌 뒤, 낱말을 활용한 문장을 만들어 보세요.
                      </div>
                      <div className="button-container">
                        <div className="preview-button" id="reference-room-preview">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/preview_button.png"
                            alt="미리보기"
                          />
                        </div>
                        <div className="download-button" id="reference-room-download">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/download_button.png"
                            alt="다운로드"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-item">
                    <div className="thumbnail-container">
                      <div className="thumbnail">
                        <img
                          className="thumbnail-img"
                          src="https://s.wink.co.kr/production/u/4/2021/10/01/bE3838B07A0CC9D952EEBD5FD47A03C88.1_%EB%B0%9B%EC%95%84%EC%93%B0%EA%B8%B00.jpg"
                          alt="썸네일"
                        />
                      </div>
                    </div>
                    <div className="content-wrapper">
                      <div className="title-container">
                        <div className="title">윙크 받아쓰기 시험지 양식</div>
                        <img src="https://us.wink.co.kr/pc/1.1.0/reference_room/free.png" alt="" />
                      </div>
                      <div className="item-description">
                        자유롭게 받아쓰기를 할 수 있는 받아쓰기 시험지 양식입니다. (6칸/10칸 각각
                        1종씩) 귀여운 윙크 캐릭터로 만들어져 아직 어린 우리 아이가 벌써부터
                        받아쓰기에 부담감을 가지지 않도록 특별 제작하였습니다.
                      </div>
                      <div className="button-container">
                        <div className="preview-button" id="reference-room-preview">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/preview_button.png"
                            alt="미리보기"
                          />
                        </div>
                        <div className="download-button" id="reference-room-download">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/download_button.png"
                            alt="다운로드"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-item">
                    <div className="thumbnail-container">
                      <div className="thumbnail">
                        <img
                          className="thumbnail-img"
                          src="https://s.wink.co.kr/production/u/4/2021/11/16/b203CECCC45B53F6C8DBFCDC922C050A9.%EB%B0%9B%EC%95%84%EC%93%B0%EA%B8%B0%EA%B8%89%EC%88%98%ED%91%9C_%EC%8D%B8%EB%84%A4%EC%9D%BC1-2.png"
                          alt="썸네일"
                        />
                      </div>
                    </div>
                    <div className="content-wrapper">
                      <div className="title-container">
                        <div className="title">윙크 받아쓰기 급수표(1학년 2학기)</div>
                        <img src="https://us.wink.co.kr/pc/1.1.0/reference_room/free.png" alt="" />
                      </div>
                      <div className="item-description">
                        1학년 2학기 교과 수준의 받아쓰기 급수표입니다. 교과서에 나오는 급수표 단어와
                        문장을 확인하여 쓰기 연습을 할 수 있으며, 해당 급수표를 활용해 받아쓰기
                        시험을 내실 수도 있습니다.
                      </div>
                      <div className="button-container">
                        <div className="preview-button" id="reference-room-preview">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/preview_button.png"
                            alt="미리보기"
                          />
                        </div>
                        <div className="download-button" id="reference-room-download">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/download_button.png"
                            alt="다운로드"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-item">
                    <div className="thumbnail-container">
                      <div className="thumbnail">
                        <img
                          className="thumbnail-img"
                          src="https://s.wink.co.kr/production/u/4/2021/11/16/b3B23EB5C1B0C2E2B14EC909E82219C6A.%EB%B0%9B%EC%95%84%EC%93%B0%EA%B8%B0%EA%B8%89%EC%88%98%ED%91%9C_%EC%8D%B8%EB%84%A4%EC%9D%BC2-1.png"
                          alt="썸네일"
                        />
                      </div>
                    </div>
                    <div className="content-wrapper">
                      <div className="title-container">
                        <div className="title">윙크 받아쓰기 급수표(2학년 1학기)</div>
                        <img src="https://us.wink.co.kr/pc/1.1.0/reference_room/free.png" alt="" />
                      </div>
                      <div className="item-description">
                        2학년 1학기 교과 수준의 받아쓰기 급수표입니다. 교과서에 나오는 급수표 단어와
                        문장을 확인하여 쓰기 연습을 할 수 있으며, 해당 급수표를 활용해 받아쓰기
                        시험을 내실 수도 있습니다.
                      </div>
                      <div className="button-container">
                        <div className="preview-button" id="reference-room-preview">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/preview_button.png"
                            alt="미리보기"
                          />
                        </div>
                        <div className="download-button" id="reference-room-download">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/download_button.png"
                            alt="다운로드"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-item">
                    <div className="thumbnail-container">
                      <div className="thumbnail">
                        <img
                          className="thumbnail-img"
                          src="https://s.wink.co.kr/production/u/4/2021/11/16/b26548DE1847499E1B2B8ECD01C5C4E2E.%EB%B0%9B%EC%95%84%EC%93%B0%EA%B8%B0%EA%B8%89%EC%88%98%ED%91%9C_%EC%8D%B8%EB%84%A4%EC%9D%BC2-2.png"
                          alt="썸네일"
                        />
                      </div>
                    </div>
                    <div className="content-wrapper">
                      <div className="title-container">
                        <div className="title">윙크 받아쓰기 급수표(2학년 2학기)</div>
                        <img src="https://us.wink.co.kr/pc/1.1.0/reference_room/free.png" alt="" />
                      </div>
                      <div className="item-description">
                        2학년 2학기 교과 수준의 받아쓰기 급수표입니다. 교과서에 나오는 급수표 단어와
                        문장을 확인하여 쓰기 연습을 할 수 있으며, 해당 급수표를 활용해 받아쓰기
                        시험을 내실 수도 있습니다.
                      </div>
                      <div className="button-container">
                        <div className="preview-button" id="reference-room-preview">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/preview_button.png"
                            alt="미리보기"
                          />
                        </div>
                        <div className="download-button" id="reference-room-download">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/download_button.png"
                            alt="다운로드"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-item">
                    <div className="thumbnail-container">
                      <div className="thumbnail">
                        <img
                          className="thumbnail-img"
                          src="https://s.wink.co.kr/production/u/4/2022/05/18/b7FB0308EC1C79E266CC91C7B30B22D79.02_%ED%95%99%EC%8A%B5%EC%9E%90%EB%A3%8C%EC%8B%A4%EA%B7%B8%EB%A6%BC%EA%B8%80%EC%9E%90.png"
                          alt="썸네일"
                        />
                      </div>
                    </div>
                    <div className="content-wrapper">
                      <div className="title-container">
                        <div className="title">그림 글자 낱말 카드</div>
                        <img src="https://us.wink.co.kr/pc/1.1.0/reference_room/free.png" alt="" />
                      </div>
                      <div className="item-description">
                        통글자 학습에 도움을 주는 그림 글자 낱말 카드입니다. 낱말과 그림을 함께
                        보여주어, 아이들의 관심을 유발하고 부담 없이 글자를 받아들일 수 있습니다.
                        카드 속 낱말을 익힌 뒤, 낱말을 활용한 문장을 만들어 보세요.
                      </div>
                      <div className="button-container">
                        <div className="preview-button" id="reference-room-preview">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/preview_button.png"
                            alt="미리보기"
                          />
                        </div>
                        <div className="download-button" id="reference-room-download">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/download_button.png"
                            alt="다운로드"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-item">
                    <div className="thumbnail-container">
                      <div className="thumbnail">
                        <img
                          className="thumbnail-img"
                          src="https://s.wink.co.kr/production/u/4/2021/10/01/b46B9123E8D7E5F1AEBAD5CA8F7BB8093.3_%ED%95%9C%EA%B8%80_%EA%B5%AD%EC%96%B4%EC%93%B0%EA%B8%B0%EB%85%B8%ED%8A%B82%EB%8B%A8%EA%B3%84.jpg"
                          alt="썸네일"
                        />
                      </div>
                    </div>
                    <div className="content-wrapper">
                      <div className="title-container">
                        <div className="title">윙크 한글·국어 쓰기노트(2단계)</div>
                        <img src="https://us.wink.co.kr/pc/1.1.0/reference_room/paid.png" alt="" />
                      </div>
                      <div className="item-description">
                        한글·국어 쓰기 연습을 할 수 있는 쓰기 노트입니다. 글씨를 쓰는 순서에 맞게
                        바르게 쓰는 습관을 기를 수 있고, 자음/모음, 글자, 낱말쓰기 등 다양한 쓰기
                        연습을 할 수 있습니다.
                      </div>
                      <div className="button-container">
                        <div className="preview-button" id="reference-room-preview">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/preview_button.png"
                            alt="미리보기"
                          />
                        </div>
                        <div className="download-button" id="reference-room-download">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/download_button.png"
                            alt="다운로드"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-item">
                    <div className="thumbnail-container">
                      <div className="thumbnail">
                        <img
                          className="thumbnail-img"
                          src="https://s.wink.co.kr/production/u/4/2021/10/01/bB507AD05CAD7FDD6CE8908F90EA8EB60.3_%ED%95%9C%EA%B8%80_%EA%B5%AD%EC%96%B4%EC%93%B0%EA%B8%B0%EB%85%B8%ED%8A%B83%EB%8B%A8%EA%B3%84.png"
                          alt="썸네일"
                        />
                      </div>
                    </div>
                    <div className="content-wrapper">
                      <div className="title-container">
                        <div className="title">윙크 한글·국어 쓰기노트(3단계)</div>
                        <img src="https://us.wink.co.kr/pc/1.1.0/reference_room/paid.png" alt="" />
                      </div>
                      <div className="item-description">
                        한글·국어 쓰기 연습을 할 수 있는 쓰기 노트입니다. 글씨를 쓰는 순서에 맞게
                        바르게 쓰는 습관을 기를 수 있고, 자음/모음, 글자, 낱말쓰기 등 다양한 쓰기
                        연습을 할 수 있습니다.
                      </div>
                      <div className="button-container">
                        <div className="preview-button" id="reference-room-preview">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/preview_button.png"
                            alt="미리보기"
                          />
                        </div>
                        <div className="download-button" id="reference-room-download">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/download_button.png"
                            alt="다운로드"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-item">
                    <div className="thumbnail-container">
                      <div className="thumbnail">
                        <img
                          className="thumbnail-img"
                          src="https://s.wink.co.kr/production/u/4/2021/10/01/b4840D7063CFFFC0C0D80583A851D9831.2_%EC%9D%BC%EC%9D%BC%ED%95%99%EC%8A%B5%EC%A7%803%EB%8B%A8%EA%B3%84.jpg"
                          alt="썸네일"
                        />
                      </div>
                    </div>
                    <div className="content-wrapper">
                      <div className="title-container">
                        <div className="title">윙크 한글·국어 일일학습지 정답(3단계)</div>
                        <img src="https://us.wink.co.kr/pc/1.1.0/reference_room/paid.png" alt="" />
                      </div>
                      <div className="item-description">
                        윙크 한글·국어 일일학습지의 3단계 정답을 확인하실 수 있는 자료입니다. 윙크
                        일일학습 모음집의 우측 상단에 있는 회차를 확인하여 일치하는 교재의 정답을
                        확인하실 수 있습니다.
                      </div>
                      <div className="button-container">
                        <div className="preview-button" id="reference-room-preview">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/preview_button.png"
                            alt="미리보기"
                          />
                        </div>
                        <div className="download-button" id="reference-room-download">
                          <img
                            src="https://us.wink.co.kr/pc/1.1.0/reference_room/download_button.png"
                            alt="다운로드"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="paging-navigation">
                  <a href="#" className="prev">
                    이전 목록
                  </a>
                  <ul>
                    <li className="on">
                      <a href="#">1</a>
                    </li>
                    <li className="">
                      <a href="#">2</a>
                    </li>
                  </ul>
                  <a href="#" className="next">
                    다음 목록
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
