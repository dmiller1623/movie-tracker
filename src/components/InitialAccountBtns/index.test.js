import React from 'react';
import { shallow } from 'enzyme';
import { InitialAccountBtns } from '../InitialAccountBtns';
import { BrowserRouter }  from 'react-router-dom';

describe('InitialAccountBtns', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <InitialAccountBtns />
      </BrowserRouter>);

    expect(wrapper.html()).toMatchSnapshot();
  });

});