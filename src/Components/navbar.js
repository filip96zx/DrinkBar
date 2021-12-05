import React, { useState, useEffect } from 'react';
import NabarStyled, { MenuButton, StyledLink } from './navbar.style';

const Navbar = () => {
  const [showItems, setShowItems] = useState(false);
  const [hide, setHide] = useState(false);
  const [hideDelay, setHideDelay] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);

  const hideItems = () => {
    if (!hideDelay) {
      setHide(true);
      setHideDelay(true);
      setTimeout(() => {
        setShowItems(false);
        setHide(false);
        setHideDelay(false);
      }, 400);
    }
  };

  useEffect(() => {
    const scrollhandle = () => {
      if (window.scrollY > 100) {
        setShowMenuButton(true);
      } else {
        setShowMenuButton(false);
      }};
      window.addEventListener('scroll', scrollhandle);
      return ()=>{ window.removeEventListener('scroll',scrollhandle) }
  },[]);

  const handleMenuButton = () => {
    if (!showItems) {
      setShowItems(true);
    } else {
      hideItems();
    }
  };

  const menu = (
    <>
      <StyledLink onClick={handleMenuButton} to='/'>
        Home
      </StyledLink>
      <StyledLink onClick={handleMenuButton} to='/search'>
        Search
      </StyledLink>
    </>
  );

  const menuIcon = (menu, cross) => {
    return (
      <svg onClick={() => handleMenuButton()} className={!showItems || hide ? menu : cross} viewBox='0 0 100 80' width='30' height='30' fill='white'>
        <rect id='rect-one' width='100' rx='5' height='20'></rect>
        <rect id='rect-two' y='30' rx='5' width='100' height='20'></rect>
        <rect id='rect-three' y='60' rx='5' width='100' height='20'></rect>
      </svg>
    );
  };

  return (
    <NabarStyled>
      {showMenuButton && <MenuButton onClick={() => handleMenuButton()}>{menuIcon('icon menu', 'icon cross')}</MenuButton>}
      {menuIcon('icon menu onbar', 'icon cross onbar')}
      <nav className='row-menu'>{menu}</nav>
      <div className='bar'></div>
      {showItems && !showMenuButton && <nav className={hide ? 'column-menu hide' : 'column-menu show'}>{menu}</nav>}
      {showItems && showMenuButton && <nav className={hide ? 'column-menu hide fixed' : 'column-menu show fixed'}>{menu}</nav>}
    </NabarStyled>
  );
};

export default Navbar;
