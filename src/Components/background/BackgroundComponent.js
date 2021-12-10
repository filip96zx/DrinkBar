import React from 'react';
import BackgroundStyled from './BackgroundComponent.style';
import background6144w from '../../Assets/background6kx8k.jpg';
import background3072w from '../../Assets/background3kx4k.jpg';
import background1536w from '../../Assets/background1,5kx2k.jpg';
import backgroundLow from '../../Assets/background0.7x1k.jpg';

const BackgroundComponent = () => {
  return (
    <BackgroundStyled>
      <img className='background-img' src={backgroundLow} alt='' />
      <img
        className='background-img'
        srcSet={`
          ${background6144w} 6144w,
          ${background3072w} 3072w,
          ${background1536w} 1536w`}
        src={background1536w}
        alt=''
      />
      <div className='background-img-darken' />
    </BackgroundStyled>
  );
};

export default BackgroundComponent;
