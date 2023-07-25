import React from 'react';
import styled from 'styled-components';

type CustomServiceCenterProps = {
  title: string;
  imageSrc: string;
  desc: string;
};
export function CustomServiceCenter({ title, imageSrc, desc }: CustomServiceCenterProps) {
  return (
    <Wrapper>
      <p className="title">{title}</p>
      <img className="phone-number" src={imageSrc} alt="" />
      <p className="time">{desc}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 20px;
  position: relative;

  & p {
    color: #ef3a7a;
  }

  & .title {
    font-weight: 700;
    font-size: 23px;
  }

  & img {
    padding-top: 5px;
  }

  & .time {
    font-weight: 600;
    font-size: 17px;
    padding-top: 5px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    bottom: 0;
    border-bottom: 1px solid #ef3a7a;
  }
`;
