'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Hamburger from '@/app/tools/hamburger/hamburger';
import './header.scss';
import { MobileMenuIcon } from '@/app/tools/icons/icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className='header'>
        <div className='header__left-column'></div>
        <div className='header__right-column'>
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
      <nav className={`navigation${isOpen ? '-show' : '-hide'}`}>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <Link className='navigation__link' href='#' onClick={() => setIsOpen(!isOpen)}>
              Для кого курс
              <MobileMenuIcon />
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link' href='#' onClick={() => setIsOpen(!isOpen)}>
              В якому форматі проходитиме курс <MobileMenuIcon />
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link' href='#' onClick={() => setIsOpen(!isOpen)}>
              Що я отримаю <MobileMenuIcon />
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link' href='#' onClick={() => setIsOpen(!isOpen)}>
              Структура курсу<MobileMenuIcon />
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link' href='#' onClick={() => setIsOpen(!isOpen)}>
              Тарифи <MobileMenuIcon />
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link' href='#' onClick={() => setIsOpen(!isOpen)}>
              Часті питання <MobileMenuIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}