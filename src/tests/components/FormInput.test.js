import React from 'react';
import {shallow} from 'enzyme';
import FormInput from '../../components/FormInput/FormInput';

// import '@testing-library/jest-dom';

describe("Testing of <FormInput />", () => {

  const label = 'Project';
  const type = 'text';
  const name = 'project';
  const handleChange = () => {};
  const value = 'MERN';
  const placeholder = 'Project Name';
  const id = 1;
  
  const wrapper = shallow(<FormInput label={label} type={type} name={name} handleChange={handleChange} value={value} placeholder={placeholder} id={id} />);

  test('should be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should be only one component to render', () => {
    expect(wrapper.length).toEqual(1);
  })

  test('should have a label', () => {
    const label = wrapper.find('label').length;
    expect(label).toEqual(1);
  })
  
  test('text label should be equal to "Project" ', () => {
    const labelText = wrapper.find('label').text();
    expect(labelText).toEqual("Project")
  })

  test('should have MERN as value', () => {
    const inputValue = wrapper.find('input');
    expect(inputValue.prop('value')).toBe('MERN');
  })

  test('input type can not be submit ', () => {
    const inputType = wrapper.find('input').prop('type');
    expect(inputType).not.toBe('submit');
  })

  test('div should have a class name "field"', () => {
    const className = wrapper.find('div').prop('className');
    expect(className.includes('field')).toBe(true);
  })
  
})
