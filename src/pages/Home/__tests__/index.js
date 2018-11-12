import React from 'react';
import { Home } from '../index';
import categoryData from '../../../config/data/category';

describe('Home', () => {
  it('renders <Home /> without crashing', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  it('on click ListInitial call getCategory', () => {
    const getCategory = jest.fn();
    const navigate = jest.fn();

    const props = {
      categoryActions: { getCategory },
      category: { data: [] },
      navigation: { navigate },
    };

    const wrapper = shallow(<Home {...props} />);
    wrapper
      .find('ListInitial')
      .first()
      .props()
      .callFunction();
    const item = categoryData.data[0];
    const mock = {
      urlRefer: item.urlRefer,
      nameCategory: item.title,
      paramSearch: item.paramSearch,
      orderBy: item.orderBy,
    };
    expect(getCategory).toBeCalledWith(mock);
    expect(navigate).toBeCalledWith('ListContent');
  });
});
