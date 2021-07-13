import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../../GifExpertApp';

describe('Unitary tests over GifExpertApp', () => {
    

    test('should match with the Snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show a list of Categories', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories = { categories }/>);
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
    
})

