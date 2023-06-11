'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
// import Link from 'next/link';
import Hamburger from '@/app/tools/hamburger/hamburger';
import './header.scss';
import { MobileMenuIcon } from '@/app/tools/icons/icons';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBurgerIcon, setShowBurgerIcon] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {

    const viewportHeight = window.innerHeight;

    if (window.innerWidth >= 920) {
      setIsOpen(true);
      setShowBurgerIcon(false);
      setOffset(viewportHeight * 0.06);
    } else {
      setIsOpen(false);
      setShowBurgerIcon(true);
      setOffset(viewportHeight * 1.07);
    }

    const handleResize = () => {
      if (window.innerWidth >= 920) {
        setIsOpen(true);
        setShowBurgerIcon(false);
        // setOffset(viewportHeight * 0.9);
      } else {
        setIsOpen(false);
        setShowBurgerIcon(true);
        // setOffset(viewportHeight * 0.3);
      }
    };

    // Call the function once to set the initial state
    handleResize();

    // Set up the event listener
    window.addEventListener('resize', handleResize);

    // Clean up function
    return () => {
      // Remove the event listener on cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (showBurgerIcon && isOpen) {
      window.scrollTo(0, 0)
    }
  }, [isOpen, showBurgerIcon]);

  const handleTouch = () => {
    if (showBurgerIcon) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <header className='header'>
        <div className='header__left-column'></div>
        <div className='header__right-column'>
          {showBurgerIcon && (
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
          )}
        </div>
      </header>
      <nav className={`navigation${isOpen ? '-show' : '-hide'} navigation-desktop`}>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <Link className='navigation__link' href='/kursrhp/#course-for' onClick={handleTouch}>
              Для кого курс
              <MobileMenuIcon />
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link'
                  href='/kursrhp/#course-format' onClick={handleTouch}>
              В якому форматі проходитиме курс <MobileMenuIcon />
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link'
                  href='/kursrhp/#benefits' onClick={handleTouch}>
              Що я отримаю <MobileMenuIcon />
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link'
                  href='/kursrhp/#course-structure' onClick={handleTouch}>
              Структура курсу<MobileMenuIcon />
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link'
                  href='/kursrhp/#prices' onClick={handleTouch}>
              Тарифи <MobileMenuIcon />
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link'
                  href='/kursrhp/#faq' onClick={handleTouch}>
              Часті питання <MobileMenuIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}