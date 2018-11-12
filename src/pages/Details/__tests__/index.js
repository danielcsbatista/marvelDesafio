import React from 'react';
import { Details } from '../index';
import mockMapped from './mockMapped.json';
import mockApi from './mockApi.json';

describe('Details', () => {
  it('renders <Loader /> without crashing', () => {
    const wrapper = shallow(<Details />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders <Error /> without crashing', () => {
    const wrapper = shallow(<Details />);
    wrapper.setState({ error: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders <Details /> without crashing', () => {
    const wrapper = shallow(<Details />);
    wrapper.setState({ loading: false, itens: mockMapped });
    expect(wrapper).toMatchSnapshot();
  });

  it('shoudl call mapApiToDetails and return ', () => {
    const props = {
      category: {
        urlRefer: 'characters',
      },
    };
    const wrapper = shallow(<Details {...props} />);
    const mappedData = wrapper.instance().mapApiToDetails(mockApi);
    expect(mappedData).toMatchSnapshot();
  });
});
