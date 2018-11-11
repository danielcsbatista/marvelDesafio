import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Content, InputSearch, ButtomSearch } from './Styles';

type Props = {
  callFunction: Function,
  parameter: string,
};

type State = {
  valueSearch: string,
};

export default class SearchContent extends React.Component<Props, State> {
  state = {
    valueSearch: '',
  };

  render() {
    return (
      <Content>
        <InputSearch
          value={this.state.valueSearch}
          onChangeText={valueSearch => this.setState({ valueSearch })}
          autoFocus={true}
          onSubmitEditing={() =>
            this.props.callFunction(
              `${this.props.parameter}=${this.state.valueSearch}`
            )
          }
          placeholder="find item"
        />
        <ButtomSearch
          onPress={() =>
            this.props.callFunction(
              `${this.props.parameter}=${this.state.valueSearch}`
            )
          }
        >
          <Icon name="search" size={24} color="#FFF" />
        </ButtomSearch>
      </Content>
    );
  }
}
