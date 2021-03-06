import React from 'react';
import Fade from 'react-reveal/Fade';

import './Categories.scss';
import Button from '../../UI/Button/Button';

const Categories = ({ data, scrollPosition }) => {
  const checkPopular = (stat) => {
    if (stat) {
      return (
        <div className='tag'>
          Hot{' '}
          <span className='font-weight-light'>
            Sale!
          </span>
        </div>
      );
    }
  };

  const fillCategoryItems = (params) => {
    if (params.length !== 0) {
      return params.map((item, i) => (
        <div
          className='item column-3 row-1'
          key={`category-item-${i}`}
        >
          <Fade bottom delay={300 * i}>
            <div className='card'>
              {checkPopular(item.isPopular)}
              <div className='img-container'>
                <img
                  src={`${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`}
                  alt={item.name}
                  className='img-cover'
                />
              </div>
              <div className='meta-wrapper'>
                <Button
                  className='stretched-link d-block text-gray-900'
                  href={`/properties/${item._id}`}
                  type='link'
                >
                  <h5 className='h4'>{item.title}</h5>
                  <span className='text-gray-500'>
                    {item.city}, {item.country}
                  </span>
                </Button>
              </div>
            </div>
          </Fade>
        </div>
      ));
    }
  };

  let listCategories = data.map((category, i) => (
    <Fade bottom key={`category-${i}`}>
      <section className='container section-categories'>
        <h4 className='mb-3 font-weight-medium'>
          {category.name}
        </h4>
        <div className='container-grid'>
          {fillCategoryItems(category.itemId)}
        </div>
      </section>
    </Fade>
  ));

  return listCategories;
};

export default Categories;
