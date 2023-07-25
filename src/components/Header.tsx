import React from 'react';
import { Utils } from './Header/Utils';
import { Navigation } from './Header/Navigation';

export function Header() {
  return (
    <div id="header">
      <Utils />
      <Navigation />
    </div>
  );
}
