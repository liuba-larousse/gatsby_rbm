/** @format */

import React from 'react';
import s from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={s.section}>
      <div className={s.text}>
        <h1>contact us</h1>
        <p>AUSTIN, TX</p>
        <p>
          <a href='mailto:info@richboymafia.com'>
            info@richboymafia.com
          </a>
        </p>
      </div>
    </footer>
  );
}
