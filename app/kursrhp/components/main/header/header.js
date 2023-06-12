'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
// import Link from 'next/link';
import Hamburger from '@/app/tools/hamburger/hamburger';
import './header.scss';
import { Link, animateScroll as scroll } from 'react-scroll';
import { MobileMenuIcon } from '@/app/tools/icons/icons';
// import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBurgerIcon, setShowBurgerIcon] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {

    const viewportHeight = window.innerHeight;

    // const calculateOffset = () => {
    //   if (viewportHeight <= 700) {
    //     return -700
    //   } else if (viewportHeight <= 800) {
    //     return -800;
    //   } else if (viewportHeight <= 900) {
    //     return -(viewportHeight+46);
    //   }
    // }

    if (window.innerWidth >= 920) {
      setIsOpen(true);
      setShowBurgerIcon(false);
      // setOffset(viewportHeight * 0.06);
      setOffset(-50);
    } else {
      setIsOpen(false);
      setShowBurgerIcon(true);
      setOffset(-44);
      console.log(-(viewportHeight+44));
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

  // useEffect(() => {
  //   if (showBurgerIcon && isOpen) {
  //     window.scrollTo(0, 0)
  //   }
  // }, [isOpen, showBurgerIcon]);

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
            <Link className='navigation__link' duration={300} offset={offset} smooth={true} to='course-for' onClick={handleTouch}>
              Для кого курс
              <MobileMenuIcon />
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link'
                  duration={300} offset={offset} smooth={true} to='course-format' onClick={handleTouch}>
              В якому форматі проходитиме курс <MobileMenuIcon />
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link'
                  duration={300} offset={offset} smooth={true} to='benefits' onClick={handleTouch}>
              Що я отримаю <MobileMenuIcon />
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link'
                  duration={300} offset={offset} smooth={true} to='course-structure' onClick={handleTouch}>
              Структура курсу<MobileMenuIcon />
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link'
                  duration={300} offset={offset} smooth={true} to='prices' onClick={handleTouch}>
              Тарифи <MobileMenuIcon />
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link'
                  duration={300} offset={offset} smooth={true} to='faq' onClick={handleTouch}>
              Часті питання <MobileMenuIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}