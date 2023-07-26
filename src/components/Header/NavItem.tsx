import { Link } from 'react-router-dom';
import React from 'react';

type NavItemProps = {
  link: string;
  data: Data;
};

type Data = {
  title: string;
  lists?: string[];
};

export function NavItem({ link, data: { title, lists } }: NavItemProps) {
  return (
    <>
      <Link to={link}>{title}</Link>
      {lists ? (
        <ul>
          <div>
            {lists.map((desc) => {
              return (
                <li key={desc}>
                  <Link to={'/'}>{desc}</Link>
                </li>
              );
            })}
          </div>
        </ul>
      ) : (
        ''
      )}
    </>
  );
}
