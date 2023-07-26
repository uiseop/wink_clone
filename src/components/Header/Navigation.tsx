import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import data from '@const/Navigation/data.json';
import { NavItem } from '@components/Header/NavItem';

export function Navigation() {
  const location = useLocation();

  return (
    <Nav>
      <ul>
        <li className="main-logo">
          <Link to={'/'}>
            <img
              src="https://us.wink.co.kr/pc/renewalV3/common/logo.png"
              id="main-logo"
              alt="logo"
            />
          </Link>
        </li>
        <li className={location.pathname === '/' ? 'current' : ''}>
          <NavItem link={'/'} data={data.home} />
        </li>
        <li className={location.pathname === '/study' ? 'current' : ''}>
          <NavItem link={'/'} data={data.study} />
        </li>
        <li className={location.pathname === '/apply' ? 'current' : ''}>
          <NavItem link={'/'} data={data.apply} />
        </li>
        <li className={location.pathname === '/reference' ? 'current' : ''}>
          <NavItem link={'/'} data={data.reference} />
        </li>
        <li className={location.pathname === '/custom_service' ? 'current' : ''}>
          <NavItem link={'/'} data={data.custom_service} />
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

    & > li {
      width: 240px;
      position: relative;
      text-align: center;

      & > a {
        position: relative;
        display: block;
        color: black;
        text-align: center;
        font-size: 18px;
        line-height: 75px;
      }

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

      &.current,
      &:hover {
        & > a {
          color: #e54179;
          font-weight: bold;
        }

        &::after {
          position: absolute;
          content: '';
          width: 23px;
          height: 11px;
          background: url(https://us.wink.co.kr/pc/renewalV3/main/menu_indicator.png) 50% 50%
            no-repeat;
          left: 45.5%;
          top: 10%;
        }

        & > ul {
          max-height: 400px;
        }
      }

      & div {
        border: 1px solid #d7d7d7;
        background-color: white;
        border-radius: 10px;

        & li {
          display: flex;
          align-items: center;
          height: 35px;
          line-height: 35px;
          border-bottom: 1px solid #d7d7d7;
          box-sizing: border-box;
          margin-top: 3px;
          padding: 0 16px;
          text-align: left;
          font-size: 14px;
          font-weight: normal;
          line-height: 1.4;

          & a:hover {
            color: #e54179;
          }
        }
      }
    }
  }
`;
