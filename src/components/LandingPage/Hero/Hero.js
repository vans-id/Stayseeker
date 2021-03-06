import React from 'react';
import Fade from 'react-reveal/Fade';

import './Hero.scss';
import formatNumber from '../../../utils/formatNumber';

import HeroImage from '../../../assets/images/hero.jpg';
import HeroFrame from '../../../assets/images/hero-frame.jpg';

import Button from '../../UI/Button/Button';

const Hero = (props) => {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  };

  return (
    <Fade bottom>
      <section className='container pt-5 section-hero'>
        <div className='row align-items-center'>
          <div className='col-md-6 pr-5 mt-2'>
            <h1 className='font-weight-bolder line-height-1 mb-3'>
              Forget Busy Work,
              <br />
              Start Next Vacation
            </h1>
            <p className='mb-4 font-weight-lighter text-gray-500 w-75 desc'>
              We provide what you need to enjoy your
              holiday with family. Time to make another
              memorable moments.
            </p>
            <Button
              className='btn px-5'
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className='row hero-icon'>
              <div className='col-6 col-lg-4'>
                <img
                  className='icon-image'
                  src={require('../../../assets/images/icons/ic_traveler.png')}
                  alt={`${props.data.travelers} traveler`}
                />
                <h6 className='mt-3'>
                  {formatNumber(props.data.travelers)}{' '}
                  <span className='text-gray-500 font-weight-light'>
                    travelers
                  </span>
                </h6>
              </div>
              <div className='col-6 col-lg-4'>
                <img
                  src={require('../../../assets/images/icons/ic_treasure.png')}
                  alt='treasure'
                  className='icon-image'
                />
                <h6 className='mt-3'>
                  {formatNumber(props.data.treasures)}{' '}
                  <span className='text-gray-500 font-weight-light'>
                    treasures
                  </span>
                </h6>
              </div>
              <div className='col-6 col-lg-4'>
                <img
                  src={require('../../../assets/images/icons/ic_cities.png')}
                  alt='cities'
                  className='icon-image'
                />
                <h6 className='mt-3'>
                  {formatNumber(props.data.cities)}{' '}
                  <span className='text-gray-500 font-weight-light'>
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='hero-image'>
              <img
                src={HeroImage}
                alt='Room with couches'
                className='hero-img'
              />
              <img
                src={HeroFrame}
                alt='Frame Image'
                className='hero-frame'
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Hero;
