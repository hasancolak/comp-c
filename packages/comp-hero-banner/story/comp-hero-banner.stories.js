import React from 'react';
import { HeroBanner } from '../src/comp-hero-banner';

export default { title: 'Hero Banner' };

export const primary = () => (
  <div>
    <HeroBanner 
      img="./hero-banner.jpg" 
      headline="Say hello" 
      subHeadline="Sub header"/>
  </div>
  
);
