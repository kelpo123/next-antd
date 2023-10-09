'use client';
import Carousel from '@/components/shared/carousel/carousel';
import NextImage from 'next/image';
import React from 'react';

const slides = [
  'https://source.unsplash.com/random/1200x800?sig=1',
  'https://source.unsplash.com/random/1200x800?sig=2',
  'https://source.unsplash.com/random/1200x800?sig=3',
  'https://source.unsplash.com/random/1200x800?sig=4',
];

export default function HomeComponent() {
  return (
    <div>
      <div className='flex overflow-hidden justify-center items-center h-screen bg-black'>
        <Carousel autoSlide={false}>
          {[...slides.map((s) => <img as={NextImage} src={s} className='min-w-full' />)]}
        </Carousel>
      </div>
    </div>
  );
}
