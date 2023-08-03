import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetCart } from '../../redux/cartReducer';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Slider from '../../components/Slider/Slider';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    
    const redirectedFromSuccess = sessionStorage.getItem('redirectedFromSuccess');

    if (redirectedFromSuccess === 'true') {
    
      dispatch(resetCart());
      sessionStorage.removeItem('redirectedFromSuccess');
    }
  }, [dispatch]);

  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type='Featured' />
      <Categories />
      <FeaturedProducts type='trending' />
      <Contact />
    </div>
  );
};

export default Home;
