import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
// import styles from './FAQ.scss';
import {subpageContents} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

const FAQ = () => (
  <Container>
    <Hero titleText={subpageContents.faq.title} image={subpageContents.faq.image} />
    <h2>{subpageContents.faq.subtitle}</h2>
    <p>{ReactHtmlParser(subpageContents.faq.content)}</p>
  </Container>
);

export default FAQ;