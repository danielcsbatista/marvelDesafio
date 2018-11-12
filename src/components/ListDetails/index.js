import React from 'react';
import SectionList from './Styles';
import SectionListItem from '../SectionListItem';
import SectionListHeader from '../SectionListHeader';

type Props = {
  data: Array<Object>,
};
const ListDetails = (props: Props) => (
  <SectionList
    renderItem={({ item }) => <SectionListItem data={item} />}
    renderSectionHeader={({ section }) => (
      <SectionListHeader section={section} />
    )}
    sections={props.data}
    keyExtractor={() => (Math.random() * 1000).toString()}
  />
);

export default ListDetails;
