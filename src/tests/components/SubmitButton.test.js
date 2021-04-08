import React from 'react';
import {shallow} from 'enzyme';
// import '@testing-library/jest-dom';

import SubmitButton from '../../components/SubmitButton/SubmitButton';

describe('Testing <SubmitButton />', () => {

  const value = 'Hello World';
  let wrapper = shallow(<SubmitButton value={ value } /> );

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<SubmitButton value={ value } /> );
  })
  
  test('should be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should be only one component to render', () => {
    expect(wrapper.length).toEqual(1);
  })

  test('should be an input html element', () => {
    const isInputHTMLElement = wrapper.find('input').type('submit');
    expect(isInputHTMLElement).toBe('input');
  })

  test('should be an input with type submit', () => {
    const input = wrapper.find('input');
    expect(input.prop('type')).toBe('submit');
  })

  test('should have Hello World as value ', () => {
    const input = wrapper.find('input');
    expect(input.prop('value')).toBe(value);
  })

  test('should have btn class name', () => {
    const input = wrapper.find('input');
    const className = input.prop('className');
    expect(className.includes('btn')).toBe(true);
  })
})