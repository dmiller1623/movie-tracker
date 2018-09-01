import React from 'react';
import { shallow, mount } from 'enzyme';
import UserAccountBtns from '../UserAccountBtns';
import { BrowserRouter }  from 'react-router-dom';

describe('InitialAccountBtns', () => {

  it('should match the snapshot', () => {
    const name = 'test';
    const wrapper = shallow(
      <BrowserRouter>
        <UserAccountBtns name={name}/>
      </BrowserRouter>);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should call a function handleSignOut() when the sign out button is clicked', () => {
    const mockHandleSignOut = jest.fn();
    const wrapper = mount(
      <BrowserRouter>
        <UserAccountBtns handleSignOut={mockHandleSignOut} />
      </BrowserRouter>);

    wrapper.find('button').simulate('click');
    expect(mockHandleSignOut).toHaveBeenCalled();
  });

});