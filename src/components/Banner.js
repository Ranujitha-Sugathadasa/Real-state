import React from 'react';
import Image from "../assets/img/house-banner.jpg";
import  Search  from '../components/Search';

const Banner = () => {
  return (
  <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
  <div className='flex flex-col lg:flex-row'>
    <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-ceneter lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
      <h1 className='="text-4x1 lg:text-[58px] font-semibold leading-none mb-6'>
        <span className='text-orange-700'>Rent</span> Your Dream House With Us.
      </h1>
      <p className='max-w-[480px] mb-8'>
      Discover the home of your dreams with HomeLand , your trusted partner in real estate excellence. Whether you're buying, selling, or renting, our platform offers a seamless and personalized experience tailored to your unique needs.
      </p>
    </div>
    <div className='Hidden flex-1 lg:flex'>
      <img src={Image} alt=''/>
    </div>
  </div>
  <Search />
  </section>
  );
};

export default Banner;
