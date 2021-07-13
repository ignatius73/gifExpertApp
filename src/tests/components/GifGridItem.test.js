import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";


describe('Pruebas en GifGridItem', ()=>{

    const props = {
        gif : 'https://localhost/algo.jpg',
        title: 'Algun titulo'
    }
    const wrapper = shallow( <GifGridItem  gif = { props.gif } title = { props.title } /> );
    test('debe mostrar el componente correctamente', ()=>{
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('should have an img with src and alt equals to the props', () => {

        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(props.gif);
        expect(img.prop('alt')).toBe(props.title);

        
    })

    test('should have a div with a specific className', () => {
        const clase = 'animate__jackInTheBox';

        const div = wrapper.find('div');
        expect(div.prop('className').includes(clase)).toBe(true);
    });
        
    });

    
