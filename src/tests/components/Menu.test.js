import React from 'react';
import {shallow} from 'enzyme';
import Menu from '../../components/Menu/Menu';
// import '@testing-library/jest-dom';

describe("Testing of <Menu />", () => {
  const wrapper = shallow(<Menu />);

  test('should be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should have a nav tag ', () => {
    const nav = wrapper.find('nav').length;
    expect(nav).toBe(1);
  })

  test('nav tag should have class name "nav-menu" ', () => {
    const className = wrapper.find('nav').prop('className');
    expect(className).toBe('nav-menu');
  })

  test('should have NavLink instead of ancle link ', () => {
    const links = wrapper.find('NavLink').length;
    expect(links).toBeGreaterThanOrEqual(1);
  })

  test('should have the same icons as NavLinks', () => {
    const icons = wrapper.find('i').length;
    const NavLinks = wrapper.find('NavLink').length;
    expect(icons).toBeGreaterThanOrEqual(NavLinks);
  })

})