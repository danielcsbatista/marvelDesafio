import React from 'react';
import { Container, Paragraph, ActivityIndicator } from './Styles';

const Loader = () => (
  <Container>
    <ActivityIndicator size="large" color="#cc0000" />
    <Paragraph>loading information...</Paragraph>
  </Container>
);

export default Loader;
