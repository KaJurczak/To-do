import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
// import styles from './FAQ.scss';
import {subpageContents} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import styles from './FAQ.scss';

const FAQ = () => (
  <Container>
    <div className={styles.component}>
      <Hero titleText={subpageContents.faq.title} image={subpageContents.faq.image} />
      <h2>{subpageContents.faq.subtitle}</h2>
      <p>{ReactHtmlParser(subpageContents.faq.content)}</p>
    </div>
    
  </Container>
);

export default FAQ;