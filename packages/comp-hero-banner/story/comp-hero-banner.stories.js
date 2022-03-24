import React from 'react';
import { HeroBanner } from '../src/comp-hero-banner';

export default { title: 'Hero Banner' };

export const primary = () => (
  <div>
    <HeroBanner 
      img="https://github.com/hasancolak/comp-c/blob/master/packages/comp-hero-banner/story/hero-banner.png" 
      headline="Say hello" 
      subHeadline="Sub header"/>
  </div>
  
);
