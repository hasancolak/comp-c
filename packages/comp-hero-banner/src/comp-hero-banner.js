import React from 'react';
import cx from 'clsx';
import styles from './styles.css';
import {Button} from '@hasancolak/comp-button';

const HeroBanner = ({
  img,
  headline,
  subHeadline
}) =>  {

  const classes = cx(
    styles.banner,
  );
  return (
    <div className="hero-banner" data-testid="heroBanner">
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className={styles.text}>
          <h1>{headline}</h1>
          <h2>{subHeadline}</h2>
          <br/>
          <Button variant="secondary">Button Text</Button>
        </div>    
      </div>
    </div>
  );
}

export { HeroBanner };
