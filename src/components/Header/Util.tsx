import React from 'react';
import styled from 'styled-components';

type UtilProps = {
  link: string;
  imageSrc: string;
  desc: string;
};
export function Util({ link, imageSrc, desc }: UtilProps) {
  return (
    <li>
      <a href={link}>
        <UtilImage src={imageSrc} alt="" />
        <span>{desc}</span>
      </a>
    </li>
  );
}

const UtilImage = styled.img`
  width: 20px;
  height: 22px;

  & + span {
    font-size: 15px;
    padding-left: 8px;
    color: black;
  }
`;
