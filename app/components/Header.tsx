'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

export const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header className='header-el'>
      <div className='container'>
        <div className='header-wrapper'>
          <Link href='/' className='title'>
            Where is the world?
          </Link>
          <div className='mode-switcher' onClick={toggleTheme}>
            {theme === 'light' ? <IoMoonOutline size='14px' /> : <IoMoon size='14px' />}
            <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
          </div>
        </div>
      </div>
    </header>
  );
};
