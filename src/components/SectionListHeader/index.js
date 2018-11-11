import React from 'react';
import { Container, TituloItem } from './Styles';

type Props = {
  section: Object,
};

const SectionListHeader = (props: Props) => (
  <Container>
    <TituloItem>{props.section.title.toUpperCase()}</TituloItem>
  </Container>
);

export default SectionListHeader;
