import React from 'react';
/* $FlowFixMe https://github.com/flowtype/flow-for-vscode/issues/215 */
import { Linking } from 'react-native';
import {
  Container,
  TextItem,
  ContainerListUrl,
  ButtomLink,
  TitleButtomLink,
} from './Styles';

type Props = {
  data: {
    item: Array<{
      description: string,
      url: string,
      name: string,
      type: string,
    }>,
    type: string,
  },
};

const SectionListItem = (props: Props) => {
  if (props.data.type === 'text') {
    return (
      <Container>
        <TextItem>{props.data.item || 'Not released'}</TextItem>
      </Container>
    );
  }

  if (props.data.type === 'urllist') {
    return (
      <Container>
        {props.data.item.map((items, index) => (
          <ContainerListUrl key={index}>
            <ButtomLink
              onPress={() => {
                Linking.openURL(items.url);
              }}
            >
              <TitleButtomLink>{items.type.toUpperCase()}</TitleButtomLink>
            </ButtomLink>
          </ContainerListUrl>
        ))}
      </Container>
    );
  }
  return null;
};

export default SectionListItem;
