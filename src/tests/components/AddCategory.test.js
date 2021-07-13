import React from 'react';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Unitary tests on AddCategory', () => {

    const setcategories = jest.fn();
    const setInputValue = jest.fn();
    let wrapper;

    //Reinicializo el wrapper por cada test
    beforeEach( ()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setcategories } />);
    })

    test('should get a Category', () => {
       
        expect( wrapper ).toMatchSnapshot();

    })

    test('should InputChange', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target: { value} });

        expect( wrapper.find('p').text().trim()).toBe(value);
        
        
    });

    test('shouldnt send submit button', () => {
      wrapper.find('form').simulate('submit', { preventDefault(){} });  
      expect( setcategories ).not.toHaveBeenCalled();
    
    });

    test('should call to setCategories and clean the input', () => {
        const input = wrapper.find('input');
        let value = 'Hola Mundo';
        input.simulate('change', { target: { value} });
        expect(wrapper.find('p').text().trim()).toBe(value);
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setcategories ).toHaveBeenCalled();
        value = '';
        input.simulate('change', {target: { value} });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });
    
    
    
    
    
})
