import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {subpageContents} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={subpageContents.info.title} image={subpageContents.info.image} />
    <h2>{subpageContents.info.subtitle}</h2>
    <p>{subpageContents.info.content}</p>
  </Container>
);

export default Info;